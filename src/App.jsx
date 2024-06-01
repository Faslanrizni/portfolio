import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contact, Hero, Navbar, Works } from "./components";
import SkillComponent from "./components/SkillComponent.jsx";
import AboutMe from "./components/AboutNew.jsx";
import ProjectNew from "./components/ProjectNew.jsx";

const App = () => {
    return (
        <Router>
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/about" element={<AboutMe />} />
                    <Route path="/work" element={<Works />} />
                    <Route path="/projects" element={<ProjectNew />} />
                    <Route path="/skills" element={<SkillComponent />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
