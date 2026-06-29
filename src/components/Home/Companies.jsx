import { companies } from "../../data/companies";
import { motion } from "framer-motion";

const Companies = () => {
    return (
        <section className="section-padding border-y border-white/5 overflow-hidden mt-4">
            <div className="container-width">
                <div className="section-header">
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="section-subtitle">
                        Trusted by innovative companies worldwide
                    </motion.p>
                </div>
            </div>

            <div className="relative overflow-hidden">
                {/* left fade */}

                <div className="absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-background to-transparent" />

                {/* right fade */}

                <div className="absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-background to-transparent" />

                <div className="flex animate-scroll">
                    {[...companies, ...companies].map((company, index) => {
                        const Icon = company.icon;

                        return (
                            <div
                                key={index}
                                className="group mx-10 my-2 flex shrink-0 items-center gap-4 whitespace-nowrap transition-all duration-300 hover:scale-105">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10">
                                    <Icon
                                        size={20}
                                        className="text-text-secondary group-hover:text-primary"
                                    />
                                </div>

                                <span className="text-xl font-bold tracking-wide text-text-secondary transition-colors duration-300 group-hover:text-white">
                                    {company.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Companies;
