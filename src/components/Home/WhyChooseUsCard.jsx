import { motion } from "framer-motion";

const WhyChooseUsCard = ({ feature, index }) => {
    const Icon = feature.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.45,
                delay: index * 0.08,
            }}
            className="group flex gap-4 rounded-2xl p-4 transition-default hover:bg-white/5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 transition-default group-hover:bg-primary/10">
                <Icon
                    size={18}
                    className="text-text-secondary transition-default group-hover:text-primary"
                />
            </div>

            <div>
                <h3 className="mb-1 text-sm font-semibold text-white">
                    {feature.title}
                </h3>

                <p className="text-xs leading-6 text-text-secondary">
                    {feature.description}
                </p>
            </div>
        </motion.div>
    );
};

export default WhyChooseUsCard;
