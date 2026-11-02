import { AbsoluteFill, Img, staticFile } from "remotion";
import { bodyFont, colors, gradient, headingFont, links } from "./theme.js";

const asset = (path) => staticFile(`poster/${path}`);

function Chip({ children }) {
    return (
    <span
        style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 22px",
        borderRadius: 999,
        background: colors.glass,
        border: `1.5px solid ${colors.glassLine}`,
        color: colors.ink,
        fontSize: 24,
        fontWeight: 600,
        }}
    >
        <span style={{ width: 10, height: 10, borderRadius: 5, background: colors.cyan }} />
        {children}
    </span>
    );
}

/** Dark browser window chrome, matching the site's navy theme. */
function BrowserFrame({ width, height, url, children }) {
    return (
    <div
        style={{
        width,
        height,
        borderRadius: 22,
        overflow: "hidden",
        background: colors.chrome,
        border: `1.5px solid ${colors.glassLine}`,
        boxShadow: `0 40px 110px ${colors.shadow}, 0 0 80px rgba(34,211,238,0.12)`,
        display: "flex",
        flexDirection: "column",
        }}
    >
        <div
        style={{
            height: 52,
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "0 22px",
            flexShrink: 0,
        }}
        >
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <span key={c} style={{ width: 14, height: 14, borderRadius: 7, background: c }} />
        ))}
        <div
            style={{
            marginLeft: 18,
            flex: 1,
            maxWidth: 620,
            height: 32,
            borderRadius: 8,
            background: "rgba(255,255,255,0.07)",
            color: colors.muted,
            fontSize: 17,
            display: "flex",
            alignItems: "center",
            padding: "0 16px",
            }}
        >
            {url}
        </div>
        </div>
        <div style={{ position: "relative", flex: 1, overflow: "hidden" }}>{children}</div>
    </div>
    );
}

/** Thin glowing ring, like the floating rings in the site's hero backgrounds. */
function Ring({ size, left, top, opacity }) {
    return (
    <div
        style={{
        position: "absolute",
        left,
        top,
        width: size,
        height: size,
        borderRadius: "50%",
        border: `2px solid rgba(34,211,238,${opacity})`,
        boxShadow: `0 0 40px rgba(34,211,238,${opacity * 0.6}), inset 0 0 40px rgba(34,211,238,${opacity * 0.4})`,
        }}
    />
    );
}

// Scattered particles, at fixed positions so every render matches.
const particles = [
    [140, 90], [520, 60], [880, 140], [1310, 70], [1760, 120], [60, 470], [690, 980],
    [980, 1030], [1480, 1010], [1850, 640], [1180, 190], [380, 1010], [1620, 300],
];

// The "Send Us A Message" card spans x 859–1718, y 823–1385 of the 1920px-wide contact page.
const form = { x: 859, y: 823, w: 859, h: 562 };
const formCardWidth = 520;
const formScale = formCardWidth / form.w;

/** Thumbnail shown before the demo video plays. */
export function GlassbloomPoster() {
    return (
    <AbsoluteFill
        style={{
        background: `linear-gradient(135deg, ${colors.bg} 0%, ${colors.bgDeep} 100%)`,
        fontFamily: bodyFont,
        color: colors.ink,
        }}
    >
        <AbsoluteFill
        style={{
            background: `radial-gradient(800px 600px at 15% 25%, rgba(37,99,235,0.28), transparent 70%),
            radial-gradient(900px 700px at 88% 78%, rgba(34,211,238,0.20), transparent 70%),
            radial-gradient(500px 420px at 70% 10%, rgba(168,85,247,0.14), transparent 70%)`,
        }}
        />
        <Ring size={190} left={-60} top={760} opacity={0.35} />
        <Ring size={110} left={640} top={70} opacity={0.3} />
        <Ring size={150} left={1730} top={110} opacity={0.28} />
        {particles.map(([x, y]) => (
        <span
            key={`${x}-${y}`}
            style={{
            position: "absolute",
            left: x,
            top: y,
            width: 6,
            height: 6,
            borderRadius: 3,
            background: colors.cyan,
            boxShadow: `0 0 12px ${colors.cyan}`,
            opacity: 0.7,
            }}
        />
        ))}

        <AbsoluteFill style={{ flexDirection: "row", alignItems: "center", padding: "0 0 0 120px" }}>
        <div style={{ width: 760, display: "flex", flexDirection: "column", gap: 34, flexShrink: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
            <Img
                src={asset("logo.svg")}
                style={{ width: 110, height: 110, borderRadius: 28, boxShadow: "0 0 50px rgba(34,211,238,0.35)" }}
            />
            <div style={{ fontFamily: headingFont, fontSize: 92, fontWeight: 800, letterSpacing: -3 }}>Glassbloom</div>
            </div>
            <div style={{ fontFamily: headingFont, fontSize: 52, fontWeight: 700, lineHeight: 1.15, letterSpacing: -1.5 }}>
            An agency website that{" "}
            <span
                style={{
                background: gradient,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                whiteSpace: "nowrap",
                }}
            >
                comes alive
            </span>{" "}
            as you scroll
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Chip>Framer Motion</Chip>
            <Chip>Glassmorphism UI</Chip>
            <Chip>Floating particles</Chip>
            <Chip>Formspree contact</Chip>
            </div>
            <div style={{ fontSize: 26, color: colors.muted }}>{links.live}</div>
        </div>

        <div style={{ position: "relative", flex: 1, height: "100%" }}>
            <div
            style={{
                position: "absolute",
                left: 40,
                top: 200,
                transform: "perspective(2200px) rotateY(-14deg) rotateX(4deg)",
                transformOrigin: "left center",
            }}
            >
            <BrowserFrame width={1200} height={727} url={links.live}>
                <Img
                src={asset("screenshots/homepage.png")}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                />
            </BrowserFrame>
            </div>
            {/* Contact form, lifted out of the contact page as a floating glass card */}
            <div
            style={{
                position: "absolute",
                right: 60,
                top: 690,
                width: formCardWidth,
                height: form.h * formScale,
                borderRadius: 24,
                overflow: "hidden",
                border: `2px solid ${colors.cyan}`,
                boxShadow: `0 40px 100px ${colors.shadow}, 0 0 40px rgba(34,211,238,0.25)`,
            }}
            >
            <Img
                src={asset("screenshots/cntact.png")}
                style={{
                position: "absolute",
                width: 1920 * formScale,
                maxWidth: "none",
                left: -form.x * formScale,
                top: -form.y * formScale,
                }}
            />
            </div>
        </div>
        </AbsoluteFill>
    </AbsoluteFill>
    );
}
