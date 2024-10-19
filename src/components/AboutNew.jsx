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
                                <h4 className="text-white text-lg font-medium">Computer Science Undergraduate</h4>*/
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
                <div className="md:w-2/3 p-6">


                    <motion.p
                        className="mt-4 text-secondary text-sm leading-6 text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1, duration: 1 }}
                    >
                        As a dedicated Software Engineer,
                        I specialize in backend development with a strong focus on technologies like NestJS and PostgreSQL,
                        while also having hands-on experience with Spring Boot and MERN stack.
                        My passion extends beyond software development into Machine Learning and Computer Vision, where I continuously explore innovative solutions.

                        Outside of tech, I am deeply committed to helping others, particularly those facing challenges in education. I believe in the power of knowledge and am always eager to assist in making learning accessible. Additionally, I have a strong interest in social work, striving to make a positive impact in my community
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
