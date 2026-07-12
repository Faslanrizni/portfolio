import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../style/style.css';

const experiences = [
    {
        company: 'WSO2',
        role: 'Trainee Security Engineer',
        duration: 'Jun 2025 – July 2026',
        workType: 'Onsite',
        location: 'Colombo',
        employmentType: 'Full-time',
        description: [
            'Automated security tasks and workflows, built dashboards and alert monitoring for vulnerability tracking.',
            'Tested and researched centralized security guardrails for multiple software products to enforce consistent security practices.',
            'Implemented bug fixes and tested security scanners such as FOSSA, JFrog, Veracode, Trivy, and GoSec into internal workflows and pipelines.',
            'Developed customizable tools for security automation and vulnerability management.',
            'Participated in secure code reviews, application security activities, and security advisory reviews.',
        ],
        technologies: ['Appscript', 'Security Automation', 'Dashboard Development', 'Internal Tools', 'bash script', 'python'],
    },
    {
        company: 'ZeloraTech Pvt LTD',
        role: 'Intern Software Engineer',
        duration: 'Jun 2024 – Jun 2025',
        workType: 'Remote',
        location: 'Singapore',
        employmentType: 'Full-time',
        description: [
            'Contributed to major modules such as Hiring and Onboarding, developing robust backend services and collaborating with team members to fix bugs and enhance application stability.',
            'Integrated AWS SES for automated email communication and AWS S3 for file storage and management.',
            'Extended RomeoHR functionality by developing new API endpoints and refactoring legacy APIs to improve performance and usability.',
            'Implemented comprehensive error handling strategies across services and wrote optimized PostgreSQL queries for better performance and reliability.',
            'Integrated various third-party APIs and external services such as LinkedIn, Google Meet, Udemy, and Google Maps to enhance product features and usability.',
            'Collaborated with the team in an agile environment, participated in code reviews, and contributed to improving code quality and scalable backend development.',
        ],
        technologies: ['NestJS', 'NodeJS', 'TypeScript', 'KeyCloak', 'AWS SES', 'AWS S3', 'PostgreSQL'],
    },
    {
        company: 'SollydTech',
        companyLink: 'https://sollydtech.vercel.app/',
        role: 'Freelance Software Engineer & Self-employed Co-Founder',
        duration: '2024 – Present',
        workType: 'Freelance',
        location: 'Remote',
        employmentType: 'Self-employed',
        description: [
            'Built and delivered custom software solutions for clients, with a strong focus on operational efficiency and digital transformation.',
            'Worked on a comprehensive inventory management system tailored for the gem and jewelry industry, addressing pain points in inventory tracking, sales processing, customer management, vendor management, employee management, billing, and payment tracking.',
            'Focused on creating practical, scalable solutions for businesses that still rely on manual processes and fragmented systems.',
            'Collaborated closely with stakeholders to turn real-world business challenges into reliable software products.',
        ],
        technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'REST APIs', 'Business Systems'],
    },
];

const education = {
    institution: 'University of Westminster',
    degree: 'Bachelor of Science in Computer Science',
    location: 'Colombo, Sri Lanka',
    description: [
        'Informatics Institute of Technology affiliated with the University of Westminster.',
        'Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems, Machine Learning, Applied AI, and Cyber Security.',
        'Part time Final-year undergraduate.',
    ],
};

const ExperienceEducationComponent = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    return (
        <div className="mx-auto my-12 w-4/5 max-w-7xl rounded-[28px] border border-[#30363D] bg-[#161B22]/70 p-6 pt-12 text-white shadow-[0_0_40px_rgba(0,194,255,0.08)] sm:p-8 lg:p-10" id="experience">
            <div className="mb-10">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#00FF9C]"></p>
                <h2 className="text-3xl font-semibold text-[#E6EDF3] sm:text-4xl">The Story So Far</h2>
            </div>

            <div ref={ref} className="space-y-8">
                {experiences.map((item, index) => (
                    <motion.div
                        key={`${item.company}-${index}`}
                        className="relative pl-8 sm:pl-10"
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.45, delay: index * 0.1 }}
                    >
                        <div className="absolute left-0 top-2 h-3 w-3 rounded-full border-2 border-[#00C2FF] bg-[#0D1117]" />
                        <div className="absolute left-[5px] top-5 bottom-[-2rem] w-px bg-[#30363D]" />

                        <div className="rounded-[24px] border border-[#30363D] bg-[#0D1117]/90 p-5 sm:p-6">
                            <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                                <div>
                                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#00FF9C]">
                                        {item.workType} • {item.employmentType}
                                    </p>
                                    <h3 className="text-xl font-semibold text-[#E6EDF3]">
                                        {item.role}{' '}
                                        {item.companyLink ? (
                                            <a
                                                href={item.companyLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#00C2FF] transition hover:text-[#4DD7FF]"
                                            >
                                                @ {item.company}
                                            </a>
                                        ) : (
                                            <span className="text-[#00C2FF]">@ {item.company}</span>
                                        )}
                                    </h3>
                                </div>
                                <div className="text-sm text-[#8B949E] md:text-right">
                                    <p>{item.duration}</p>
                                    <p>{item.location}</p>
                                </div>
                            </div>

                            <ul className="mb-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#8B949E]">
                                {item.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {item.technologies.map((tech, i) => (
                                    <span key={i} className="rounded-full border border-[#30363D] bg-[#1C2128] px-3 py-1 text-xs text-[#C9D1D9]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}

                <motion.div
                    className="relative pl-8 sm:pl-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.45, delay: experiences.length * 0.1 }}
                >
                    <div className="absolute left-0 top-2 h-3 w-3 rounded-full border-2 border-[#00FF9C] bg-[#0D1117]" />
                    <div className="rounded-[24px] border border-[#30363D] bg-[#0D1117]/90 p-5 sm:p-6">
                        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#00FF9C]">Education</p>
                        <h3 className="text-xl font-semibold text-[#E6EDF3]">
                            {education.degree} <span className="text-[#00C2FF]">@ {education.institution}</span>
                        </h3>
                        <p className="mt-2 text-sm text-[#8B949E]">{education.location}</p>
                        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#8B949E]">
                            {education.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ExperienceEducationComponent;
