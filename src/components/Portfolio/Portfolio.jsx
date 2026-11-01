import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { portfolio } from "./portfolio";
import PortfolioCard from "./PortfolioCard";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";

const Portfolio = ({ isHomePage = false }) => {
    return (
        <section className="relative border-y border-white/5 overflow-hidden py-20 md:py-28 bg-background">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute left-[-10%] top-[15%] h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />
                <div className="absolute right-[-10%] bottom-[10%] h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
                <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[140px]" />
            </div>

            <div className="container-width relative z-10">
                <SectionHeader
                    badge="Portfolio"
                    title="Featured"
                    highlight="Projects"
                    description="A curated selection of our most impactful work — delivering innovative digital experiences that help businesses grow, scale, and stay ahead of the competition."
                />

                {/* Portfolio Grid */}
                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {(isHomePage ? portfolio.slice(0, 3) : portfolio).map(
                        (project, index) => (
                            <PortfolioCard
                                key={project.id}
                                project={project}
                                index={index}
                            />
                        ),
                    )}
                </div>

                {/* CTA */}
                {isHomePage && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: 0.25,
                        }}
                        className="mt-16 flex justify-center">
                        <Link
                            to="/portfolio"
                            className="btn-secondary inline-flex items-center justify-center">
                            View All Projects
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Portfolio;
