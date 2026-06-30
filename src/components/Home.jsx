import React from "react";
import Hero from "./Home/Hero";
import Companies from "./Home/Companies";
import Services from "./Home/Services";
import WhyChooseUs from "./Home/WhyChooseUs";

const Home = () => {
    return (
        <main className="min-h-screen bg-background pt-20">
            <Hero />
            <Companies />
            <Services />
            <WhyChooseUs />
        </main>
    );
};

export default Home;
