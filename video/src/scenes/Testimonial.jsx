import { AbsoluteFill } from "remotion";
import { Star, Quote } from "lucide-react";
import { Scene, Reveal, WordReveal, useEnter } from "../components/anim.jsx";
import { colors, glassCard, badge } from "../theme.js";
import { sceneLength } from "../timing.js";

const QUOTE =
    "Glassbloom transformed our entire digital presence. The platform they built handles millions of users flawlessly.";

export const Testimonial = () => {
    const length = sceneLength("testimonial");
    const card = useEnter(0, { damping: 200, mass: 1.2 });

    return (
        <Scene length={length}>
            <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
                <Reveal delay={0}>
                    <span style={badge}>Client Love</span>
                </Reveal>
                <div
                    style={{
                        ...glassCard,
                        position: "relative",
                        marginTop: 40,
                        width: 1300,
                        borderRadius: 36,
                        padding: "70px 90px",
                        opacity: card,
                        transform: `scale(${0.94 + card * 0.06})`,
                    }}>
                    <Quote
                        size={90}
                        style={{ position: "absolute", top: 40, right: 60, color: colors.primary, opacity: 0.18 }}
                    />
                    <div style={{ display: "flex", gap: 8 }}>
                        {Array.from({ length: 5 }, (_, i) => (
                            <Reveal key={i} delay={8 + i * 3} y={10} blur={0} scale={0.4}>
                                <Star size={36} fill="#facc15" color="#facc15" />
                            </Reveal>
                        ))}
                    </div>
                    <p
                        style={{
                            margin: "30px 0 0",
                            fontSize: 48,
                            lineHeight: 1.45,
                            fontWeight: 500,
                            color: colors.textPrimary,
                        }}>
                        <WordReveal text={`“${QUOTE}”`} delay={14} stagger={2} />
                    </p>
                    <Reveal delay={60}>
                        <div style={{ display: "flex", alignItems: "center", gap: 22, marginTop: 44 }}>
                            <div
                                style={{
                                    width: 72,
                                    height: 72,
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 26,
                                    fontWeight: 700,
                                    color: "white",
                                    background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
                                }}>
                                JH
                            </div>
                            <div>
                                <div style={{ fontSize: 28, fontWeight: 700, color: colors.textPrimary }}>
                                    James Harrison
                                </div>
                                <div style={{ fontSize: 22, color: colors.textSecondary }}>CTO, FinanceFlow</div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </AbsoluteFill>
        </Scene>
    );
};
