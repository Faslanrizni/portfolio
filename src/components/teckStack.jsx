import React, { useRef } from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
} from "react-icons/di";
import { SiFirebase, SiNextdotjs, SiPostgresql } from "react-icons/si";
import { motion, useInView } from "framer-motion"; // Import useInView

// Add styles for hover and transition effects
const iconStyle = {
    fontSize: "2.5rem", // Default icon size
    color: "#fff",
    transition: "transform 0.3s ease, color 0.3s ease",
};

const containerStyle = {
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
};

const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", // Automatically adjust number of columns
    gap: "30px",
    justifyContent: "center",
};

const cardStyle = {
    border: "1px solid rgba(255, 0, 255, 0.5)", // Purple border
    borderRadius: "10px",
    padding: "1.5rem",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
};

const cardHoverStyle = {
    transform: "scale(1.05)", // Scaling effect on hover
    boxShadow: "0 0 15px rgba(255, 0, 255, 0.7)", // Glow effect
};

const headerStyle = {
    color: "#d987ff",
    fontSize: "2.5rem",
    fontWeight: "bold",
};

// Framer Motion variants for the staggered effect
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Delay between each child animation
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } },
};

const Techstack = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true }); // Trigger only once when in view

    return (
        <motion.div
            ref={ref}
            style={containerStyle}
            className="techstack-section"
            id={"skills"}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"} // Animate based on inView state
        >
            <div style={gridContainerStyle}>
                <TechIcon icon={<DiJavascript1 />} />
                <TechIcon icon={<DiNodejs />} />
                <TechIcon icon={<DiReact />} />
                <TechIcon icon={<DiMongodb />} />
                <TechIcon icon={<DiGit />} />
                <TechIcon icon={<SiPostgresql />} />
                <TechIcon icon={<DiPython />} />
                <TechIcon icon={<DiJava />} />
            </div>
        </motion.div>
    );
};

const TechIcon = ({ icon }) => {
    return (
        <motion.div
            style={cardStyle}
            className="tech-icon"
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = cardHoverStyle.transform;
                e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
            }}
            variants={itemVariants}
        >
            <div style={iconStyle}>{icon}</div>
        </motion.div>
    );
};

export default Techstack;
