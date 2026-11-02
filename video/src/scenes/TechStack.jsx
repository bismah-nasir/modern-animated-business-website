import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { SiReact, SiVite, SiTailwindcss, SiFramer, SiReactrouter, SiLucide, SiVercel } from "react-icons/si";
import { Scene, Reveal, useEnter, clampOpts } from "../components/anim.jsx";
import { SectionHeader } from "../components/SectionHeader.jsx";
import { colors, glassCard } from "../theme.js";
import { sceneLength, BEAT_FRAMES } from "../timing.js";

// Mirrors the Technology Stack table in the website README
const stack = [
    { icon: SiReact, name: "React", version: "v19.2", purpose: "Component Architecture", color: "#61DAFB" },
    { icon: SiVite, name: "Vite", version: "v8.1", purpose: "Dev Server & Bundling", color: "#a78bfa" },
    { icon: SiTailwindcss, name: "Tailwind CSS", version: "v4.3", purpose: "Styling System", color: "#38BDF8" },
    { icon: SiFramer, name: "Framer Motion", version: "v12.4", purpose: "Physics & Animations", color: "#f472b6" },
    { icon: SiReactrouter, name: "React Router", version: "v7.18", purpose: "SPA Client Routing", color: "#F44250" },
    { icon: SiLucide, name: "Lucide React", version: "v1.21", purpose: "Interface Icons", color: "#F56565" },
];

const TILE_START = BEAT_FRAMES * 2;

export const TechStack = () => {
    const length = sceneLength("techStack");
    return (
        <Scene length={length}>
            <AbsoluteFill style={{ alignItems: "center", paddingTop: 110 }}>
                <SectionHeader badgeText="Tech Stack" title="Built With" highlight="Modern Technology" />
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 520px)",
                        gap: 30,
                        marginTop: 70,
                    }}>
                    {stack.map((t, i) => (
                        <TechTile key={t.name} {...t} index={i} delay={TILE_START + i * (BEAT_FRAMES / 2)} />
                    ))}
                </div>
                <Reveal delay={TILE_START + 6 * (BEAT_FRAMES / 2) + 6}>
                    <div
                        style={{
                            marginTop: 50,
                            display: "flex",
                            alignItems: "center",
                            gap: 14,
                            fontSize: 24,
                            color: colors.textSecondary,
                        }}>
                        <SiVercel size={22} color={colors.textPrimary} /> Deployed on Vercel
                    </div>
                </Reveal>
            </AbsoluteFill>
        </Scene>
    );
};

const TechTile = ({ icon: Icon, name, version, purpose, color, index, delay }) => {
    const frame = useCurrentFrame();
    const p = useEnter(delay, { damping: 16, mass: 0.8 });
    const highlightAt = TILE_START + 4 * BEAT_FRAMES + index * 10;
    const glow = interpolate(frame, [highlightAt, highlightAt + 8, highlightAt + 30], [0, 1, 0], clampOpts);

    return (
        <div
            style={{
                ...glassCard,
                height: 170,
                borderRadius: 26,
                padding: "0 34px",
                display: "flex",
                alignItems: "center",
                gap: 28,
                opacity: Math.min(1, p * 1.4),
                transform: `translateY(${(1 - p) * 80}px) scale(${0.85 + p * 0.15 + glow * 0.03})`,
                borderColor: `rgba(255,255,255,${0.08 + glow * 0.2})`,
                boxShadow: `0 20px 40px rgba(0,0,0,0.25), 0 0 ${glow * 50}px ${color}55`,
            }}>
            <div
                style={{
                    width: 92,
                    height: 92,
                    flexShrink: 0,
                    borderRadius: 24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `${color}1a`,
                    border: `1px solid ${color}40`,
                    color,
                    transform: `rotate(${(1 - p) * -45}deg)`,
                }}>
                <Icon size={48} />
            </div>
            <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 31, fontWeight: 700, color: colors.textPrimary, whiteSpace: "nowrap" }}>{name}</span>
                    <span
                        style={{
                            fontSize: 16,
                            fontWeight: 600,
                            padding: "4px 12px",
                            borderRadius: 9999,
                            background: `${color}1a`,
                            color,
                        }}>
                        {version}
                    </span>
                </div>
                <div style={{ marginTop: 8, fontSize: 21, color: colors.textSecondary }}>{purpose}</div>
            </div>
        </div>
    );
};
