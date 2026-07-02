import { motion } from "framer-motion";

const StatsCard = ({ stat, index }) => {
    const Icon = stat.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: index * 0.12,
            }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 p-6 md:p-8 text-center transition-all duration-500 hover:border-primary/30">
            {/* Glow */}
            <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(59,130,246,.12), transparent 70%)",
                }}
            />

            {/* Icon */}
            <div className="relative z-10 mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 transition-all duration-300 group-hover:bg-primary/10">
                <Icon className="h-6 w-6 text-white transition-colors duration-300 group-hover:text-primary" />
            </div>

            {/* Number */}
            <h3 className="relative z-10 text-3xl md:text-4xl font-bold text-white tracking-tight leading-none mb-2 ">
                {stat.value}
                {stat.suffix}
            </h3>

            {/* Label */}
            <p className="relative z-10 text-xs md:text-sm text-text-secondary font-normal tracking-wide">
                {stat.label}
            </p>
        </motion.div>
    );
};

export default StatsCard;
