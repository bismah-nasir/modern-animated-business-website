import { AbsoluteFill, interpolate, random, useCurrentFrame } from "remotion";
import { BEAT_FRAMES, BAR_FRAMES, sceneFrom } from "../timing.js";
import { colors } from "../theme.js";

// Beat pulse: 1 on each kick, decaying to 0 — only once the drums are in
const useBeatPulse = () => {
    const frame = useCurrentFrame();
    const drumsIn = frame >= sceneFrom("hero");
    const breakdown =
        frame >= sceneFrom("testimonial") && frame < sceneFrom("outro");
    if (!drumsIn || breakdown) return 0;
    const t = (frame % BEAT_FRAMES) / BEAT_FRAMES;
    return Math.exp(-t * 5);
};

const GridPattern = () => {
    const frame = useCurrentFrame();
    return (
        <AbsoluteFill
            style={{
                backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
                backgroundPosition: `0px ${(frame * 0.4) % 42}px`,
                opacity: 0.05,
                maskImage:
                    "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            }}
        />
    );
};

const blobs = [
    { x: -8, y: -12, size: 900, color: "rgba(6,182,212,0.16)", speed: 0.006, amp: 60 },
    { x: 78, y: 4, size: 640, color: "rgba(147,51,234,0.16)", speed: 0.005, amp: 70 },
    { x: 30, y: 70, size: 900, color: "rgba(34,211,238,0.10)", speed: 0.004, amp: 50 },
    { x: 60, y: 55, size: 520, color: "rgba(37,99,235,0.14)", speed: 0.007, amp: 40 },
];

const GlowBlobs = ({ pulse }) => {
    const frame = useCurrentFrame();
    return blobs.map((b, i) => {
        const dx = Math.sin(frame * b.speed * Math.PI * 2 + i) * b.amp;
        const dy = Math.cos(frame * b.speed * Math.PI * 2 + i * 2) * b.amp;
        const scale = 1 + 0.06 * Math.sin(frame * 0.02 + i) + pulse * 0.05;
        return (
            <div
                key={i}
                style={{
                    position: "absolute",
                    left: `${b.x}%`,
                    top: `${b.y}%`,
                    width: b.size,
                    height: b.size,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${b.color} 0%, transparent 70%)`,
                    transform: `translate(${dx}px, ${dy}px) scale(${scale})`,
                }}
            />
        );
    });
};

const rings = [
    { left: "8%", top: "15%", size: 160, color: "6,182,212", period: 540 },
    { left: "5%", top: "58%", size: 90, color: "59,130,246", period: 420, reverse: true },
    { left: "84%", top: "20%", size: 120, color: "6,182,212", period: 600 },
    { left: "55%", top: "76%", size: 140, color: "59,130,246", period: 660, reverse: true },
];

const FloatingRings = ({ pulse }) => {
    const frame = useCurrentFrame();
    return rings.map((r, i) => {
        const p = (frame % r.period) / r.period;
        const rot = (r.reverse ? -360 : 360) * p;
        const y = Math.sin(p * Math.PI * 4) * 12;
        return (
            <div
                key={i}
                style={{
                    position: "absolute",
                    left: r.left,
                    top: r.top,
                    width: r.size,
                    height: r.size,
                    borderRadius: "50%",
                    border: `1.5px solid rgba(${r.color},${0.2 + pulse * 0.15})`,
                    boxShadow: `0 0 30px rgba(${r.color},0.15), inset 0 0 30px rgba(${r.color},0.06)`,
                    transform: `translateY(${y}px) rotate(${rot}deg)`,
                }}
            />
        );
    });
};

const PARTICLE_COUNT = 40;

const FloatingParticles = () => {
    const frame = useCurrentFrame();
    return Array.from({ length: PARTICLE_COUNT }, (_, i) => {
        const x = random(`px-${i}`) * 100;
        const size = 2 + random(`ps-${i}`) * 4;
        const period = 180 + random(`pd-${i}`) * 240;
        const offset = random(`po-${i}`) * period;
        const p = ((frame + offset) % period) / period;
        const y = 105 - p * 115;
        const opacity = Math.sin(p * Math.PI) * (0.25 + random(`pa-${i}`) * 0.5);
        const color = i % 3 === 0 ? colors.accentLight : colors.primaryLight;
        return (
            <div
                key={i}
                style={{
                    position: "absolute",
                    left: `${x}%`,
                    top: `${y}%`,
                    width: size,
                    height: size,
                    borderRadius: "50%",
                    background: color,
                    boxShadow: `0 0 ${size * 3}px ${color}`,
                    opacity,
                }}
            />
        );
    });
};

// A thin light sweep that crosses the frame on every bar downbeat
const BarSweep = () => {
    const frame = useCurrentFrame();
    if (frame < sceneFrom("hero")) return null;
    const t = (frame % BAR_FRAMES) / 24;
    if (t > 1) return null;
    const x = interpolate(t, [0, 1], [-20, 120]);
    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: `${x}%`,
                width: 2,
                background: `linear-gradient(180deg, transparent, ${colors.primaryLight}, transparent)`,
                opacity: 0.12 * (1 - t),
                boxShadow: `0 0 40px ${colors.primaryLight}`,
            }}
        />
    );
};

export const Background = () => {
    const pulse = useBeatPulse();
    return (
        <AbsoluteFill style={{ background: colors.background, overflow: "hidden" }}>
            <GridPattern />
            <GlowBlobs pulse={pulse} />
            <FloatingRings pulse={pulse} />
            <FloatingParticles />
            <BarSweep />
            <AbsoluteFill
                style={{
                    background:
                        "radial-gradient(ellipse at center, transparent 55%, rgba(3,10,20,0.7) 100%)",
                }}
            />
        </AbsoluteFill>
    );
};
