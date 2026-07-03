import React from "react";
import Hero from "../Hero/Hero.jsx";
import Companies from "../Companies/Companies.jsx";
import Services from "../Services/Services.jsx";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs.jsx";
import Stats from "../Stats/Stats.jsx";
import Portfolio from "../Portfolio/Portfolio.jsx";
import Testimonials from "../Testimonials/Testimonials.jsx";
import CTA from "../CTA/CTA.jsx";

const Home = () => {
    return (
        <main className="min-h-screen bg-background pt-20">
            <Hero />
            <Companies />
            <Services />
            <WhyChooseUs />
            <Stats />
            <Portfolio isHomePage={true} />
            <Testimonials />
            <CTA />
        </main>
    );
};

export default Home;
