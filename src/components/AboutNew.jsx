import React from 'react';
import '../style/style.css';
import {Helmet} from "react-helmet";
import {styles} from "../styles.js";
import {fadeIn} from "../utils/motion.js";
import {motion} from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import aput from '../assets/aput.jpg';

const AboutMe = () => {

    return (
        <section className="aboutMe w-4/5 mx-auto pt-20 pb-12 " id="about">
            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Roboto&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@200&family=Oswald&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
            </Helmet>
            <div className="row flex flex-col md:flex-row max-w-8xl mx-auto shadow-lg {/*bg-gray-800*/} rounded-lg overflow-hidden">
                <div className="container md:w-1/3">
                    <div className="team-item-outer" style={{ backgroundImage: `url(${aput})` }}>
                        <div className="top-element elementAboutMe">
                            <div className="data-wrapper">
                                <h3 className="text-white-100 text-xl font-semibold ">Faslan Rizni</h3>
                                <h4 className="text-white text-lg font-medium">Security Engineer</h4>
                                <div className="w-full h-16 flex items-center justify-center">
                                    <ul className="flex list-none m-0 p-0">
                                        <li className="mr-4 text-white">
                                            <a href="https://github.com/Faslanrizni" target="_blank" rel="noopener noreferrer">
                                                <FaGithub />
                                            </a>
                                        </li>
                                        <li className="mr-4 text-white">
                                            <a href="https://web.facebook.com/home.php" target="_blank" rel="noopener noreferrer">
                                                <CiFacebook />
                                            </a>
                                        </li>
                                        <li className="mr-4 text-white">
                                            <a href="https://www.linkedin.com/in/faslan-rizni-11b9a7259/" target="_blank" rel="noopener noreferrer">
                                                <CiLinkedin />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-element elementAboutMe"></div>
                    </div>
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                    <motion.p
                        className="mt-4 text-secondary text-sm leading-7 text-gray-300 text-left align-middle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1, duration: 1 }}
                    >
                        I’m a Security Engineer focused on Application Security, security automation, and building resilient software systems. My experience includes vulnerability management, security guardrails, secure code reviews, security tooling, and integrating security scanners into development workflows.

I enjoy researching vulnerabilities, exploring real-world attack techniques, and building practical defenses that help developers create more secure software. I’m particularly interested in Application Security, Product Security, DevSecOps, and cybersecurity research
                    </motion.p>

                    {/* Social Icons */}
                    <div className="mt-4 flex space-x-4">
                        <a
                            href="https://github.com/Faslanrizni"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-2xl"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://web.facebook.com/home.php"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-2xl"
                        >
                            <CiFacebook />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/faslan-rizni-11b9a7259/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-2xl"
                        >
                            <CiLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
