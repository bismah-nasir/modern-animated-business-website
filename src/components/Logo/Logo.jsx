import { useId } from "react";

const PETAL_ANGLES = [0, 72, 144, 216, 288];

const Logo = ({ className = "h-11 w-11" }) => {
    const id = useId();
    const petalGradient = `${id}-petal`;
    const coreGlow = `${id}-core`;

    return (
        <svg
            viewBox="0 0 48 48"
            className={className}
            role="img"
            aria-label="Glassbloom logo">
            <defs>
                <linearGradient
                    id={petalGradient}
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>

                <radialGradient id={coreGlow}>
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="60%" stopColor="#a5f3fc" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                </radialGradient>
            </defs>

            {/* Glass petals */}
            <g transform="translate(24 24)">
                {PETAL_ANGLES.map((angle) => (
                    <ellipse
                        key={angle}
                        cx="0"
                        cy="-10"
                        rx="7"
                        ry="12"
                        transform={`rotate(${angle})`}
                        fill={`url(#${petalGradient})`}
                        fillOpacity="0.55"
                        stroke="#ffffff"
                        strokeOpacity="0.45"
                        strokeWidth="0.8"
                    />
                ))}

                {/* Glowing core */}
                <circle r="7" fill={`url(#${coreGlow})`} />
                <circle r="3" fill="#ffffff" />
            </g>
        </svg>
    );
};

export default Logo;
