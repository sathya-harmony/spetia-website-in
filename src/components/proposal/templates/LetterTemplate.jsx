import React from 'react';
import SpetiaLogo from '../../../assets/spetia-logo.svg';
import Watermark from '../../brochure/Watermark';
import BrochureFooter from '../../brochure/BrochureFooter';
import EditableText from '../EditableText';

const LetterTemplate = ({ data, onUpdate }) => {

    const updateNested = (objName, key, value) => {
        onUpdate({
            ...data,
            [objName]: { ...data[objName], [key]: value }
        });
    };

    const updateContent = (index, value) => {
        const newContent = [...data.content];
        newContent[index] = value;
        onUpdate({ ...data, content: newContent });
    };

    return (
        <div className="w-[210mm] h-[297mm] bg-[#FDFBF7] relative flex flex-col mx-auto print:m-0 print:w-full print:h-screen overflow-hidden text-spetia-dark font-sans shadow-2xl print:shadow-none">
            <Watermark />

            {/* Texture Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            {/* Header */}
            <div className="relative z-10 px-[20mm] pt-[15mm] flex justify-between items-start">
                <img src={SpetiaLogo} alt="Spetia" className="h-[12mm] w-auto opacity-80 mix-blend-multiply" />
                <div className="text-right">
                    <div className="text-[7pt] uppercase tracking-widest text-gray-400 mb-1">Date</div>
                    <div className="text-[9pt] font-mono text-spetia-dark font-medium">
                        {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                </div>
            </div>

            {/* Recipient Block */}
            <div className="relative z-10 px-[20mm] mt-12 mb-8">
                <div className="text-[10pt] font-sans text-gray-800 leading-snug">
                    <div className="font-bold">
                        <EditableText value={data.recipient.name} onSave={(val) => updateNested('recipient', 'name', val)} />
                    </div>
                    <div>
                        <EditableText value={data.recipient.title} onSave={(val) => updateNested('recipient', 'title', val)} />
                    </div>
                    <div>
                        <EditableText value={data.recipient.company} onSave={(val) => updateNested('recipient', 'company', val)} />
                    </div>
                </div>
            </div>

            {/* Letter Body */}
            <div className="relative z-10 px-[20mm] flex-grow">
                <div className="font-sans text-[11pt] text-gray-800 leading-relaxed text-justify space-y-6">
                    {data.content.map((paragraph, i) => (
                        <p key={i}>
                            <EditableText value={paragraph} onSave={(val) => updateContent(i, val)} />
                        </p>
                    ))}
                </div>

                {/* Signoff */}
                <div className="mt-12">
                    <p className="mb-8 font-sans text-[11pt] text-gray-800">
                        <EditableText value={data.signoff} onSave={(val) => onUpdate({ ...data, signoff: val })} />
                    </p>
                    <div className="border-t border-black w-32 mb-2"></div>
                    <div className="text-[10pt] font-sans text-gray-800 leading-snug">
                        <div className="font-bold">
                            <EditableText value={data.sender.name} onSave={(val) => updateNested('sender', 'name', val)} />
                        </div>
                        <div className="text-gray-600">
                            <EditableText value={data.sender.title} onSave={(val) => updateNested('sender', 'title', val)} />
                        </div>
                        <div className="text-gray-400 text-[9pt] uppercase tracking-wider mt-1">
                            <EditableText value={data.sender.company} onSave={(val) => updateNested('sender', 'company', val)} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="px-[20mm] pb-[12mm]">
                <BrochureFooter pageNumber="02" />
            </div>
        </div>
    );
};

export default LetterTemplate;
