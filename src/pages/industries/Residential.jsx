import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import AccentIcon from '../../components/common/CheckIcon';

const sectors = [
    {
        title: "Single-Family Homes",
        description: "Custom residences designed for comfort, efficiency, and personal expression.",
        features: ["Custom design", "Energy efficiency", "Smart home integration", "Outdoor living"]
    },
    {
        title: "Multi-Family Housing",
        description: "Apartments and condominiums optimized for density, community, and lifestyle.",
        features: ["Unit optimization", "Amenity design", "Parking solutions", "Common areas"]
    },
    {
        title: "Senior Living",
        description: "Age-in-place communities with accessibility, safety, and quality of life focus.",
        features: ["Accessibility design", "Healthcare integration", "Social spaces", "Safety systems"]
    },
    {
        title: "Mixed-Use Residential",
        description: "Live-work-play developments that blend residential with retail and amenities.",
        features: ["Retail integration", "Parking strategy", "Vertical planning", "Community spaces"]
    }
];

const Residential = () => {
    return (
        <div className="bg-spetia-dark min-h-screen">
            <SEO
                title="Residential"
                description="Residential design: single-family homes, multi-family housing, senior living, and mixed-use developments. Creating homes that enhance quality of life."
            />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center bg-spetia-dark overflow-hidden pt-32 pb-16">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

                <div className="container-custom relative z-10 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <div className="h-[2px] w-8 bg-spetia-orange-500"></div>
                                <span className="text-spetia-orange-500 text-xs font-bold tracking-widest uppercase">
                                    Industry Vertical
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white leading-[0.95] tracking-tight mb-6">
                                Residential & <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spetia-orange-500 to-spetia-orange-400">Living.</span>
                            </h1>

                            <p className="text-lg text-white/60 leading-relaxed max-w-lg mb-8 border-l-2 border-spetia-orange-500/30 pl-6">
                                We design homes and residential communities that enhance quality of life, from luxury estates to sustainable multi-family developments.
                            </p>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 bg-spetia-orange-500 text-black px-8 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-spetia-orange-400 transition-all duration-300"
                            >
                                <span>Start Project</span>
                                <span>→</span>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[350px] w-full rounded-sm overflow-hidden border border-white/10"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
                                alt="Modern Residential Architecture"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Sectors Grid */}
            <section className="py-16 md:py-20 bg-spetia-dark">
                <div className="container-custom">
                    <div className="max-w-2xl mb-12">
                        <span className="text-spetia-orange-500 text-xs font-bold tracking-widest uppercase mb-4 block">Housing Types</span>
                        <h2 className="text-2xl md:text-3xl font-bold uppercase text-white tracking-tight">
                            Residential Spaces We Build
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {sectors.map((sector, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 p-6 rounded-sm border border-white/10 hover:border-spetia-orange-500/30 transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <span className="text-3xl font-bold text-spetia-orange-500/40 font-mono">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold uppercase text-white mb-2">{sector.title}</h3>
                                        <p className="text-white/60 text-sm mb-4">{sector.description}</p>

                                        <div className="grid grid-cols-2 gap-2">
                                            {sector.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-white/50 text-xs">
                                                    <AccentIcon variant="dot" />
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 border-t border-white/10">
                <div className="container-custom text-center">
                    <h2 className="text-2xl md:text-4xl font-bold uppercase text-white tracking-tight mb-6">
                        Ready to Build Home?
                    </h2>
                    <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto">
                        Partner with us to create residential spaces that people are proud to call home.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-spetia-orange-500 transition-all duration-300"
                    >
                        <span>Get Started</span>
                        <span>→</span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Residential;
