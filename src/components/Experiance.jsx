import React, { useEffect, useRef } from 'react';
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
       "Automated security tasks and workflows, built dashboards and alert monitoring for vulnerability tracking.",
       "Tested and researched centralized security guardrails for multiple software products to enforce consistent security practices.",
       "Implemented bug fixes and tested security scanners such as FOSSA, JFrog, Veracode, Trivy, and GoSec into internal workflows and pipelines.",
       "Developed customizable tools for security automation and vulnerability management.",
       "Participated in secure code reviews, application security activities, and security advisory reviews.",
       "Contributed to the development of a centralized security portal for managing security-related workflows.",

    ],
    technologies: ['Appscript', 'Security Automation', 'Dashboard Development', 'Internal Tools','bash script','python'],
}
,
   {
    company: 'ZeloraTech Pvt LTD',
    role: 'Intern Software Engineer',
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
}
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
    const inView = useInView(ref, { once: true });

    const renderCards = (items, type) => (
        <ul className="space-y-8">
            {items.map((item, index) => (
                <motion.li
                    key={index}
                    className="rounded-[24px] border border-[#30363D] bg-[#161B22]/90 p-[1px] shadow-[0_0_30px_rgba(0,194,255,0.08)]"
                    initial={{ opacity: 0, translateY: 50 }}
                    animate={inView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 50 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <div className="rounded-[24px] bg-[#0D1117] p-6">
                        <div className="mb-3 flex items-center justify-between gap-3">
                            <span className="rounded-full border border-[#00FF9C]/30 bg-[#00FF9C]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#00FF9C]">
                                {type === 'experience' ? 'Experience' : 'Education'}
                            </span>
                            <span className="text-sm text-[#8B949E]">{item.duration}</span>
                        </div>
                        <h2 className="mb-2 text-xl font-semibold text-[#E6EDF3]">
                            {type === 'experience' ? (
                                <>
                                    {item.role} <span className="text-[#00C2FF]">@ {item.company}</span>
                                </>
                            ) : (
                                <>
                                    {item.degree} <span className="text-[#00C2FF]">@ {item.institution}</span>
                                </>
                            )}
                        </h2>
                        <p className="mb-3 text-sm text-[#8B949E]">
                            <span className="font-semibold text-[#E6EDF3]">Location:</span> {item.location}
                        </p>
                        {type === 'experience' && (
                            <div className="mb-3 flex flex-wrap gap-2 text-sm text-[#8B949E]">
                                <span className="rounded-full bg-[#1C2128] px-3 py-1">{item.workType}</span>
                                <span className="rounded-full bg-[#1C2128] px-3 py-1">{item.employmentType}</span>
                            </div>
                        )}
                        <ul className="mb-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#8B949E]">
                            {item.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>
                        {type === 'experience' && (
                            <p className="text-xs leading-6 text-[#8B949E]">
                                <span className="font-semibold text-[#E6EDF3]">Technologies:</span> {item.technologies.join(', ')}
                            </p>
                        )}
                    </div>
                </motion.li>
            ))}
        </ul>
    );

    return (
        <div className="mx-auto my-12 w-4/5 max-w-7xl rounded-[28px] border border-[#30363D] bg-[#161B22]/70 p-8 pt-20 pb-12 text-white shadow-[0_0_40px_rgba(0,194,255,0.08)]" id="about">
            <div className="mb-10 text-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#00FF9C]">Profile</p>
                <h2 className="text-3xl font-semibold text-[#E6EDF3]">Experience & Education</h2>
            </div>
            <div className="flex flex-col gap-8 md:flex-row" ref={ref}>
                <section id="experience" className="w-full md:w-1/2">
                    {renderCards(experiences, 'experience')}
                </section>
                <section id="education" className="w-full md:w-1/2">
                    {renderCards(educations, 'education')}
                </section>
            </div>
        </div>
    );
};

export default ExperienceEducationComponent;
