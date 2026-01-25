import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollDown from '../common/ScrollDown';

const ServicesHero = ({
    label = "Premium Services",
    title = <>Build Dreams.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-spetia-orange-500 to-spetia-orange-400">Build Reality.</span></>,
    description = "We deliver world-class construction, interior design, and architectural planning. From concept to completion, we bring your vision to life.",
    image = "/images/home-hero.png"
}) => {
    return (
        <section className="relative min-h-[80vh] bg-spetia-dark text-white overflow-hidden flex flex-col justify-center">

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
            <div className="absolute inset-0 border-r border-l border-white/5 max-w-[1800px] mx-auto pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] max-w-[1800px] mx-auto w-full relative z-10">

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-24 pt-32 pb-20 lg:pt-40 lg:pb-24 order-2 lg:order-1 border-r border-white/5"
                >
                    {/* Minimal label */}
                    <div className="flex items-center gap-2 mb-8">
                        <div className="h-[2px] w-8 bg-spetia-orange-500"></div>
                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-spetia-orange-500 text-xs font-bold tracking-widest uppercase"
                        >
                            {label}
                        </motion.span>
                    </div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] tracking-tight mb-8"
                    >
                        {title}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed mb-10 font-medium"
                    >
                        {description}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link
                            to="/contact/contact-a"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-spetia-orange-600 text-white rounded-sm font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-spetia-dark transition-all duration-300"
                        >
                            <span>Start a project</span>
                            <span className="text-lg">→</span>
                        </Link>
                    </motion.div>

                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="relative h-[40vh] lg:h-auto order-1 lg:order-2 overflow-hidden border-l border-white/5"
                >
                    <div className="absolute inset-0">
                        {/* Technical Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-spetia-dark/50 to-spetia-dark/70 z-10"></div>

                        <img
                            src={image}
                            alt="Modern glass skyscraper"
                            className="w-full h-full object-cover opacity-90"
                        />
                    </div>

                    {/* Decorative Data Points */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/10 z-20 hidden lg:block">
                        <div className="absolute top-0 left-0 p-4">
                            <span className="text-white/20 font-mono text-2xl">GLOBAL</span>
                        </div>
                        <div className="absolute bottom-4 right-4 text-right">
                            <p className="text-white/40 text-[10px] uppercase font-mono tracking-wider">Global Delivery</p>
                            <p className="text-spetia-orange-500 text-xl font-bold uppercase tracking-tight">24/7 Support</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <ScrollDown className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20" />
        </section>
    );
};

export default ServicesHero;
