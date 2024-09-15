import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../constants';

const Works = () => {
    return (
        <div className="w-full h-auto py-10 px-12 min-h-[280px] flex justify-evenly items-center flex-col" id="work">
            <div className="container">
                <h1 className="text-4xl font-bold mb-10 text-center text-white">Projects</h1>
                <div className="projectRow flex flex-wrap justify-center gap-8">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card w-[350px] bg-black bg-opacity-60 p-5 rounded-lg shadow-lg relative transition-transform transform hover:scale-105 hover:border-purple-600 border border-gray-600"
                            style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease' }}
                        >
                            {/* Project Image */}
                            <div className="project-image mb-5 relative overflow-hidden rounded-lg">
                                <img
                                    src={project.backgroundImage}
                                    alt={project.title}
                                    className="w-full h-[200px] object-cover rounded"
                                    style={{ transition: 'transform 0.5s ease' }}
                                />
                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Project Content */}
                            <div className="project-content text-center">
                                <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-lg mb-5">{project.description}</p>

                                <div className="flex justify-center space-x-4">
                                    {/* GitHub Button */}
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded transition"
                                        style={{ transition: 'background-color 0.3s ease, transform 0.3s ease' }}
                                    >
                                        <FaGithub className="inline-block mr-2" /> GitHub
                                    </a>
                                    {/* Demo Button if available */}
                                    {project.demoLink && (
                                        <a
                                            href={project.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded transition"
                                            style={{ transition: 'background-color 0.3s ease, transform 0.3s ease' }}
                                        >
                                            Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Works;
