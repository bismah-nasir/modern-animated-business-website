import { ArrowRight, Brain, Briefcase, Smartphone } from "lucide-react";

export const portfolio = [
    {
        id: 1,

        title: "FinanceFlow Dashboard",
        category: "Web",
        featured: true,

        icon: Briefcase,

        description:
            "A comprehensive financial analytics platform with real-time data visualization, AI-powered insights, and automated reporting for enterprise clients.",

        technologies: ["React", "Node.js", "PostgreSQL", "AWS"],

        stats: [
            {
                value: "50K+",
                label: "Users",
            },
            {
                value: "99.9%",
                label: "Uptime",
            },
            {
                value: "+340%",
                label: "Growth",
            },
        ],

        gradient: {
            primary: "#3B82F6",
            secondary: "#06B6D4",
            linear_primary: "#0F2847",
            linear_secondary: "#153662",
            linear_tertiary: "#0B1E33",
        },

        button: {
            text: "View Project",
            icon: ArrowRight,
        },
    },

    {
        id: 2,

        title: "MediConnect App",
        category: "Mobile",
        featured: true,

        icon: Smartphone,

        description:
            "A telemedicine platform connecting patients with doctors through video consultations, appointment scheduling, and secure health record management.",

        technologies: ["React Native", "Firebase", "Node.js", "WebRTC"],

        stats: [
            {
                value: "200K+",
                label: "Downloads",
            },
            {
                value: "4.9★",
                label: "Rating",
            },
            {
                value: "98%",
                label: "Satisfaction",
            },
        ],

        gradient: {
            primary: "#06B6D4",
            secondary: "#3B82F6",
            linear_primary: "#0B1E33",
            linear_secondary: "#0F2847",
            linear_tertiary: "#071426",
        },

        button: {
            text: "View Project",
            icon: ArrowRight,
        },
    },

    {
        id: 3,

        title: "NeuralVision AI",
        category: "AI",
        featured: true,

        icon: Brain,

        description:
            "An intelligent computer vision platform that automates quality inspection in manufacturing using deep learning and real-time video analysis.",

        technologies: ["Python", "TensorFlow", "OpenCV", "AWS"],

        stats: [
            {
                value: "99.7%",
                label: "Accuracy",
            },
            {
                value: "1M+",
                label: "Images",
            },
            {
                value: "$2M",
                label: "Savings",
            },
        ],

        gradient: {
            primary: "#8B5CF6",
            secondary: "#6366F1",
            linear_primary: "#153662",
            linear_secondary: "#0F2847",
            linear_tertiary: "#0B1E33",
        },

        button: {
            text: "View Project",
            icon: ArrowRight,
        },
    },
];
