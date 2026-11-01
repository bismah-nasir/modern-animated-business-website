import { motion } from "framer-motion";
import { whyChooseUs } from "./whyChooseUs";
import WhyChooseUsCard from "./WhyChooseUsCard";
import CodeSnippet from "./CodeSnippet";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";

const WhyChooseUs = () => {
    return (
        <section className="relative overflow-hidden py-20 md:py-28 bg-surface">
            <div className="container-width">
                <SectionHeader
                    badge="Why Choose Us"
                    title="Built"
                    highlight="Different"
                    description="We don't just write code — we engineer digital solutions that create long-term value for your business through innovation, scalability, and reliability."
                />

                {/* Content */}
                <div className="mt-12 grid items-center gap-10 xl:grid-cols-2">
                    {/* Left Snippet Container */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="hidden xl:block">
                        <CodeSnippet />
                    </motion.div>

                    {/* Right */}
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
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
