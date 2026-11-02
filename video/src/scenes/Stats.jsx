import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { CheckCheck, Smile, Users, CalendarCheck } from "lucide-react";
import { Scene, useEnter, clampOpts } from "../components/anim.jsx";
import { SectionHeader } from "../components/SectionHeader.jsx";
import { colors, glassCard, gradientText } from "../theme.js";
import { sceneLength, BEAT_FRAMES } from "../timing.js";

const stats = [
    { icon: CheckCheck, value: 250, label: "Projects Completed", color: "#22d3ee" },
    { icon: Smile, value: 180, label: "Happy Clients", color: "#3b82f6" },
    { icon: Users, value: 35, label: "Team Experts", color: "#8b5cf6" },
    { icon: CalendarCheck, value: 10, label: "Years Experience", color: "#10b981" },
];

export const Stats = () => {
    const length = sceneLength("stats");
    return (
        <Scene length={length}>
            <AbsoluteFill style={{ alignItems: "center", paddingTop: 150 }}>
                <SectionHeader badgeText="Our Track Record" title="Numbers That" highlight="Speak for Us" />
                <div style={{ display: "flex", gap: 40, marginTop: 100 }}>
                    {stats.map((s, i) => (
                        <StatCard key={s.label} {...s} delay={BEAT_FRAMES + i * 8} />
                    ))}
                </div>
            </AbsoluteFill>
        </Scene>
    );
};

const RING = 2 * Math.PI * 64;

const StatCard = ({ icon: Icon, value, label, color, delay }) => {
    const frame = useCurrentFrame();
    const p = useEnter(delay, { damping: 18 });
    const count = interpolate(frame, [delay, delay + 70], [0, 1], {
        ...clampOpts,
        easing: Easing.out(Easing.cubic),
    });

    return (
        <div
            style={{
                ...glassCard,
                width: 360,
                height: 400,
                borderRadius: 30,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                opacity: p,
                transform: `scale(${0.7 + p * 0.3}) translateY(${(1 - p) * 60}px)`,
            }}>
            <div style={{ position: "relative", width: 150, height: 150 }}>
                <svg width={150} height={150} style={{ position: "absolute", transform: "rotate(-90deg)" }}>
                    <circle cx={75} cy={75} r={64} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={6} />
                    <circle
                        cx={75}
                        cy={75}
                        r={64}
                        fill="none"
                        stroke={color}
                        strokeWidth={6}
                        strokeLinecap="round"
                        strokeDasharray={RING}
                        strokeDashoffset={RING * (1 - count)}
                        style={{ filter: `drop-shadow(0 0 8px ${color})` }}
                    />
                </svg>
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color,
                    }}>
                    <Icon size={52} />
                </div>
            </div>
            <div
                style={{
                    marginTop: 30,
                    fontSize: 92,
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    fontVariantNumeric: "tabular-nums",
                    ...gradientText,
                }}>
                {Math.round(value * count)}+
            </div>
            <div style={{ marginTop: 6, fontSize: 26, fontWeight: 500, color: colors.textSecondary }}>
                {label}
            </div>
        </div>
    );
};
