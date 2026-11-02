import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Globe, Smartphone, Bot, Palette, TrendingUp } from "lucide-react";
import { Scene, useEnter, clampOpts } from "../components/anim.jsx";
import { SectionHeader } from "../components/SectionHeader.jsx";
import { colors, glassCard } from "../theme.js";
import { sceneLength, BEAT_FRAMES } from "../timing.js";

const services = [
    { icon: Globe, title: "Web Development", subtitle: "Crafting Digital Experiences", color: "#3b82f6", tech: ["React", "Next.js", "Node.js"] },
    { icon: Smartphone, title: "Mobile Apps", subtitle: "Native & Cross-Platform", color: "#06b6d4", tech: ["React Native", "Flutter", "Swift"] },
    { icon: Bot, title: "AI & Automation", subtitle: "Intelligent Solutions", color: "#8b5cf6", tech: ["Python", "TensorFlow", "OpenAI"] },
    { icon: Palette, title: "UI/UX Design", subtitle: "Design That Converts", color: "#6366f1", tech: ["Figma", "Framer", "Maze"] },
    { icon: TrendingUp, title: "Digital Marketing", subtitle: "Growth-Driven Strategy", color: "#10b981", tech: ["SEO", "Google Ads", "GA4"] },
];

// Cards land one per beat, starting on beat 3 of the first bar
const CARD_START = BEAT_FRAMES * 2;

export const Services = () => {
    const length = sceneLength("services");
    return (
        <Scene length={length}>
            <AbsoluteFill style={{ alignItems: "center", paddingTop: 130 }}>
                <SectionHeader badgeText="What We Do" title="Services That" highlight="Scale Your Vision" />
                <div style={{ display: "flex", gap: 28, marginTop: 90, padding: "0 90px" }}>
                    {services.map((s, i) => (
                        <ServiceCard key={s.title} {...s} delay={CARD_START + i * BEAT_FRAMES} index={i} />
                    ))}
                </div>
            </AbsoluteFill>
        </Scene>
    );
};

const ServiceCard = ({ icon: Icon, title, subtitle, color, tech, delay, index }) => {
    const frame = useCurrentFrame();
    const p = useEnter(delay, { damping: 16, mass: 0.8 });
    // Each card lights up in turn after all have landed
    const highlightAt = CARD_START + 5 * BEAT_FRAMES + index * 12;
    const glow = interpolate(frame, [highlightAt, highlightAt + 10, highlightAt + 36], [0, 1, 0], clampOpts);

    return (
        <div
            style={{
                ...glassCard,
                width: 320,
                height: 440,
                borderRadius: 28,
                padding: 36,
                display: "flex",
                flexDirection: "column",
                opacity: Math.min(1, p * 1.4),
                transform: `translateY(${(1 - p) * 160 - glow * 14}px) rotateX(${(1 - p) * 25}deg)`,
                borderColor: `rgba(255,255,255,${0.08 + glow * 0.2})`,
                boxShadow: `0 20px 40px rgba(0,0,0,0.25), 0 0 ${glow * 60}px ${color}55`,
            }}>
            <div
                style={{
                    width: 84,
                    height: 84,
                    borderRadius: 22,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `${color}1a`,
                    border: `1px solid ${color}33`,
                    color,
                }}>
                <Icon size={42} />
            </div>
            <div style={{ marginTop: 34, fontSize: 32, fontWeight: 700, color: colors.textPrimary }}>
                {title}
            </div>
            <div style={{ marginTop: 10, fontSize: 21, color: colors.textSecondary }}>{subtitle}</div>
            <div style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", gap: 10 }}>
                {tech.map((t) => (
                    <span
                        key={t}
                        style={{
                            fontSize: 17,
                            fontWeight: 500,
                            padding: "7px 14px",
                            borderRadius: 9999,
                            background: "rgba(255,255,255,0.05)",
                            border: `1px solid ${colors.border}`,
                            color: colors.textSecondary,
                        }}>
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
};
