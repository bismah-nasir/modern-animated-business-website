// Shared by the video and the music generator so cuts land on the beat.
export const FPS = 30;
export const BPM = 100;
export const BEAT_FRAMES = (60 / BPM) * FPS; // 18
export const BAR_FRAMES = BEAT_FRAMES * 4; // 72

// Scene layout in bars
export const SCENES = {
    intro: { from: 0, bars: 3 },
    hero: { from: 3, bars: 3 },
    services: { from: 6, bars: 4 },
    stats: { from: 10, bars: 3 },
    portfolio: { from: 13, bars: 3 },
    techStack: { from: 16, bars: 3 },
    testimonial: { from: 19, bars: 2 },
    outro: { from: 21, bars: 3 },
};

export const BARS = 24;
export const TAIL_SECONDS = 2;
export const DURATION_FRAMES = BARS * BAR_FRAMES + TAIL_SECONDS * FPS; // 1788
export const MUSIC_SECONDS = DURATION_FRAMES / FPS;

export const sceneFrom = (name) => SCENES[name].from * BAR_FRAMES;
export const sceneLength = (name) => SCENES[name].bars * BAR_FRAMES;
