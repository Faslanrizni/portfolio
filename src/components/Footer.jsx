import React from 'react';
import { Link } from 'react-router-dom';
import { CiFacebook, CiTwitter } from 'react-icons/ci';
import {FaLinkedin, FaGithub, FaInstagram, FaEnvelope} from 'react-icons/fa';

const Footer = () => {
    return (
        <section className="section footer text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-1">
                        <h6 className="text-2xl font-bold mb-4 text-purple-500">About Me</h6>
                        <p className="text-gray-300 leading-relaxed">
                            I am always ready to take on new challenges and quickly adapt to any skill set in tech. With a strong focus on digital transformation, I help businesses innovate and embrace future trends.
                        </p>
                    </div>

                    <div className="col-span-1 md:col-span-1">
                        <h6 className="text-2xl font-bold mb-4 text-purple-500">Quick Links</h6>
                        <ul className="space-y-3">
                            <li><a href="#hero" className="hover:text-purple-400 transition duration-300">Home</a></li>
                            <li><a href="#projects" className="hover:text-purple-400 transition duration-300">Services</a></li>
                            <li><a href="#work" className="hover:text-purple-400 transition duration-300">Projects</a></li>
                            <li><a href="/contact" className="hover:text-purple-400 transition duration-300">Contact Me</a></li>
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-1">
                        <h6 className="text-2xl font-bold mb-4 text-purple-500">Contact Information</h6>
                        <p className="text-gray-300 mb-3">Galle, Sri Lanka</p>
                        <p className="text-gray-300 mb-3">+94 762720321</p>
                        <a
                            href="mailto:mailto:catalystcrystal33@gmail.com"
                            className="flex items-center  gap-2 text-gray hover:text-green-800 transition"
                        >
                            <FaEnvelope size={24} />
                            <span className="text-gray-300 mb-3">Contact me via Email</span>
                        </a>
                    </div>

                    <div className="col-span-1 md:col-span-1 flex justify-center md:justify-start items-center space-x-6">
                        <Link to="#" target="_blank" className="text-gray-400 hover:text-purple-400 transition duration-300">
                            <CiFacebook className="text-3xl" />
                        </Link>
                        <Link to="https://www.linkedin.com/in/faslanrizni/" target="_blank" className="text-gray-400 hover:text-purple-400 transition duration-300">
                            <FaLinkedin className="text-3xl" />
                        </Link>
                        <Link to="https://github.com/Faslanrizni" target="_blank" className="text-gray-400 hover:text-purple-400 transition duration-300">
                            <FaGithub className="text-3xl" />
                        </Link>
                        <Link to="#" target="_blank" className="text-gray-400 hover:text-purple-400 transition duration-300">
                            <FaInstagram className="text-3xl" />
                        </Link>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8"></div>

                <div className="mt-8 text-center text-gray-400">
                    <p>&copy; 2024 FaslanRizni. All Rights Reserved.</p>
                </div>
            </div>
        </section>
    );
}

export default Footer;
