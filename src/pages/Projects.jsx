import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import AccentIcon from '../components/common/CheckIcon';

const projects = [
    {
        id: 1,
        title: "Cleveland Medical Center",
        category: "Healthcare",
        location: "Cleveland, OH",
        year: "2024",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80",
        tags: ["BIM Level 3", "MEPF Design"]
    },
    {
        id: 2,
        title: "Hilton Waterfront Resort",
        category: "Hospitality",
        location: "Dubai, UAE",
        year: "2023",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80",
        tags: ["Architecture", "Interior"]
    },
    {
        id: 3,
        title: "Amazon Fulfillment Hub",
        category: "Commercial",
        location: "Seattle, WA",
        year: "2024",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
        tags: ["Industrial", "Structural"]
    },
    {
        id: 4,
        title: "Stanford Research Lab",
        category: "Education",
        location: "Palo Alto, CA",
        year: "2023",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80",
        tags: ["Lab Design", "Sustainability"]
    },
    {
        id: 5,
        title: "Palm Jumeirah Villa",
        category: "Residential",
        location: "Dubai, UAE",
        year: "2024",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
        tags: ["Luxury", "BIM"]
    },
    {
        id: 6,
        title: "Tesla Gigafactory Annex",
        category: "Commercial",
        location: "Austin, TX",
        year: "2025",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80",
        tags: ["Industrial", "BIM 5D"]
    }
];

const filters = ["All", "Healthcare", "Hospitality", "Commercial", "Residential", "Education"];

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <div className="bg-spetia-dark min-h-screen">
            <SEO
                title="Projects"
                description="Explore Spetia's global portfolio of mission-critical projects: healthcare facilities, data centers, industrial plants, commercial spaces, and luxury developments featuring BIM, MEPF design, and structural engineering."
            />
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 border-b border-white/5 bg-spetia-dark overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                <div className="container-custom relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-spetia-orange-500 text-xs font-bold tracking-widest uppercase mb-4 block">
                            Global Portfolio
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold uppercase text-white leading-[0.9] tracking-tight mb-8">
                            Selected <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-spetia-orange-500 to-spetia-orange-400">Works.</span>
                        </h1>
                        <p className="text-lg text-white/60 max-w-2xl font-light leading-relaxed border-l-2 border-spetia-orange-500/30 pl-6">
                            A curated selection of our defining projects, demonstrating technical precision and design excellence across the globe.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter & Grid */}
            <section className="py-20">
                <div className="container-custom">
                    {/* Filters */}
                    <div className="flex flex-wrap gap-4 mb-16">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 border ${activeFilter === filter
                                    ? "bg-spetia-orange-500 border-spetia-orange-500 text-black"
                                    : "bg-transparent border-white/10 text-white/50 hover:border-spetia-orange-500 hover:text-white"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid - Magazine Style */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1"
                    >
                        <AnimatePresence>
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                    key={project.id}
                                    className="group relative bg-white/5 border border-white/10 overflow-hidden hover:border-spetia-orange-500/50 transition-all duration-500"
                                >
                                    {/* Image */}
                                    <div className="aspect-[4/3] overflow-hidden relative">
                                        <div className="absolute inset-0 bg-spetia-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply"></div>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4 z-20 flex gap-2">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="bg-black/80 backdrop-blur-sm px-2 py-1 text-[10px] text-spetia-orange-500 font-mono border border-white/10 uppercase">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        {/* Editorial Number Overlay */}
                                        <div className="absolute bottom-4 right-4 z-20">
                                            <span className="text-6xl font-bold text-white/10 font-mono">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <span className="text-spetia-orange-500 text-xs font-bold tracking-widest uppercase mb-1 block">
                                                    {project.category}
                                                </span>
                                                <h3 className="text-xl font-bold text-white uppercase tracking-wide group-hover:text-spetia-orange-500 transition-colors duration-300">
                                                    {project.title}
                                                </h3>
                                            </div>
                                            {/* Typography Arrow - No Icon */}
                                            <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:bg-spetia-orange-500 group-hover:text-black group-hover:border-spetia-orange-500 transition-all duration-300 text-white/50 text-xl">
                                                →
                                            </div>
                                        </div>

                                        {/* Location & Year - Typography Only */}
                                        <div className="flex items-center gap-6 border-t border-white/10 pt-4 text-xs text-white/40 font-mono uppercase tracking-wider">
                                            <div className="flex items-center gap-2">
                                                <AccentIcon variant="location" />
                                                <span>{project.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-spetia-orange-500">—</span>
                                                <span>{project.year}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* CTA - Industrial Style */}
            <section className="py-20 border-t border-white/10 bg-gradient-to-b from-spetia-dark to-black relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
                <div className="container-custom text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold uppercase text-white mb-8 tracking-tight">
                        Have a Challenge? <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-spetia-orange-500 to-spetia-orange-400">Let's solve it.</span>
                    </h2>
                    <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto font-light">
                        Explore how our engineering solutions can add value to your next major project.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-spetia-orange-500 transition-all duration-300 group"
                    >
                        <span>Start Project</span>
                        <span className="group-hover:translate-x-1 transition-transform text-lg">→</span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Projects;
