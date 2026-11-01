import { motion } from "framer-motion";
import { services } from "./services";
import ServiceCard from "./ServiceCard";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";

const Services = () => {
    return (
        <section
            id="services"
            className="section-padding relative overflow-hidden">
            <div className="container-width">
                <SectionHeader
                    badge="Our Services"
                    title="What We"
                    highlight="Do Best"
                    description="We specialise in crafting end-to-end digital solutions that combine beautiful design with rock-solid engineering."
                    className="mb-14 md:mb-20"
                />

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
