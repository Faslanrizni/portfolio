import React, { useEffect } from 'react';

const skills = [
    { name: 'HTML', width: '85%' },
    { name: 'CSS', width: '70%' },
    { name: 'Java', width: '75%' },
    { name: 'Spring', width: '50%' },
    { name: 'Python', width: '50%' },
    { name: 'SQL', width: '60%' },
    { name: 'Angular', width: '60%' },
];

const SkillComponent = () => {
    useEffect(() => {
        // Set skill bars to 0% to prepare for the animation
        skills.forEach(skill => {
            const element = document.querySelector(`.${skill.name.toLowerCase()}`);
            if (element) {
                element.style.width = '0%'; // Reset width to 0%
            }
        });

        // Trigger the animation after a short delay
        setTimeout(() => {
            skills.forEach(skill => {
                const element = document.querySelector(`.${skill.name.toLowerCase()}`);
                if (element) {
                    element.style.width = skill.width; // Set the actual width to trigger the animation
                }
            });
        }, 100); // Delay to ensure the DOM is updated before the animation starts

    }, []); // This useEffect will run once when the component mounts (on navigation)

    return (
        <div className="bg-[#151030] text-white uppercase w-full max-w-2xl mx-auto my-12 p-8 rounded-lg sm:mx-4 md:mx-8 lg:mx-auto" id={"skills"}>
            <ul>
                {skills.map((skill) => (
                    <li key={skill.name} className="mb-4">
                        <h3 className="text-lg mb-2">{skill.name}</h3>
                        <div className="bg-gray-800 h-4 rounded-full overflow-hidden">
                            <div className={`${skill.name.toLowerCase()} h-full bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-2000`} style={{ width: '0%' }}></div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SkillComponent;
