import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

// Inter, as in the site's headings and body text.
export const { fontFamily: headingFont } = loadInter("normal", {
    weights: ["500", "600", "700", "800"],
    subsets: ["latin"],
});

export const bodyFont = headingFont;

// Sampled from the site's navy backdrop and its cyan-to-blue gradient.
export const colors = {
    bg: "#071426",
    bgDeep: "#040c18",
    cyan: "#22d3ee",
    blue: "#2563eb",
    ink: "#ffffff",
    muted: "rgba(203,220,240,0.78)",
    glass: "rgba(255,255,255,0.06)",
    glassLine: "rgba(125,211,252,0.22)",
    chrome: "#0b1626",
    shadow: "rgba(0,0,0,0.55)",
};

export const gradient = `linear-gradient(90deg, ${colors.cyan}, ${colors.blue})`;

export const links = {
    live: "glassbloom.vercel.app",
    github: "github.com/bismah-nasir/modern-animated-business-website",
};
