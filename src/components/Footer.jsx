import React from 'react';
import { Link } from 'react-router-dom';
import { CiFacebook, CiTwitter } from 'react-icons/ci';
import {FaLinkedin, FaGithub, FaInstagram, FaEnvelope} from 'react-icons/fa';

const Footer = () => {
    return (
        <section className="section footer py-12 text-white">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid gap-10 rounded-[28px] border border-[#30363D] bg-[#161B22]/70 p-8 md:grid-cols-4">
                    <div className="md:col-span-1">
                        <h6 className="mb-4 text-2xl font-semibold text-[#00FF9C]">About</h6>
                        <p className="leading-relaxed text-[#8B949E]">
                            I build secure systems, explore application security, and enjoy turning complex technical problems into reliable engineering solutions.
                        </p>
                    </div>

                    <div className="md:col-span-1">
                        <h6 className="mb-4 text-2xl font-semibold text-[#00FF9C]">Quick Links</h6>
                        <ul className="space-y-3 text-[#8B949E]">
                            <li><a href="#hero" className="transition duration-300 hover:text-[#00C2FF]">Home</a></li>
                            <li><a href="#projects" className="transition duration-300 hover:text-[#00C2FF]">Services</a></li>
                            <li><a href="#work" className="transition duration-300 hover:text-[#00C2FF]">Projects</a></li>
                            <li><a href="#contact" className="transition duration-300 hover:text-[#00C2FF]">Contact</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-1">
                        <h6 className="mb-4 text-2xl font-semibold text-[#00FF9C]">Contact</h6>
                        <p className="mb-3 text-[#8B949E]">Galle, Sri Lanka</p>
                        <p className="mb-3 text-[#8B949E]">+94 762720321</p>
                        <a
                            href="mailto:catalystcrystal33@gmail.com"
                            className="flex items-center gap-2 text-[#8B949E] transition hover:text-[#00C2FF]"
                        >
                            <FaEnvelope size={20} />
                            <span>Contact via Email</span>
                        </a>
                    </div>

                    <div className="flex items-center justify-center space-x-6 md:justify-start">
                        <Link to="#" target="_blank" className="text-[#8B949E] transition duration-300 hover:text-[#00C2FF]">
                            <CiFacebook className="text-3xl" />
                        </Link>
                        <Link to="https://www.linkedin.com/in/faslanrizni/" target="_blank" className="text-[#8B949E] transition duration-300 hover:text-[#00C2FF]">
                            <FaLinkedin className="text-3xl" />
                        </Link>
                        <Link to="https://github.com/Faslanrizni" target="_blank" className="text-[#8B949E] transition duration-300 hover:text-[#00C2FF]">
                            <FaGithub className="text-3xl" />
                        </Link>
                        <Link to="#" target="_blank" className="text-[#8B949E] transition duration-300 hover:text-[#00C2FF]">
                            <FaInstagram className="text-3xl" />
                        </Link>
                    </div>
                </div>

                <div className="mt-8 border-t border-[#30363D]" />

                <div className="mt-8 text-center text-[#8B949E]">
                    <p>&copy; 2026 Faslan Rizni. All Rights Reserved.</p>
                </div>
            </div>
        </section>
    );
}

export default Footer;
