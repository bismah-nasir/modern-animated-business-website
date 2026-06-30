import React from "react";
import Hero from "./Home/Hero";
import Companies from "./Home/Companies";
import Services from "./Home/Services";
import WhyChooseUs from "./Home/WhyChooseUs";
import Stats from "./Home/Stats";

const Home = () => {
    return (
        <main className="min-h-screen bg-background pt-20">
            <Hero />
            <Companies />
            <Services />
            <WhyChooseUs />
            <Stats />
        </main>
    );
};

export default Home;
