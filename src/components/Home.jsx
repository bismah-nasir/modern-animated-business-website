import React from "react";
import Hero from "./Home/Hero";
import Companies from "./Home/Companies";
import Services from "./Home/Services";

const Home = () => {
    return (
        <main className="min-h-screen bg-background pt-20">
            <Hero />
            <Companies />
            <Services />
        </main>
    );
};

export default Home;
