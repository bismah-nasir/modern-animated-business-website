import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

import { navLinks } from "../data/navigation";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed inset-x-0 top-0 z-50 transition-default ${
                isScrolled ? "glass-navbar" : "bg-transparent"
            }`}>
            <nav className="container-width flex h-20 items-center justify-between">
                <Link to="/" className="group flex items-center gap-3">
                    <div className="gradient-primary flex h-11 w-11 items-center justify-center rounded-xl transition-default glow-primary group-hover:scale-105">
                        <span className="text-lg font-bold text-white">C</span>
                    </div>

                    <span className="text-xl font-bold tracking-tight text-text-primary">
                        Codecelix
                    </span>
                </Link>

                <div className="hidden items-center gap-2 md:flex">
                    {navLinks.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `rounded-full px-5 py-2 text-sm font-medium transition-default ${
                                    isActive
                                        ? "bg-white/10 text-primary"
                                        : "text-text-secondary hover:bg-white/5 hover:text-text-primary"
                                }`
                            }>
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                <div className="hidden md:block">
                    <Link to="/contact" className="btn-primary group">
                        <span>Get Started</span>

                        <ArrowRight
                            size={18}
                            className="transition-default group-hover:translate-x-1"
                        />
                    </Link>
                </div>

                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-label="Toggle Navigation Menu"
                    aria-expanded={isMenuOpen}
                    className="flex h-11 w-11 items-center justify-center rounded-full text-text-primary transition-default hover:bg-white/10 md:hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isMenuOpen ? "close" : "menu"}
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.div>
                    </AnimatePresence>
                </button>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 top-20 md:hidden">
                        <div className="glass-overlay flex h-full flex-col items-center justify-center gap-6 px-6">
                            {navLinks.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 24 }}
                                    transition={{
                                        delay: index * 0.07,
                                        duration: 0.3,
                                    }}>
                                    <NavLink
                                        to={item.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={({ isActive }) =>
                                            `rounded-full px-8 py-3 text-lg font-semibold transition-default ${
                                                isActive
                                                    ? "bg-white/10 text-primary"
                                                    : "text-text-secondary hover:bg-white/5 hover:text-text-primary"
                                            }`
                                        }>
                                        {item.name}
                                    </NavLink>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.45 }}>
                                <Link
                                    to="/contact"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="btn-primary group">
                                    <span>Get Started</span>

                                    <ArrowRight
                                        size={18}
                                        className="transition-default group-hover:translate-x-1"
                                    />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
