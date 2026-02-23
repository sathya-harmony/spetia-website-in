import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

    // Featured Capabilities Data
    const capabilities = [
        { title: "Luxury Interiors", abbr: "INT" },
        { title: "Residential Construction", abbr: "CON" },
        { title: "Commercial Design", abbr: "COM" },
        { title: "Architectural Planning", abbr: "ARC" },
    ];

    const [currentCapability, setCurrentCapability] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCapability((prev) => (prev + 1) % capabilities.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [capabilities.length]);

    // Industrial Stats Data with numbered prefixes
    const stats = [
        { number: "01", label: "Projects Delivered", value: "200+" },
        { number: "02", label: "Happy Families", value: "150+" },
        { number: "03", label: "Years Experience", value: "15+" },
    ];

    return (
        <section ref={containerRef} className="relative h-screen bg-spetia-dark text-white overflow-hidden flex flex-col">

            {/* Technical Schematic Background Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="blueprint-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5" />
                            <circle cx="0" cy="0" r="2" fill="white" />
                            <circle cx="100" cy="0" r="2" fill="white" />
                            <circle cx="0" cy="100" r="2" fill="white" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
                </svg>
            </div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
            <div className="absolute inset-0 border-r border-l border-white/5 max-w-[1800px] mx-auto pointer-events-none"></div>

            {/* Main Content Grid */}
            <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 max-w-[1800px] mx-auto w-full relative z-10">

                {/* Left Content Area */}
                <div className="lg:col-span-7 flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-28 pb-8 lg:pt-32 lg:pb-12 border-r border-white/5 relative">

                    {/* Industrial Heading - Sized to fit */}
                    {/* Industrial Heading - Sized to fit */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-[-0.02em] leading-[0.95] mb-6"
                    >
                        Build Beyond <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-spetia-orange-500 to-spetia-orange-600">Intelligence.</span>
                    </motion.h1>

                    {/* Technical Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-base md:text-lg text-white/60 max-w-xl leading-relaxed mb-8 font-medium"
                    >
                        India's premier tech-enabled construction and design firm. We create homes and workspaces that are not just built, but scientifically engineered for life.
                    </motion.p>


                    {/* Action Buttons - Arrow Character Instead of Icon */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            to="/contact"
                            className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-spetia-orange-600 text-white rounded-sm font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-spetia-dark transition-all duration-300"
                        >
                            <span>Start Project</span>
                            <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                        <Link
                            to="/services"
                            className="inline-flex items-center justify-center gap-3 px-8 py-5 border border-white/20 text-white rounded-sm font-bold uppercase tracking-wider text-sm hover:bg-white/10 transition-all duration-300"
                        >
                            <span>Explore Capabilities</span>
                        </Link>
                    </motion.div>
                </div>

                {/* Right Visual Area */}
                <div className="lg:col-span-5 relative min-h-[50vh] lg:h-full border-l border-white/5 overflow-hidden group">
                    <motion.div
                        className="absolute inset-0 w-full h-full"
                        style={{ y: imageY }}
                    >
                        {/* Technical Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-spetia-dark/60 to-spetia-dark/80 z-10"></div>

                        <img
                            src="/images/home-hero.png"
                            alt="Construction engineering site"
                            className="w-full h-full object-cover opacity-90 transition-all duration-700"
                        />
                    </motion.div>

                    {/* Floating Tech Card - Typography Only */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="absolute bottom-12 left-8 right-8 bg-white/5 backdrop-blur-md border border-white/10 p-6 z-20 hidden md:block"
                    >
                        <div className="flex justify-between items-end">
                            <div>
                                <h4 className="text-spetia-orange-500 text-xs font-bold uppercase tracking-widest mb-1">Featured Capability</h4>
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={currentCapability}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-xl font-bold text-white"
                                    >
                                        {capabilities[currentCapability].title}
                                    </motion.p>
                                </AnimatePresence>
                            </div>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentCapability}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-4xl font-black text-white/20 tracking-tighter"
                                >
                                    {capabilities[currentCapability].abbr}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Down Arrow - positioned within viewport */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 cursor-pointer"
                onClick={() => window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' })}
            >
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-3 group"
                >
                    <span className="text-xs text-spetia-orange-500 uppercase tracking-[0.2em] font-bold">Scroll</span>
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-spetia-orange-500 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,87,34,0.5)]"
                    >
                        <path
                            d="M12 4V20M12 20L18 14M12 20L6 14"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </motion.div>
            </motion.div>
        </section >
    );
};

export default Hero;
