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

const IntroductionPage = () => {
    return (
        <div className="w-[210mm] h-[297mm] bg-[#FDFBF7] relative flex flex-col mx-auto print:m-0 print:w-full print:h-screen overflow-hidden text-spetia-dark font-sans shadow-2xl print:shadow-none">
            <Watermark />
            {/* Texture Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            {/* Refined Industrial Header */}
            <div className="relative z-10 p-[12mm] pb-0 flex justify-between items-start">
                <div>
                    <img src={SpetiaLogo} alt="Spetia" className="h-[12mm] w-auto opacity-80 mix-blend-multiply mb-6" />
                    <div className="text-[7pt] uppercase tracking-[0.2em] text-gray-400 font-medium mb-2">Introduction</div>
                    <h1 className="text-4xl font-sans font-medium text-spetia-dark leading-[0.9] uppercase tracking-normal">
                        <EditableText initialValue="Who We Are" />
                    </h1>
                </div>
                <div className="text-right pt-2">
                    <div className="text-[6pt] uppercase tracking-widest text-gray-400 mb-1">Project Ref</div>
                    <div className="text-[9pt] font-mono text-spetia-orange-500">SP-INTRO-01</div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow flex flex-col px-[12mm] mt-12 relative z-10">

                <div className="flex gap-12 h-[40%]">
                    <div className="w-1/2 pt-8">
                        <h2 className="text-5xl font-sans font-bold uppercase text-spetia-dark leading-[0.9] mb-8 tracking-tight">
                            <EditableText initialValue="Global Engineering Force" />
                        </h2>
                        {/* Thinner Accent Line */}
                        <div className="w-12 h-[2px] bg-spetia-orange-500 mb-8"></div>
                    </div>
                    <div className="w-1/2 h-full bg-gray-200 overflow-hidden relative grayscale contrast-125">
                        <img
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
                            alt="About Spetia"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="flex gap-12 mt-12">
                    <div className="w-1/2">
                        <p className="text-[7pt] font-bold uppercase tracking-widest text-gray-400 mb-4 border-b border-gray-200 pb-2">The Mission</p>
                        {/* Lighter Body Text */}
                        <div className="font-sans text-[10pt] font-normal text-gray-600 leading-relaxed text-justify">
                            <EditableText initialValue="Spetia is a global leader in digital engineering outsourcing. We empower AEC firms, plant owners, and manufacturers to scale their capabilities without scaling their overhead. By combining human expertise with AI-driven workflows, we deliver Tier-1 quality at unprecedented speed." />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <p className="text-[7pt] font-bold uppercase tracking-widest text-gray-400 mb-4 border-b border-gray-200 pb-2">The Promise</p>
                        {/* Lighter Body Text */}
                        <div className="font-sans text-[10pt] font-normal text-gray-600 leading-relaxed text-justify">
                            <EditableText initialValue="We don't just draft; we engineer. From complex BIM coordination for hyperscale data centers to detailed plant engineering constraints, our team becomes an extension of your office, adhering to your standards." />
                        </div>
                    </div>
                </div>

                {/* Statistics - Refined numbers */}
                <div className="mt-auto mb-12 border-t border-gray-900/10 pt-8 grid grid-cols-3 gap-12">
                    <div>
                        <div className="text-4xl font-sans font-bold text-spetia-dark tracking-tight"><EditableText initialValue="150+" /></div>
                        <div className="text-[6pt] uppercase tracking-widest text-gray-400 mt-2 font-medium">Engineers</div>
                    </div>
                    <div>
                        <div className="text-4xl font-sans font-bold text-spetia-dark tracking-tight"><EditableText initialValue="1.2M" /></div>
                        <div className="text-[6pt] uppercase tracking-widest text-gray-400 mt-2 font-medium">Sq. Ft. Modeled</div>
                    </div>
                    <div>
                        <div className="text-4xl font-sans font-bold text-spetia-dark tracking-tight"><EditableText initialValue="15+" /></div>
                        <div className="text-[6pt] uppercase tracking-widest text-gray-400 mt-2 font-medium">Countries</div>
                    </div>
                </div>

                {/* Footer - Minimalist */}
                {/* Footer - Minimalist */}
                <div className="pb-[12mm]">
                    <BrochureFooter pageNumber="01" />
                </div>

            </div>
        </div>
    );
};

export default IntroductionPage;
