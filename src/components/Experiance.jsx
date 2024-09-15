import React, { useEffect } from 'react';

const experiences = [
    {
        company: 'ZeloraTech Pvt LTD',
        role: 'Trainee Software Engineer',
        duration: 'Jun 2024 – Present',
        workType: 'Remote',
        location: 'Singapore',
        employmentType: 'Full-time',
        description: [
            'Developed and maintained API features for the company’s main product called RomeoHR using NestJS, NodeJS, TypeScript, KeyCloak.',
            'Collaborated with a team of developers to deliver new features within deadlines.',
            'Participated in code reviews and contributed to improving code quality.'
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
            'Developed and maintained API features for the company’s main product called RomeoHR using Spring boot, Java, Microservices.',
            'Worked closely with backend developers and designers to implement efficient and scalable systems.',
            'Handled bug tracking and solved critical issues in production.'
        ],
        technologies: ['Spring boot', 'Java', 'Microservices'],
    },
];

const ExperienceComponent = () => {
    useEffect(() => {
        const experienceCards = document.querySelectorAll('.experience-card');
        experienceCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = 1;
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, []);

    return (
        <div className=" text-white w-full max-w-4xl mx-auto my-12 p-8 rounded-lg" id="experience">
            <h1 className="text-center text-3xl mb-8 font-bold">Experience</h1>
            <ul className="space-y-8">
                {experiences.map((experience, index) => (
                    <li
                        key={index}
                        className="experience-card opacity-0 transform translate-y-12 transition-all duration-700 bg-[#1f1b3d] p-6 rounded-lg shadow-lg hover:shadow-xl"
                    >
                        <h2 className="text-2xl font-bold mb-2">
                            {experience.role} <span className="text-yellow-400">@ {experience.company}</span>
                        </h2>
                        <p className="text-gray-400 mb-4 italic">{experience.duration}</p>

                        {/* Work Type and Location */}
                        <p className="text-gray-400 mb-4">
                            <span className="font-semibold">Work Type:</span> {experience.workType}{' '}
                        </p>

                        {/* Employment Type */}
                        <p className="text-gray-400 mb-4">
                            <span className="font-semibold">Location:</span> {experience.location}
                        </p>

                        {/* Employment Type */}
                        <p className="text-gray-400 mb-4">
                            <span className="font-semibold">Employment Type:</span> {experience.employmentType}
                        </p>

                        <ul className="list-disc list-inside mb-4 space-y-2">
                            {experience.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>

                        <p className="text-sm text-gray-300">
                            <span className="font-semibold">Technologies:</span> {experience.technologies.join(', ')}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceComponent;
