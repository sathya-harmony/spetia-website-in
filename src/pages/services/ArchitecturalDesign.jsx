import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import AccentIcon from '../../components/common/CheckIcon';

const services = [
    {
        title: "Master Planning & Layouts",
        description: "Optimized site planning to maximize FSI/FAR while ensuring compliance with local by-laws (BBMP, BDA, etc.).",
        features: ["Site Analysis", "Floor Space Index Check", "Setback Planning", "Parking Layouts", "Driveway Circulation", "Landscape Zoning"]
    },
    {
        title: "Building Design (Elevation/Façade)",
        description: "Striking 3D elevations that define your building's identity. We balance aesthetics with cost-effective construction methods.",
        features: ["Modern & Contemporary Styles", "3D Visualization", "Material Palette Selection", "Cladding Details", "Lighting Concepts", "Weather Protection"]
    },
    {
        title: "Structural & MEP Consultants",
        description: "Scientific integration of structure, electrical, and plumbing systems for a robust, maintenance-free building.",
        features: ["Column Positioning", "Beam Layouts", "Electrical Looping Plans", "Plumbing Diagrams", "Rainwater Harvesting", "Solar Integration"]
    }
];

const ArchitecturalDesign = () => {
    return (
        <div className="bg-spetia-light min-h-screen">
            <SEO
                title="Architectural Design Services"
                description="Expert architectural planning and design in India. Floor plans, 3D elevations, and structural vetting compliant with National Building Codes."
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
                                    Visionary Planning
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white leading-[0.95] tracking-tight mb-6">
                                Architecture <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spetia-orange-500 to-spetia-orange-400">That Works.</span>
                            </h1>

                            <p className="text-lg text-white/60 leading-relaxed max-w-lg mb-8 border-l-2 border-white/10 pl-6">
                                True architecture is the balance of form and function. We design spaces that breathe, utilizing natural light and ventilation to create sustainable, energy-efficient structures for the Indian climate.
                            </p>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-spetia-orange-600 text-white rounded-sm font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-spetia-dark transition-all duration-300"
                            >
                                <span>Start Planning</span>
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
                                src="/images/hero-architecture.png"
                                alt="Architectural blueprint"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-6 left-6 bg-spetia-orange-600 text-white px-4 py-2 text-xs font-bold uppercase tracking-widest">
                                Vastu Compliant
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="max-w-3xl mb-16">
                        <span className="text-spetia-orange-600 text-xs font-bold tracking-widest uppercase mb-4 block">Blueprint to Reality</span>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase text-spetia-dark tracking-tight">
                            Comprehensive Design
                        </h2>
                        <p className="text-gray-500 mt-6 text-lg">
                            We don't just give you a drawing; we give you a roadmap to construction. Every line we draw is constructible and cost-evaluated.
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
                                <span className="text-4xl font-bold text-spetia-orange-500/20 font-mono mb-4 block">
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

            {/* Methodology */}
            <section className="py-20 bg-gray-50 border-y border-gray-200">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-spetia-orange-600 text-xs font-bold tracking-widest uppercase mb-4 block">Our Philosophy</span>
                            <h2 className="text-3xl font-bold uppercase text-spetia-dark mb-6">Build Beyond Intelligence</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Intelligence is knowing how to build. Wisdom is knowing how to build for <b>life</b>. We integrate:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <span className="text-spetia-orange-500 text-xl font-bold">1.</span>
                                    <div>
                                        <h4 className="font-bold text-spetia-dark uppercase text-sm">Vastu Sastra</h4>
                                        <p className="text-sm text-gray-500">Harmonizing energy flow for health and prosperity.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-spetia-orange-500 text-xl font-bold">2.</span>
                                    <div>
                                        <h4 className="font-bold text-spetia-dark uppercase text-sm">Climatology</h4>
                                        <p className="text-sm text-gray-500">Passive cooling and cross-ventilation strategies.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-spetia-orange-500 text-xl font-bold">3.</span>
                                    <div>
                                        <h4 className="font-bold text-spetia-dark uppercase text-sm">Space Efficiency</h4>
                                        <p className="text-sm text-gray-500">Zero-waste floor plans to save you money.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-[400px]">
                            <div className="absolute inset-0 bg-blue-500/10 -translate-x-4 translate-y-4"></div>
                            <img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                                alt="Modern Architecture"
                                className="w-full h-full object-cover relative z-10"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-spetia-dark">
                <div className="container-custom text-center">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-white tracking-tight mb-6">
                        Get blueprints for your future
                    </h2>
                    <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto">
                        Speak to our principal architect today.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 bg-white text-spetia-dark px-10 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-spetia-orange-600 hover:text-white transition-all duration-300"
                    >
                        <span>Contact Us</span>
                        <span className="text-lg">→</span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ArchitecturalDesign;
