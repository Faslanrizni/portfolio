import React from 'react';
import '../style/style.css';
import {Helmet} from "react-helmet";
import {styles} from "../styles.js";
import {fadeIn} from "../utils/motion.js";
import {motion} from "framer-motion";

const AboutMe = () => {
    return (

        <section className="aboutMe  border-1px-orange-gold-gradient">
            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Roboto&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@200&family=Oswald&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
            </Helmet>
            <div className="row">
                <div className="container">
                    <div className="team-item-outer">
                        <div className="top-element elementAboutMe">
                            <div className="data-wrapper">
                                <h3 className="name">Faslan Rizni</h3>
                                <h4 className="designation">Computer Science Undergraduate</h4>
                                <div className="social-icon-wrapper">
                                    <ul>
                                        <li>
                                            <a href="https://github.com/Faslanrizni" target="_blank" rel="noopener noreferrer">
                                                <i className="fa fa-github" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://web.facebook.com/home.php" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/faslan-rizni-11b9a7259/" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-linkedin"></i>
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Eaque iure libero nostrum numquam, quibusdam repudiandae voluptate
                        voluptatem. Aliquid incidunt modi optio. Esse quia quis soluta!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Eaque iure libero nostrum numquam, quibusdam repudiandae voluptate
                        voluptatem. Aliquid incidunt modi optio. Esse quia quis soluta!

                    </motion.p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
