import { motion } from "framer-motion";
import { Star } from "lucide-react";

const PortfolioCard = ({ project, index }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                delay: index * 0.12,
            }}
            whileHover={{ y: -8 }}
            className="group overflow-hidden bg-surface rounded-3xl border border-white/10">
            {/* Hero Area */}
            <div
                className="relative h-56 overflow-hidden"
                style={{
                    background: `
                    radial-gradient(circle at 30% 40%, ${project.gradient.primary}66 0%, transparent 50%),
                    radial-gradient(circle at 70% 60%, ${project.gradient.secondary}4D 0%, transparent 50%),
                    radial-gradient(circle at 50% 80%, ${project.gradient.primary}33 0%, transparent 40%),
                    linear-gradient(135deg, ${project.gradient.linear_primary} 0%, ${project.gradient.linear_secondary} 50%, ${project.gradient.linear_tertiary} 100%)
                `,
                }}>
                {/* Background circles */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
                    <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
                    <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/3" />
                    <div className="absolute right-6 top-6 h-16 w-16 rotate-12 rounded-xl border border-white/10" />
                    <div className="absolute bottom-6 left-6 h-12 w-12 rounded-full border border-white/10" />
                </div>

                {/* Grid */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle, rgba(255,255,255,.05) 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                    }}
                />

                {/* Featured */}
                {project.featured && (
                    <div className="absolute right-4 top-4 z-20">
                        <span className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md tracking-wide">
                            <Star
                                size={11}
                                className="fill-yellow-400 text-yellow-400"
                            />
                            Featured
                        </span>
                    </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex translate-y-4 items-center justify-center bg-slate-900/90 p-5 opacity-0 backdrop-blur-md transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100 z-30">
                    <div className="text-center w-full">
                        <p className="text-xs md:text-sm leading-relaxed text-slate-300 font-normal line-clamp-3">
                            {project.description}
                        </p>

                        <div className="mt-4 flex justify-center gap-5 border-t border-white/5 pt-3.5">
                            {project.stats.map((item) => (
                                <div
                                    key={item.label}
                                    className="text-center px-1">
                                    <h4 className="text-base font-bold text-white tracking-tight">
                                        {item.value}
                                    </h4>
                                    <p className="mt-0.5 text-[10px] uppercase tracking-wider text-text-secondary font-medium">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="p-6">
                <div className="mb-3 flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-white">
                        {project.title}
                    </h3>

                    <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                        {project.category}
                    </span>
                </div>

                {/* Technologies */}

                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full bg-white/5 px-3 py-1 text-xs text-text-secondary transition-colors duration-300 group-hover:text-slate-300">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.article>
    );
};

export default PortfolioCard;
