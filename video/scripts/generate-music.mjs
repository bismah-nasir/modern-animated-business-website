// Generates an original, royalty-free soundtrack for the promo video.
// Style: bold but peaceful modern-tech ambient — warm pads, deep sub,
// soft punchy kick with sidechain "breathing", delayed pluck arpeggio,
// risers and cinematic impacts that land on the video's scene changes.
//
// Output: public/music.wav (stereo, 44.1 kHz, 16-bit)

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { BPM, BARS, MUSIC_SECONDS, SCENES } from "../src/timing.js";

const SR = 44100;
const BEAT = 60 / BPM;
const BAR = BEAT * 4;
const N = Math.ceil(MUSIC_SECONDS * SR);

// Deterministic noise so every render sounds identical
let seed = 1337;
const rand = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
};
const noise = () => rand() * 2 - 1;

const midiToHz = (m) => 440 * Math.pow(2, (m - 69) / 12);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// ---------------------------------------------------------------- buses
const bus = () => ({ L: new Float32Array(N), R: new Float32Array(N) });
const padBus = bus();
const bassBus = bus();
const arpBus = bus();
const drumBus = bus();
const fxBus = bus();

const add = (b, i, l, r = l) => {
    if (i >= 0 && i < N) {
        b.L[i] += l;
        b.R[i] += r;
    }
};

// ---------------------------------------------------------------- harmony
// A minor: Am(add9) – Fmaj7 – Cmaj7 – G(add9)  (i – VI – III – VII)
const CHORDS = [
    { root: 45, pad: [57, 60, 64, 71] }, // A
    { root: 41, pad: [53, 57, 60, 64] }, // F
    { root: 48, pad: [55, 59, 60, 64] }, // C
    { root: 43, pad: [55, 59, 62, 69] }, // G
];
const chordAt = (bar) => CHORDS[bar % CHORDS.length];

// ---------------------------------------------------------------- arrangement
// Follows the scene layout in src/timing.js: calm intro, full groove from the
// hero onwards, a softer breakdown under the testimonial, then a final lift.
const at = (name) => SCENES[name].from;
const groove = (b) => b >= at("hero") && b < at("testimonial");
const finale = (b) => b >= at("outro") && b < at("outro") + 2;
const sections = {
    kick: (b) => groove(b) || finale(b),
    bass: (b) => b >= at("hero") && b < BARS,
    arp: (b) => b >= at("hero"),
    hats: (b) => (b >= at("services") && b < at("testimonial")) || finale(b),
};
const IMPACT_BARS = ["hero", "services", "stats", "portfolio", "techStack", "outro"].map(at);
const RISER_BARS = [at("hero") - 1, at("outro") - 1]; // riser plays during this bar, into the next

// ---------------------------------------------------------------- pad
// Band-limited detuned saws, softened through a moving low-pass
function renderPad() {
    const harmonics = 10;
    for (let bar = 0; bar < BARS; bar++) {
        const { pad } = chordAt(bar);
        const start = bar * BAR;
        const len = BAR + 1.6; // overlap into next chord for smoothness
        const s0 = Math.floor(start * SR);
        const s1 = Math.min(N, Math.floor((start + len) * SR));
        pad.forEach((note, ni) => {
            const voices = [-9, 0, 9].map((cents, vi) => ({
                f: midiToHz(note) * Math.pow(2, cents / 1200),
                pan: [-0.6, 0, 0.6][vi],
                phase: rand() * Math.PI * 2,
            }));
            let lp = 0;
            for (let i = s0; i < s1; i++) {
                const t = (i - s0) / SR;
                const g = Math.min(1, t / 1.1) * Math.min(1, (len - t) / 1.4);
                const tt = i / SR;
                let sL = 0;
                let sR = 0;
                for (const v of voices) {
                    let saw = 0;
                    for (let h = 1; h <= harmonics; h++) {
                        if (v.f * h > 9000) break;
                        saw += Math.sin(2 * Math.PI * v.f * h * tt + v.phase * h) / h;
                    }
                    sL += saw * (1 - v.pan) * 0.5;
                    sR += saw * (1 + v.pan) * 0.5;
                }
                // Slow filter swell, opening as the track builds
                const build = clamp(tt / (BAR * 6), 0, 1);
                const cutoff = 700 + 900 * build + 400 * Math.sin(2 * Math.PI * tt * 0.08 + ni);
                const a = 1 - Math.exp((-2 * Math.PI * cutoff) / SR);
                const mono = (sL + sR) * 0.5;
                lp += a * (mono - lp);
                const side = (sL - sR) * 0.35;
                const amp = g * 0.085;
                add(padBus, i, (lp + side) * amp, (lp - side) * amp);
            }
        });
    }
}

// ---------------------------------------------------------------- sub bass
function renderBass() {
    for (let bar = 0; bar < BARS; bar++) {
        if (!sections.bass(bar)) continue;
        const f = midiToHz(chordAt(bar).root);
        // Long notes on beat 1 and the "and" of 3 for gentle motion
        const hits = [
            [0, BEAT * 2.4],
            [BEAT * 2.5, BEAT * 1.5],
        ];
        for (const [off, dur] of hits) {
            const s0 = Math.floor((bar * BAR + off) * SR);
            const n = Math.floor(dur * SR);
            for (let k = 0; k < n; k++) {
                const t = k / SR;
                const env = Math.min(1, t / 0.015) * Math.min(1, (dur - t) / 0.12);
                const ph = 2 * Math.PI * f * t;
                const s = Math.sin(ph) + 0.25 * Math.sin(2 * ph) + 0.08 * Math.sin(3 * ph);
                add(bassBus, s0 + k, s * env * 0.32);
            }
        }
    }
}

// ---------------------------------------------------------------- pluck arp
function renderArp() {
    const pattern = [0, 1, 2, 3, 2, 1, 3, 2];
    for (let bar = 0; bar < BARS; bar++) {
        if (!sections.arp(bar)) continue;
        const notes = chordAt(bar).pad.map((n) => n + 12);
        for (let step = 0; step < 8; step++) {
            const note = notes[pattern[step]];
            const f = midiToHz(note);
            const s0 = Math.floor((bar * BAR + step * (BEAT / 2)) * SR);
            const dur = 0.9;
            const n = Math.floor(dur * SR);
            const pan = step % 2 ? 0.35 : -0.35;
            const vel = step % 4 === 0 ? 1 : 0.7;
            for (let k = 0; k < n; k++) {
                const t = k / SR;
                const env = Math.min(1, t / 0.004) * Math.exp(-t * 6);
                const bright = Math.exp(-t * 14);
                const ph = 2 * Math.PI * f * t;
                const s =
                    Math.sin(ph) +
                    0.45 * bright * Math.sin(2 * ph) +
                    0.2 * bright * Math.sin(3 * ph);
                const v = s * env * vel * 0.055;
                add(arpBus, s0 + k, v * (1 - pan), v * (1 + pan));
            }
        }
    }
}

// ---------------------------------------------------------------- drums
const kickTimes = [];
function renderDrums() {
    for (let bar = 0; bar < BARS; bar++) {
        for (let beat = 0; beat < 4; beat++) {
            const t0 = bar * BAR + beat * BEAT;
            if (sections.kick(bar)) {
                kickTimes.push(t0);
                const s0 = Math.floor(t0 * SR);
                const n = Math.floor(0.55 * SR);
                let phase = 0;
                for (let k = 0; k < n; k++) {
                    const t = k / SR;
                    const f = 44 + 90 * Math.exp(-t * 28);
                    phase += (2 * Math.PI * f) / SR;
                    const body = Math.sin(phase) * Math.exp(-t * 6.5);
                    const click = noise() * Math.exp(-t * 400) * 0.15;
                    const v = Math.tanh((body + click) * 1.6) * 0.5;
                    add(drumBus, s0 + k, v);
                }
            }
            if (sections.hats(bar)) {
                // Soft off-beat hat
                const s0 = Math.floor((t0 + BEAT / 2) * SR);
                const n = Math.floor(0.08 * SR);
                let hp = 0;
                let prev = 0;
                for (let k = 0; k < n; k++) {
                    const t = k / SR;
                    const x = noise();
                    hp = 0.92 * (hp + x - prev);
                    prev = x;
                    const v = hp * Math.exp(-t * 55) * 0.05;
                    add(drumBus, s0 + k, v * 0.8, v * 1.2);
                }
            }
        }
    }
}

// ---------------------------------------------------------------- fx
function renderImpacts() {
    for (const bar of IMPACT_BARS) {
        const s0 = Math.floor(bar * BAR * SR);
        const n = Math.floor(3.5 * SR);
        let phase = 0;
        let lp = 0;
        for (let k = 0; k < n; k++) {
            const t = k / SR;
            const f = 30 + 50 * Math.exp(-t * 5);
            phase += (2 * Math.PI * f) / SR;
            const boom = Math.sin(phase) * Math.exp(-t * 1.6) * 0.55;
            lp += 0.06 * (noise() - lp);
            const air = lp * Math.exp(-t * 3) * 0.5;
            add(fxBus, s0 + k, boom + air, boom - air * 0.6);
        }
    }
}

function renderRisers() {
    for (const bar of RISER_BARS) {
        const s0 = Math.floor(bar * BAR * SR);
        const n = Math.floor(BAR * SR);
        let lp = 0;
        let lpR = 0;
        for (let k = 0; k < n; k++) {
            const p = k / n;
            const cutoff = 200 + 5000 * p * p;
            const a = 1 - Math.exp((-2 * Math.PI * cutoff) / SR);
            lp += a * (noise() - lp);
            lpR += a * (noise() - lpR);
            const g = p * p * 0.16;
            add(fxBus, s0 + k, lp * g, lpR * g);
        }
    }
}

// ---------------------------------------------------------------- effects
function pingPongDelay(b, seconds, feedback, mix) {
    const d = Math.floor(seconds * SR);
    const L = new Float32Array(N);
    const R = new Float32Array(N);
    for (let i = 0; i < N; i++) {
        const fromR = i >= d ? R[i - d] : 0;
        const fromL = i >= d ? L[i - d] : 0;
        L[i] = b.L[i] + fromR * feedback;
        R[i] = fromL * feedback;
    }
    for (let i = 0; i < N; i++) {
        b.L[i] += (L[i] - b.L[i]) * mix;
        b.R[i] += R[i] * mix;
    }
}

// Freeverb-style reverb (8 combs + 4 allpasses per channel)
function reverb(b, { room = 0.86, damp = 0.35, wet = 0.35 } = {}) {
    const combT = [1116, 1188, 1277, 1356, 1422, 1491, 1557, 1617];
    const apT = [556, 441, 341, 225];
    const process = (input, spread) => {
        const out = new Float32Array(N);
        for (const ct of combT) {
            const len = ct + spread;
            const buf = new Float32Array(len);
            let idx = 0;
            let store = 0;
            for (let i = 0; i < N; i++) {
                const y = buf[idx];
                store = y * (1 - damp) + store * damp;
                buf[idx] = input[i] * 0.015 + store * room;
                out[i] += y;
                idx = (idx + 1) % len;
            }
        }
        for (const at of apT) {
            const len = at + spread;
            const buf = new Float32Array(len);
            let idx = 0;
            for (let i = 0; i < N; i++) {
                const bo = buf[idx];
                const x = out[i];
                out[i] = -x + bo;
                buf[idx] = x + bo * 0.5;
                idx = (idx + 1) % len;
            }
        }
        return out;
    };
    const wL = process(b.L, 0);
    const wR = process(b.R, 23);
    for (let i = 0; i < N; i++) {
        b.L[i] += wL[i] * wet;
        b.R[i] += wR[i] * wet;
    }
}

// Sidechain gain curve driven by the kick — the "breathing" pump
function sidechainCurve() {
    const g = new Float32Array(N).fill(1);
    for (const t0 of kickTimes) {
        const s0 = Math.floor(t0 * SR);
        const n = Math.floor(BEAT * SR);
        for (let k = 0; k < n && s0 + k < N; k++) {
            const t = k / SR;
            const duck = 1 - 0.55 * Math.exp(-t * 9);
            g[s0 + k] = Math.min(g[s0 + k], duck);
        }
    }
    return g;
}

// ---------------------------------------------------------------- render
console.log(`Rendering ${MUSIC_SECONDS.toFixed(1)}s soundtrack at ${BPM} BPM...`);
renderPad();
renderBass();
renderArp();
renderDrums();
renderImpacts();
renderRisers();

pingPongDelay(arpBus, BEAT * 0.75, 0.42, 0.45);
reverb(arpBus, { room: 0.84, wet: 0.45 });
reverb(padBus, { room: 0.9, damp: 0.45, wet: 0.5 });
reverb(fxBus, { room: 0.88, wet: 0.4 });

const sc = sidechainCurve();
const outL = new Float32Array(N);
const outR = new Float32Array(N);
for (let i = 0; i < N; i++) {
    const s = sc[i];
    outL[i] = padBus.L[i] * s + bassBus.L[i] * s + arpBus.L[i] * (0.6 + 0.4 * s) + drumBus.L[i] + fxBus.L[i];
    outR[i] = padBus.R[i] * s + bassBus.R[i] * s + arpBus.R[i] * (0.6 + 0.4 * s) + drumBus.R[i] + fxBus.R[i];
}

// Master: soft-clip, fade in/out, normalise to -1 dBFS
const fadeIn = 0.5 * SR;
const fadeOutStart = (MUSIC_SECONDS - 4) * SR;
let peak = 0;
for (let i = 0; i < N; i++) {
    let g = Math.min(1, i / fadeIn);
    if (i > fadeOutStart) g *= Math.max(0, 1 - (i - fadeOutStart) / (N - fadeOutStart));
    outL[i] = Math.tanh(outL[i] * 1.2) * g;
    outR[i] = Math.tanh(outR[i] * 1.2) * g;
    peak = Math.max(peak, Math.abs(outL[i]), Math.abs(outR[i]));
}
const norm = 0.89 / (peak || 1);

const data = Buffer.alloc(44 + N * 4);
data.write("RIFF", 0);
data.writeUInt32LE(36 + N * 4, 4);
data.write("WAVE", 8);
data.write("fmt ", 12);
data.writeUInt32LE(16, 16);
data.writeUInt16LE(1, 20);
data.writeUInt16LE(2, 22);
data.writeUInt32LE(SR, 24);
data.writeUInt32LE(SR * 4, 28);
data.writeUInt16LE(4, 32);
data.writeUInt16LE(16, 34);
data.write("data", 36);
data.writeUInt32LE(N * 4, 40);
for (let i = 0; i < N; i++) {
    data.writeInt16LE(Math.round(clamp(outL[i] * norm, -1, 1) * 32767), 44 + i * 4);
    data.writeInt16LE(Math.round(clamp(outR[i] * norm, -1, 1) * 32767), 46 + i * 4);
}

const out = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "music.wav");
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, data);
console.log(`Wrote ${out}`);
