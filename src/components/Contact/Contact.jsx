import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    ChevronDown,
    ChevronUp,
    CheckCircle2,
    AlertCircle,
} from "lucide-react";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

// Reused components
import CTA from "../CTA/CTA.jsx";
import PageHero from "../PageHero/PageHero.jsx";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";

// Formspree Config
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdlkoya";

const Contact = () => {
    // Form Submission State
    const [formStatus, setFormStatus] = useState("idle"); // "idle", "sending", "success", "error"
    const [activeFaq, setActiveFaq] = useState(null);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("sending");

        const data = new FormData(e.target);
        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                body: data,
                headers: {
                    Accept: "application/json",
                },
            });
            if (response.ok) {
                setFormStatus("success");
                e.target.reset();
            } else {
                setFormStatus("error");
            }
        } catch {
            setFormStatus("error");
        }
    };

    const faqItems = [
        {
            question: "What technologies does Glassbloom specialize in?",
            answer: "We specialize in modern frontend libraries (React, Next.js), cross-platform mobile frameworks (React Native, Flutter), AI integrations (OpenAI APIs, machine learning pipelines), and scalable backend architectures (Node.js, TypeScript, PostgreSQL, AWS).",
        },
        {
            question: "How long does a typical digital project take?",
            answer: "A standard MVP (Minimum Viable Product) or custom web application takes approximately 6 to 10 weeks from discovery to deployment. Complex enterprise SaaS platforms or bespoke artificial intelligence systems take longer and are delivered in iterative, agile sprints.",
        },
        {
            question: "Do you offer post-launch maintenance and support?",
            answer: "Yes, we offer monthly SLA agreements covering security updates, server monitoring, cloud optimizations, feature upgrades, and content adjustments to ensure your application stays performant and online.",
        },
        {
            question: "How do we get started with Glassbloom?",
            answer: "Getting started is simple! Fill out the contact form with details about your project. We will reach out to you within 24 business hours to schedule a 30-minute discovery call and compile a technical roadmap proposal.",
        },
    ];

    return (
        <main className="min-h-screen bg-background pt-20">
            {/* Contact Hero Section */}
            <PageHero
                badge="Get In Touch"
                title="Let's Build Something"
                highlight="Great Together"
                description="Have an idea or a project roadmap? Contact our engineering team for technical consults, feasibility evaluations, and custom software quotes."
                glow="purple"
            />

            {/* Split Content Section */}
            <section className="section-padding bg-background relative overflow-hidden">
                <div className="container-width">
                    <div className="grid gap-12 lg:grid-cols-12 items-start">
                        {/* Left Column - Contact Info & Map */}
                        <div className="lg:col-span-5 space-y-6">
                            {/* Contact Details Card */}
                            <div className="glass-surface p-6 sm:p-8 rounded-2xl border border-white/5 space-y-6">
                                <h3 className="text-xl font-bold tracking-tight text-white mb-4">
                                    Contact Information
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex gap-4 items-start">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-primary">
                                            <MapPin size={18} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-white">
                                                Our Address
                                            </h4>
                                            <p className="text-xs text-text-secondary mt-1">
                                                123 Innovation Boulevard,
                                                Shahrah-e-Faisal, Karachi
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-primary">
                                            <Mail size={18} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-white">
                                                Email Us
                                            </h4>
                                            <a
                                                href="mailto:hello@glassbloom.com"
                                                className="block py-1 text-xs text-text-secondary transition-colors duration-300 hover:text-primary">
                                                hello@glassbloom.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-primary">
                                            <Phone size={18} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-white">
                                                Call Us
                                            </h4>
                                            <a
                                                href="tel:+923001234567"
                                                className="block py-1 text-xs text-text-secondary transition-colors duration-300 hover:text-primary">
                                                +92 (300) 123-4567
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="pt-4 border-t border-white/5">
                                    <h4 className="text-sm font-semibold text-white mb-3">
                                        Follow Us
                                    </h4>
                                    <div className="flex gap-3">
                                        {[
                                            {
                                                icon: FaLinkedin,
                                                url: "https://linkedin.com",
                                                label: "LinkedIn",
                                            },
                                            {
                                                icon: FaGithub,
                                                url: "https://github.com",
                                                label: "GitHub",
                                            },
                                            {
                                                icon: FaXTwitter,
                                                url: "https://twitter.com",
                                                label: "Twitter",
                                            },
                                        ].map((soc, idx) => {
                                            const SocialIcon = soc.icon;
                                            return (
                                                <a
                                                    key={idx}
                                                    href={soc.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={soc.label}
                                                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-white/5 hover:border-primary/20 hover:bg-primary/10 text-text-secondary hover:text-primary transition-all duration-300 shadow-soft">
                                                    <SocialIcon size={16} />
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className="glass-surface p-2 rounded-2xl border border-white/5 overflow-hidden h-72">
                                <iframe
                                    title="Office Location Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.0904740340766!2d67.1090841752008!3d24.88173117791538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eafe2ecc311%3A0x8213daf29adc6923!2sShahra-e-Faisal%2C%20Pakistan!5e0!3m2!1sen!2s!4v1783060146537!5m2!1sen!2s"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    className="map-dark-theme rounded-2xl"
                                    allowFullScreen=""
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div className="lg:col-span-7">
                            <div className="glass-surface p-6 sm:p-8 rounded-2xl border border-white/5 relative">
                                <AnimatePresence mode="wait">
                                    {formStatus === "success" ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -15 }}
                                            className="text-center py-12 space-y-4">
                                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                                <CheckCircle2 size={32} />
                                            </div>
                                            <h3 className="text-xl font-bold text-white tracking-tight">
                                                Message Sent Successfully!
                                            </h3>
                                            <p className="text-sm text-text-secondary max-w-sm mx-auto">
                                                Thank you for reaching out. Our
                                                engineering team has received
                                                your inquiry and will contact
                                                you shortly.
                                            </p>
                                            <button
                                                onClick={() =>
                                                    setFormStatus("idle")
                                                }
                                                className="btn-secondary text-xs font-semibold px-6 py-2 mt-4">
                                                Send Another Message
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            onSubmit={handleFormSubmit}
                                            initial={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="space-y-5">
                                            <h3 className="text-xl font-bold tracking-tight text-white mb-1">
                                                Send Us A Message
                                            </h3>
                                            <p className="text-xs text-text-secondary mb-4">
                                                Submit this form and we'll
                                                connect via email to arrange a
                                                scoping call.
                                            </p>

                                            <div className="grid gap-4 sm:grid-cols-2">
                                                <div className="space-y-1.5">
                                                    <label
                                                        htmlFor="name"
                                                        className="text-xs font-semibold text-white">
                                                        Your Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        required
                                                        placeholder="Sarah Chen"
                                                        className="glass-input"
                                                    />
                                                </div>

                                                <div className="space-y-1.5">
                                                    <label
                                                        htmlFor="email"
                                                        className="text-xs font-semibold text-white">
                                                        Email Address
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        required
                                                        placeholder="sarah@company.com"
                                                        className="glass-input"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-1.5">
                                                <label
                                                    htmlFor="message"
                                                    className="text-xs font-semibold text-white">
                                                    Message Details
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    required
                                                    rows="5"
                                                    placeholder="Tell us about your application requirement, features, and target launch timeline..."
                                                    className="glass-input resize-none"
                                                />
                                            </div>

                                            {formStatus === "error" && (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    className="flex gap-2.5 items-center p-3.5 rounded-xl border border-rose-500/20 bg-rose-500/10 text-rose-400 text-xs">
                                                    <AlertCircle size={16} />
                                                    <span>
                                                        Submission failed.
                                                        Please check connection
                                                        and try again.
                                                    </span>
                                                </motion.div>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={
                                                    formStatus === "sending"
                                                }
                                                className="btn-primary w-full group py-3 rounded-xl disabled:opacity-50">
                                                <span>
                                                    {formStatus === "sending"
                                                        ? "Sending Request..."
                                                        : "Submit Inquiry"}
                                                </span>
                                            </button>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accordion FAQ Section */}
            <section className="section-padding bg-surface border-y border-white/5 relative overflow-hidden">
                <div className="container-width">
                    <SectionHeader
                        badge="FAQ"
                        title="Frequently Asked"
                        highlight="Questions"
                        className="mb-12 md:mb-14"
                    />

                    <div className="max-w-3xl mx-auto mt-12 space-y-4">
                        {faqItems.map((item, idx) => {
                            const isOpen = activeFaq === idx;
                            return (
                                <div
                                    key={idx}
                                    className="glass-surface rounded-2xl border border-white/5 overflow-hidden transition-all duration-300">
                                    <button
                                        onClick={() =>
                                            setActiveFaq(isOpen ? null : idx)
                                        }
                                        className="w-full flex justify-between items-center px-6 py-5 text-left text-white hover:bg-white/3 transition-colors duration-200">
                                        <span className="font-semibold text-sm sm:text-base pr-4">
                                            {item.question}
                                        </span>
                                        <span className="text-primary shrink-0">
                                            {isOpen ? (
                                                <ChevronUp size={18} />
                                            ) : (
                                                <ChevronDown size={18} />
                                            )}
                                        </span>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{
                                                    height: 0,
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    height: "auto",
                                                    opacity: 1,
                                                }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{
                                                    duration: 0.3,
                                                    ease: "easeInOut",
                                                }}>
                                                <div className="px-6 pb-6 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-white/5 pt-4">
                                                    {item.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section (Reused from homepage) */}
            <CTA />
        </main>
    );
};

export default Contact;
