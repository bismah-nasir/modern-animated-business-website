// Reused components
import Portfolio from "./Portfolio.jsx";
import CTA from "../CTA/CTA.jsx";
import PageHero from "../PageHero/PageHero.jsx";

const PortfolioPage = () => {
    return (
        <main className="min-h-screen bg-background pt-20">
            {/* Portfolio Hero Section */}
            <PageHero
                badge="Our Work"
                title="Crafting Innovative"
                highlight="Digital Solutions"
                description="Explore our collection of custom web applications, AI integrations, and mobile platforms engineered with a focus on speed, scalability, and seamless user experiences."
                glow="blue"
            />

            {/* Portfolio Grid (Reused directly from homepage section) */}
            <Portfolio />

            {/* CTA Section (Reused from homepage) */}
            <CTA />
        </main>
    );
};

export default PortfolioPage;
