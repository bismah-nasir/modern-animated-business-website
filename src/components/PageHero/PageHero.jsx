import { motion } from "framer-motion";

import {
    GridPattern,
    GlowBlob,
    FloatingRings,
    FloatingParticles,
    BottomFade,
} from "../Background/BackgroundEffects.jsx";

// Glow blob pairs for each color style
const glowStyles = {
    purple: [
        {
            className:
                "-left-32 -top-32 h-100 w-100 bg-primary/10 blur-[130px]",
            animate: { x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.05, 1] },
            duration: 15,
        },
        {
            className:
                "-right-20 top-[20%] h-80 w-80 bg-purple-600/10 blur-[120px]",
            animate: { x: [0, -30, 0], y: [0, -25, 0], scale: [1, 1.08, 1] },
            duration: 18,
        },
    ],
    blue: [
        {
            className: "-left-20 -top-20 h-90 w-90 bg-primary/10 blur-[130px]",
            animate: { x: [0, 25, 0], y: [0, 35, 0], scale: [1, 1.05, 1] },
            duration: 16,
        },
        {
            className:
                "-right-20 bottom-10 h-90 w-90 bg-accent/10 blur-[140px]",
            animate: { x: [0, -35, 0], y: [0, -20, 0], scale: [1, 1.07, 1] },
            duration: 20,
        },
    ],
};

// Animated header used at the top of inner pages (About, Services, ...).
// Renders "title" on the first line and "highlight" in gradient on the second.
const PageHero = ({
    badge,
    title,
    highlight,
    description,
    glow = "purple",
    className = "",
    children,
}) => {
    return (
        <section
            className={`relative isolate flex flex-col justify-center items-center overflow-hidden py-16 md:py-24 bg-background px-4 sm:px-6 lg:px-8 border-b border-white/5 ${className}`}>
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <GridPattern />

                {glowStyles[glow].map((blob) => (
                    <GlowBlob key={blob.className} {...blob} />
                ))}

                <FloatingRings />
                <FloatingParticles />
                <BottomFade />
            </div>

            <div className="container-width relative z-10 w-full text-center flex flex-col items-center">
                <motion.span
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="section-badge mb-5">
                    {badge}
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.15] text-white max-w-3xl">
                    {title} <br />
                    <span className="gradient-text">{highlight}</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="section-description max-w-xl mx-auto mt-4 text-center">
                    {description}
                </motion.p>

                {children && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-10">
                        {children}
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default PageHero;
