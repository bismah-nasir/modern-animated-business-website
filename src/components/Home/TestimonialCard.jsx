import { motion } from "framer-motion";
import { RiDoubleQuotesL } from "react-icons/ri";

const TestimonialCard = ({ testimonial, index }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: index * 0.12,
            }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-white/5 bg-background p-6 md:p-7 flex flex-col justify-between h-full transition-all duration-300 hover:border-white/10 hover:bg-white/1">
            {/* Quote Icon */}
            <div className="mb-5">
                <RiDoubleQuotesL size={42} className="text-primary/30" />
            </div>

            {/* Review */}
            <p className="flex-1 leading-8 text-slate-300 italic">
                "{testimonial.review}"
            </p>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-lg text-yellow-400">
                        ★
                    </span>
                ))}
            </div>

            {/* Footer */}
            <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-5">
                {/* Avatar */}
                <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br ${testimonial.gradient} font-semibold text-white`}>
                    {testimonial.initials}
                </div>

                {/* Info */}
                <div>
                    <h4 className="font-semibold text-white text-sm">
                        {testimonial.name}
                    </h4>

                    <p className="text-xs text-text-secondary">{`${testimonial.designation} at ${testimonial.company}`}</p>
                </div>
            </div>
        </motion.article>
    );
};

export default TestimonialCard;
