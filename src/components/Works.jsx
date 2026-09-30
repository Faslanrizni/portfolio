import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../constants';

const Works = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const categories = ['All', 'Security', 'Backend', 'Product'];
    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter((project) => project.category === activeCategory);

    return (
        <div className="w-full h-auto py-10 px-12 min-h-[280px] flex justify-evenly items-center flex-col" id="work">
            <div className="container">
                <div className="mb-10 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">Software, product & security</p>
                    <h1 className="text-4xl font-bold text-center text-white">Selected Engineering Projects</h1>
                    <p className="mx-auto mt-4 max-w-2xl text-gray-300">
                        A selection of security tooling, backend systems, and products I have helped build.
                    </p>
                </div>
                <div className="mb-8 flex flex-wrap justify-center gap-3" aria-label="Filter projects by category">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            onClick={() => setActiveCategory(category)}
                            aria-pressed={activeCategory === category}
                            className={`rounded border px-4 py-2 text-sm font-medium transition-colors ${
                                activeCategory === category
                                    ? 'border-orange-400 bg-orange-500 text-white'
                                    : 'border-gray-600 text-gray-300 hover:border-orange-400 hover:text-white'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="projectRow flex flex-wrap justify-center gap-8">

                    {filteredProjects.map((project) => (
                        <div
                            key={project.title}
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
                                <span className="mb-3 inline-block rounded-full border border-orange-500/40 px-3 py-1 text-xs font-medium text-orange-300">
                                    {project.category}
                                </span>
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
