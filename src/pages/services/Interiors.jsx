import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import AccentIcon from '../../components/common/CheckIcon';

const services = [
    {
        title: "Bespoke Residential Interiors",
        description: "Homes that reflect your heritage and aspirations. We specialize in blending modern aesthetics with traditional Indian elements.",
        features: ["Puja Room Design", "Modular Kitchens (Wet/Dry)", "Space-Saving Wardrobes", "False Ceiling & Lighting", "Custom Furniture", "Balcony Gardens"]
    },
    {
        title: "Corporate & Office Interiors",
        description: "Productivity-driven workspaces for Indian startups and corporates. Acoustic solutions and ergonomic layouts.",
        features: ["Reception Lobbies", "Conference Rooms", "Workstation Layouts", "Pantry & Cafeteria", "Sound Proofing", "Brand Branding"]
    },
    {
        title: "Hospitality & Retail",
        description: "Captivating designs for restaurants, showrooms, and boutiques that drive footfall and sales.",
        features: ["Thematic Design", "Display Units", "Ambient Lighting", "Customer Flow Planning", "Durable Finishes", "Signage Integration"]
    }
];

const materials = [
    { name: "Plywood", detail: "Marine Grade (BWP) for Kitchens" },
    { name: "Laminates", detail: "High-Gloss & Matte (Merino/Century)" },
    { name: "Hardware", detail: "Soft-close Hettich/Hafele fittings" },
    { name: "Lighting", detail: "Philips/Wipro Smart Integration" }
];

const Interiors = () => {
    return (
        <div className="bg-spetia-light min-h-screen">
            <SEO
                title="Luxury Interior Design"
                description="Premium interior design in India. Modular kitchens, wardrobes, and living spaces crafted with Hettich hardware and Century ply."
            />

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center bg-spetia-dark overflow-hidden pt-32 pb-16">
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
                                    Design & Decor
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white leading-[0.95] tracking-tight mb-6">
                                Interiors With <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spetia-orange-500 to-spetia-orange-400">Soul.</span>
                            </h1>

                            <p className="text-lg text-white/60 leading-relaxed max-w-lg mb-8 border-l-2 border-white/10 pl-6">
                                We don't just decorate; we curate. From the texture of the fabric to the finish of the veneer, every minute detail is chosen to elevate your lifestyle. "Build Beyond Intelligence" applies to beauty too.
                            </p>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-spetia-orange-600 text-white rounded-sm font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-spetia-dark transition-all duration-300"
                            >
                                <span>Book Consultation</span>
                                <span className="text-lg">→</span>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[450px] w-full rounded-sm overflow-hidden border border-white/10"
                        >
                            <img
                                src="/images/hero-interiors.png"
                                alt="Modern living room interior"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-6 right-6 bg-spetia-dark/90 p-6 border-r-4 border-white backdrop-blur-md">
                                <p className="text-white text-sm font-semibold">"Factory Finish Quality"</p>
                                <p className="text-white/60 text-xs mt-1"> Precision manufacturing for bespoke furniture.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="max-w-3xl mb-16">
                        <span className="text-spetia-orange-600 text-xs font-bold tracking-widest uppercase mb-4 block">Craftsmanship</span>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase text-spetia-dark tracking-tight">
                            Curated for Indian Homes
                        </h2>
                        <p className="text-gray-500 mt-6 text-lg">
                            Indian homes are unique—handling heavy cooking, monsoon moisture, and large family gatherings. Our designs are resilient yet elegant.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-sm border border-gray-200 hover:border-spetia-orange-500 transition-all duration-300 shadow-sm hover:shadow-xl group"
                            >
                                <span className="text-4xl font-bold text-gray-200 group-hover:text-spetia-orange-500/30 transition-colors font-mono mb-4 block">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <h3 className="text-xl font-bold uppercase text-spetia-dark mb-3">{service.title}</h3>
                                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{service.description}</p>

                                <div className="space-y-3">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-gray-700 text-sm font-medium">
                                            <div className="w-1.5 h-1.5 bg-spetia-orange-500 rounded-full"></div>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Materials Section */}
            <section className="py-20 bg-black text-white">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6">Material Mastery</h2>
                            <p className="text-white/60 mb-8 leading-relaxed">
                                Great design fails without great materials. We provide a transparency certificate for every sheet of ply, every screw, and every litre of paint used in your project.
                            </p>
                            <Link to="/contact" className="text-spetia-orange-500 font-bold uppercase text-sm border-b border-spetia-orange-500 pb-1 hover:text-white hover:border-white transition-colors">
                                View Material Specs
                            </Link>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-2 gap-6">
                            {materials.map((mat, idx) => (
                                <div key={idx} className="bg-white/5 p-6 border border-white/10 rounded-sm">
                                    <h4 className="font-bold text-lg mb-1">{mat.name}</h4>
                                    <p className="text-spetia-orange-500 text-xs uppercase tracking-wider">{mat.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="container-custom text-center">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-spetia-dark tracking-tight mb-4">
                        Visualize Your Space
                    </h2>
                    <p className="text-gray-500 mb-8 max-w-xl mx-auto">
                        Get 3D realistic renders before a single brick is laid.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 bg-spetia-dark text-white px-10 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-spetia-orange-600 transition-all duration-300"
                    >
                        <span>Start Design Journey</span>
                        <span className="text-lg">→</span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Interiors;
