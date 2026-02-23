import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const industries = [
    {
        id: "residential",
        title: "Residential",
        subtitle: "Premium Living",
        description: "Custom villas, independent houses, and gated community homes built with IS-standard materials and meticulous finish.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
        link: "/services/construction"
    },
    {
        id: "commercial",
        title: "Commercial",
        subtitle: "Business Spaces",
        description: "Offices, retail outlets, and mixed-use developments designed for functionality and modern aesthetics.",
        image: "https://images.unsplash.com/photo-1478860409698-8707f313ee8b?w=1200&q=80",
        link: "/services/construction"
    },
    {
        id: "hospitality",
        title: "Hospitality",
        subtitle: "Guest Experience",
        description: "Hotels, resorts, and restaurants built to deliver memorable guest experiences with premium interiors.",
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&q=80",
        link: "/services/interiors"
    },
    {
        id: "interiors",
        title: "Luxury Interiors",
        subtitle: "Premium Design",
        description: "End-to-end interior solutions — modular kitchens, wardrobes, false ceilings, and bespoke joinery with global sourcing.",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
        link: "/services/interiors"
    },
    {
        id: "renovation",
        title: "Renovation",
        subtitle: "Transform & Restore",
        description: "Complete renovation of existing structures — structural repair, modernization, and interior overhaul.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
        link: "/services/construction"
    },
    {
        id: "architectural",
        title: "Architectural Design",
        subtitle: "Creative Vision",
        description: "Climate-responsive architecture with Vastu consulting, 3D visualization, and BBMP-ready plan approvals.",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80",
        link: "/services/architectural-design"
    }
];

const Industries = () => {
    return (
        <div className="bg-spetia-dark min-h-screen">
            <SEO
                title="What We Build"
                description="Spetia constructs premium residential homes, commercial spaces, and luxury interiors across Bangalore and Pan India. Turnkey construction with BIM planning and IS-standard quality."
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
                                What We Build
                            </span>
                            <div className="h-[1px] w-16 bg-spetia-orange-500/50"></div>
                            <span className="text-white/40 text-xs font-mono">{industries.length} Segments</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase text-white leading-[0.9] tracking-tight mb-6">
                            Building <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-spetia-orange-500 to-spetia-orange-400">Excellence.</span>
                        </h1>

                        <p className="text-lg text-white/60 max-w-2xl font-light leading-relaxed">
                            From luxury homes to commercial spaces, we deliver premium construction with turnkey precision across Bangalore and Pan India.
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

            {/* Standards Section */}
            <section className="py-24 bg-black border-t border-white/10 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-spetia-orange-500/5 to-transparent pointer-events-none"></div>
                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
                        <div className="lg:col-span-1">
                            <span className="text-spetia-orange-500 text-xs font-bold tracking-widest uppercase mb-4 block">
                                The Spetia Standard
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold uppercase text-white leading-none mb-6">
                                Quality <br /> <span className="text-white/50">You Can Trust.</span>
                            </h2>
                            <p className="text-white/60 text-sm leading-relaxed mb-8">
                                Every project is built on a foundation of rigorous quality standards, transparent processes, and Indian code compliance.
                            </p>
                            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-spetia-orange-500 hover:text-white transition-colors">
                                <span>Learn More</span>
                                <span>→</span>
                            </Link>
                        </div>
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-spetia-orange-500/30 transition-colors group">
                                <h3 className="text-xl font-bold text-white uppercase mb-3 group-hover:text-spetia-orange-500 transition-colors">IS & NBC Compliance</h3>
                                <p className="text-white/50 text-sm leading-relaxed">
                                    All construction adheres to Indian Standard codes (IS 456, IS 1893) and National Building Code for structural safety and quality.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-spetia-orange-500/30 transition-colors group">
                                <h3 className="text-xl font-bold text-white uppercase mb-3 group-hover:text-spetia-orange-500 transition-colors">BIM-Driven Planning</h3>
                                <p className="text-white/50 text-sm leading-relaxed">
                                    3D Building Information Modeling for clash-free design, accurate BOQ, and zero-waste execution on every project.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-spetia-orange-500/30 transition-colors group">
                                <h3 className="text-xl font-bold text-white uppercase mb-3 group-hover:text-spetia-orange-500 transition-colors">Quality Control</h3>
                                <p className="text-white/50 text-sm leading-relaxed">
                                    Multi-stage quality checks — from material testing to plumb-level precision — with daily progress reporting and photo documentation.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-spetia-orange-500/30 transition-colors group">
                                <h3 className="text-xl font-bold text-white uppercase mb-3 group-hover:text-spetia-orange-500 transition-colors">Transparent Pricing</h3>
                                <p className="text-white/50 text-sm leading-relaxed">
                                    Itemized BOQ with no hidden costs. Real-time budget tracking so you always know where every rupee goes.
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
