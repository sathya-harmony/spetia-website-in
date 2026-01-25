import React from 'react';
import SpetiaLogo from '../../../assets/spetia-logo.svg';
import Watermark from '../../brochure/Watermark';
import EditableText from '../EditableText';

const CoverTemplate = ({ data, onUpdate }) => {

    const updateField = (field, value) => {
        onUpdate({ ...data, [field]: value });
    };

    const updateArrayItem = (field, index, value) => {
        const newArray = [...data[field]];
        newArray[index] = value;
        onUpdate({ ...data, [field]: newArray });
    };

    // Deep Object update helper for clientParams
    const updateClientParam = (key, value) => {
        onUpdate({ ...data, clientParams: { ...data.clientParams, [key]: value } });
    };

    return (
        <div className="w-[210mm] h-[297mm] relative flex flex-col justify-between mx-auto print:m-0 print:w-full print:h-screen overflow-hidden bg-[#0a0a0a] text-white font-sans">
            <Watermark />

            {/* Background Image - Dark, moody, high-end */}
            <div className="absolute inset-0 z-0 opacity-60">
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                    alt="Background"
                    className="w-full h-full object-cover grayscale contrast-125"
                />
            </div>
            {/* Grain Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>


            {/* Top Bar Logo - Minimalist Center */}
            <div className="relative z-10 p-[15mm] text-center pt-[20mm]">
                <img
                    src={SpetiaLogo}
                    alt="Spetia"
                    className="h-[20mm] w-auto brightness-0 invert mx-auto mb-10"
                />
                <div className="w-[1px] h-[30mm] bg-white/30 mx-auto"></div>
            </div>

            {/* Main Title Content - Refined Industrial Typography */}
            <div className="relative z-10 px-[15mm] py-0 text-center">
                <h1 className="text-[6rem] font-sans font-medium leading-[0.85] tracking-tight text-white mix-blend-screen uppercase">
                    {(Array.isArray(data.title) ? data.title : [data.title || "Untitled"]).map((line, i) => (
                        <div key={i}>
                            <EditableText
                                value={line}
                                onSave={(val) => updateArrayItem('title', i, val)}
                                className={i === 1 ? "text-spetia-orange-500 opacity-90" : ""}
                            />
                        </div>
                    ))}
                </h1>

                <div className="mt-12 flex justify-center">
                    <p className="text-sm font-sans font-medium tracking-[0.2em] text-white/70 uppercase max-w-sm border-t border-white/20 pt-6">
                        <EditableText
                            value={data.subtitle}
                            onSave={(val) => updateField('subtitle', val)}
                        />
                    </p>
                </div>
            </div>

            {/* Bottom Info Bar - Magazine Style */}
            <div className="relative z-10 p-[15mm] pb-[20mm] mt-auto">
                <div className="flex justify-between items-end border-t border-white/20 pt-6">
                    <div className="text-left">
                        <span className="block text-white/40 text-[7pt] font-sans uppercase tracking-widest mb-1">Prepared For</span>
                        <div className="font-sans font-semibold text-2xl uppercase tracking-tight">
                            <EditableText
                                value={data.clientParams.name}
                                onSave={(val) => updateClientParam('name', val)}
                            />
                        </div>
                    </div>

                    <div className="text-right">
                        <span className="block text-white/40 text-[7pt] font-sans uppercase tracking-widest mb-1">Confidential Proposal</span>
                        <div className="font-sans text-sm tracking-widest font-semibold">
                            <EditableText
                                value={data.clientParams.ref}
                                onSave={(val) => updateClientParam('ref', val)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoverTemplate;
