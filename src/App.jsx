import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route
                    path="/"
                    element={
                        <main className="min-h-screen bg-background pt-20">
                            <h1 className="text-center text-4xl font-bold text-text-primary">
                                Home Page
                            </h1>
                        </main>
                    }
                />

                <Route
                    path="/about"
                    element={
                        <main className="min-h-screen bg-background pt-20">
                            <h1 className="text-center text-4xl font-bold text-text-primary">
                                About Page
                            </h1>
                        </main>
                    }
                />

                <Route
                    path="/services"
                    element={
                        <main className="min-h-screen bg-background pt-20">
                            <h1 className="text-center text-4xl font-bold text-text-primary">
                                Services Page
                            </h1>
                        </main>
                    }
                />

                <Route
                    path="/portfolio"
                    element={
                        <main className="min-h-screen bg-background pt-20">
                            <h1 className="text-center text-4xl font-bold text-text-primary">
                                Portfolio Page
                            </h1>
                        </main>
                    }
                />

                <Route
                    path="/contact"
                    element={
                        <main className="min-h-screen bg-background pt-20">
                            <h1 className="text-center text-4xl font-bold text-text-primary">
                                Contact Page
                            </h1>
                        </main>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
