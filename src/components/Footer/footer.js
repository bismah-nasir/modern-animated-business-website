import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub, FaXTwitter, FaDribbble } from "react-icons/fa6";

export const quickLinks = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Services",
        href: "/services",
    },
    {
        title: "Portfolio",
        href: "/portfolio",
    },
    {
        title: "Contact",
        href: "/contact",
    },
];

export const services = [
    {
        title: "Web Development",
        href: "/services#web-development",
    },
    {
        title: "Mobile Apps",
        href: "/services#mobile-apps",
    },
    {
        title: "AI & Automation",
        href: "/services#ai-automation",
    },
    {
        title: "UI/UX Design",
        href: "/services#ui-ux-design",
    },
    {
        title: "Digital Marketing",
        href: "/services#digital-marketing",
    },
];

export const socialLinks = [
    {
        name: "LinkedIn",
        href: "https://linkedin.com",
        icon: FaLinkedin,
    },
    {
        name: "Twitter",
        href: "https://x.com",
        icon: FaXTwitter,
    },
    {
        name: "GitHub",
        href: "https://github.com",
        icon: FaGithub,
    },
    {
        name: "Dribbble",
        href: "https://dribbble.com",
        icon: FaDribbble,
    },
];

export const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "hello@codecelix.com",
        href: "mailto:hello@codecelix.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+92 (300) 123-4567",
        href: "tel:+923001234567",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "123 Innovation Boulevard, Shahrah-e-Faisal, Karachi",
        href: null,
    },
];

export const legalLinks = [
    {
        title: "Privacy Policy",
        href: "/privacy",
    },
    {
        title: "Terms of Service",
        href: "/terms",
    },
    {
        title: "Cookies",
        href: "/cookies",
    },
];

export const footerContent = {
    companyName: "Codecelix",

    description:
        "We craft premium digital experiences that elevate brands and drive results. From cutting-edge web applications to intelligent automation, we turn ambitious ideas into reality.",

    newsletter: {
        title: "Subscribe to our Newsletter",
        description:
            "Get the latest insights, updates, and resources delivered straight to your inbox.",
        placeholder: "Enter your email",
        buttonText: "Subscribe",
    },

    copyright: `© ${new Date().getFullYear()} Codecelix. All rights reserved.`,
};
