import { AbsoluteFill, Img, staticFile, useCurrentFrame } from "remotion";
import { ArrowRight } from "lucide-react";
import { Scene, Reveal, WordReveal, useEnter } from "../components/anim.jsx";
import { colors, badge, gradientText, glassCard } from "../theme.js";
import { sceneLength } from "../timing.js";

const floatingCards = [
    { title: "AI Powered", color: "#22d3ee", style: { right: -30, top: 60 }, delay: 40 },
    { title: "99.9% Uptime", color: "#c084fc", style: { left: -40, bottom: 40 }, delay: 52 },
    { title: "Cloud Native", color: "#67e8f9", style: { right: -70, top: 330 }, delay: 64 },
];

export const Hero = () => {
    const frame = useCurrentFrame();
    const length = sceneLength("hero");
    const image = useEnter(8, { damping: 120 });

    return (
        <Scene length={length}>
            <AbsoluteFill
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "0 150px",
                    gap: 80,
                }}>
                {/* Left: copy */}
                <div style={{ flex: 1.1 }}>
                    <Reveal delay={0}>
                        <span style={badge}>AI Powered Digital Agency</span>
                    </Reveal>

                    <h1
                        style={{
                            margin: "34px 0 0",
                            fontSize: 92,
                            fontWeight: 800,
                            lineHeight: 1.1,
                            letterSpacing: "-0.03em",
                            color: colors.textPrimary,
                        }}>
                        <WordReveal text="Building Digital" delay={6} />
                        <br />
                        <WordReveal text="Experiences" delay={14} wordStyle={gradientText} />
                        <br />
                        <WordReveal text="Powered by Innovation" delay={20} />
                    </h1>

                    <Reveal delay={36}>
                        <p
                            style={{
                                marginTop: 30,
                                maxWidth: 760,
                                fontSize: 28,
                                lineHeight: 1.6,
                                color: colors.textSecondary,
                            }}>
                            We craft cutting-edge software that transforms businesses —
                            from AI automation to stunning web applications.
                        </p>
                    </Reveal>

                    <Reveal delay={48}>
                        <div style={{ display: "flex", gap: 24, marginTop: 40 }}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12,
                                    padding: "20px 44px",
                                    borderRadius: 9999,
                                    fontSize: 26,
                                    fontWeight: 600,
                                    color: "white",
                                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                                    boxShadow: "0 0 40px rgba(6,182,212,0.35)",
                                }}>
                                Get Started <ArrowRight size={26} />
                            </div>
                            <div
                                style={{
                                    padding: "20px 44px",
                                    borderRadius: 9999,
                                    fontSize: 26,
                                    fontWeight: 600,
                                    color: colors.textPrimary,
                                    border: `1px solid ${colors.border}`,
                                    background: "rgba(255,255,255,0.03)",
                                }}>
                                View Our Work
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* Right: hero image with floating glass tags */}
                <div
                    style={{
                        flex: 0.9,
                        display: "flex",
                        justifyContent: "center",
                        opacity: image,
                        transform: `translateX(${(1 - image) * 120}px) scale(${0.9 + image * 0.1})`,
                    }}>
                    <div style={{ position: "relative", width: 640, height: 640 }}>
                        <div
                            style={{
                                position: "absolute",
                                inset: 40,
                                borderRadius: "50%",
                                background:
                                    "radial-gradient(circle, rgba(6,182,212,0.25), transparent 70%)",
                            }}
                        />
                        <Img
                            src={staticFile("hero-image.webp")}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                                transform: `translateY(${Math.sin(frame / 22) * 12}px)`,
                            }}
                        />
                        {floatingCards.map((card, i) => (
                            <FloatingTag key={card.title} {...card} index={i} />
                        ))}
                    </div>
                </div>
            </AbsoluteFill>
        </Scene>
    );
};

const FloatingTag = ({ title, color, style, delay, index }) => {
    const frame = useCurrentFrame();
    const p = useEnter(delay);
    return (
        <div
            style={{
                position: "absolute",
                ...style,
                ...glassCard,
                background: "rgba(11,30,51,0.75)",
                borderRadius: 18,
                padding: "16px 26px",
                display: "flex",
                alignItems: "center",
                gap: 14,
                fontSize: 24,
                fontWeight: 600,
                color: "white",
                opacity: p,
                transform: `translateY(${(1 - p) * 30 + Math.sin(frame / (14 + index * 3)) * 10}px) scale(${0.8 + p * 0.2})`,
            }}>
            <span
                style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: color,
                    boxShadow: `0 0 14px ${color}`,
                }}
            />
            {title}
        </div>
    );
};
