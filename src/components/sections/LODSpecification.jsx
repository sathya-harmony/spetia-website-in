import React from 'react';
import { motion } from 'framer-motion';

const lodLevels = [
    {
        level: "LOD 100",
        name: "Conceptual",
        description: "Basic overall building massing. Suitable for feasibility studies and early design exploration.",
        detail: "10%",
        uses: ["Space Planning", "Feasibility Studies", "Initial Cost Estimates"]
    },
    {
        level: "LOD 200",
        name: "Schematic",
        description: "Generalized systems with approximate quantities, size, shape, and location.",
        detail: "25%",
        uses: ["Schematic Design", "System Analysis", "General Coordination"]
    },
    {
        level: "LOD 300",
        name: "Design Development",
        description: "Accurate size, shape, location, and orientation. Suitable for permit drawings.",
        detail: "50%",
        uses: ["Design Development", "Permit Drawings", "Detailed Cost Estimates"]
    },
    {
        level: "LOD 350",
        name: "Construction Documentation",
        description: "Includes detailed interfaces with other building systems. Full coordination complete.",
        detail: "75%",
        uses: ["Clash Detection", "Trade Coordination", "Fabrication Prep"]
    },
    {
        level: "LOD 400",
        name: "Fabrication",
        description: "Assembly-level detail with specific manufacturer information for fabrication.",
        detail: "90%",
        uses: ["Fabrication", "Shop Drawings", "Installation Planning"]
    },
    {
        level: "LOD 500",
        name: "As-Built",
        description: "Field-verified representation of actual installed conditions for facility management.",
        detail: "100%",
        uses: ["As-Built Records", "Facility Management", "Operations & Maintenance"]
    }
];

const LODSpecification = () => {
    return (
        <section className="py-20 md:py-28 bg-white border-b border-gray-200">
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
                            Industry Standards
                        </span>
                        <span className="h-[2px] w-8 bg-spetia-orange-500"></span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-spetia-dark uppercase tracking-tight mb-4">
                        Level of <span className="text-transparent bg-clip-text bg-gradient-to-r from-spetia-orange-500 to-spetia-orange-600">Development</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        We deliver BIM models at all LOD levels per AIA E202/G202 standards, tailored to your project phase and requirements.
                    </p>
                </motion.div>

                {/* LOD Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {lodLevels.map((lod, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="group relative bg-spetia-light border border-gray-200 hover:border-spetia-orange-500 transition-all duration-300 p-6 rounded-sm"
                        >
                            {/* Progress Bar */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gray-100 overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-spetia-orange-500 to-spetia-orange-400 transition-all duration-500"
                                    style={{ width: lod.detail }}
                                ></div>
                            </div>

                            {/* Header */}
                            <div className="flex items-center justify-between mb-4 pt-2">
                                <span className="text-2xl font-black text-spetia-dark tracking-tighter">
                                    {lod.level}
                                </span>
                                <span className="text-xs font-bold text-spetia-orange-500 bg-spetia-orange-500/10 px-2 py-1 rounded-sm">
                                    {lod.detail} Detail
                                </span>
                            </div>

                            {/* Name */}
                            <h3 className="text-lg font-bold text-spetia-dark uppercase tracking-tight mb-2 group-hover:text-spetia-orange-600 transition-colors">
                                {lod.name}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-gray-500 leading-relaxed mb-4">
                                {lod.description}
                            </p>

                            {/* Uses */}
                            <div className="flex flex-wrap gap-2">
                                {lod.uses.map((use, i) => (
                                    <span key={i} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-white border border-gray-200 text-gray-500">
                                        {use}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LODSpecification;
