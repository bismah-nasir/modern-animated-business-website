// Glassbloom brand mark (same geometry as the website's Logo component).
// `bloom` (0 → 1) opens the petals one after another.
const PETAL_ANGLES = [0, 72, 144, 216, 288];

export const Logo = ({ size = 160, bloom = 1, spin = 0 }) => (
    <svg viewBox="0 0 48 48" width={size} height={size}>
        <defs>
            <linearGradient id="gb-petal" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
            <radialGradient id="gb-core">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="60%" stopColor="#a5f3fc" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </radialGradient>
        </defs>
        <g transform={`translate(24 24) rotate(${spin})`}>
            {PETAL_ANGLES.map((angle, i) => {
                const p = Math.max(0, Math.min(1, bloom * PETAL_ANGLES.length - i));
                return (
                    <ellipse
                        key={angle}
                        cx="0"
                        cy={-10 * p}
                        rx={7 * p}
                        ry={12 * p}
                        transform={`rotate(${angle - (1 - p) * 40})`}
                        fill="url(#gb-petal)"
                        fillOpacity={0.55 * p}
                        stroke="#ffffff"
                        strokeOpacity={0.45 * p}
                        strokeWidth="0.8"
                    />
                );
            })}
            <circle r={7 * Math.min(1, bloom * 1.5)} fill="url(#gb-core)" />
            <circle r="3" fill="#ffffff" opacity={Math.min(1, bloom * 3)} />
        </g>
    </svg>
);
