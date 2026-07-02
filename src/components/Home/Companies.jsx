import { companies } from "../../data/companies";
import { motion } from "framer-motion";

const Companies = () => {
    return (
        <section className="relative border-y border-white/5 overflow-hidden py-12 md:py-16 bg-background">
            <div className="container-width">
                <div className="section-header">
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center text-md uppercase tracking-widest text-slate-500 mb-8">
                        Trusted by innovative companies worldwide
                    </motion.p>
                </div>
            </div>

            <div className="relative overflow-hidden">
                {/* left fade */}
                <div className="absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-background to-transparent" />

                {/* right fade */}
                <div className="absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-background to-transparent" />

                <div className="flex animate-scroll items-center">
                    {[...companies, ...companies].map((company, index) => {
                        const Icon = company.icon;

                        return (
                            <div
                                key={index}
                                className="group mx-6 md:mx-10 flex shrink-0 items-center gap-3.5 whitespace-nowrap transition-all duration-300 hover:scale-102">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10">
                                    <Icon
                                        size={18}
                                        className="text-text-secondary group-hover:text-primary transition-colors duration-300"
                                    />
                                </div>

                                <span className="text-lg md:text-xl font-bold tracking-tight text-text-secondary transition-colors duration-300 group-hover:text-white select-none">
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
