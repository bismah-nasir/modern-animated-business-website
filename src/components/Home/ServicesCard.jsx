import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const ServicesCard = ({ service, index }) => {
    const Icon = service.icon;

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{
                duration: 0.3,
                delay: index * 0.1,
            }}
            className={`glass-surface card-hover rounded-2xl p-6 md:p-8 h-full flex flex-col transition-default ${service.colors.hoverBorder}`}>
            {/* Icon */}
            <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center ${service.colors.bg}`}>
                <Icon
                    size={34}
                    className={service.colors.text}
                    strokeWidth={1.8}
                />
            </div>

            {/* Heading */}
            <h3 className="mt-6 text-2xl font-bold">{service.title}</h3>

            <p className={`mt-2 text-sm font-semibold ${service.colors.text}`}>
                {service.subtitle}
            </p>

            {/* Description */}
            <p className="body-text mt-4 text-base">{service.description}</p>

            {/* Features */}
            <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                    <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-text-secondary">
                        <Check
                            size={16}
                            className={`${service.colors.text} shrink-0`}
                        />

                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            {/* Technologies */}
            <div className="mt-6 flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                    <span
                        key={tech}
                        className={`rounded-full border px-3 py-1 text-xs font-medium ${service.colors.bg} ${service.colors.border} ${service.colors.text}`}>
                        {tech}
                    </span>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-auto pt-8">
                <a
                    href={service.href}
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3 ${service.colors.text}`}>
                    Learn More
                    <ArrowRight size={16} />
                </a>
            </div>
        </motion.article>
    );
};

export default ServicesCard;
