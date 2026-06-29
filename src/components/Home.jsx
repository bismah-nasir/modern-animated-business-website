import React from "react";
import Hero from "./Home/Hero";
import Companies from "./Home/Companies";

const Home = () => {
    return (
        <main className="min-h-screen bg-background pt-20">
            <Hero />
            <Companies />
        </main>
    );
};

export default Home;
