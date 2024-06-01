import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Contact, Hero, Navbar, Works } from "./components";
import SkillComponent from "./components/SkillComponent.jsx";
import AboutMe from "./components/AboutNew.jsx";
import Service from "./components/ProjectNew.jsx";

// Component to handle scrolling to the specific section
const ScrollToElement = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Get the ID of the target element from the pathname
        const elementId = pathname.substring(1);
        const element = document.getElementById(elementId);

        // Scroll to the element if it exists, otherwise scroll to the top
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return null;
};

const App = () => {
    return (
        <Router>
            <ScrollToElement />
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>
                <Routes>

                    <Route path="/about" element={<AboutMe />} />
                    <Route path="/work" element={<Works />} />
                    <Route path="/projects" element={<Service />} />
                    <Route path="/skills" element={<SkillComponent />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
