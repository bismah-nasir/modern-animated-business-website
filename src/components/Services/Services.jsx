import { motion } from "framer-motion";
import { services } from "./services";
import ServiceCard from "./ServiceCard";

const Services = () => {
    return (
        <section
            id="services"
            className="section-padding relative overflow-hidden">
            <div className="container-width">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header text-center flex flex-col items-center mb-14 md:mb-20">
                    <span className="inline-flex items-center rounded-full border border-primary-light/30 bg-primary-light/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-light">
                        Our Services
                    </span>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.2] mt-4 max-w-2xl text-white">
                        What We <span className="gradient-text">Do Best</span>
                    </h2>

                    <p className="text-base md:text-lg text-text-secondary leading-relaxed mt-4 max-w-xl mx-auto font-normal">
                        We specialise in crafting end-to-end digital solutions
                        that combine beautiful design with rock-solid
                        engineering.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            index={index}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
