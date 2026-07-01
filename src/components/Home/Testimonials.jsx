import { motion } from "framer-motion";
import { testimonials } from "../../data/testimonials";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
    return (
        <section className="section-padding bg-surface relative overflow-hidden">
            <div className="container-width relative z-10">
                {/* Section Header */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header">
                    <span className="section-badge">Testimonials</span>

                    <h2 className="section-title mt-6">
                        What Our{" "}
                        <span className="gradient-text">Clients Say</span>
                    </h2>

                    <p className="section-description">
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
