import React from 'react';
import SpetiaLogo from '../../../assets/spetia-logo.svg';
import Watermark from '../../brochure/Watermark';
import BrochureFooter from '../../brochure/BrochureFooter';
import EditableText from '../EditableText';
import EditableList from '../EditableList';

const ServiceTemplate = ({ data, onUpdate }) => {

    const updateField = (field, value) => {
        onUpdate({ ...data, [field]: value });
    };

    const updateTool = (index, value) => {
        const newTools = [...data.tools];
        newTools[index] = value;
        onUpdate({ ...data, tools: newTools });
    };

    const updateSection = (index, field, value) => {
        const newSections = [...data.sections];
        newSections[index] = { ...newSections[index], [field]: value };
        onUpdate({ ...data, sections: newSections });
    };

    const updateFeature = (sectionIndex, featureIndex, value) => {
        const newSections = [...data.sections];
        const newFeatures = [...newSections[sectionIndex].features];
        newFeatures[featureIndex] = value;
        newSections[sectionIndex] = { ...newSections[sectionIndex], features: newFeatures };
        onUpdate({ ...data, sections: newSections });
    };

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
                        <EditableText value={data.title} onSave={(val) => updateField('title', val)} />
                    </h1>
                </div>
                <div className="text-right pt-2 border-l border-spetia-orange-500 pl-4 h-full">
                    <div className="text-[7pt] uppercase tracking-widest text-gray-400 mb-1">Project Ref</div>
                    <div className="text-[9pt] font-mono text-spetia-dark font-medium">SP-CAP-{data.pageNumber}</div>
                </div>
            </div>

            {/* Hero Image - Minimalist, No Border - Reduced Height & Margin */}
            <div className="px-[15mm] mb-4 relative z-10">
                <div className="w-full h-[35mm] overflow-hidden grayscale-[20%] contrast-[1.1]">
                    <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
                </div>
            </div>



            {/* Detailed Sections - Compact Layout */}
            <div className="px-[15mm] flex-grow flex flex-col relative z-10 font-sans">

                {/* Column Headers - Aligned with Cards (Added px-4/6) */}
                <div className="grid grid-cols-[30px_1.5fr_2.5fr] gap-6 border-b-2 border-spetia-orange-500/20 pb-2 mb-4 px-4">
                    <div className="text-[7pt] uppercase tracking-widest text-spetia-orange-500 font-bold">No.</div>
                    <div className="text-[7pt] uppercase tracking-widest text-gray-500 font-bold">Component</div>
                    <div className="text-[7pt] uppercase tracking-widest text-gray-500 font-bold">Details</div>
                </div>

                <div className="space-y-4">
                    {data.sections.map((section, i) => (
                        <div key={i} className="group relative">

                            {/* Content Row - Compact White Card */}
                            <div className="grid grid-cols-[30px_1.5fr_2.5fr] gap-6 items-start p-4 rounded-sm bg-white border border-gray-200 shadow-sm hover:border-spetia-orange-500/30 transition-colors">

                                {/* 01. Ref */}
                                <div className="text-[9pt] font-mono text-spetia-orange-500 font-bold opacity-80 pt-1">
                                    0{i + 1}
                                </div>

                                {/* 02. Title & Desc */}
                                <div>
                                    <h3 className="font-sans text-[10pt] font-bold uppercase tracking-wide text-spetia-dark mb-2">
                                        <EditableText value={section.title} onSave={(val) => updateSection(i, 'title', val)} />
                                    </h3>
                                    <div className="text-[9pt] text-gray-700 font-sans leading-relaxed font-normal">
                                        {section.description && (
                                            <EditableText value={section.description} onSave={(val) => updateSection(i, 'description', val)} />
                                        )}
                                    </div>
                                </div>

                                {/* 03. Detailed Features List - Compact */}
                                <div className="pl-4 border-l border-spetia-dark/10">
                                    <EditableList
                                        items={section.features}
                                        onSave={(newItems) => {
                                            const newSections = [...data.sections];
                                            newSections[i] = { ...newSections[i], features: newItems };
                                            onUpdate({ ...data, sections: newSections });
                                        }}
                                        bulletColor="bg-spetia-orange-500"
                                        textClass="text-[9pt] text-gray-900 font-medium leading-relaxed"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            {/* Footer */}
            <div className="px-[15mm] pb-[12mm]">
                <BrochureFooter pageNumber={data.pageNumber} />
            </div>
        </div>
    );
};

export default ServiceTemplate;
