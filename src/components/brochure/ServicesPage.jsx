import React from 'react';
import SpetiaLogo from '../../assets/spetia-logo.svg';
import Watermark from './Watermark';
import BrochureFooter from './BrochureFooter';

const services = [
    {
        title: "BIM Solutions",
        description: "Zero-clash from LOD 100 to 500.",
        image: "https://chapman-taylor.transforms.svdcdn.com/production/uploads/Chapman_Taylor_MediaCityUK-Bupa_Place_BIM-Image.jpg?w=2000&h=1125&q=90&auto=format&fit=crop&dm=1601988662&s=54f73def89a4cc71db18f6d7e1598d08'"
    },
    {
        title: "Architectural Drafting",
        description: "High-precision DD & CD sets.",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80&grayscale"
    },
    {
        title: "Structural Design",
        description: "Analysis, Rebar, Stamping.",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80&grayscale"
    },
    {
        title: "MEPF Design",
        description: "Clash-free Systems Coordination.",
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80&grayscale"
    },
    {
        title: "AR/VR Viz",
        description: "Immersive Stakeholder Reviews.",
        image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?w=800&q=80&grayscale"
    },
    {
        title: "Data Centers",
        description: "Hyperscale Tier Certification.",
        image: "https://i.pinimg.com/1200x/e9/9e/36/e99e36993eac35f759f9a096b09348df.jpg&grayscale"
    },
    {
        title: "Plant Eng.",
        description: "P&ID to Structural Detailing.",
        image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80&grayscale"
    },
    {
        title: "Value Eng.",
        description: "Cost Optimization Strategies.",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80&grayscale"
    },
];

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

const ServicesPage = () => {
    return (
        <div className="w-[210mm] h-[297mm] bg-[#FDFBF7] relative flex flex-col mx-auto print:m-0 print:w-full print:h-screen overflow-hidden text-spetia-dark font-sans shadow-2xl print:shadow-none">

            <Watermark />

            {/* Texture Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            {/* Refined Industrial Header */}
            <div className="relative z-10 p-[12mm] pb-0 flex justify-between items-start">
                <div>
                    <img src={SpetiaLogo} alt="Spetia" className="h-[12mm] w-auto opacity-80 mix-blend-multiply mb-8" />
                    <div className="text-[7pt] uppercase tracking-[0.2em] text-gray-400 font-medium mb-2">Our Services</div>
                    <h1 className="text-5xl font-sans font-medium text-spetia-dark leading-[0.9] uppercase tracking-normal">
                        <EditableText initialValue="Integrated Expertise" />
                    </h1>
                </div>
                <div className="text-right pt-2">
                    <div className="text-[6pt] uppercase tracking-widest text-gray-400 mb-1">Project Ref</div>
                    <div className="text-[9pt] font-mono text-spetia-orange-500">SP-CAP-03</div>
                </div>
            </div>

            <div className="px-[12mm] mt-16 flex-grow flex flex-col relative z-10">
                {/* Lighter Body Text */}
                <p className="text-sm max-w-lg text-gray-500 font-sans font-normal mb-16 border-l border-spetia-orange-500 pl-6 leading-relaxed">
                    <EditableText initialValue="Comprehensive digital delivery across the entire asset lifecycle. From conceptual design to facility management." />
                </p>

                {/* Visual Grid - Minimalist List/Grid Hybrid */}
                <div className="grid grid-cols-2 gap-x-16 gap-y-12">
                    {services.map((service, index) => (
                        <div key={index} className="flex gap-6 items-start group">
                            {/* Larger Image Thumbnail */}
                            <div className="w-24 h-24 flex-shrink-0 bg-gray-200 overflow-hidden grayscale contrast-125 opacity-80 group-hover:opacity-100 transition-opacity">
                                <img src={service.image} className="w-full h-full object-cover mix-blend-multiply" alt="" />
                            </div>

                            <div className="pt-2">
                                <h3 className="font-sans font-bold uppercase tracking-wider text-[11pt] mb-2 text-spetia-dark group-hover:text-spetia-orange-500 transition-colors">
                                    <EditableText initialValue={service.title} />
                                </h3>
                                <div className="text-[10pt] text-gray-500 font-sans font-normal leading-relaxed mb-3">
                                    <EditableText initialValue={service.description} />
                                </div>
                                {/* Thinner Divider */}
                                <div className="h-[1px] w-0 group-hover:w-full bg-spetia-orange-500 transition-all duration-500 ease-out"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Image Stamp */}
                <div className="mt-auto mb-10 border-t border-gray-900/10 pt-8">
                    <div className="flex items-center gap-6">
                        <div className="h-16 w-24 bg-spetia-teal/10 flex items-center justify-center border border-spetia-teal/20">
                            <div className="text-[6pt] font-mono text-spetia-teal uppercase text-center font-bold">ISO 19650<br />Compliant</div>
                        </div>
                        <div className="text-[8pt] text-gray-400 max-w-sm font-medium">
                            Standardized Information Management for Global Projects.
                        </div>
                    </div>
                </div>

                {/* Footer - Minimalist */}
                <div className="pb-[12mm]">
                    <BrochureFooter pageNumber="03" />
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
