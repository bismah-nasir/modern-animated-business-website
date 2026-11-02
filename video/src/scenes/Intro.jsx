import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Logo } from "../components/Logo.jsx";
import { Scene, Reveal, useEnter, clampOpts } from "../components/anim.jsx";
import { colors, badge } from "../theme.js";
import { sceneLength } from "../timing.js";

const NAME = "Glassbloom";

export const Intro = () => {
    const frame = useCurrentFrame();
    const length = sceneLength("intro");
    const bloom = interpolate(frame, [10, 70], [0, 1], clampOpts);
    const spin = interpolate(frame, [0, length], [-30, 20]);
    const glow = useEnter(30, { damping: 30 });
    const lift = useEnter(80);

    return (
        <Scene length={length} exit={18}>
            <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
                {/* Expanding halo rings behind the logo */}
                {[0, 1, 2].map((i) => {
                    const t = interpolate(frame, [20 + i * 18, 110 + i * 18], [0, 1], clampOpts);
                    return (
                        <div
                            key={i}
                            style={{
                                position: "absolute",
                                width: 260 + t * 700,
                                height: 260 + t * 700,
                                borderRadius: "50%",
                                border: `1.5px solid ${colors.primaryLight}`,
                                opacity: (1 - t) * 0.35 * (t > 0 ? 1 : 0),
                            }}
                        />
                    );
                })}

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        transform: `translateY(${-lift * 40}px)`,
                    }}>
                    <div
                        style={{
                            filter: `drop-shadow(0 0 ${40 * glow}px rgba(34,211,238,0.6))`,
                        }}>
                        <Logo size={240} bloom={bloom} spin={spin} />
                    </div>

                    <div
                        style={{
                            marginTop: 36,
                            fontSize: 120,
                            fontWeight: 800,
                            letterSpacing: "-0.03em",
                            color: colors.textPrimary,
                            display: "flex",
                        }}>
                        {NAME.split("").map((ch, i) => {
                            const p = interpolate(frame - 50 - i * 3, [0, 18], [0, 1], clampOpts);
                            return (
                                <span
                                    key={i}
                                    style={{
                                        display: "inline-block",
                                        opacity: p,
                                        transform: `translateY(${(1 - p) * 50}px)`,
                                        filter: `blur(${(1 - p) * 12}px)`,
                                        ...(i >= 5
                                            ? {
                                                  color: colors.primaryLight,
                                                  textShadow: "0 0 40px rgba(34,211,238,0.4)",
                                              }
                                            : null),
                                    }}>
                                    {ch}
                                </span>
                            );
                        })}
                    </div>
                </div>

                <Reveal delay={105} style={{ position: "absolute", bottom: 260 }}>
                    <span style={badge}>AI Powered Digital Agency</span>
                </Reveal>
            </AbsoluteFill>
        </Scene>
    );
};
