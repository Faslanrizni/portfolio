import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion'; // Import useInView from framer-motion
import '../style/style.css';

const experiences = [
    {
        company: 'ZeloraTech Pvt LTD',
        role: 'Trainee Software Engineer',
        duration: 'Jun 2024 – Present',
        workType: 'Remote',
        location: 'Singapore',
        employmentType: 'Full-time',
        description: [
            'Developed and maintained API features for the company main product called RomeoHR using NestJS, NodeJS, TypeScript, KeyCloak.',
            'Collaborated with a team of developers to deliver new features within deadlines.',
            'Participated in code reviews and contributed to improving code quality.',
        ],
        technologies: ['NestJS', 'NodeJS', 'TypeScript', 'KeyCloak'],
    },
    {
        company: 'Developers Stack Pvt LTD',
        role: 'Trainee Software Engineer',
        duration: 'Jun 2023 – Dec 2023',
        workType: 'High-bride',
        location: 'Colombo, Sri Lanka',
        employmentType: 'Part-time',
        description: [
            'Developed and maintained API features for the company main product called RomeoHR using Spring boot, Java, Microservices.',
            'Worked closely with backend developers and designers to implement efficient and scalable systems.',
            'Handled bug tracking and solved critical issues in production.',
        ],
        technologies: ['Spring boot', 'Java', 'Microservices'],
    },
];

const educations = [
    {
        institution: 'University of Westminster',
        degree: 'Bachelor of Science in Computer Science',
        location: 'Colombo, Sri Lanka',
        description: [
            'Informatic Institute of Technology affiliated with University of Westminster ',
            'Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems',
            'Third year Undergraduate',
        ],
    },
];

const ExperienceEducationComponent = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true }); // Trigger only once when in view

    const renderCards = (items, type) => (
        <ul className="space-y-8">
            {items.map((item, index) => (
                <motion.li
                    key={index}
                    className="animate-card opacity-0 transform translate-y-12 transition-all duration-700  p-[1px] rounded-[20px] shadow-lg hover:shadow-xl border-gradient"
                    initial={{ opacity: 0, translateY: 50 }} // Initial state for animation
                    animate={inView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 50 }} // Animate based on inView
                    transition={{ duration: 0.5, delay: index * 0.1 }} // Delay for staggered effect
                >
                    <div className="bg-[#1f1b3d] p-6 rounded-[20px]">
                        <h2 className="text-xl font-bold mb-2">
                            {type === 'experience' ? (
                                <>
                                    {item.role} <span className="text-yellow-400">@ {item.company}</span>
                                </>
                            ) : (
                                <>
                                    {item.degree} <span className="text-yellow-400">@ {item.institution}</span>
                                </>
                            )}
                        </h2>
                        <p className="text-gray-400 mb-2 italic text-sm">{item.duration}</p>
                        <p className="text-gray-400 mb-2 text-sm">
                            <span className="font-semibold">Location:</span> {item.location}
                        </p>
                        {type === 'experience' && (
                            <>
                                <p className="text-gray-400 mb-2 text-sm">
                                    <span className="font-semibold">Work Type:</span> {item.workType}
                                </p>
                                <p className="text-gray-400 mb-2 text-sm">
                                    <span className="font-semibold">Employment Type:</span> {item.employmentType}
                                </p>
                            </>
                        )}
                        <ul className="list-disc list-inside mb-2 space-y-1 text-sm">
                            {item.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>
                        {type === 'experience' && (
                            <p className="text-xs text-gray-300">
                                <span className="font-semibold">Technologies:</span> {item.technologies.join(', ')}
                            </p>
                        )}
                    </div>
                </motion.li>
            ))}
        </ul>
    );

    return (
        <div className="aboutMe w-4/5 mx-auto pt-20 pb-12 text-white w-full max-w-7xl mx-auto my-12 p-8 rounded-lg" id="about">
            {/*<h1 className="text-center text-3xl mb-8 font-bold">About me</h1>*/}
            <div className="flex flex-col md:flex-row gap-8" ref={ref}>
                <section id="experience" className="w-full md:w-1/2">
                    <h2 className="text-center text-2xl mb-6 font-semibold">Experience</h2>
                    {renderCards(experiences, 'experience')}
                </section>
                <section id="education" className="w-full md:w-1/2">
                    <h2 className="text-center text-2xl mb-6 font-semibold">Education</h2>
                    {renderCards(educations, 'education')}
                </section>
            </div>
        </div>
    );
};

export default ExperienceEducationComponent;
