import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Reused sections from homepage
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs.jsx";
import CTA from "../CTA/CTA.jsx";

// Data files
import {
    missionVision,
    companyIntro,
    teamMembers,
    socialIcons,
} from "./about.js";

// Particles logic for Hero background
const particles = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: 7 + Math.random() * 6,
    delay: Math.random() * 4,
    size: 2 + Math.random() * 3,
}));

const About = () => {
    return (
        <main className="min-h-screen bg-background pt-20">
            {/* About Hero Section */}
            <section className="relative isolate flex flex-col justify-center items-center overflow-hidden py-16 md:py-24 bg-background px-4 sm:px-6 lg:px-8 border-b border-white/5">
                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Grid */}
                    <div className="absolute inset-0 opacity-[0.03] radial-grid-pattern" />

                    {/* Top Left Blob */}
                    <motion.div
                        animate={{
                            x: [0, 30, 0],
                            y: [0, 20, 0],
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute -left-32 -top-32 h-100 w-100 rounded-full bg-primary/10 blur-[130px]"
                    />

                    {/* Right Blob */}
                    <motion.div
                        animate={{
                            x: [0, -30, 0],
                            y: [0, -25, 0],
                            scale: [1, 1.08, 1],
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute -right-20 top-[20%] h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]"
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
                                    y: [0, -20, 0],
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
                        About Our Agency
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.15] text-white max-w-3xl">
                        Driven by Innovation, <br />
                        <span className="gradient-text">
                            Focused on Results
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base md:text-lg text-text-secondary leading-relaxed mt-4 max-w-xl mx-auto font-normal">
                        We are a team of passionate engineers, designers, and
                        strategists. We build high-performance products by
                        blending advanced software development with exceptional
                        design systems.
                    </motion.p>
                </div>
            </section>

            {/* Company Introduction Section */}
            <section className="relative overflow-hidden py-20 md:py-28 bg-background">
                <div className="container-width">
                    <div className="grid gap-10 lg:grid-cols-2 items-center">
                        {/* Left - Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -35 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col">
                            <span className="section-badge self-start mb-4">
                                {companyIntro.badge}
                            </span>

                            <h2 className="section-title mt-3 text-white">
                                {companyIntro.title}
                            </h2>

                            <div className="mt-4 space-y-3.5">
                                {companyIntro.paragraphs.map((para, idx) => (
                                    <p
                                        key={idx}
                                        className="text-sm md:text-base leading-relaxed text-text-secondary font-normal">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right - Achievements Grid */}
                        <motion.div
                            initial={{ opacity: 0, x: 35 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-2 gap-4 md:gap-5">
                            {companyIntro.achievements.map((ach, idx) => (
                                <div
                                    key={idx}
                                    className="glass-surface p-6 rounded-2xl border border-white/5 shadow-soft flex flex-col justify-center items-center text-center transition-all duration-300 hover:border-primary/20">
                                    <span
                                        className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${ach.color}`}>
                                        {ach.value}
                                    </span>
                                    <span className="text-xs sm:text-sm font-semibold tracking-wide text-text-secondary mt-2">
                                        {ach.label}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="section-padding bg-surface relative overflow-hidden border-y border-white/5">
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute left-[15%] top-[20%] h-72 w-72 rounded-full bg-cyan-500/5 blur-[120px]" />
                    <div className="absolute right-[15%] bottom-[20%] h-72 w-72 rounded-full bg-purple-500/5 blur-[120px]" />
                </div>

                <div className="container-width relative z-10">
                    <div className="grid gap-8 md:grid-cols-2">
                        {/* Mission Card */}
                        {(() => {
                            const mission = missionVision.mission;
                            const Icon = mission.icon;
                            return (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className={`glass-surface card-hover rounded-2xl p-6 md:p-7 flex flex-col border border-white/10 bg-background transition-all duration-300 ${mission.colors.hoverBorder}`}>
                                    <div
                                        className={`w-12 h-12 rounded-xl flex items-center justify-center border border-white/5 ${mission.colors.bg}`}>
                                        <Icon
                                            size={22}
                                            className={mission.colors.text}
                                            strokeWidth={1.8}
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight text-white mt-6">
                                        {mission.title}
                                    </h3>
                                    <p className="text-text-secondary text-sm md:text-base leading-relaxed mt-4">
                                        {mission.description}
                                    </p>
                                </motion.div>
                            );
                        })()}

                        {/* Vision Card */}
                        {(() => {
                            const vision = missionVision.vision;
                            const Icon = vision.icon;
                            return (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.15 }}
                                    className={`glass-surface card-hover rounded-2xl p-6 md:p-7 flex flex-col border border-white/10 bg-background transition-all duration-300 ${vision.colors.hoverBorder}`}>
                                    <div
                                        className={`w-12 h-12 rounded-xl flex items-center justify-center border border-white/5 ${vision.colors.bg}`}>
                                        <Icon
                                            size={22}
                                            className={vision.colors.text}
                                            strokeWidth={1.8}
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight text-white mt-6">
                                        {vision.title}
                                    </h3>
                                    <p className="text-text-secondary text-sm md:text-base leading-relaxed mt-4">
                                        {vision.description}
                                    </p>
                                </motion.div>
                            );
                        })()}
                    </div>
                </div>
            </section>

            {/* Team Members Section */}
            <section className="section-padding bg-background relative overflow-hidden">
                <div className="container-width">
                    {/* Header */}
                    <div className="section-header text-center flex flex-col items-center mb-12 md:mb-14">
                        <span className="section-badge mb-4">
                            Our Core Team
                        </span>

                        <h2 className="section-title mt-3 text-white">
                            Meet Our{" "}
                            <span className="gradient-text">Experts</span>
                        </h2>

                        <p className="section-description max-w-xl mx-auto mt-4 text-center">
                            A highly specialized team of system architects,
                            machine learning engineers, and experience designers
                            collaborating to build next-generation platforms.
                        </p>
                    </div>

                    {/* Team Cards Grid */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-12">
                        {teamMembers.map((member, index) => {
                            const Icon = member.icon;
                            return (
                                <motion.article
                                    key={member.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className={`glass-surface card-hover rounded-2xl p-6 flex flex-col border border-white/5 transition-default ${member.colors.hoverBorder}`}>
                                    {/* Role Icon header */}
                                    <div className="flex justify-between items-start">
                                        <div
                                            className={`w-10 h-10 rounded-xl flex items-center justify-center ${member.colors.bg}`}>
                                            <Icon
                                                size={20}
                                                className={member.colors.text}
                                                strokeWidth={1.8}
                                            />
                                        </div>

                                        {/* Social Links */}
                                        <div className="flex gap-2">
                                            {Object.entries(member.socials).map(
                                                ([platform, url]) => {
                                                    const SocialIcon =
                                                        platform === "linkedin"
                                                            ? socialIcons.Linkedin
                                                            : platform ===
                                                                "github"
                                                              ? socialIcons.Github
                                                              : socialIcons.Twitter;
                                                    return (
                                                        <a
                                                            key={platform}
                                                            href={url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            aria-label={`${member.name}'s ${platform}`}
                                                            className="text-text-secondary hover:text-white transition-colors duration-200">
                                                            <SocialIcon
                                                                size={14}
                                                            />
                                                        </a>
                                                    );
                                                },
                                            )}
                                        </div>
                                    </div>

                                    {/* Profile info */}
                                    <h3 className="text-lg font-bold tracking-tight text-white mt-6">
                                        {member.name}
                                    </h3>

                                    <p
                                        className={`text-xs uppercase tracking-wider font-semibold mt-1 ${member.colors.text}`}>
                                        {member.role}
                                    </p>

                                    <p className="text-xs leading-relaxed text-text-secondary mt-3">
                                        {member.bio}
                                    </p>

                                    {/* Skills tags */}
                                    <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                                        {member.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className={`text-[9px] font-semibold tracking-wide px-2 py-0.5 rounded-full border ${member.colors.bg} ${member.colors.border} ${member.colors.text}`}>
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section (Reused from homepage) */}
            <WhyChooseUs />

            {/* CTA Section (Reused from homepage) */}
            <CTA />
        </main>
    );
};

export default About;
