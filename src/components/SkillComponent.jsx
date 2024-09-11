import React, { useEffect } from 'react';
// import '../style/tailwind.css';

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
        skills.forEach(skill => {
            const element = document.querySelector(`.${skill.name.toLowerCase()}`);
            element.style.width = skill.width;
        });
    }, []);

    return (
        <div className="bg-[#151030] text-white uppercase w-full max-w-2xl mx-auto my-12 p-8 rounded-lg" id={"skills"}>
            <h1 className="text-center text-3xl mb-8">My Skill</h1>
            <ul>
                {skills.map((skill) => (
                    <li key={skill.name} className="mb-4">
                        <h3 className="text-lg mb-2">{skill.name}</h3>
                        <div className="bg-gray-800 h-4 rounded-full overflow-hidden">
                            <div className={`${skill.name.toLowerCase()} h-full bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-2000`}></div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SkillComponent;
