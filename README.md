# Codecelix — Modern Animated Business & Tech Agency Website

Codecelix is a premium, highly-interactive Single Page Application (SPA) designed for modern technology agencies and digital consultancies. It is built using **React 19**, **Vite 8**, **Tailwind CSS v4**, and **Framer Motion**, featuring custom glassmorphism components, floating particle/ring backgrounds, and smooth scroll restoration.

---

## 🚀 Key Features

- **Dynamic Home Page Layout**:
    - Interactive **Hero Header** featuring micro-animations, rotating rings, and floating particle physics.
    - Seamless loop **Customer Marquee** displaying brand alignments.
    - Interactive **Services Grid** and performance analytics **Stats Counter**.
    - Interactive **Portfolio Showcase** highlighting case studies with high-fidelity hover tags.
- **Cultural & About Us Showcase (`/about`)**:
    - Structured brand overview (Mission and Vision statements).
    - Responsive **Core Team Grid** presenting professional cards complete with skill badges, bios, and social handles.
- **Services Directory (`/services`)**:
    - Full services directory leveraging home page styling to ensure layout consistency.
- **Differentiated Portfolio (`/portfolio`)**:
    - Displays exactly 3 featured items on the Home Page, while expanding to show all 6 available items in a responsive grid on the Portfolio sub-page.
    - Dynamic gradient backgrounds and case-study overlays.
- **Client Contact Portal (`/contact`)**:
    - Direct async contact form processing utilizing **Formspree** API.
    - Grayscaled Google Map location iframe matching the dark brand theme.
    - Interactive **Accordion FAQ** with smooth expand/collapse animations.
- **SPA Navigation & Scroll Restoration**:
    - Client-side routing with route-aware `ScrollToTop` viewport resetting.
    - Adaptive mobile menu drawer that resolves transforms displacement.

---

## 🛠️ Technology Stack

| Technology           | Purpose                                   | Version |
| :------------------- | :---------------------------------------- | :------ |
| **React**            | Component Architecture & State Management | `v19.2` |
| **Vite**             | Development Server & Build Bundling       | `v8.1`  |
| **Tailwind CSS**     | Styling System                            | `v4.3`  |
| **Framer Motion**    | Physics & Keyframe Animations             | `v12.4` |
| **React Router DOM** | SPA Client-Side Routing                   | `v7.18` |
| **Lucide React**     | Interface Icon Library                    | `v1.21` |
| **React Icons**      | Brand and Social Icon Support (FA6)       | `v5.7`  |

---

## 📂 Directory Structure

The project follows a modular, self-contained component design architecture:

```
modern-animated-business-website/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About/          # About page logic & team dataset
│   │   ├── CTA/            # Reusable Call to Action banner
│   │   ├── Companies/      # Brand client sliding marquee
│   │   ├── Contact/        # Contact forms, grayscale maps, FAQs
│   │   ├── Footer/         # Responsive footer links & newsletter
│   │   ├── Hero/           # Animating main splash header
│   │   ├── Home/           # Homepage wrapper layout
│   │   ├── Navbar/         # Client routes navbar with mobile drawer
│   │   ├── Portfolio/      # Project database & responsive grid cards
│   │   ├── Services/       # Services listing & service cards
│   │   ├── Stats/          # Track record numeric counter grid
│   │   ├── Testimonials/   # Client feedback slide panels
│   │   └── WhyChooseUs/    # Reusable competitive details
│   ├── App.jsx             # SPA routes & ScrollToTop reset
│   ├── index.css           # Global custom glass & utilities classes
│   └── main.jsx            # DOM mounting & router setup
├── package.json
└── README.md
```

---

## 💻 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org) (v18 or higher) installed on your system.

### 1. Installation

Clone or extract the repository, navigate to the project directory, and install the dependencies:

```bash
npm install
```

### 2. Run Local Development Server

Start the Vite dev server locally:

```bash
npm run dev
```

Open your browser and navigate to the local address displayed in the console (usually `http://localhost:5173`).

### 3. Run ESLint Code Quality Check

Perform a static code validation run:

```bash
npm run lint
```

### 4. Build for Production

Compile and bundle the application into static assets optimized for production hosting:

```bash
npm run build
```

The compiled files will be output into the `dist/` directory.
