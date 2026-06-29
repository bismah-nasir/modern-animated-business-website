import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mouse, ChevronDown } from "lucide-react";

const particles = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: 6 + Math.random() * 8,
    delay: Math.random() * 5,
    size: 2 + Math.random() * 3,
}));

const floatingCards = [
    {
        title: "AI Powered",
        color: "bg-cyan-400",
        className: "-right-5 top-8",
        duration: 4,
        delay: 0,
    },
    {
        title: "99.9% Uptime",
        color: "bg-purple-400",
        className: "-bottom-5 -left-5",
        duration: 5,
        delay: 0.5,
    },
    {
        title: "Cloud Native",
        color: "bg-cyan-300",
        className: "right-[-40px] top-1/2 hidden xl:block",
        duration: 4.5,
        delay: 1,
    },
];

const Hero = () => {
    return (
        <section className="relative isolate flex flex-col min-h-screen items-center overflow-hidden pt-20 pb-32">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Grid */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle, white 1px, transparent 1px)",
                        backgroundSize: "42px 42px",
                    }}
                />

                {/* Top Left Blob */}
                <motion.div
                    animate={{
                        x: [0, 40, 0],
                        y: [0, 30, 0],
                        scale: [1, 1.08, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -left-32 -top-32 h-130 w-130 rounded-full bg-primary/15 blur-[140px]"
                />

                {/* Right Blob */}
                <motion.div
                    animate={{
                        x: [0, -40, 0],
                        y: [0, -35, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -right-45 top-[10%] h-120 w-120 rounded-full bg-blue-600/15 blur-[140px]"
                />

                {/* Bottom Blob */}
                <motion.div
                    animate={{
                        x: [0, 20, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -bottom-55 left-1/3 h-130 w-130 rounded-full bg-primary-light/10 blur-[150px]"
                />

                {/* Center Glow */}
                <motion.div
                    animate={{
                        opacity: [0.4, 0.8, 0.4],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-1/2 top-1/2 h-75 w-75 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-light/10 blur-[120px]"
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
                                opacity: 0.45,
                            }}
                            animate={{
                                y: [0, -25, 0],
                                opacity: [0.25, 0.7, 0.25],
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

            <div className="container-width relative z-10">
                {/* Hero Content */}
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Left Content */}

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center lg:text-left">
                        <motion.span
                            whileHover={{
                                scale: 1.05,
                            }}
                            transition={{
                                duration: 0.2,
                            }}
                            className="mb-6 inline-flex items-center rounded-full border border-primary-light/40 bg-primary-light/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary-light">
                            AI Powered Digital Agency
                        </motion.span>

                        <motion.h1
                            initial={{
                                opacity: 0,
                                y: 25,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.2,
                            }}
                            className="heading-xl max-w-3xl">
                            Building Digital
                            <br />
                            <span className="gradient-text">Experiences</span>
                            <br />
                            Powered by Innovation
                        </motion.h1>

                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.4,
                                duration: 0.7,
                            }}
                            className="body-text mx-auto mt-8 max-w-xl lg:mx-0">
                            We craft cutting-edge software solutions that
                            transform businesses. From AI automation to stunning
                            web applications, we turn ambitious ideas into
                            scalable digital products.
                        </motion.p>

                        {/* CTA */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.6,
                                duration: 0.7,
                            }}
                            className="mt-10 flex flex-col items-center gap-5 sm:flex-row lg:justify-start">
                            <Link to="/contact" className="btn-primary group">
                                Get Started
                                <ArrowRight
                                    size={18}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>

                            <Link to="/portfolio" className="btn-secondary">
                                View Portfolio
                            </Link>
                        </motion.div>

                        {/* Social Proof */}

                        <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row lg:justify-start">
                            <div className="flex -space-x-3">
                                {["A", "B", "C", "D"].map((letter) => (
                                    <div
                                        key={letter}
                                        className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-background bg-slate-700 font-semibold text-white">
                                        {letter}
                                    </div>
                                ))}
                            </div>

                            <p className="text-sm text-text-secondary">
                                <span className="font-semibold text-white">
                                    180+
                                </span>{" "}
                                happy clients worldwide
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Content */}

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center">
                        <div className="relative w-full max-w-155">
                            {/* Main Image */}
                            <motion.div
                                whileHover={{
                                    scale: 1.02,
                                    rotate: -0.4,
                                }}
                                transition={{
                                    duration: 0.4,
                                }}
                                className="overflow-hidden rounded-4xl border border-white/10 shadow-2xl">
                                <motion.img
                                    src=".././src/assets/hero-image.jpg"
                                    alt="Codecelix Hero"
                                    className="h-full w-full object-cover"
                                    animate={{
                                        scale: [1, 1.03, 1],
                                    }}
                                    transition={{
                                        duration: 10,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                            </motion.div>

                            {/* Floating Cards */}
                            {floatingCards.map((card) => (
                                <motion.div
                                    key={card.title}
                                    animate={{
                                        y: [0, -12, 0],
                                    }}
                                    transition={{
                                        duration: card.duration,
                                        repeat: Infinity,
                                        repeatType: "mirror",
                                        ease: "easeInOut",
                                        delay: card.delay,
                                    }}
                                    className={`absolute ${card.className}`}>
                                    <div className="glass-card rounded-2xl px-5 py-3 shadow-xl">
                                        <div className="flex items-center gap-3">
                                            <span
                                                className={`h-2.5 w-2.5 rounded-full ${card.color}`}
                                            />

                                            <span className="text-sm font-medium text-white">
                                                {card.title}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-0 left-1/2 z-20 hidden xl:flex -translate-x-1/2 flex-col items-center gap-1 text-text-secondary">
                <span className="text-xs uppercase tracking-[0.35em]">
                    Scroll
                </span>

                <Mouse size={22} className="text-primary/80" />

                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut",
                    }}>
                    <ChevronDown size={20} className="text-primary" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
