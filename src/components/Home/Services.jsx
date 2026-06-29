import { motion } from "framer-motion";
import { services } from "../../data/services";
import ServicesCard from "./ServicesCard";

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
                    className="section-header">
                    <span className="section-badge">Our Services</span>

                    <h2 className="section-title mt-6">
                        What We <span className="gradient-text">Do Best</span>
                    </h2>

                    <p className="section-description">
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
                    className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
                    {services.map((service, index) => (
                        <ServicesCard
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
