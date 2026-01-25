import React from 'react';
import SpetiaLogo from '../../assets/spetia-logo.svg';
import Watermark from './Watermark';
import BrochureFooter from './BrochureFooter';

const EditableText = ({ initialValue, className, tag = 'div', ...props }) => {
    const Tag = tag;
    return (
        <Tag
            contentEditable
            suppressContentEditableWarning
            className={`outline-none hover:bg-black/5 focus:bg-black/5 transition-colors cursor-text active:cursor-text rounded-sm px-1 -mx-1 ${className}`}
            {...props}
        >
            {initialValue}
        </Tag>
    );
};

const ServiceDetailedPage = ({
    title = "Service Title",
    image = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    description = "Service description goes here.",
    tools = [],
    sections = [], // Array of { title, description, features: [] }
    pageNumber = "04"
}) => {
    return (
        <div className="w-[210mm] min-h-[297mm] h-auto bg-[#FDFBF7] relative flex flex-col mx-auto print:m-0 print:w-full print:h-auto overflow-visible text-spetia-dark font-sans shadow-2xl print:shadow-none mb-10 print:mb-0">

            <Watermark />

            {/* Texture Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            {/* Header Section - Clean & Floating - Tighter Top */}
            <div className="relative z-10 px-[15mm] pt-[10mm] pb-2 flex justify-between items-start">
                <div>
                    <img src={SpetiaLogo} alt="Spetia" className="h-[12mm] w-auto opacity-80 mix-blend-multiply mb-6" />
                    <h1 className="text-5xl font-sans font-medium text-spetia-dark leading-[0.9] uppercase tracking-normal">
                        <EditableText initialValue={title} />
                    </h1>
                </div>
                <div className="text-right pt-2 border-l border-spetia-orange-500 pl-4 h-full">
                    <div className="text-[7pt] uppercase tracking-widest text-gray-400 mb-1">Project Ref</div>
                    <div className="text-[9pt] font-mono text-spetia-dark font-medium">SP-CAP-{pageNumber}</div>
                </div>
            </div>

            {/* Hero Image - Minimalist, No Border - Reduced Height & Margin */}
            <div className="px-[15mm] mb-4 relative z-10">
                <div className="w-full h-[35mm] overflow-hidden grayscale-[20%] contrast-[1.1]">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>
            </div>

            {/* Introduction - Swiss Typographic Block - Compressed Spacing */}
            <div className="px-[15mm] mb-4 relative z-10 grid grid-cols-[1.5fr_1fr] gap-12 items-start">
                <div className="font-sans text-[10pt] font-normal text-gray-800 leading-relaxed text-justify">
                    <EditableText initialValue={description} />
                </div>

                {/* Conditional Rendering for Technical Environment */}
                {tools && tools.length > 0 && (
                    <div>
                        <span className="block text-[7pt] uppercase tracking-widest text-gray-400 mb-2 border-b border-gray-200 pb-1">Technical Environment</span>
                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                            {tools.map((tool, idx) => (
                                <span key={idx} className="text-[9pt] font-mono uppercase text-spetia-teal font-medium tracking-wide">
                                    <EditableText initialValue={tool} />
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Detailed Sections - Data Grid with Fine Lines Only */}
            <div className="px-[15mm] flex-grow flex flex-col relative z-10">

                {/* Column Headers */}
                <div className="grid grid-cols-[0.5fr_1.5fr_2fr] border-b border-black/10 pb-2 mb-2">
                    <div className="text-[7pt] uppercase tracking-widest text-gray-400 font-medium">No.</div>
                    <div className="text-[7pt] uppercase tracking-widest text-gray-400 font-medium">Service Component</div>
                    <div className="text-[7pt] uppercase tracking-widest text-gray-400 font-medium pl-8">Specifications</div>
                </div>

                <div className="space-y-4">
                    {sections.map((section, i) => (
                        <div key={i} className="group">
                            {/* The Grid Row - Tighter Top Padding */}
                            <div className="grid grid-cols-[0.5fr_1.5fr_2fr] items-start pt-3 border-t border-gray-100 first:border-t-0">

                                {/* 01. Ref */}
                                <div className="text-[9pt] font-mono text-spetia-orange-500 font-bold opacity-60 mt-1">
                                    0{i + 1}
                                </div>

                                {/* 02. Title & Desc */}
                                <div className="pr-8">
                                    <h3 className="font-sans text-[10pt] font-bold uppercase tracking-wide text-spetia-dark mb-2">
                                        <EditableText initialValue={section.title} />
                                    </h3>
                                    <div className="text-[9pt] text-gray-500 font-sans leading-relaxed font-normal">
                                        {section.description && <EditableText initialValue={section.description} />}
                                    </div>
                                </div>

                                {/* 03. Detailed Features List */}
                                <div className="pl-8 border-l border-gray-100">
                                    <div className="flex flex-col gap-2">
                                        {section.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <span className="w-1 h-1 bg-spetia-dark rounded-full mt-2 flex-shrink-0 opacity-30"></span>
                                                <span className="text-[9pt] text-gray-800 font-medium leading-relaxed">
                                                    <EditableText initialValue={feature} />
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Massive Background Artifact - Moved Inside & Right Aligned */}
            <div className="absolute bottom-[20mm] right-[10mm] text-[150pt] font-sans font-bold text-gray-900/5 leading-none pointer-events-none select-none z-0 tracking-tighter mix-blend-multiply">
                {pageNumber}
            </div>

            {/* Footer */}
            <div className="px-[15mm] pb-[12mm]">
                <BrochureFooter pageNumber={pageNumber} />
            </div>
        </div>
    );
};

export default ServiceDetailedPage;
