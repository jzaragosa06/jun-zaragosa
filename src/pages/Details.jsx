import React, { useState } from "react";
import projects from "../data/projects";
import ProjectDetail from "../components/details/ProjectDetails";
import certificates from "../data/certifications";
import CertificateDetail from "../components/details/CertificationDetails";
import articles from "../data/articles";
import ArticleDetail from "../components/details/ArticlesDetails";
import experiences from "../data/experiences";
import ExperienceDetail from "../components/details/ExperiencesDetails";

const Details = () => {
    const [selectedProjectId, setSelectedProjectId] = useState(projects[0]?.id || "");
    const [selectedExperienceId, setSelectedExperienceId] = useState(experiences[0]?.id || "");
    const [selectedCertificateId, setSelectedCertificateId] = useState(certificates[0]?.id || "");
    const [selectedArticleId, setSelectedArticleId] = useState(articles[0]?.id || "");

    return (
        <div className="min-h-screen flex flex-col items-center justify-start p-6 md:p-8 lg:p-12 w-full space-y-20">
            {/* Experiences */}
            <section className="w-full max-w-6xl">
                <h2 className="text-3xl font-light mb-8 text-gray-900">Experiences</h2>
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* List */}
                    <div className="w-full lg:w-1/3">
                        <div className="space-y-1">
                            {experiences.map((experience) => (
                                <div
                                    key={experience.id}
                                    onClick={() => setSelectedExperienceId(experience.id)}
                                    className={`px-4 py-2.5 cursor-pointer text-sm font-normal transition-all duration-150 border-l-2 hover:pl-5 ${selectedExperienceId === experience.id
                                            ? "bg-gray-50 border-l-black text-black font-medium"
                                            : "border-l-gray-200 text-gray-700 hover:border-l-gray-400 hover:text-black"
                                        }`}
                                >
                                    {experience.title}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Detail */}
                    <div className="w-full lg:w-2/3 relative">
                        <div className="absolute -left-4 top-0 bottom-0 w-px bg-gray-200"></div>
                        <div className="pl-8">
                            <ExperienceDetail
                                experience={experiences.find((e) => e.id === selectedExperienceId)}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section className="w-full max-w-6xl">
                <h2 className="text-3xl font-light mb-8 text-gray-900">Projects</h2>
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* List */}
                    <div className="w-full lg:w-1/3">
                        <div className="space-y-1">
                            {projects.map((project) => (
                                <div
                                    key={project.id}
                                    onClick={() => setSelectedProjectId(project.id)}
                                    className={`px-4 py-2.5 cursor-pointer text-sm font-normal transition-all duration-150 border-l-2 hover:pl-5 ${selectedProjectId === project.id
                                            ? "bg-gray-50 border-l-black text-black font-medium"
                                            : "border-l-gray-200 text-gray-700 hover:border-l-gray-400 hover:text-black"
                                        }`}
                                >
                                    {project.title}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Detail */}
                    <div className="w-full lg:w-2/3 relative">
                        <div className="absolute -left-4 top-0 bottom-0 w-px bg-gray-200"></div>
                        <div className="pl-8">
                            <ProjectDetail
                                project={projects.find((p) => p.id === selectedProjectId)}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="w-full max-w-6xl">
                <h2 className="text-3xl font-light mb-8 text-gray-900">Certifications</h2>
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* List */}
                    <div className="w-full lg:w-1/3">
                        <div className="space-y-1">
                            {certificates.map((certificate) => (
                                <div
                                    key={certificate.id}
                                    onClick={() => setSelectedCertificateId(certificate.id)}
                                    className={`px-4 py-2.5 cursor-pointer text-sm font-normal transition-all duration-150 border-l-2 hover:pl-5 ${selectedCertificateId === certificate.id
                                            ? "bg-gray-50 border-l-black text-black font-medium"
                                            : "border-l-gray-200 text-gray-700 hover:border-l-gray-400 hover:text-black"
                                        }`}
                                >
                                    {certificate.title}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Detail */}
                    <div className="w-full lg:w-2/3 relative">
                        <div className="absolute -left-4 top-0 bottom-0 w-px bg-gray-200"></div>
                        <div className="pl-8">
                            <CertificateDetail
                                certificate={certificates.find((c) => c.id === selectedCertificateId)}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles */}
            <section className="w-full max-w-6xl">
                <h2 className="text-3xl font-light mb-8 text-gray-900">Articles</h2>
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* List */}
                    <div className="w-full lg:w-1/3">
                        <div className="space-y-1">
                            {articles.map((article) => (
                                <div
                                    key={article.id}
                                    onClick={() => setSelectedArticleId(article.id)}
                                    className={`px-4 py-2.5 cursor-pointer text-sm font-normal transition-all duration-150 border-l-2 hover:pl-5 ${selectedArticleId === article.id
                                            ? "bg-gray-50 border-l-black text-black font-medium"
                                            : "border-l-gray-200 text-gray-700 hover:border-l-gray-400 hover:text-black"
                                        }`}
                                >
                                    {article.shortTitle}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Detail */}
                    <div className="w-full lg:w-2/3 relative">
                        <div className="absolute -left-4 top-0 bottom-0 w-px bg-gray-200"></div>
                        <div className="pl-8">
                            <ArticleDetail
                                article={articles.find((a) => a.id === selectedArticleId)}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Details;