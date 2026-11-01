import { motion } from "framer-motion";

// Centered section heading: badge, title with a gradient highlight, and an
// optional description. Fades up when scrolled into view.
const SectionHeader = ({
    badge,
    title,
    highlight,
    description,
    className = "mb-14 md:mb-16",
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`section-header text-center flex flex-col items-center ${className}`}>
            <span className="section-badge">{badge}</span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.2] mt-4 max-w-2xl text-white">
                {title} <span className="gradient-text">{highlight}</span>
            </h2>

            {description && (
                <p className="text-base md:text-lg text-text-secondary leading-relaxed mt-4 max-w-xl mx-auto font-normal">
                    {description}
                </p>
            )}
        </motion.div>
    );
};

export default SectionHeader;
