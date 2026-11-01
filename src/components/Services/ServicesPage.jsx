// Reused components
import Services from "./Services.jsx";
import CTA from "../CTA/CTA.jsx";
import PageHero from "../PageHero/PageHero.jsx";

const ServicesPage = () => {
    return (
        <main className="min-h-screen bg-background pt-20">
            {/* Services Hero Section */}
            <PageHero
                badge="Our Expertise"
                title="Scale Your Business With"
                highlight="Custom Tech Solutions"
                description="We design, build, and deploy intelligent software designed to last. From AI integration to high-converting web applications, we provide the technical expertise to turn ideas into value."
                glow="blue"
            />

            {/* Services List (Reused directly from homepage section) */}
            <Services />

            {/* CTA Section (Reused from homepage) */}
            <CTA />
        </main>
    );
};

export default ServicesPage;
