import { Reveal, WordReveal } from "./anim.jsx";
import { colors, badge, gradientText } from "../theme.js";

export const SectionHeader = ({ badgeText, title, highlight, delay = 0 }) => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Reveal delay={delay}>
            <span style={badge}>{badgeText}</span>
        </Reveal>
        <h2
            style={{
                margin: "26px 0 0",
                fontSize: 72,
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: colors.textPrimary,
                textAlign: "center",
            }}>
            <WordReveal text={title} delay={delay + 4} />
            {highlight && (
                <WordReveal
                    text={highlight}
                    delay={delay + 4 + title.split(" ").length * 4}
                    wordStyle={gradientText}
                />
            )}
        </h2>
    </div>
);
