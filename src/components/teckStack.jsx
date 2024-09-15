import React from "react";
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
import {
    SiRedis,
    SiFirebase,
    SiNextdotjs,
    SiSolidity,
    SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

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

const Techstack = () => {
    return (
        <div style={containerStyle} className="techstack-section" id={"skills"}>
            <h2 className="text-center mb-5" style={headerStyle}>
                Professional <span style={{ color: "#f72eac" }}>Skillset</span>
            </h2>
            <div style={gridContainerStyle}>
                <TechIcon icon={<CgCPlusPlus />} />
                <TechIcon icon={<DiJavascript1 />} />
                <TechIcon icon={<TbBrandGolang />} />
                <TechIcon icon={<DiNodejs />} />
                <TechIcon icon={<DiReact />} />
                <TechIcon icon={<SiSolidity />} />
                <TechIcon icon={<DiMongodb />} />
                <TechIcon icon={<SiNextdotjs />} />
                <TechIcon icon={<DiGit />} />
                <TechIcon icon={<SiFirebase />} />
                <TechIcon icon={<SiRedis />} />
                <TechIcon icon={<SiPostgresql />} />
                <TechIcon icon={<DiPython />} />
                <TechIcon icon={<DiJava />} />
            </div>
        </div>
    );
};

// Separate component for Tech Icons with hover effect
const TechIcon = ({ icon }) => {
    return (
        <div
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
        >
            <div style={iconStyle}>{icon}</div>
        </div>
    );
};

export default Techstack;
