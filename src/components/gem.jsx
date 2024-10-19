import React from 'react';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';

const GemInterestComponent = () => {
    return (
        <section className=" from-gray-100 to-gray-200 py-12">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <h2 className="text-4xl font-bold text-center text-white mb-6">
                    My Passion Beyond Tech: Gems & Jewelry
                </h2>
                <p className="text-center text-lg  mb-12  text-secondary  leading-6 text-gray-300">
                    Besides my career in tech, I'm deeply fascinated by the beauty of gems and jewelry. I love exploring and learning about the different types of gems from around the world.
                    It's a journey that keeps me captivated, from understanding gemstone cuts and origins to appreciating their value.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <div className="{/*bg-[#151030]*/} shadow-lg rounded-lg p-8 md:w-2/5">
                        <img
                            src="src/assets/gem1.jpg"  // Replace with your actual image
                            alt="Gem Collection"
                            className="rounded-lg mb-4"
                        />
                        <p className="text-lg text-gray-300 mb-4">
                            Discover my gem collection and more insights on gemstones. If you're interested in gems and jewelry, feel free to connect with me through Instagram!
                        </p>
                        <a
                            href="https://www.instagram.com/gem_catalyst/"  // Replace with your Instagram URL
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-800 transition"
                        >
                            <FaInstagram size={24} />
                            <span className="text-xl font-semibold">Follow me on Instagram</span>
                        </a>
                    </div>

                    <div className="{/*bg-[#151030]*/} shadow-lg rounded-lg p-8 md:w-2/5">
                        <img
                            src="src/assets/mail.jpg"  // Replace with your actual image
                            alt="call me"
                            className="rounded-lg mb-4"
                        />
                        <p className="text-lg text-gray-300 mb-6">
                            Interested in gems or want to explore collaborations? Reach out to me directly via email. I’m always open to discussing the fascinating world of gems!
                        </p>
                        <a
                            href="mailto:mailto:catalystcrystal33@gmail.com"
                            className="flex items-center justify-center gap-2 text-green-600 hover:text-green-800 transition"
                        >
                            <FaEnvelope size={24} />
                            <span className="text-xl font-semibold">Contact me via Email</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GemInterestComponent;
