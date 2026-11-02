import {
    AbsoluteFill,
    Easing,
    interpolate,
    spring,
    useCurrentFrame,
    useVideoConfig,
} from "remotion";

const clampOpts = { extrapolateLeft: "clamp", extrapolateRight: "clamp" };

// Smooth 0 → 1 spring that starts at `delay` frames into the current sequence
export const useEnter = (delay = 0, config = { damping: 200, mass: 0.9 }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    return spring({ frame: frame - delay, fps, config });
};

// Fade/rise in, with an optional soft blur — the "glass" reveal
export const Reveal = ({ delay = 0, y = 40, blur = 10, scale = 1, children, style }) => {
    const p = useEnter(delay);
    return (
        <div
            style={{
                opacity: p,
                transform: `translateY(${(1 - p) * y}px) scale(${scale + (1 - scale) * p})`,
                filter: blur ? `blur(${(1 - p) * blur}px)` : undefined,
                ...style,
            }}>
            {children}
        </div>
    );
};

// Wraps a scene: fades out (with a gentle zoom + blur) over its last frames
export const Scene = ({ length, exit = 14, children }) => {
    const frame = useCurrentFrame();
    const out = interpolate(frame, [length - exit, length], [1, 0], {
        ...clampOpts,
        easing: Easing.in(Easing.cubic),
    });
    return (
        <AbsoluteFill
            style={{
                opacity: out,
                transform: `scale(${1 + (1 - out) * 0.04})`,
                filter: `blur(${(1 - out) * 8}px)`,
            }}>
            {children}
        </AbsoluteFill>
    );
};

// Splits text into words that rise in one after another
export const WordReveal = ({ text, delay = 0, stagger = 4, style, wordStyle }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    return (
        <span style={style}>
            {text.split(" ").map((word, i) => {
                const p = spring({
                    frame: frame - delay - i * stagger,
                    fps,
                    config: { damping: 200 },
                });
                return (
                    <span
                        key={i}
                        style={{
                            display: "inline-block",
                            opacity: p,
                            transform: `translateY(${(1 - p) * 30}px)`,
                            filter: `blur(${(1 - p) * 6}px)`,
                            marginRight: "0.28em",
                            ...wordStyle,
                        }}>
                        {word}
                    </span>
                );
            })}
        </span>
    );
};

export { clampOpts };
