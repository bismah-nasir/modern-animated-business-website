import { testimonials } from "./testimonials";
import TestimonialCard from "./TestimonialCard";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";

const Testimonials = () => {
    return (
        <section className="bg-surface relative overflow-hidden py-20 md:py-28">
            <div className="container-width relative z-10">
                <SectionHeader
                    badge="Testimonials"
                    title="What Our"
                    highlight="Clients Say"
                    description="Don't just take our word for it—hear from the businesses we've partnered with to build scalable, impactful, and innovative digital solutions."
                />

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
