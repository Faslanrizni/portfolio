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
    const role = "Software Engineer, Cyber Security Enthusiast".split('');
    const welcomeText = "Welcome, seeker. Dive into the world of my portfolio!".split('');

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4" id="hero">
            <motion.div
                className="relative mb-4"
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
                className="text-4xl font-bold mb-2 flex flex-wrap justify-center"
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
                className="text-4xl font-bold mb-2 flex flex-wrap justify-center"
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
                className="text-xl mb-8 flex flex-wrap justify-center"
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

            <div className="flex space-x-4">
                <a href="#work">
                    <motion.button
                        className="px-4 py-2 bg-[#1f1b3d] text-white rounded hover:bg-orange-700 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 4, duration: 0.5 }}
                    >
                        Projects
                    </motion.button>
                </a>
                <a href="#projects">
                    <motion.button
                        className="px-4 py-2 bg-[#1f1b3d] text-white rounded hover:bg-orange-700 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 4.2, duration: 0.5 }}
                    >
                        Services
                    </motion.button>
                </a>
                <a href="#projects">
                    <motion.button
                        className="px-4 py-2 bg-[#1f1b3d] text-white rounded hover:bg-orange-700 transition-colors"
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