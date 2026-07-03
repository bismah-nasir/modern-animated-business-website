import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
    footerContent,
    quickLinks,
    services,
    socialLinks,
    contactInfo,
    legalLinks,
} from "./footer";

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-background">
            <div className="h-px w-full footer-gradient" />
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-1">
                        <Link to="/" className="group flex items-center gap-3">
                            <div className="gradient-primary flex h-11 w-11 items-center justify-center rounded-xl transition-default glow-primary group-hover:scale-105">
                                <span className="text-lg font-bold text-white">
                                    C
                                </span>
                            </div>

                            <span className="text-xl font-bold tracking-tight text-text-primary">
                                {footerContent.companyName}
                            </span>
                        </Link>

                        <p className="text-text-secondary text-sm mt-3 leading-relaxed">
                            {footerContent.description}
                        </p>

                        {/* Social Links */}
                        <div className="mt-4 flex flex-wrap gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <motion.a
                                        whileHover={{
                                            y: -4,
                                            scale: 1.05,
                                        }}
                                        whileTap={{
                                            scale: 0.95,
                                        }}
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className="h-10 w-10 rounded-lg flex items-center justify-center text-text-secondary border border-white/10 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary hover:shadow-lg hover:shadow-primary/20">
                                        <Icon size={18} />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
                            Quick Links
                        </h3>

                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.title}>
                                    <Link
                                        to={link.href}
                                        className="group text-text-secondary text-sm transition-colors duration-300 block hover:text-primary">
                                        <span>{link.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-2.5">
                            Services
                        </h3>

                        <ul className="space-y-4">
                            {services.map((service) => (
                                <li key={service.title}>
                                    <Link
                                        to={service.href}
                                        className="group text-text-secondary text-sm transition-colors duration-300 block hover:text-primary">
                                        <span>{service.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-2.5">
                            Contact
                        </h3>

                        <div className="space-y-4">
                            {contactInfo.map((item) => {
                                const Icon = item.icon;

                                const content = (
                                    <>
                                        <div className="text-primary mt-0.5">
                                            <Icon size={18} />
                                        </div>

                                        <div>
                                            <p className="group text-text-secondary text-sm transition-colors duration-300 block hover:text-primaryF">
                                                {item.value}
                                            </p>
                                        </div>
                                    </>
                                );

                                return item.href ? (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="flex items-start gap-3">
                                        {content}
                                    </a>
                                ) : (
                                    <div
                                        key={item.label}
                                        className="flex items-start gap-3">
                                        {content}
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

                {/* Newsletter */}
                <motion.div
                    variants={itemVariants}
                    className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center items-start">
                        <div className="max-w-xl">
                            <h3 className="text-white font-semibold text-sm">
                                {footerContent.newsletter.title}
                            </h3>

                            <p className="text-text-secondary text-sm mt-1">
                                {footerContent.newsletter.description}
                            </p>
                        </div>

                        <form className="flex w-full max-w-md flex-col sm:flex-row">
                            <input
                                type="email"
                                placeholder={
                                    footerContent.newsletter.placeholder
                                }
                                className="bg-surface rounded-xl sm:rounded-r-none sm:rounded-l-xl border border-white/10 px-4 py-2.5 outline-none transition-all duration-300 w-full md:w-64 text-white text-sm placeholder:text-text-secondary focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                            />

                            <button
                                type="submit"
                                className="bg-primary hover:bg-accent-light rounded-xl sm:rounded-l-none sm:rounded-r-xl px-6 py-2.5 text-white text-sm font-medium transition-opacity duration-200 whitespace-nowrap cursor-pointer mt-2 sm:mt-0">
                                {footerContent.newsletter.buttonText}
                            </button>
                        </form>
                    </div>
                </motion.div>

                {/* Bottom */}
                <motion.div
                    variants={itemVariants}
                    className="mt-8 pt-8 border-t border-white/10">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-slate-500">
                            {footerContent.copyright}
                        </p>

                        <div className="flex items-center gap-6">
                            {legalLinks.map((link) => (
                                <Link
                                    key={link.title}
                                    to={link.href}
                                    className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-300">
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    );
};

export default Footer;
