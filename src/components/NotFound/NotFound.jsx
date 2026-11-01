import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import PageHero from "../PageHero/PageHero.jsx";

const NotFound = () => {
    return (
        <main className="min-h-screen bg-background pt-20">
            <PageHero
                badge="Error 404"
                title="Page"
                highlight="Not Found"
                description="The page you're looking for doesn't exist or has been moved."
                className="min-h-[70vh] border-b-0">
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <Link to="/" className="btn-primary group">
                        Back to Home
                        <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>

                    <Link to="/contact" className="btn-secondary">
                        Contact Us
                    </Link>
                </div>
            </PageHero>
        </main>
    );
};

export default NotFound;
