import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { GlowBlob, BottomFade } from "../Background/BackgroundEffects.jsx";

// Background glows: two drifting side lights and a pulsing center light
const ctaGlows = [
    {
        className: "-left-32 top-10 h-96 w-96 bg-primary/15 blur-[130px]",
        animate: { x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.05, 1] },
        duration: 16,
    },
    {
        className: "-right-32 top-16 h-80 w-80 bg-accent/15 blur-[120px]",
        animate: { x: [0, -25, 0], y: [0, -20, 0], scale: [1, 1.06, 1] },
        duration: 18,
    },
    {
        className:
            "left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 bg-primary/10 blur-[110px]",
        animate: { opacity: [0.25, 0.55, 0.25], scale: [1, 1.08, 1] },
        duration: 8,
    },
];

const CTA = () => {
    return (
        <section className="relative overflow-hidden py-12 md:py-16 bg-background">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {ctaGlows.map((glow) => (
                    <GlowBlob key={glow.className} {...glow} />
                ))}

                {/* Radial Highlight */}
                <div
                    className="absolute inset-0 opacity-50"
                    style={{
                        background:
                            "radial-gradient(circle at center, rgba(255,255,255,0.03), transparent 65%)",
                    }}
                />

                <BottomFade />
            </div>

            <div className="container-width relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative">
                    <div className="relative overflow-hidden px-4 py-8 md:px-8 md:py-10">
                        <div className="relative z-10 mx-auto max-w-4xl text-center">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.1,
                                    duration: 0.6,
                                }}
                                className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                                Ready to Build Your{" "}
                                <span className="gradient-text">
                                    Next Big Product?
                                </span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.2,
                                    duration: 0.6,
                                }}
                                className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary font-normal">
                                Whether you're launching a startup, modernizing
                                an enterprise platform, or bringing an ambitious
                                idea to life, we're ready to help you build it
                                with confidence.
                            </motion.p>

                            {/* Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.3,
                                    duration: 0.6,
                                }}
                                className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                                <Link
                                    to="/contact"
                                    className="btn-primary inline-flex items-center justify-center">
                                    Start Your Project
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>

                                <Link
                                    to="/portfolio"
                                    className="btn-secondary inline-flex items-center justify-center">
                                    See Our Portfolio
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
