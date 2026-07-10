import React, { useRef } from "react";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
} from "react-icons/di";
import {
    SiFirebase,
    SiPostgresql,
    SiMysql,
    SiTypescript,
    SiNestjs,
    SiSpringboot,
    SiR,
    SiKalilinux,
    SiMetasploit,
    SiWireshark,
    SiBurpsuite,
} from "react-icons/si";
import { motion, useInView } from "framer-motion";

const iconStyle = {
    fontSize: "2.5rem",
    color: "#E6EDF3",
    transition: "transform 0.3s ease, color 0.3s ease",
};

const containerStyle = {
    padding: "2rem",
    borderRadius: "24px",
    boxShadow: "0 0 30px rgba(0, 194, 255, 0.08)",
};

const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "24px",
    justifyContent: "center",
};

const cardStyle = {
    border: "1px solid rgba(48, 54, 61, 0.9)",
    borderRadius: "16px",
    padding: "1.5rem",
    textAlign: "center",
    background: "rgba(22, 27, 34, 0.9)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
};

const cardHoverStyle = {
    transform: "translateY(-4px)",
    boxShadow: "0 0 20px rgba(0, 255, 156, 0.16)",
    borderColor: "rgba(0, 255, 156, 0.4)",
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
            className="techstack-section rounded-[28px] border border-[#30363D] bg-[#161B22]/70 p-6 shadow-[0_0_40px_rgba(0,194,255,0.08)]"
            id={"skills"}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <div className="mb-8 text-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#00FF9C]">Stack</p>
                <h2 className="text-3xl font-semibold text-[#E6EDF3]">Security & Engineering Toolkit</h2>
            </div>
            <div style={gridContainerStyle}>
                {/* Full stack development */}
                <TechIcon icon={<DiJavascript1 />} />
                <TechIcon icon={<SiTypescript />} />
                <TechIcon icon={<DiNodejs />} />
                <TechIcon icon={<SiNestjs />} />
                <TechIcon icon={<DiReact />} />
                <TechIcon icon={<DiJava />} />
                <TechIcon icon={<SiSpringboot />} />
                <TechIcon icon={<DiGit />} />

                {/* Machine learning */}
                <TechIcon icon={<DiPython />} />
                <TechIcon icon={<SiR />} />

                {/* Cyber security */}
                <TechIcon icon={<SiKalilinux />} />
                  <TechIcon icon={<SiMetasploit />} />
                <TechIcon icon={<SiBurpsuite />} />
                <TechIcon icon={<SiWireshark />} />

                {/* Databases */}
                <TechIcon icon={<DiMongodb />} />
                <TechIcon icon={<SiPostgresql />} />
                <TechIcon icon={<SiMysql />} />
                <TechIcon icon={<SiFirebase />} />
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