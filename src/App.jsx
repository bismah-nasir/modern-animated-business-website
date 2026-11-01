import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import ServicesPage from "./components/Services/ServicesPage.jsx";
import PortfolioPage from "./components/Portfolio/PortfolioPage.jsx";
import Contact from "./components/Contact/Contact.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import Footer from "./components/Footer/Footer.jsx";

function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Scroll to the linked section (e.g. /services#web-development) if there is one
        if (hash) {
            const target = document.getElementById(hash.slice(1));

            if (target) {
                // Use the layout position (offsetTop ignores entrance-animation
                // transforms) minus the element's scroll-margin for the fixed navbar
                let top = -parseFloat(getComputedStyle(target).scrollMarginTop);

                for (let el = target; el; el = el.offsetParent) {
                    top += el.offsetTop;
                }

                window.scrollTo({ top });
                return;
            }
        }

        window.scrollTo(0, 0);
    }, [pathname, hash]);

    return null;
}

function App() {
    return (
        <>
            <ScrollToTop />
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/services" element={<ServicesPage />} />

                <Route path="/portfolio" element={<PortfolioPage />} />

                <Route path="/contact" element={<Contact />} />

                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
