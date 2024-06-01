import React from 'react';
import '../style/style.css';
import {Helmet} from "react-helmet";
import {styles} from "../styles.js";
import {fadeIn} from "../utils/motion.js";
import {motion} from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const AboutMe = () => {
    return (

        <section className="aboutMe " id="about">
            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Roboto&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@200&family=Oswald&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
            </Helmet>
            <div className="row">
                <div className="container">
                    <div className="team-item-outer">
                        <div className="top-element elementAboutMe">
                            <div className="data-wrapper">
                                <h3 className="text-white-100 text-xl font-semibold ">Faslan Rizni</h3>
                                <h4 className="text-white text-lg font-medium">Computer Science Undergraduate</h4>
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
                <div className="aboutCol">
                    <h1 className={styles.sectionHeadText}>About Me</h1>
                    <motion.p variants={fadeIn("","",0.1,1)}
                              className={'mt-4 text-secondary text-[17px]' +
                                  'max-w-3xl leading-[30px]'}
                    >
                        I possess extensive knowledge and hands-on experience in Spring Boot, Spring Security, Spring Microservices,
                        and MERN stack technologies.
                        Additionally, I am deeply passionate about machine learning and continuously strive to explore its applications.

                    </motion.p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
