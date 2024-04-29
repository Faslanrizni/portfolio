import React from 'react';
import '../style/style.css';
import {Helmet} from "react-helmet";

const AboutMe = () => {
    return (

        <section className="aboutMe">
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
                    <h1>About Me</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi, atque commodi corporis cumque earum facere nostrum odio omnis quas? Dolorem doloremque, earum inventore libero maiores quibusdam velit vitae voluptatibus? Amet, commodi labore nemo non odit placeat rerum? Assumenda atque corporis fuga in nihil vero voluptates. Placeat qui ratione sequi?</p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
