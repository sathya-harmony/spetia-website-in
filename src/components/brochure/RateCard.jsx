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

const RateCard = () => {
    return (
        <div className="w-[210mm] h-[297mm] bg-[#FDFBF7] relative flex flex-col mx-auto shadow-2xl print:shadow-none overflow-hidden text-spetia-dark print:m-0 print:w-full print:h-screen text-[10pt] font-sans">

            <Watermark />
            {/* Texture Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            {/* Refined Industrial Header */}
            <div className="relative z-10 p-[12mm] pb-0 flex justify-between items-start">
                <div>
                    <img src={SpetiaLogo} alt="Spetia" className="h-[12mm] w-auto opacity-80 mix-blend-multiply mb-6" />
                    <div className="text-[7pt] uppercase tracking-[0.2em] text-gray-400 font-medium mb-2">Commercial Proposal</div>
                    <h1 className="text-4xl font-sans font-medium text-spetia-dark leading-[0.9] uppercase tracking-normal">
                        <EditableText initialValue="Rate Card" />
                        <span className="text-spetia-orange-500 font-bold text-xl align-top ml-2">2026</span>
                    </h1>
                </div>
                <div className="text-right pt-2">
                    <div className="text-[6pt] uppercase tracking-widest text-gray-400 mb-1">Ref Number</div>
                    <div className="text-[9pt] font-mono text-spetia-orange-500">SP-RC-2026-001</div>
                </div>
            </div>

            {/* Content Container */}
            <div className="px-[12mm] mt-12 relative z-10 flex flex-col flex-grow">

                {/* Client Info - Minimalist Card */}
                <div className="flex justify-between items-end border-b border-gray-900/10 pb-6 mb-10">
                    <div>
                        <span className="block text-[7pt] uppercase tracking-widest text-gray-400 mb-2 font-medium">Prepared For</span>
                        <div className="font-sans font-semibold text-xl uppercase tracking-tight"><EditableText initialValue="Marco Garcia" /></div>
                        <div className="text-gray-500 font-normal text-sm"><EditableText initialValue="Vice President, Innovation & Strategy" /></div>
                    </div>
                    <div className="text-right text-xs text-gray-500 font-mono">
                        <div><EditableText initialValue="RRC, Suite 120" /></div>
                        <div><EditableText initialValue="Round Rock, TX 78681" /></div>
                    </div>
                </div>

                {/* Section 1: T&M - Clean Table */}
                <div className="mb-10">
                    <h3 className="flex items-center gap-4 text-spetia-dark font-sans font-semibold uppercase tracking-widest text-xs mb-4">
                        <span className="text-spetia-orange-500 font-mono">01</span>
                        <EditableText initialValue="Time & Material Model" />
                    </h3>
                    <div className="w-full">
                        <div className="grid grid-cols-[2fr_1fr_1fr] text-[7pt] uppercase tracking-wider text-gray-900 font-bold border-b border-gray-200 pb-2 mb-2">
                            <div>Project Type</div>
                            <div>Resource</div>
                            <div className="text-right">Hourly Rate</div>
                        </div>
                        <div className="space-y-3">
                            {[
                                ['Drafting / Scan to BIM', 'Modeler', '$20.00'],
                                ['Clash Resolution', 'Jr. Engineer', '$25.00'],
                                ['Detailed Engineering', 'Sr. Engineer', '$30.00']
                            ].map((row, i) => (
                                <div key={i} className="grid grid-cols-[2fr_1fr_1fr] text-[9pt] font-medium text-gray-700 items-center hover:bg-gray-50 p-1 rounded-sm -mx-1">
                                    <div className="font-semibold"><EditableText initialValue={row[0]} /></div>
                                    <div className="font-sans text-gray-500 font-normal"><EditableText initialValue={row[1]} /></div>
                                    <div className="text-right font-bold font-mono text-spetia-teal"><EditableText initialValue={row[2]} /></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section 2: Dedicated - Clean Table */}
                <div className="mb-10">
                    <h3 className="flex items-center gap-4 text-spetia-dark font-sans font-semibold uppercase tracking-widest text-xs mb-4">
                        <span className="text-spetia-orange-500 font-mono">02</span>
                        <EditableText initialValue="Dedicated Resources" />
                    </h3>
                    <div className="w-full">
                        <div className="grid grid-cols-[2fr_1fr_1fr] text-[7pt] uppercase tracking-wider text-gray-900 font-bold border-b border-gray-200 pb-2 mb-2">
                            <div>Role</div>
                            <div>Exp (Yrs)</div>
                            <div className="text-right">Monthly Retainer</div>
                        </div>
                        <div className="space-y-3">
                            {[
                                ['BIM Modeler', '3-5', '$3,000'],
                                ['BIM Engineer', '5-10', '$3,500'],
                                ['Project Manager', '10+', '$4,000']
                            ].map((row, i) => (
                                <div key={i} className="grid grid-cols-[2fr_1fr_1fr] text-[9pt] font-medium text-gray-700 items-center hover:bg-gray-50 p-1 rounded-sm -mx-1">
                                    <div className="font-semibold"><EditableText initialValue={row[0]} /></div>
                                    <div className="font-sans text-gray-500 font-normal"><EditableText initialValue={row[1]} /></div>
                                    <div className="text-right font-bold font-mono text-spetia-teal"><EditableText initialValue={row[2]} /></div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-3 text-[7pt] text-gray-400 font-medium text-right border-t border-dashed border-gray-100 pt-2">
                            <EditableText initialValue="* Minimum engagement period: 3 months" />
                        </div>
                    </div>
                </div>


                {/* Section 3: Fixed Bid - Minimalist Box (Thinner lines) */}
                <div className="border border-gray-200 p-6 rounded-sm mb-8 bg-white/50 relative overflow-hidden group hover:border-spetia-orange-500 transition-colors">
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gray-50 rounded-bl-3xl -mr-6 -mt-6"></div>
                    <div className="flex items-start gap-4 reltive z-10">
                        <span className="font-mono text-spetia-orange-500 text-xs mt-1">03</span>
                        <div>
                            <div className="font-bold text-xs uppercase tracking-widest text-spetia-dark mb-2"><EditableText initialValue="Fixed Bid Project" /></div>
                            <p className="font-sans text-[10pt] font-normal text-gray-600 leading-relaxed">
                                <EditableText initialValue="Fixed bid pricing provides total cost certainty. Final verification confirmed after detailed scope review." />
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer - Minimalist */}
                <div className="pb-[12mm]">
                    <BrochureFooter />
                </div>
            </div>
        </div>
    );
};

export default RateCard;
