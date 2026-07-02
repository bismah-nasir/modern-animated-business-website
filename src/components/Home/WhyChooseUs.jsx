import { motion } from "framer-motion";
import { whyChooseUs } from "../../data/whyChooseUs";
import WhyChooseUsCard from "./WhyChooseUsCard";
import CodeSnippet from "./CodeSnippet";

const WhyChooseUs = () => {
    return (
        <section className="relative overflow-hidden py-20 md:py-28 bg-surface">
            <div className="container-width">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header text-center flex flex-col items-center mb-14 md:mb-16">
                    <span className="inline-flex items-center rounded-full border border-primary-light/30 bg-primary-light/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-light">
                        Why Choose Us
                    </span>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.2] mt-4 max-w-2xl text-white">
                        Built <span className="gradient-text">Different</span>
                    </h2>

                    <p className="text-base md:text-lg text-text-secondary leading-relaxed mt-4 max-w-xl mx-auto font-normal">
                        We don't just write code — we engineer digital solutions
                        that create long-term value for your business through
                        innovation, scalability, and reliability.
                    </p>
                </motion.div>

                {/* Content */}
                <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
                    {/* Left Snippet Container */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="hidden lg:block">
                        <CodeSnippet />
                    </motion.div>

                    {/* Right */}
                    <div className="grid gap-4 sm:grid-cols-2">
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
