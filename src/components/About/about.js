import { Target, Eye, Brain, Code, Sparkles, Palette } from "lucide-react";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

export const missionVision = {
    mission: {
        title: "Our Mission",
        description:
            "To empower businesses globally by engineering intelligent, scalable, and visually stunning digital products that optimize complex workflows, drive growth, and deliver exceptional user value.",
        icon: Target,
        colors: {
            text: "text-cyan-500",
            bg: "bg-cyan-500/10",
            border: "border-cyan-500/20",
            hoverBorder: "hover:border-cyan-500/30",
        },
    },
    vision: {
        title: "Our Vision",
        description:
            "To pioneer the intersection of advanced artificial intelligence and human-centric software engineering, defining new industry standards for speed, security, and digital product experience.",
        icon: Eye,
        colors: {
            text: "text-purple-500",
            bg: "bg-purple-500/10",
            border: "border-purple-500/20",
            hoverBorder: "hover:border-purple-500/30",
        },
    },
};

export const companyIntro = {
    badge: "Who We Are",
    title: "Engineering the Future of Digital Innovation",
    paragraphs: [
        "Codecelix is an AI-powered digital agency built on a foundation of technical excellence and creative design. We design, develop, and deploy custom software products that solve real-world problems. Whether you're integrating AI, automating workflows, or launching a premium web application, we provide the technical expertise to scale.",
        "We believe that modern businesses shouldn't be held back by outdated tech stack limitations. That is why we work with cutting-edge tools—including cloud infrastructure, deep-learning APIs, and progressive frontend systems—to engineer secure, fast, and responsive solutions that convert users and elevate brands.",
    ],
    achievements: [
        { value: "99.9%", label: "Uptime Achieved", color: "text-blue-500" },
        { value: "180+", label: "Successful Projects", color: "text-cyan-500" },
        { value: "15+", label: "AI Deployments", color: "text-violet-500" },
        {
            value: "100%",
            label: "Client Satisfaction",
            color: "text-emerald-500",
        },
    ],
};

export const teamMembers = [
    {
        id: 1,
        name: "Sarah Chen",
        role: "CEO & Founder",
        bio: "An enterprise software architect and technology leader with 10+ years of experience building secure, scalable cloud applications and leading digital agency growth.",
        icon: Code,
        skills: ["Cloud Architecture", "Next.js", "Enterprise Strategy"],
        colors: {
            text: "text-blue-500",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20",
            hoverBorder: "hover:border-blue-500/30",
        },
        socials: {
            linkedin: "https://linkedin.com",
            github: "https://github.com",
            twitter: "https://twitter.com",
        },
    },
    {
        id: 2,
        name: "Dr. Marcus Vance",
        role: "Head of AI & Automation",
        bio: "A research scientist and software engineer specializing in transformer models, agentic workflows, LLM fine-tuning, and predictive analytics pipelines.",
        icon: Brain,
        skills: ["PyTorch", "OpenAI API", "Vector Databases"],
        colors: {
            text: "text-violet-500",
            bg: "bg-violet-500/10",
            border: "border-violet-500/20",
            hoverBorder: "hover:border-violet-500/30",
        },
        socials: {
            linkedin: "https://linkedin.com",
            github: "https://github.com",
            twitter: "https://twitter.com",
        },
    },
    {
        id: 3,
        name: "Elena Rostova",
        role: "Lead UI/UX Designer",
        bio: "An award-winning interface designer dedicated to creating clean visual hierarchies, smooth micro-interactions, and premium glassmorphic visual designs.",
        icon: Palette,
        skills: ["Figma Design Systems", "Interaction Design", "Framer"],
        colors: {
            text: "text-cyan-500",
            bg: "bg-cyan-500/10",
            border: "border-cyan-500/20",
            hoverBorder: "hover:border-cyan-500/30",
        },
        socials: {
            linkedin: "https://linkedin.com",
            github: "https://github.com",
            twitter: "https://twitter.com",
        },
    },
    {
        id: 4,
        name: "Liam O'Connor",
        role: "Lead Full Stack Engineer",
        bio: "A backend performance expert focused on secure API networking, asynchronous message queuing, database optimizations, and deployment automation.",
        icon: Sparkles,
        skills: ["TypeScript", "Node.js / Express", "PostgreSQL", "AWS"],
        colors: {
            text: "text-emerald-500",
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/20",
            hoverBorder: "hover:border-emerald-500/30",
        },
        socials: {
            linkedin: "https://linkedin.com",
            github: "https://github.com",
            twitter: "https://twitter.com",
        },
    },
];

export const socialIcons = {
    Github: FaGithub,
    Linkedin: FaLinkedin,
    Twitter: FaXTwitter,
};
