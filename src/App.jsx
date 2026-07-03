import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import ServicesPage from "./components/Services/ServicesPage.jsx";
import PortfolioPage from "./components/Portfolio/PortfolioPage.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/services" element={<ServicesPage />} />

                <Route path="/portfolio" element={<PortfolioPage />} />

                <Route path="/contact" element={<Contact />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
