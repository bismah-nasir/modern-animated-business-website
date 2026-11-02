import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Scene, useEnter, clampOpts } from "../components/anim.jsx";
import { SectionHeader } from "../components/SectionHeader.jsx";
import { colors, glassCard } from "../theme.js";
import { sceneLength, BEAT_FRAMES } from "../timing.js";

const projects = [
    {
        title: "FinanceFlow Dashboard",
        category: "Web",
        tech: ["React", "Node.js", "AWS"],
        stats: [["50K+", "Users"], ["99.9%", "Uptime"], ["+340%", "Growth"]],
        g: ["#3B82F6", "#06B6D4", "#0F2847", "#153662"],
    },
    {
        title: "MediConnect App",
        category: "Mobile",
        tech: ["React Native", "Firebase", "WebRTC"],
        stats: [["200K+", "Downloads"], ["4.9★", "Rating"], ["98%", "Satisfaction"]],
        g: ["#06B6D4", "#3B82F6", "#0B1E33", "#0F2847"],
    },
    {
        title: "NeuralVision AI",
        category: "AI",
        tech: ["Python", "TensorFlow", "OpenCV"],
        stats: [["99.7%", "Accuracy"], ["1M+", "Images"], ["$2M", "Savings"]],
        g: ["#8B5CF6", "#6366F1", "#153662", "#0F2847"],
    },
];

export const Portfolio = () => {
    const length = sceneLength("portfolio");
    return (
        <Scene length={length}>
            <AbsoluteFill style={{ alignItems: "center", paddingTop: 120 }}>
                <SectionHeader badgeText="Featured Work" title="Projects That" highlight="Make an Impact" />
                <div style={{ display: "flex", gap: 40, marginTop: 80, perspective: 1600 }}>
                    {projects.map((p, i) => (
                        <ProjectCard key={p.title} {...p} index={i} delay={BEAT_FRAMES + i * BEAT_FRAMES} />
                    ))}
                </div>
            </AbsoluteFill>
        </Scene>
    );
};

const ProjectCard = ({ title, category, tech, stats, g, index, delay }) => {
    const frame = useCurrentFrame();
    const p = useEnter(delay, { damping: 20, mass: 1 });
    const fromSide = (index - 1) * 1;
    const tilt = Math.sin((frame + index * 30) / 40) * 3;
    // Scanning line across the preview, like a live dashboard
    const scan = interpolate((frame + index * 25) % 90, [0, 90], [0, 100], clampOpts);

    return (
        <div
            style={{
                ...glassCard,
                width: 520,
                borderRadius: 30,
                overflow: "hidden",
                opacity: p,
                transform: `translateY(${(1 - p) * 120}px) rotateY(${(1 - p) * 30 * (fromSide || 1) + tilt}deg)`,
            }}>
            {/* Preview */}
            <div
                style={{
                    position: "relative",
                    height: 250,
                    background: `linear-gradient(135deg, ${g[2]}, ${g[3]})`,
                    overflow: "hidden",
                }}>
                <div
                    style={{
                        position: "absolute",
                        width: 300,
                        height: 300,
                        left: -60,
                        top: -80,
                        borderRadius: "50%",
                        background: `radial-gradient(circle, ${g[0]}88, transparent 70%)`,
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        width: 260,
                        height: 260,
                        right: -40,
                        bottom: -100,
                        borderRadius: "50%",
                        background: `radial-gradient(circle, ${g[1]}77, transparent 70%)`,
                    }}
                />
                {/* Mini chart bars */}
                <div style={{ position: "absolute", left: 40, right: 40, bottom: 34, display: "flex", alignItems: "flex-end", gap: 12, height: 130 }}>
                    {Array.from({ length: 10 }, (_, b) => {
                        const h = 30 + ((b * 37 + index * 19) % 70);
                        const grow = interpolate(frame - delay - b * 2, [0, 20], [0, 1], clampOpts);
                        return (
                            <div
                                key={b}
                                style={{
                                    flex: 1,
                                    height: `${h * grow}%`,
                                    borderRadius: 6,
                                    background: `linear-gradient(180deg, ${g[0]}, ${g[1]}55)`,
                                    opacity: 0.85,
                                }}
                            />
                        );
                    })}
                </div>
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: `${scan}%`,
                        width: 2,
                        background: "rgba(255,255,255,0.5)",
                        boxShadow: "0 0 20px white",
                        opacity: 0.4,
                    }}
                />
                <span
                    style={{
                        position: "absolute",
                        top: 22,
                        left: 22,
                        fontSize: 18,
                        fontWeight: 600,
                        padding: "6px 16px",
                        borderRadius: 9999,
                        background: "rgba(7,20,38,0.6)",
                        border: `1px solid ${colors.border}`,
                        color: colors.primaryLight,
                    }}>
                    {category}
                </span>
            </div>

            {/* Body */}
            <div style={{ padding: "30px 34px 34px" }}>
                <div style={{ fontSize: 32, fontWeight: 700, color: colors.textPrimary }}>{title}</div>
                <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
                    {tech.map((t) => (
                        <span
                            key={t}
                            style={{
                                fontSize: 17,
                                padding: "6px 14px",
                                borderRadius: 9999,
                                background: "rgba(255,255,255,0.05)",
                                border: `1px solid ${colors.border}`,
                                color: colors.textSecondary,
                            }}>
                            {t}
                        </span>
                    ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 28 }}>
                    {stats.map(([v, l]) => (
                        <div key={l}>
                            <div style={{ fontSize: 30, fontWeight: 800, color: g[0] === "#8B5CF6" ? "#a78bfa" : colors.primaryLight }}>
                                {v}
                            </div>
                            <div style={{ fontSize: 18, color: colors.textSecondary }}>{l}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
