import { motion } from "framer-motion";
import { testimonials } from "./testimonials";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
    return (
        <section className="bg-surface relative overflow-hidden py-20 md:py-28">
            <div className="container-width relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header text-center flex flex-col items-center mb-14 md:mb-16">
                    <span className="inline-flex items-center rounded-full border border-primary-light/30 bg-primary-light/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-light">
                        Testimonials
                    </span>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.2] mt-4 max-w-2xl text-white">
                        What Our{" "}
                        <span className="gradient-text">Clients Say</span>
                    </h2>

                    <p className="text-base md:text-lg text-text-secondary leading-relaxed mt-4 max-w-xl mx-auto font-normal">
                        Don't just take our word for it—hear from the businesses
                        we've partnered with to build scalable, impactful, and
                        innovative digital solutions.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
