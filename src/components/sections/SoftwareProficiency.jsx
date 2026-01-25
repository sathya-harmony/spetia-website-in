import React from 'react';
import { motion } from 'framer-motion';

// Software categories with proficiency levels
const softwareCategories = {
    bim: {
        name: "BIM & Modeling",
        tools: [
            { name: "Autodesk Revit", version: "2024/2025", proficiency: "Expert" },
            { name: "Navisworks", version: "Manage & Simulate", proficiency: "Expert" },
            { name: "BIM 360 / ACC", version: "Cloud Platform", proficiency: "Expert" },
            { name: "Dynamo", version: "Scripting & Automation", proficiency: "Advanced" },
            { name: "Tekla Structures", version: "2024", proficiency: "Advanced" }
        ]
    },
    cad: {
        name: "CAD & Drafting",
        tools: [
            { name: "AutoCAD", version: "2024/2025", proficiency: "Expert" },
            { name: "AutoCAD MEP", version: "2024", proficiency: "Expert" },
            { name: "AutoCAD Plant 3D", version: "2024", proficiency: "Expert" },
            { name: "MicroStation", version: "CONNECT", proficiency: "Advanced" }
        ]
    },
    analysis: {
        name: "Analysis & Simulation",
        tools: [
            { name: "ETABS", version: "Structural Analysis", proficiency: "Expert" },
            { name: "STAAD.Pro", version: "Structural Design", proficiency: "Expert" },
            { name: "CAESAR II", version: "Pipe Stress Analysis", proficiency: "Expert" },
            { name: "HAP", version: "HVAC Analysis", proficiency: "Advanced" },
            { name: "Dialux", version: "Lighting Analysis", proficiency: "Advanced" }
        ]
    },
    visualization: {
        name: "Visualization & VR",
        tools: [
            { name: "Enscape", version: "Real-time Rendering", proficiency: "Expert" },
            { name: "Twinmotion", version: "Visualization", proficiency: "Expert" },
            { name: "Unity", version: "VR Development", proficiency: "Advanced" },
            { name: "Unreal Engine", version: "Real-time 3D", proficiency: "Advanced" }
        ]
    },
    plant: {
        name: "Plant Engineering",
        tools: [
            { name: "SmartPlant P&ID", version: "Enterprise", proficiency: "Expert" },
            { name: "PDMS/E3D", version: "Design", proficiency: "Expert" },
            { name: "SP3D", version: "SmartPlant 3D", proficiency: "Expert" },
            { name: "6SigmaDCX", version: "Data Center CFD", proficiency: "Advanced" }
        ]
    }
};

const standards = [
    { name: "AIA", description: "American Institute of Architects" },
    { name: "ISO 19650", description: "BIM Information Management" },
    { name: "IBC", description: "International Building Code" },
    { name: "ASHRAE", description: "HVAC Standards" },
    { name: "NFPA", description: "Fire Protection Standards" },
    { name: "NEC", description: "National Electrical Code" },
    { name: "LEED", description: "Green Building Certification" },
    { name: "COBie", description: "Facility Management Data" }
];

const SoftwareProficiency = ({ categories = ['bim', 'cad', 'analysis'], showStandards = true }) => {
    const displayCategories = categories.map(cat => softwareCategories[cat]).filter(Boolean);

    return (
        <section className="py-20 md:py-28 bg-spetia-dark text-white overflow-hidden">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="h-[2px] w-8 bg-spetia-orange-500"></span>
                        <span className="text-spetia-orange-500 text-xs font-bold tracking-widest uppercase">
                            Technology Stack
                        </span>
                        <span className="h-[2px] w-8 bg-spetia-orange-500"></span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight mb-4">
                        Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-spetia-orange-500 to-spetia-orange-600">Proficiency</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Our team maintains expert-level proficiency across industry-leading software platforms.
                    </p>
                </motion.div>

                {/* Software Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {displayCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-sm p-6"
                        >
                            <h3 className="text-lg font-bold uppercase tracking-tight mb-6 text-spetia-orange-500">
                                {category.name}
                            </h3>
                            <div className="space-y-4">
                                {category.tools.map((tool, toolIndex) => (
                                    <div key={toolIndex} className="flex items-center justify-between gap-4 pb-3 border-b border-white/5 last:border-0">
                                        <div>
                                            <p className="font-bold text-white text-sm">{tool.name}</p>
                                            <p className="text-[10px] text-white/40 uppercase tracking-wider">{tool.version}</p>
                                        </div>
                                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm ${tool.proficiency === 'Expert'
                                                ? 'bg-spetia-orange-500/20 text-spetia-orange-500'
                                                : 'bg-white/10 text-white/60'
                                            }`}>
                                            {tool.proficiency}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Standards Compliance */}
                {showStandards && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="border-t border-white/10 pt-12"
                    >
                        <h3 className="text-center text-sm font-bold uppercase tracking-widest text-white/40 mb-8">
                            Standards & Compliance
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {standards.map((standard, index) => (
                                <div key={index} className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-3 rounded-sm transition-all duration-300">
                                    <span className="text-xl font-black text-spetia-orange-500 tracking-tighter">{standard.name}</span>
                                    <span className="text-[10px] text-white/50 uppercase tracking-wider hidden md:block">{standard.description}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default SoftwareProficiency;
