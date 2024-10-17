import React from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeIn } from '../utils/motion'; // Assuming you have fadeIn or similar utility

const skills = [
    { name: 'HTML', width: '85%' },
    { name: 'CSS', width: '70%' },
    { name: 'JS', width: '65%' },
    { name: 'Java', width: '75%' },
    { name: 'Spring', width: '50%' },
    { name: 'Python', width: '50%' },
    { name: 'SQL', width: '60%' },
    { name: 'Angular', width: '60%' },
    { name: 'NestJS', width: '50%' },
    { name: 'Postgresql', width: '50%' },
];

const SkillComponent = () => {
    const ref = React.useRef(null); // Create a ref for the skill component
    const inView = useInView(ref, { once: true }); // Check if the component is in view

    React.useEffect(() => {
        // This effect will run when the component comes into view
        if (inView) {
            // Set skill bars to 0% initially
            skills.forEach(skill => {
                const element = document.querySelector(`.${skill.name.toLowerCase()}`);
                if (element) {
                    element.style.width = '0%'; // Start with 0% width
                }
            });

            // Trigger the animation after a slight delay
            setTimeout(() => {
                skills.forEach(skill => {
                    const element = document.querySelector(`.${skill.name.toLowerCase()}`);
                    if (element) {
                        element.style.width = skill.width; // Animate to actual width
                    }
                });
            }, 100); // Delay to ensure smooth DOM update
        }
    }, [inView]); // Dependency array to run when inView changes

    return (
        <motion.div
            ref={ref} // Attach the ref here
            variants={fadeIn('up', 'spring', 0.2, 1)} // Motion animation when entering viewport
            initial="hidden"
            animate={inView ? 'show' : 'hidden'} // Animate based on inView state
            className="bg-[#151030] text-white uppercase w-full max-w-2xl mx-auto my-12 p-8 rounded-lg sm:mx-4 md:mx-8 lg:mx-auto"
            id="skills"
        >
            <ul>
                {skills.map((skill) => (
                    <li key={skill.name} className="mb-4">
                        <h3 className="text-lg mb-2">{skill.name}</h3>
                        <div className="bg-gray-800 h-4 rounded-full overflow-hidden">
                            {/* Skill progress bar */}
                            <motion.div
                                className={`${skill.name.toLowerCase()} h-full bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-2000`}
                                initial={{ width: '0%' }} // Start with 0% width
                                animate={inView ? { width: skill.width } : { width: '0%' }} // Animate to actual width if in view
                                transition={{ duration: 1.5, delay: 0.3 * skills.indexOf(skill) }} // Delay for each skill
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export default SkillComponent;
