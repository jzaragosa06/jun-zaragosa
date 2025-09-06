import React from 'react';
import { FaGithub, FaLink, FaCalendarAlt } from 'react-icons/fa';

function ExperienceDetail({ experience }) {
    return (
        <div className="max-w-full">
            {/* Header Section */}
            <div className="mb-8 pb-6 border-b border-gray-100">
                <h1 className="text-2xl font-light text-gray-900 mb-2">{experience.title}</h1>
                <h2 className="text-lg text-gray-600 mb-3 font-light">{experience.subtitle}</h2>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                    <FaCalendarAlt className="mr-2 text-xs" />
                    <span>{experience.startDate} - {experience.endDate}</span>
                </div>

                <p className="text-gray-700 leading-relaxed">{experience.fullDescription}</p>
            </div>

            {/* Main Content Grid */}
            <div className='flex flex-col lg:flex-row gap-12'>
                {/* Left Column - Main Content */}
                <div className='lg:w-2/3'>
                    {/* Responsibilities Section */}
                    <div className="mb-10">
                        <h3 className="text-lg font-medium text-gray-900 mb-6">Key Responsibilities</h3>
                        <div className="space-y-4">
                            {experience.responsibilities.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="w-1 h-1 rounded-full bg-gray-400 mt-2.5 flex-shrink-0"></div>
                                    <p className="text-gray-700 leading-relaxed text-sm">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements Section */}
                    <div className="mb-10">
                        <h3 className="text-lg font-medium text-gray-900 mb-6">Notable Achievements</h3>
                        <div className="space-y-4">
                            {experience.achievements.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="w-1 h-1 rounded-full bg-black mt-2.5 flex-shrink-0"></div>
                                    <p className="text-gray-700 leading-relaxed text-sm">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Projects Section */}
                    {experience.projects && experience.projects.length > 0 && (
                        <div className="mb-10">
                            <h3 className="text-lg font-medium text-gray-900 mb-6">Projects</h3>
                            <div className="space-y-6">
                                {experience.projects.map((project, idx) => (
                                    <div key={idx} className="border-l-2 border-gray-100 pl-6 pb-6">
                                        <h4 className="font-medium text-gray-900 mb-2">{project.title}</h4>
                                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                                        <div className="flex gap-6">
                                            {project.repository && (
                                                <a
                                                    href={project.repository}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-xs text-gray-600 hover:text-black transition-colors duration-150"
                                                >
                                                    <FaGithub className="text-sm" />
                                                    <span>View Code</span>
                                                </a>
                                            )}
                                            {project.source && (
                                                <a
                                                    href={project.source}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-xs text-gray-600 hover:text-black transition-colors duration-150"
                                                >
                                                    <FaLink className="text-sm" />
                                                    <span>Live Demo</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Column - Sidebar */}
                <div className="lg:w-1/3">
                    <div className="lg:sticky lg:top-4 space-y-8">
                        {/* Company Info */}
                        <div className="border border-gray-100 p-6">
                            <div className="flex flex-col items-center text-center space-y-4">
                                <img
                                    src={experience.image}
                                    alt={`Logo of ${experience.company}`}
                                    className="w-16 h-16 rounded-full object-cover border border-gray-200"
                                />
                                <div>
                                    <h3 className="text-base font-medium text-gray-900 mb-1">
                                        {experience.company}
                                    </h3>
                                    <p className='text-xs text-gray-500 leading-relaxed'>{experience.companyInfo}</p>
                                </div>
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div>
                            <h3 className="text-base font-medium text-gray-900 mb-4">Skills & Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {experience.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="inline-block px-3 py-1 border border-gray-200 text-gray-700 text-xs hover:border-gray-300 hover:bg-gray-50 transition-colors duration-150"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceDetail;