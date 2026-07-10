import React from 'react';
import { motion } from 'framer-motion';
import aput from '../assets/aput.jpg';
// Enhanced animation variants for the letters
const letterAnimation = {
    hidden: { opacity: 0, y: 50, textShadow: "0px 0px 0px rgba(255, 165, 0, 0)" },
    visible: {
        opacity: 1,
        y: 0,
        textShadow: "2px 2px 8px rgba(255, 165, 0, 0.7)",
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 200,
        },
    },
};

const containerAnimation = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Time between animations of each letter
        },
    },
};

const Hero = () => {
    const name = "Faslan Rizni".split('');
    const role = "Security Engineer | Software Developer".split('');
    const welcomeText = "Defending systems, building resilient tools".split('');
    const welcomeTextSecond = "exploring the edge of modern security.".split('');

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden" id="hero">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,123,0,0.15),_transparent_45%)]" />
            <motion.div
                className="relative mb-4 z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.img
                    src={aput}
                    alt="Faslan Rizni"
                    className="w-32 h-32 rounded-full"
                />
                <motion.div
                    className="absolute inset-0 rounded-full border-4 border-orange-600"
                    initial={{ scale: 1.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                />
            </motion.div>

            {/* Animate the name with staggered letter animation */}
            <motion.h1
                className="hidden lg:flex text-4xl font-bold mb-2 flex-wrap justify-center text-orange-300 tracking-[0.2em] uppercase"
                variants={containerAnimation}
                initial="hidden"
                animate="visible"
            >
                {name.map((letter, index) => (
                    <motion.span
                        key={index}
                        variants={letterAnimation}
                        className="inline-block mx-[1px]"
                    >
                        {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                ))}
            </motion.h1>
            <motion.h1
                className="hidden lg:flex text-4xl font-bold mb-2 flex-wrap justify-center text-white"
                variants={containerAnimation}
                initial="hidden"
                animate="visible"
            >
                {role.map((letter, index) => (
                    <motion.span
                        key={index}
                        variants={letterAnimation}
                        className="inline-block mx-[1px]"
                    >
                        {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                ))}
            </motion.h1>

            {/* Animate the welcome text with staggered letter animation */}
            <motion.p
                className="hidden lg:flex text-xl mb-2 flex-wrap justify-center text-gray-300 max-w-2xl text-center"
                variants={containerAnimation}
                initial="hidden"
                animate="visible"
            >
                {welcomeText.map((letter, index) => (
                    <motion.span
                        key={index}
                        variants={letterAnimation}
                        className="inline-block mx-[0.5px]"
                    >
                        {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                ))}
            </motion.p>
            <motion.p
                className="hidden lg:flex text-xl mb-8 flex-wrap justify-center text-gray-300 max-w-2xl text-center"
                variants={containerAnimation}
                initial="hidden"
                animate="visible"
            >
                {welcomeTextSecond.map((letter, index) => (
                    <motion.span
                        key={index}
                        variants={letterAnimation}
                        className="inline-block mx-[0.5px]"
                    >
                        {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                ))}
            </motion.p>

            <div className="flex flex-wrap justify-center gap-3 z-10">
                <a href="#work">
                    <motion.button
                        className="px-4 py-2 bg-[#1f1b3d] border border-orange-500/40 text-white rounded hover:bg-orange-700 transition-colors shadow-[0_0_20px_rgba(255,123,0,0.15)]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 4, duration: 0.5 }}
                    >
                        Projects
                    </motion.button>
                </a>
                <a href="#projects">
                    <motion.button
                        className="px-4 py-2 bg-[#1f1b3d] border border-orange-500/40 text-white rounded hover:bg-orange-700 transition-colors shadow-[0_0_20px_rgba(255,123,0,0.15)]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 4.2, duration: 0.5 }}
                    >
                        Services
                    </motion.button>
                </a>
                <a href="#projects">
                    <motion.button
                        className="px-4 py-2 bg-[#1f1b3d] border border-orange-500/40 text-white rounded hover:bg-orange-700 transition-colors shadow-[0_0_20px_rgba(255,123,0,0.15)]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 4.4, duration: 0.5 }}
                    >
                        Resume
                    </motion.button>
                </a>
            </div>
        </div>
    );
}

export default Hero;