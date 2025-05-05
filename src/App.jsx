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

const Section = ({id, Component}) => (
    <section id={id} className={'py-20'}>
        <Component/>
    </section>
);

const ScrollToElement = () => {
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.scrollY + 100;

            sections.forEach((section) => {
                if (
                    scrollPosition >= section.offsetTop &&
                    scrollPosition < section.offsetTop + section.offsetHeight
                ) {
                    history.replaceState(null, null, `#${section.id}`);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const hash = location.hash.replace('#', '');
        if (hash) {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

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
                    <Section id="contact" Component={SkillComponent} />
                    <Section id="about" Component={AboutMe} />
                    <Section id="experience" Component={Experience} />
                    <Section id="work" Component={Works} />
                    {/* <Section id="gem" Component={gem} /> */}
                    <Section id="contact" Component={Footer} />

                </div>
            </div>
        </Router>
    );
};

export default App;