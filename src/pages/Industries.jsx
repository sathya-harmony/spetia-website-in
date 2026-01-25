import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const industries = [
    {
        id: "healthcare",
        title: "Healthcare",
        subtitle: "Clinical Precision",
        description: "Advanced MEPF engineering for hospitals, clinics, and medical research facilities.",
        image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&q=80",
        link: "/industries/healthcare"
    },
    {
        id: "mission-critical",
        title: "Mission Critical",
        subtitle: "Data Centers",
        description: "Hyperscale and edge computing infrastructure with 99.999% uptime reliability.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
        link: "/services/data-center-engineering"
    },
    {
        id: "industrial",
        title: "Industrial & Plants",
        subtitle: "Process Engineering",
        description: "Manufacturing plants, refineries, and processing facilities designed for peak output.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80",
        link: "/services/plant-engineering"
    },
    {
        id: "energy",
        title: "Energy & Utilities",
        subtitle: "Power Generation",
        description: "Sustainable energy infrastructure, from renewables to transmission & distribution.",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
        link: "/services/plant-engineering"
    },
    {
        id: "construction",
        title: "Construction",
        subtitle: "AEC Support",
        description: "Comprehensive BIM and coordination services for general contractors and builders.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
        link: "/services/bim-solutions"
    },
    {
        id: "commercial",
        title: "Commercial",
        subtitle: "Scale & Efficiency",
        description: "Optimized spaces for retail, corporate offices, and mixed-use developments.",
        image: "https://images.unsplash.com/photo-1478860409698-8707f313ee8b?w=1200&q=80",
        link: "/industries/commercial"
    },
    {
        id: "hospitality",
        title: "Hospitality",
        subtitle: "Guest Experience",
        description: "Immersive environments for luxury hotels, resorts, and entertainment venues.",
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&q=80",
        link: "/industries/hospitality"
    },
    {
        id: "residential",
        title: "Residential",
        subtitle: "Modern Habitat",
        description: "Sustainable connectivity for private homes, townships, and housing estates.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
        link: "/industries/residential"
    },
    {
        id: "education",
        title: "Education",
        subtitle: "Future Gen",
        description: "Inspiring learning environments for K-12, universities, and training centers.",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80",
        link: "/industries/education"
    }
];

const Industries = () => {
    return (
        <div className="bg-spetia-dark min-h-screen">
            <SEO
                title="Industries"
                description="Spetia serves healthcare, mission-critical data centers, industrial plants, energy, construction, commercial, hospitality, residential, and education sectors with specialized digital engineering solutions."
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-spetia-orange-500 text-xs font-bold tracking-widest uppercase">
                                Sector Expertise
                            </span>
                            <div className="h-[1px] w-16 bg-spetia-orange-500/50"></div>
                            <span className="text-white/40 text-xs font-mono">{industries.length} Verticals</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase text-white leading-[0.9] tracking-tight mb-6">
                            Industry <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-spetia-orange-500 to-spetia-orange-400">Verticals.</span>
                        </h1>

                        <p className="text-lg text-white/60 max-w-2xl font-light leading-relaxed">
                            Engineering solutions calibrated by industry. Deep domain expertise meets global delivery capability across the sectors that define modern infrastructure.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="py-16 md:py-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={industry.id}
                                id={industry.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link
                                    to={industry.link}
                                    className="group block relative h-[380px] overflow-hidden rounded-sm border border-white/10 hover:border-spetia-orange-500/50 transition-all duration-300"
                                >
                                    {/* Background Image */}
                                    <img
                                        src={industry.image}
                                        alt={industry.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-spetia-dark via-spetia-dark/70 to-spetia-dark/20"></div>

                                    {/* Content */}
                                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                        {/* Number */}
                                        <span className="text-spetia-orange-500/60 text-5xl font-bold font-mono mb-3">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>

                                        {/* Title */}
                                        <h3 className="text-2xl font-bold text-white uppercase mb-1 group-hover:text-spetia-orange-500 transition-colors">
                                            {industry.title}
                                        </h3>

                                        {/* Subtitle */}
                                        <p className="text-white/40 text-xs font-mono uppercase tracking-widest mb-4">
                                            {industry.subtitle}
                                        </p>

                                        {/* Description */}
                                        <p className="text-white/60 text-sm leading-relaxed mb-4">
                                            {industry.description}
                                        </p>

                                        {/* Learn More Link */}
                                        <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider group-hover:text-spetia-orange-500 transition-colors">
                                            <span>Learn More</span>
                                            <span className="text-spetia-orange-500 group-hover:translate-x-1 transition-transform">→</span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Universal Standards - Authority Section */}
            <section className="py-24 bg-black border-t border-white/10 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-spetia-orange-500/5 to-transparent pointer-events-none"></div>
                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
                        <div className="lg:col-span-1">
                            <span className="text-spetia-orange-500 text-xs font-bold tracking-widest uppercase mb-4 block">
                                The Spetia Standard
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold uppercase text-white leading-none mb-6">
                                Engineering <br /> <span className="text-white/50">Without Borders.</span>
                            </h2>
                            <p className="text-white/60 text-sm leading-relaxed mb-8">
                                Our industry-agnostic approach is built on a foundation of rigorous quality standards and global compliance.
                            </p>
                            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-spetia-orange-500 hover:text-white transition-colors">
                                <span>View Certifications</span>
                                <span>→</span>
                            </Link>
                        </div>
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-spetia-orange-500/30 transition-colors group">
                                <h3 className="text-xl font-bold text-white uppercase mb-3 group-hover:text-spetia-orange-500 transition-colors">Global Compliance</h3>
                                <p className="text-white/50 text-sm leading-relaxed">
                                    Adherence to ISO 9001, IBC, and local building codes across US, UK, Australia, India, and Middle East regions.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-spetia-orange-500/30 transition-colors group">
                                <h3 className="text-xl font-bold text-white uppercase mb-3 group-hover:text-spetia-orange-500 transition-colors">Data Security</h3>
                                <p className="text-white/50 text-sm leading-relaxed">
                                    Enterprise-grade IP protection and secure data environments for sensitive government and defense projects.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-spetia-orange-500/30 transition-colors group">
                                <h3 className="text-xl font-bold text-white uppercase mb-3 group-hover:text-spetia-orange-500 transition-colors">Technology Agnostic</h3>
                                <p className="text-white/50 text-sm leading-relaxed">
                                    We work in Revit, Bentley, AutoCAD, and adapt to your existing BIM workflows.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-spetia-orange-500/30 transition-colors group">
                                <h3 className="text-xl font-bold text-white uppercase mb-3 group-hover:text-spetia-orange-500 transition-colors">24/7 Delivery</h3>
                                <p className="text-white/50 text-sm leading-relaxed">
                                    Follow-the-sun delivery model ensuring continuous progress and reduced turnaround times.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Industries;
