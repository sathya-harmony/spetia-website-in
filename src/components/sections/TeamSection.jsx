import React from 'react';
import { motion } from 'framer-motion';

const teamAreas = [
    {
        title: "Architecture & Design",
        description: "Architects who craft distinctive designs using cutting-edge tools and proven methodologies.",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80"
    },
    {
        title: "Building Information Modelling",
        description: "3D coordination to 7D lifecycle management—precision engineering for projects of any complexity.",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
    },
    {
        title: "Visualization & Digital Twins",
        description: "Immersive AR, VR, and Digital Twin experiences that let you walk through spaces before they're built.",
        image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?w=800&q=80"
    }
];

const TeamSection = () => {
    return (
        <section className="bg-spetia-dark py-20 md:py-32 border-b border-white/5 relative">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
            <div className="container mx-auto px-8 md:px-12 lg:px-16 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mb-16 md:mb-20 mx-auto md:mx-0 text-center md:text-left">
                    <span className="text-spetia-orange-500 text-xs font-bold tracking-widest uppercase mb-4 block">Our Team</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white tracking-tight leading-none mb-6">
                        Experts who deliver <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-spetia-orange-500 to-spetia-orange-400">Precision.</span>
                    </h2>
                    <p className="text-lg text-white/50 leading-relaxed max-w-2xl">
                        Architects, structural engineers, MEP specialists, and digital modelers—all under one roof. We handle projects of any scale, delivering quality across industries.
                    </p>
                </div>

                {/* Team areas grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {teamAreas.map((area, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group"
                        >
                            <div className="h-[300px] md:h-[400px] rounded-sm overflow-hidden mb-6 relative">
                                <div className="absolute inset-0 bg-spetia-orange-600/0 group-hover:bg-spetia-orange-600/20 z-10 transition-colors duration-500"></div>
                                <img
                                    src={area.image}
                                    alt={area.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                                    loading="lazy"
                                />
                            </div>
                            <h4 className="text-2xl font-bold uppercase text-white mb-3 tracking-tight group-hover:text-spetia-orange-500 transition-colors">{area.title}</h4>
                            <p className="text-white/50 leading-relaxed text-sm">{area.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
