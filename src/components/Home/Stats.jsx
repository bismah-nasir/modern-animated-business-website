import { motion } from "framer-motion";
import { stats } from "../../data/stats";
import StatsCard from "./StatsCard";

const Stats = () => {
    return (
        <section className="section-padding relative overflow-hidden">
            {/* Background Effects */}

            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-[-180px] top-24 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[130px]" />

                <div className="absolute right-[-160px] bottom-20 h-[360px] w-[360px] rounded-full bg-primary/10 blur-[120px]" />

                <div className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
            </div>

            <div className="container-width">
                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header">
                    <span className="section-badge">By The Numbers</span>

                    <h2 className="section-title mt-6">
                        Our track record{" "}
                        <span className="gradient-text">speaks for itself</span>
                    </h2>

                    <p className="section-description">
                        Every milestone represents successful partnerships,
                        innovative solutions, and measurable business growth.
                    </p>
                </motion.div>

                {/* Cards */}

                <div className="mt-20 grid grid-cols-2 gap-5 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <StatsCard key={stat.id} stat={stat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
