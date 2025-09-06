import React, { useState } from 'react';
import { FaGithub, FaLink, FaTimes, FaGraduationCap } from 'react-icons/fa';

function ProjectDetail({ project }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="max-w-full">
            {/* Header Section */}
            <div className="mb-8 pb-6 border-b border-gray-100">
                <h1 className="text-2xl font-light text-gray-900 mb-2">{project.title}</h1>
                {project.subtitle && (
                    <p className="text-lg text-gray-600 mb-4 font-light">{project.subtitle}</p>
                )}

                <div className="text-gray-700 leading-relaxed">
                    {project.fullDescription}
                </div>
            </div>

            {/* Main Content Grid */}
            <div className='flex flex-col lg:flex-row gap-12'>
                {/* Left Column - Main Content */}
                <div className='lg:w-2/3'>
                    {/* Skills Learned Section */}
                    {project.skillsLearned && project.skillsLearned.length > 0 && (
                        <div className="mb-10">
                            <h3 className="text-lg font-medium text-gray-900 mb-6 flex items-center gap-2">
                                <FaGraduationCap className="text-sm text-gray-600" />
                                <span>Skills Learned</span>
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.skillsLearned.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="inline-block px-3 py-1 border border-gray-200 text-gray-700 text-xs hover:border-gray-300 hover:bg-gray-50 transition-colors duration-150"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Links Section */}
                    <div className="mb-8">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Project Links</h3>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href={project.repository}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors duration-150 text-sm"
                            >
                                <FaGithub className="text-sm" />
                                <span>View Code</span>
                            </a>
                            {project.deployment && project.deployment !== "N/A" && (
                                <a
                                    href={project.deployment}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 hover:border-black hover:text-black transition-colors duration-150 text-sm"
                                >
                                    <FaLink className="text-sm" />
                                    <span>Live Demo</span>
                                </a>
                            )}
                            {project.source && (
                                <a
                                    href={project.source}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 hover:border-black hover:text-black transition-colors duration-150 text-sm"
                                >
                                    <FaLink className="text-sm" />
                                    <span>Source</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Column - Sidebar */}
                <div className="lg:w-1/3">
                    <div className="lg:sticky lg:top-4 space-y-8">
                        {/* Technologies Section */}
                        <div>
                            <h3 className="text-base font-medium text-gray-900 mb-4">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="inline-block px-3 py-1 border border-gray-200 text-gray-700 text-xs hover:border-gray-300 hover:bg-gray-50 transition-colors duration-150"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Project Image */}
                        <div className="border border-gray-200 overflow-hidden cursor-pointer hover:border-gray-300 transition-colors duration-150" onClick={openModal}>
                            <img
                                src={project.image}
                                alt={`Screenshot of ${project.title}`}
                                className="w-full h-auto object-contain"
                            />
                            <div className="p-3 bg-gray-50 border-t border-gray-100">
                                <p className="text-xs text-gray-600 text-center">
                                    Click to view full size
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black bg-opacity-70"
                        onClick={closeModal}
                    ></div>

                    {/* Modal content */}
                    <div className="relative z-50 bg-white max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col lg:flex-row">
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-500 hover:text-black focus:outline-none z-50 p-2"
                        >
                            <FaTimes className="text-lg" />
                        </button>

                        {/* Image section */}
                        <div className="lg:w-2/3 p-4 flex items-center justify-center bg-gray-50">
                            <img
                                src={project.image}
                                alt={`Screenshot of ${project.title}`}
                                className="max-h-[80vh] w-auto object-contain"
                            />
                        </div>

                        {/* Description section */}
                        <div className="lg:w-1/3 p-6 overflow-y-auto border-l border-gray-100">
                            <h2 className="text-xl font-medium text-gray-900 mb-4">{project.title}</h2>
                            <div className="text-gray-700 text-sm leading-relaxed mb-6">
                                {project.fullDescription}
                            </div>

                            <div>
                                <h3 className="text-base font-medium text-gray-900 mb-3">Technologies Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="inline-block px-3 py-1 border border-gray-200 text-gray-700 text-xs"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectDetail;