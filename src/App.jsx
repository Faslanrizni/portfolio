import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Hero, Navbar, Works } from "./components";
import SkillComponent from "./components/SkillComponent.jsx";
import AboutMe from "./components/AboutNew.jsx";
import Service from "./components/ProjectNew.jsx";
import Experience from "./components/Experiance.jsx";
import Techstack from "./components/teckStack"
import Footer from "./components/Footer.jsx";
import gem from "./components/gem.jsx";
// import Toolstack from "./components/toolstack.jsx";

// eslint-disable-next-line react/prop-types
const Section = ({id,Component})=>(
    <section id={'id'} className={'py-20'}>
        <Component/>
    </section>
);

// Component to handle scrolling to the specific section
const ScrollToElement = () => {
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.scrollY + 100; // Adjust offset as needed

            sections.forEach((section) => {
                if (
                    scrollPosition >= section.offsetTop &&
                    scrollPosition < section.offsetTop + section.offsetHeight
                ) {
                    history.replaceState(null, null, `/${section.id}`);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                <div>
                    <Section id="projects" Component={Service} />
                    <Section id="skills" Component={Techstack} />
                    <Section id="skills" Component={SkillComponent} />
                    <Section id="about" Component={AboutMe} />
                    <Section id="experience" Component={Experience} />
                    <Section id="work" Component={Works} />
                    <Section id="work" Component={gem} />
                    <Section id="contact" Component={Footer} />
                </div>
            </div>
        </Router>
    );
};

export default App;
