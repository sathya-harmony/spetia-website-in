import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollDown from '../common/ScrollDown';

const ProjectsHero = () => {
    return (
        <section className="relative min-h-[90vh] bg-arch-black text-white overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col justify-center items-center text-center md:items-start md:text-left px-6 md:px-12 lg:px-16 xl:px-24 pt-32 pb-20 lg:pt-40 lg:pb-24 order-2 lg:order-1"
                >
                    {/* Minimal label */}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-brick-400 text-sm font-medium tracking-widest uppercase mb-8"
                    >
                        Verticals
                    </motion.span>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] tracking-tight mb-8"
                    >
                        Solutions for{' '}
                        <span className="font-serif italic text-brick-400">Every Sector</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-base md:text-lg text-white/50 max-w-xl leading-relaxed mb-10"
                    >
                        From hospitals and hotels to heritage restorations—we bring
                        specialized expertise to every building type.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-wrap justify-center md:justify-start gap-4"
                    >
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-brick-600 text-white rounded-full font-medium text-sm transition-all duration-300 hover:bg-brick-700 group"
                        >
                            <span>Discuss your project</span>
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Link>

                    </motion.div>

                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover="hover"
                    transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="relative h-[50vh] lg:h-auto order-1 lg:order-2 overflow-hidden group"
                >
                    <div className="absolute inset-0">
                        <motion.img
                            variants={{ hover: { scale: 1.05 } }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            src="/images/6883fa3ebc659e0c35d03072_4-Brown.avif"
                            alt="Industry verticals"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-arch-black/20 transition-opacity duration-300 group-hover:opacity-40" />
                        <div className="absolute inset-0 bg-gradient-to-t from-arch-black/60 to-transparent lg:hidden" />
                    </div>
                </motion.div>

            </div>

            <ScrollDown className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20" />


        </section >
    );
};

export default ProjectsHero;
