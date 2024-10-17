import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';

const PersonalInfo = () => {
    return (
        <div className=" p-6 rounded-lg shadow-lg text-white mb-8">
            <p className="mb-4">
                I am a front-end developer based in Brazil, passionate about
                UX/UI, JavaScript, and my two favorite forms of expression:
                design and coding!
                Additionally, I am a tabletop RPG master, where I do my best
                to guide players through an incredible adventure!
                I have 4+ years of experience in the software industry, where
                I have undertaken various types of work including freelancing,
                software development in a robotics team, and currently hold a
                position as a Software Engineer at PicPay :D.
            </p>

            <h2 className="text-xl font-bold mb-2">Contact Info</h2>
            <ul className="space-y-1">
                <li><strong>Full Name:</strong> Lucas Lima do Nascimento</li>
                <li><strong>Phone:</strong> +5517982315206</li>
                <li><strong>E-Mail:</strong> hello@llxd.eu</li>
                <li><strong>Birthdate:</strong> 08/02/1999</li>
            </ul>

            <div className="mt-4 flex space-x-4">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                    <FaGithub size={24} />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                    <CiLinkedin size={24} />
                </a>
                <a href="https://dev.to/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 font-bold">
                    DEV
                </a>
            </div>
        </div>
    );
};

export default PersonalInfo;