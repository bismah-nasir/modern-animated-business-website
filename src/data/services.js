import {
    Globe,
    Smartphone,
    Bot,
    Palette,
    TrendingUp,
    Check,
    ArrowRight,
} from "lucide-react";

export const services = [
    {
        id: 1,
        icon: Globe,
        title: "Web Development",
        subtitle: "Crafting Digital Experiences",

        colors: {
            text: "text-blue-500",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20",
            hoverBorder: "hover:border-blue-500/30",
        },

        description:
            "We build blazing-fast, scalable web applications using cutting-edge technologies. From complex SaaS platforms to elegant marketing websites, we deliver solutions that perform and convert.",

        features: [
            "Custom Web Applications",
            "Progressive Web Apps (PWA)",
            "E-Commerce Solutions",
            "API Development & Integration",
            "Performance Optimization",
            "Cloud Deployment & DevOps",
        ],

        technologies: [
            "React",
            "Next.js",
            "Node.js",
            "TypeScript",
            "PostgreSQL",
            "AWS",
        ],

        href: "#web-development",
    },

    {
        id: 2,
        icon: Smartphone,
        title: "Mobile App Development",
        subtitle: "Native & Cross-Platform",

        colors: {
            text: "text-cyan-500",
            bg: "bg-cyan-500/10",
            border: "border-cyan-500/20",
            hoverBorder: "hover:border-cyan-500/30",
        },

        description:
            "We create stunning mobile experiences that users love. Our cross-platform approach ensures your app reaches every device without compromising on performance or native feel.",

        features: [
            "iOS & Android Development",
            "Cross-Platform Solutions",
            "App Store Optimization",
            "Push Notifications",
            "Offline-First Architecture",
            "In-App Payments",
        ],

        technologies: [
            "React Native",
            "Flutter",
            "Swift",
            "Kotlin",
            "Firebase",
            "GraphQL",
        ],

        href: "#mobile-development",
    },

    {
        id: 3,
        icon: Bot,
        title: "AI & Automation",
        subtitle: "Intelligent Solutions",

        colors: {
            text: "text-violet-500",
            bg: "bg-violet-500/10",
            border: "border-violet-500/20",
            hoverBorder: "hover:border-violet-500/30",
        },

        description:
            "Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent user experiences that adapt and learn from every interaction.",

        features: [
            "Machine Learning Models",
            "Natural Language Processing",
            "Computer Vision",
            "Process Automation",
            "Predictive Analytics",
            "AI Chatbots & Assistants",
        ],

        technologies: [
            "Python",
            "TensorFlow",
            "OpenAI",
            "LangChain",
            "Hugging Face",
            "Docker",
        ],

        href: "#ai-automation",
    },

    {
        id: 4,
        icon: Palette,
        title: "UI/UX Design",
        subtitle: "Design That Converts",

        colors: {
            text: "text-indigo-500",
            bg: "bg-indigo-500/10",
            border: "border-indigo-500/20",
            hoverBorder: "hover:border-indigo-500/30",
        },

        description:
            "We design beautiful, intuitive interfaces backed by user research and data. Every interaction is crafted to delight users while helping businesses achieve measurable results.",

        features: [
            "User Research & Testing",
            "Wireframing & Prototyping",
            "Design Systems",
            "Interaction Design",
            "Responsive Design",
            "Accessibility (WCAG)",
        ],

        technologies: [
            "Figma",
            "Framer",
            "Adobe XD",
            "Principle",
            "Maze",
            "Hotjar",
        ],

        href: "#ui-ux-design",
    },

    {
        id: 5,
        icon: TrendingUp,
        title: "Digital Marketing",
        subtitle: "Growth-Driven Strategy",

        colors: {
            text: "text-emerald-500",
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/20",
            hoverBorder: "hover:border-emerald-500/30",
        },

        description:
            "We craft data-driven marketing strategies that amplify your brand, drive qualified traffic, and convert visitors into loyal customers across every digital channel.",

        features: [
            "SEO & Content Strategy",
            "Social Media Marketing",
            "PPC & Paid Advertising",
            "Email Marketing",
            "Analytics & Reporting",
            "Conversion Optimization",
        ],

        technologies: [
            "Google Ads",
            "Meta Ads",
            "SEMrush",
            "Mailchimp",
            "GA4",
            "HubSpot",
        ],

        href: "#digital-marketing",
    },
];

export const serviceIcons = {
    Check,
    ArrowRight,
};
