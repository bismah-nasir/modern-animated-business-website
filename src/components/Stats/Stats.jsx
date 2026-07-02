import { motion } from "framer-motion";
import { stats } from "./stats";
import StatsCard from "./StatsCard";

const Stats = () => {
    return (
        <section className="relative overflow-hidden py-20 bg-background">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -left-45 top-24 h-105 w-105 rounded-full bg-primary/10 blur-[130px]" />

                <div className="absolute -right-40 bottom-20 h-90 w-90 rounded-full bg-primary/10 blur-[120px]" />

                <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
            </div>

            <div className="container-width">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header text-center flex flex-col items-center mb-14 md:mb-16">
                    <span className="inline-flex items-center rounded-full border border-primary-light/30 bg-primary-light/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-light">
                        By The Numbers
                    </span>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.2] mt-4 max-w-2xl text-white">
                        Our track record{" "}
                        <span className="gradient-text">speaks for itself</span>
                    </h2>

                    <p className="text-base md:text-lg text-text-secondary leading-relaxed mt-4 max-w-xl mx-auto font-normal">
                        Every milestone represents successful partnerships,
                        innovative solutions, and measurable business growth.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 md:gap-5">
                    {stats.map((stat, index) => (
                        <StatsCard key={stat.id} stat={stat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
