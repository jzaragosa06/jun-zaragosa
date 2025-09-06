import React, { useState } from 'react';
import { FaAward, FaLink, FaTimes } from 'react-icons/fa';

function CertificateDetail({ certificate }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="max-w-full">
            {/* Header Section */}
            <div className="mb-8 pb-6 border-b border-gray-100">
                <h1 className="text-2xl font-light text-gray-900 mb-2">{certificate.title}</h1>
                <p className="text-lg text-gray-600 mb-4 font-light">{certificate.subtitle}</p>

                <div
                    className="text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: certificate.fullDescription }}
                ></div>
            </div>

            {/* Main Content Grid */}
            <div className='flex flex-col lg:flex-row gap-12'>
                {/* Left Column - Main Content */}
                <div className='lg:w-2/3'>
                    {/* Certificate Link Section */}
                    <div className="mb-8">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Certificate Source</h3>
                        <a
                            href={certificate.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors duration-150 text-sm w-fit"
                        >
                            <FaAward className="text-sm" />
                            <span>View Certificate</span>
                        </a>
                    </div>
                </div>

                {/* Right Column - Sidebar */}
                <div className="lg:w-1/3">
                    <div className="lg:sticky lg:top-4 space-y-8">
                        {/* Skills Section */}
                        <div>
                            <h3 className="text-base font-medium text-gray-900 mb-4">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {certificate.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="inline-block px-3 py-1 border border-gray-200 text-gray-700 text-xs hover:border-gray-300 hover:bg-gray-50 transition-colors duration-150"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Certificate Image */}
                        <div className="border border-gray-200 overflow-hidden cursor-pointer hover:border-gray-300 transition-colors duration-150" onClick={openModal}>
                            <img
                                src={certificate.image}
                                alt={`Certificate of ${certificate.title}`}
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
                                src={certificate.image}
                                alt={`Certificate of ${certificate.title}`}
                                className="max-h-[80vh] w-auto object-contain"
                            />
                        </div>

                        {/* Description section */}
                        <div className="lg:w-1/3 p-6 overflow-y-auto border-l border-gray-100">
                            <h2 className="text-xl font-medium text-gray-900 mb-4">{certificate.title}</h2>
                            <div
                                className="text-gray-700 text-sm leading-relaxed mb-6"
                                dangerouslySetInnerHTML={{ __html: certificate.fullDescription }}
                            ></div>

                            <div>
                                <h3 className="text-base font-medium text-gray-900 mb-3">Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {certificate.tags.map((tag, idx) => (
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

export default CertificateDetail;