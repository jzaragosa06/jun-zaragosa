import React, { useState } from "react";
import projects from "../data/projects";
import ProjectDetail from "../components/details/ProjectDetails";
import certificates from "../data/certifications";
import CertificateDetail from "../components/details/CertificationDetails";
import articles from "../data/articles";
import ArticleDetail from "../components/details/ArticlesDetails";
import experiences from "../data/experiences";
import ExperienceDetail from "../components/details/ExperiencesDetails";
import { FaBackward } from "react-icons/fa";
import { Link } from "react-router-dom";

const Works = () => {
    const [selectedSection, setSelectedSection] = useState('projects');
    const [selectedItemId, setSelectedItemId] = useState(projects[0].id);

    const handleNavigation = (section) => {
        setSelectedSection(section);
        // Reset to first item when changing sections
        if (section === 'projects') {
            setSelectedItemId(projects[0].id);
        } else if (section === 'experiences') {
            setSelectedItemId(experiences[0]?.id || '');
        } else if (section === 'articles') {
            setSelectedItemId(articles[0]?.id || '');
        } else if (section === 'certifications') {
            setSelectedItemId(certificates[0]?.id || '');
        }
    };

    const handleItemSelected = (itemId) => {
        setSelectedItemId(itemId);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-start p-4 md:p-8 lg:p-12 w-full">
            <div className="w-full max-w-7xl space-y-8 md:space-y-12">
                {/* Navigation */}
                <div className="flex flex-row gap-2 md:gap-4 w-full overflow-x-auto pb-3 scrollbar-hide">
                    {["projects", "experiences", "articles", "certifications"].map((section) => (
                        <div
                            key={section}
                            className={`flex items-center justify-center rounded-full text-center px-5 py-2 md:px-6 md:py-2.5 cursor-pointer text-sm md:text-base font-medium whitespace-nowrap transition-all duration-200 ${selectedSection === section
                                ? "bg-black text-white"
                                : "border border-black text-black hover:bg-black hover:text-white"
                                }`}
                            onClick={() => handleNavigation(section)}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </div>
                    ))}
                    <Link to={'/'}>
                        <div
                            className={`flex items-center justify-center rounded-full text-center px-5 py-2 md:px-6 md:py-2.5 cursor-pointer text-sm md:text-base font-medium whitespace-nowrap transition-all duration-200 border border-black text-black hover:bg-black hover:text-white`}
                        >
                            Back
                        </div>
                    </Link>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 md:gap-8 w-full">
                    {/* List */}
                    <div className="w-full lg:w-1/4 overflow-hidden">
                        <div className="p-2 md:p-3 max-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                            {selectedSection === "projects" && (
                                <div className="space-y-2">
                                    {projects.map((project) => (
                                        <div
                                            key={project.id}
                                            onClick={() => handleItemSelected(project.id)}
                                            className={`rounded-full px-4 py-3 cursor-pointer text-sm md:text-base font-medium transition-all duration-200 border ${selectedItemId === project.id
                                                ? "bg-black text-white border-black"
                                                : "border border-black text-black hover:bg-black hover:text-white"
                                                }`}
                                        >
                                            {project.title}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {selectedSection === "experiences" && (
                                <div className="space-y-2">
                                    {experiences.map((experience) => (
                                        <div
                                            key={experience.id}
                                            onClick={() => handleItemSelected(experience.id)}
                                            className={`rounded-full px-4 py-3 cursor-pointer text-sm md:text-base font-medium transition-all duration-200 border ${selectedItemId === experience.id
                                                ? "bg-black text-white border-black"
                                                : "border border-black text-black hover:bg-black hover:text-white"
                                                }`}
                                        >
                                            {experience.title}
                                        </div>
                                    ))}
                                </div>
                            )}
                            {selectedSection === "articles" && (
                                <div className="space-y-2">
                                    {articles.map((article) => (
                                        <div
                                            key={article.id}
                                            onClick={() => handleItemSelected(article.id)}
                                            className={`rounded-full px-4 py-3 cursor-pointer text-sm md:text-base font-medium transition-all duration-200 border ${selectedItemId === article.id
                                                ? "bg-black text-white border-black"
                                                : "border border-black text-black hover:bg-black hover:text-white"
                                                }`}
                                        >
                                            {article.shortTitle}
                                        </div>
                                    ))}
                                </div>
                            )}
                            {selectedSection === "certifications" && (
                                <div className="space-y-2">
                                    {certificates.map((certificate) => (
                                        <div
                                            key={certificate.id}
                                            onClick={() => handleItemSelected(certificate.id)}
                                            className={`rounded-full px-4 py-3 cursor-pointer text-sm md:text-base font-medium transition-all duration-200 border ${selectedItemId === certificate.id
                                                ? "bg-black text-white border-black"
                                                : "border border-black text-black hover:bg-black hover:text-white"
                                                }`}
                                        >
                                            {certificate.title}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Details */}
                    <div className="w-full lg:w-3/4 border-l-0 lg:border-l-2 lg:border-l-black overflow-hidden">
                        <div className="flex justify-center items-start p-4 md:p-6 max-h-[80vh] overflow-y-auto w-full">
                            {selectedSection === "projects" && (
                                <ProjectDetail
                                    project={projects.find(
                                        (p) => p.id === selectedItemId
                                    )}
                                />
                            )}
                            {selectedSection === "experiences" && (
                                <ExperienceDetail
                                    experience={experiences.find(
                                        (e) => e.id === selectedItemId
                                    )}
                                />
                            )}
                            {selectedSection === "articles" && (
                                <ArticleDetail
                                    article={articles.find(
                                        (a) => a.id === selectedItemId
                                    )}
                                />
                            )}
                            {selectedSection === "certifications" && (
                                <CertificateDetail
                                    certificate={certificates.find(
                                        (c) => c.id === selectedItemId
                                    )}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;