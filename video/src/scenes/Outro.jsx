import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { ArrowRight, Globe, Mail } from "lucide-react";
import { Logo } from "../components/Logo.jsx";
import { Reveal, WordReveal, useEnter, clampOpts } from "../components/anim.jsx";
import { colors, gradientText } from "../theme.js";

export const Outro = ({ length }) => {
    const frame = useCurrentFrame();
    const logo = useEnter(0, { damping: 14 });
    const fadeOut = interpolate(frame, [length - 50, length - 5], [1, 0], clampOpts);
    const shine = interpolate(frame % 90, [0, 40], [-30, 130], clampOpts);

    return (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity: fadeOut }}>
            <div
                style={{
                    transform: `scale(${logo}) rotate(${(1 - logo) * -90}deg)`,
                    filter: "drop-shadow(0 0 40px rgba(34,211,238,0.55))",
                }}>
                <Logo size={170} spin={frame * 0.25} />
            </div>

            <h2
                style={{
                    margin: "40px 0 0",
                    fontSize: 110,
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: colors.textPrimary,
                    textAlign: "center",
                    lineHeight: 1.1,
                }}>
                <WordReveal text="Let's Build" delay={10} />
                <WordReveal text="What's Next." delay={18} wordStyle={gradientText} />
            </h2>

            <Reveal delay={34}>
                <p style={{ marginTop: 26, fontSize: 32, color: colors.textSecondary, textAlign: "center" }}>
                    Ready to transform your business? Let's talk.
                </p>
            </Reveal>

            <Reveal delay={46}>
                <div
                    style={{
                        position: "relative",
                        overflow: "hidden",
                        marginTop: 44,
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                        padding: "24px 56px",
                        borderRadius: 9999,
                        fontSize: 30,
                        fontWeight: 600,
                        color: "white",
                        background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                        boxShadow: "0 0 60px rgba(6,182,212,0.4)",
                    }}>
                    Get Started <ArrowRight size={30} />
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: `${shine}%`,
                            width: 80,
                            background:
                                "linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)",
                            transform: "skewX(-20deg)",
                        }}
                    />
                </div>
            </Reveal>

            <Reveal delay={60}>
                <div style={{ marginTop: 44, display: "flex", gap: 24 }}>
                    <ContactPill icon={Globe} highlight>
                        glassbloom.vercel.app
                    </ContactPill>
                    <ContactPill icon={Mail}>hello@glassbloom.com</ContactPill>
                </div>
            </Reveal>
        </AbsoluteFill>
    );
};

const ContactPill = ({ icon: Icon, highlight, children }) => (
    <div
        style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "16px 30px",
            borderRadius: 9999,
            fontSize: 28,
            fontWeight: highlight ? 600 : 500,
            color: highlight ? colors.textPrimary : colors.textSecondary,
            background: highlight ? "rgba(34,211,238,0.08)" : "rgba(255,255,255,0.04)",
            border: `1px solid ${highlight ? "rgba(34,211,238,0.35)" : colors.border}`,
            boxShadow: highlight ? "0 0 30px rgba(34,211,238,0.15)" : "none",
        }}>
        <Icon size={28} color={colors.primaryLight} />
        {children}
    </div>
);
