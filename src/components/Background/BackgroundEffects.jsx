import { useState } from "react";
import { motion } from "framer-motion";

// Shared decorative background layers. Place them inside a
// `relative overflow-hidden` parent (usually a pointer-events-none wrapper).

// Faint dotted grid
export const GridPattern = () => (
    <div className="absolute inset-0 opacity-[0.03] radial-grid-pattern" />
);

// Blurred glow that drifts or pulses forever.
// `className` sets position, size, color and blur; `animate` holds the keyframes.
export const GlowBlob = ({ className, animate, duration }) => (
    <motion.div
        animate={animate}
        transition={{
            duration,
            repeat: Infinity,
            ease: "easeInOut",
        }}
        className={`absolute rounded-full ${className}`}
    />
);

// The four slowly rotating rings (styled by .hero-ring-* in index.css)
export const FloatingRings = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-ring hero-ring-1"></div>
        <div className="hero-ring hero-ring-2"></div>
        <div className="hero-ring hero-ring-3"></div>
        <div className="hero-ring hero-ring-4"></div>
    </div>
);

const createParticles = ({ count, duration, maxDelay, size }) =>
    Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: duration[0] + Math.random() * (duration[1] - duration[0]),
        delay: Math.random() * maxDelay,
        size: size[0] + Math.random() * (size[1] - size[0]),
    }));

// Small glowing dots that float up and down at random positions.
// `duration` and `size` are [min, max] ranges; `opacity` is [dim, bright].
export const FloatingParticles = ({
    count = 16,
    duration = [8, 13],
    maxDelay = 3,
    size = [2, 4.5],
    rise = 22,
    opacity = [0.2, 0.6],
}) => {
    // Generated once per mount so positions stay stable between renders
    const [particles] = useState(() =>
        createParticles({ count, duration, maxDelay, size }),
    );

    return (
        <div className="absolute inset-0">
            {particles.map((particle) => (
                <motion.span
                    key={particle.id}
                    className="absolute rounded-full bg-cyan-300"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: particle.left,
                        top: particle.top,
                    }}
                    animate={{
                        y: [0, -rise, 0],
                        opacity: [opacity[0], opacity[1], opacity[0]],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};

// Fades the section into the page background at the bottom
export const BottomFade = () => (
    <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background" />
);
