import { loadFont } from "@remotion/google-fonts/Inter";

// Mirrors the website's Tailwind theme (src/index.css)
export const { fontFamily } = loadFont("normal", {
    weights: ["400", "500", "600", "700", "800"],
    subsets: ["latin"],
});

export const colors = {
    background: "#071426",
    surface: "#0b1e33",
    primary: "#06b6d4",
    primaryLight: "#22d3ee",
    accent: "#2563eb",
    accentLight: "#3b82f6",
    violet: "#8b5cf6",
    emerald: "#10b981",
    textPrimary: "#f8fafc",
    textSecondary: "#94a3b8",
    border: "rgba(255, 255, 255, 0.08)",
};

export const gradientText = {
    background: `linear-gradient(135deg, ${colors.primary}, ${colors.accentLight})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
};

export const glassCard = {
    background: "rgba(255, 255, 255, 0.04)",
    border: `1px solid ${colors.border}`,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.25)",
    backdropFilter: "blur(16px)",
};

export const badge = {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: 9999,
    border: "1px solid rgba(34, 211, 238, 0.3)",
    background: "rgba(34, 211, 238, 0.05)",
    padding: "10px 26px",
    fontSize: 18,
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    color: colors.primaryLight,
};
