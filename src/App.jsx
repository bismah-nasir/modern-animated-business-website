import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import ServicesPage from "./components/Services/ServicesPage.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/services" element={<ServicesPage />} />

                <Route
                    path="/portfolio"
                    element={
                        <main className="min-h-screen bg-background pt-20">
                            <h1 className="text-center text-4xl font-bold text-text-primary">
                                Portfolio Page
                            </h1>
                        </main>
                    }
                />

                <Route
                    path="/contact"
                    element={
                        <main className="min-h-screen bg-background pt-20">
                            <h1 className="text-center text-4xl font-bold text-text-primary">
                                Contact Page
                            </h1>
                        </main>
                    }
                />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
