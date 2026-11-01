import { stats } from "./stats";
import StatsCard from "./StatsCard";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";

const Stats = () => {
    return (
        <section className="relative isolate overflow-hidden py-20 bg-background">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -left-45 top-24 h-105 w-105 rounded-full bg-primary/10 blur-[130px]" />

                <div className="absolute -right-40 bottom-20 h-90 w-90 rounded-full bg-primary/10 blur-[120px]" />

                <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
            </div>

            <div className="container-width">
                <SectionHeader
                    badge="By The Numbers"
                    title="Our track record"
                    highlight="speaks for itself"
                    description="Every milestone represents successful partnerships, innovative solutions, and measurable business growth."
                />

                {/* Cards */}
                <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 md:gap-5">
                    {stats.map((stat, index) => (
                        <StatsCard key={stat.id} stat={stat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
