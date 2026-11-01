import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

import { navLinks } from "./navigation";
import Logo from "../Logo/Logo";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Remember the page the menu was opened on, so it closes itself on any route change
    const [menuOpenPath, setMenuOpenPath] = useState(null);
    const isMenuOpen = menuOpenPath === location.pathname;

    const setIsMenuOpen = (value) => {
        const next = typeof value === "function" ? value(isMenuOpen) : value;
        setMenuOpenPath(next ? location.pathname : null);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
            if (window.innerWidth >= 1024) {
                setMenuOpenPath(null);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed inset-x-0 top-0 z-50 transition-default ${
                    isScrolled ? "glass-navbar" : "bg-transparent"
                }`}>
                <nav className="container-width flex h-20 items-center justify-between">
                    <Link to="/" className="group flex items-center gap-3">
                        <Logo className="h-11 w-11 transition-default group-hover:scale-105 group-hover:rotate-[36deg]" />

                        <span className="text-xl font-bold tracking-tight text-text-primary">
                            Glassbloom
                        </span>
                    </Link>

                    <div className="hidden items-center gap-2 lg:flex">
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

                    <div className="hidden lg:block">
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
                        className="flex h-11 w-11 items-center justify-center rounded-full text-text-primary transition-default hover:bg-white/10 lg:hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isMenuOpen ? "close" : "menu"}
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}>
                                {isMenuOpen ? (
                                    <X size={24} />
                                ) : (
                                    <Menu size={24} />
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </button>
                </nav>
            </motion.header>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 top-20 z-40 lg:hidden">
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
        </>
    );
};

export default Navbar;
