import React from "react";
import { motion } from "framer-motion";

// Reused components
import Services from "./Services.jsx";
import CTA from "../CTA/CTA.jsx";

// Particles logic for Hero background
const particles = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: 8 + Math.random() * 5,
    delay: Math.random() * 3,
    size: 2 + Math.random() * 2.5,
}));

const ServicesPage = () => {
    return (
        <main className="min-h-screen bg-background pt-20">
            {/* Services Hero Section */}
            <section className="relative isolate flex flex-col justify-center items-center overflow-hidden py-16 md:py-24 bg-background px-4 sm:px-6 lg:px-8 border-b border-white/5">
                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Grid */}
                    <div className="absolute inset-0 opacity-[0.03] radial-grid-pattern" />

                    {/* Top Left Blob */}
                    <motion.div
                        animate={{
                            x: [0, 25, 0],
                            y: [0, 35, 0],
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            duration: 16,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute -left-20 -top-20 h-90 w-90 rounded-full bg-primary/10 blur-[130px]"
                    />

                    {/* Bottom Right Blob */}
                    <motion.div
                        animate={{
                            x: [0, -35, 0],
                            y: [0, -20, 0],
                            scale: [1, 1.07, 1],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute -right-20 bottom-10 h-90 w-90 rounded-full bg-accent/10 blur-[140px]"
                    />

                    {/* Rotating Rings */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="ring ring-1"></div>
                        <div className="ring ring-2"></div>
                        <div className="ring ring-3"></div>
                        <div className="ring ring-4"></div>
                    </div>

                    {/* Floating Particles */}
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
                                    opacity: 0.35,
                                }}
                                animate={{
                                    y: [0, -22, 0],
                                    opacity: [0.2, 0.6, 0.2],
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

                    {/* Bottom Fade */}
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background" />
                </div>

                <div className="container-width relative z-10 w-full text-center flex flex-col items-center">
                    <motion.span
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="section-badge mb-5">
                        Our Expertise
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.15] text-white max-w-3xl">
                        Scale Your Business With <br />
                        <span className="gradient-text">
                            Custom Tech Solutions
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="section-description max-w-xl mx-auto mt-4 text-center">
                        We design, build, and deploy intelligent software
                        designed to last. From AI integration to high-converting
                        web applications, we provide the technical expertise to
                        turn ideas into value.
                    </motion.p>
                </div>
            </section>

            {/* Services List (Reused directly from homepage section) */}
            <Services />

            {/* CTA Section (Reused from homepage) */}
            <CTA />
        </main>
    );
};

export default ServicesPage;
