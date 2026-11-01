import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const ServiceCard = ({ service, index }) => {
    const Icon = service.icon;

    return (
        <motion.article
            id={service.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3, delay: index * 0.1 },
            }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className={`group glass-surface rounded-2xl p-6 md:p-8 h-full flex flex-col scroll-mt-28 transition-[border-color,box-shadow] duration-300 hover:shadow-card ${service.colors.hoverBorder}`}>
            {/* Icon */}
            <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${service.colors.bg}`}>
                <Icon
                    size={26}
                    className={service.colors.text}
                    strokeWidth={1.8}
                />
            </div>

            {/* Heading */}
            <h3 className="text-xl font-bold tracking-tight text-white mt-4">
                {service.title}
            </h3>

            <p
                className={`text-xs uppercase tracking-wider font-semibold mt-1.5 ${service.colors.text}`}>
                {service.subtitle}
            </p>

            {/* Description */}
            <p className="text-sm text-text-secondary leading-relaxed mt-3">
                {service.description}
            </p>

            {/* Features */}
            <ul className="space-y-2.5 mt-4">
                {service.features.map((feature) => (
                    <li
                        key={feature}
                        className="flex items-center gap-2.5 text-xs text-text-secondary font-normal">
                        <Check
                            size={14}
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
                        className={`rounded-full border px-3 py-1 text-xs font-medium tracking-wide transition-colors duration-300 ${service.colors.bg} ${service.colors.border} ${service.colors.text}`}>
                        {tech}
                    </span>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-auto pt-6">
                <Link
                    to={`/services#${service.slug}`}
                    className={`-my-2 inline-flex items-center gap-1.5 py-2 text-xs font-semibold tracking-wide uppercase transition-all duration-300 hover:gap-2.5 ${service.colors.text}`}>
                    Learn More
                    <ArrowRight size={14} />
                </Link>
            </div>
        </motion.article>
    );
};

export default ServiceCard;
