import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { portfolio } from "../../data/portfolio";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
    return (
        <section className="section-padding relative border-y border-white/5 overflow-hidden ">
            {/* ================= Background Effects ================= */}

            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute left-[-10%] top-[15%] h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

                <div className="absolute right-[-10%] bottom-[10%] h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

                <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[140px]" />
            </div>

            <div className="container-width relative z-10">
                {/* ================= Section Header ================= */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header">
                    <span className="section-badge">Portfolio</span>

                    <h2 className="section-title mt-6">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>

                    <p className="section-description">
                        A curated selection of our most impactful work —
                        delivering innovative digital experiences that help
                        businesses grow, scale, and stay ahead of the
                        competition.
                    </p>
                </motion.div>

                {/* ================= Portfolio Grid ================= */}

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {portfolio.map((project, index) => (
                        <PortfolioCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>

                {/* ================= CTA ================= */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: 0.25,
                    }}
                    className="mt-16 flex justify-center">
                    <button className="btn-secondary group">
                        View All Projects
                        <ArrowRight
                            size={18}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
