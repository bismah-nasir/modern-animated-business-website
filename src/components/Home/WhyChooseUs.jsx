import { motion } from "framer-motion";
import { whyChooseUs } from "../../data/whyChooseUs";
import WhyChooseUsCard from "./WhyChooseUsCard";
import CodeSnippet from "./CodeSnippet";

const WhyChooseUs = () => {
    return (
        <section className="section-padding overflow-hidden bg-surface">
            <div className="container-width">
                {/* Section Header */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header">
                    <span className="section-badge">Why Choose Us</span>

                    <h2 className="section-title mt-6">
                        Built <span className="gradient-text">Different</span>
                    </h2>

                    <p className="section-description">
                        We don't just write code — we engineer digital solutions
                        that create long-term value for your business through
                        innovation, scalability, and reliability.
                    </p>
                </motion.div>

                {/* Content */}

                <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="hidden lg:block">
                        <CodeSnippet />
                    </motion.div>

                    {/* Right */}
                    <div className="grid gap-5 sm:grid-cols-2">
                        {whyChooseUs.map((feature, index) => (
                            <WhyChooseUsCard
                                key={feature.id}
                                feature={feature}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
