import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion'; 
import '../style/style.css';

const experiences = [
      {
    company: 'WSO2',
    role: 'Trainee Security Engineer',
    duration: 'Jun 2025 – Present',
    workType: 'Onsite',
    location: 'Colombo',
    employmentType: 'Full-time',
    description: [
        'Implemented automation for security tasks and developed internal tools to streamline security workflows.',
        'Built dashboards to visualize security metrics, monitor vulnerabilities, and support security decision-making.',
        'Performed troubleshooting and incident analysis to enhance system reliability and protection.',
        'Applied security engineering best practices in backend services and APIs to ensure secure and resilient applications.',
        'Collaborated with the team in an agile environment, participated in code reviews, and contributed to improving security processes.',
    ],
    technologies: ['Appscript', 'Security Automation', 'Dashboard Development', 'Internal Tools',],
}
,
   {
    company: 'ZeloraTech Pvt LTD',
    role: 'Trainee Software Engineer',
    duration: 'Jun 2024 – Jun 2025',
    workType: 'Remote',
    location: 'Singapore',
    employmentType: 'Full-time',
    description: [
        'Under the guidance of my team lead, contributed to major modules such as Hiring and Onboarding, developing robust backend services and collaborating with team members to fix bugs and enhance application stability.',
        'Integrated AWS SES for automated email communication and AWS S3 for file storage and management.',
        'Extended RomeoHR functionality by developing new API endpoints and refactoring legacy APIs to improve performance and usability.',
        'Implemented comprehensive error handling strategies across services and wrote optimized PostgreSQL queries for better performance and reliability.',
        'Integrated various third-party APIs and external services such as LinkedIn, Google Meet, Udemy, and Google Maps to enhance product features and usability.',
        'Collaborated with the team in an agile environment, participated in code reviews, and contributed to improving code quality and scalable backend development.',
    ],
    technologies: ['NestJS', 'NodeJS', 'TypeScript', 'KeyCloak', 'AWS SES', 'AWS S3', 'PostgreSQL', 'Postman', 'Bruno'],
},
    {
    company: 'Developers Stack Pvt LTD',
    role: 'Trainee Software Engineer',
    duration: 'Jun 2023 – Dec 2023',
    workType: 'Hybrid',
    location: 'Colombo, Sri Lanka',
    employmentType: 'Part-time',
    description: [
        'Developed and maintained web applications and APIs using the MERN stack and Spring Boot, integrating Spring Security for secure authentication and authorization.',
        'Worked with Microservices architecture, including Eureka Server for service discovery, to build scalable and maintainable systems.',
        'Collaborated with frontend and backend teams to implement efficient, high-performance features.',
        'Handled bug tracking, resolved critical production issues, and optimized application performance.',
        'Explored and applied modern Node.js development practices to enhance backend functionality and reliability.',
    ],
    technologies: ['MERN Stack', 'Spring Boot', 'Spring Security', 'Java', 'Microservices', 'Eureka Server', 'Node.js'],
}
,
];

const educations = [
    {
        institution: 'University of Westminster',
        degree: 'Bachelor of Science in Computer Science',
        location: 'Colombo, Sri Lanka',
        description: [
            'Informatics Institute of Technology affiliated with University of Westminster ',
            'Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems, Machine Learning , Applied AI , Cyber Security',
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
