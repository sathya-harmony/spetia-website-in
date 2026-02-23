import React from 'react';
import { motion } from 'framer-motion';
import ScrollDown from '../common/ScrollDown';

const AboutHero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-spetia-dark overflow-hidden py-20 md:py-32">
            {/* Background Video with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/service-architecture.png"
                    alt="Modern architecture office"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-spetia-dark/90 via-spetia-dark/70 to-spetia-dark/40" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>

            <div className="container relative z-10 mx-auto px-8 md:px-12 lg:px-16">
                <div className="max-w-4xl mx-auto md:mx-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center text-center md:items-start md:text-left"
                    >
                        <div className="flex items-center gap-2 mb-8">
                            <div className="h-[2px] w-8 bg-spetia-orange-500"></div>
                            <span className="text-spetia-orange-500 text-xs font-bold tracking-widest uppercase">
                                Since 2011
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase text-white leading-[0.85] tracking-tighter mb-8">
                            We Build{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-spetia-orange-500 to-spetia-orange-400">Certainty.</span>
                        </h1>

                        <p className="text-lg md:text-2xl text-white/50 leading-relaxed max-w-2xl mb-12 font-light tracking-wide">
                            From 3D to 7D BIM, Digital Twins, AR, and VR—we transform how you design, build, and manage complex infrastructure with absolute precision.
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-6">
                            <a
                                href="/contact"
                                className="bg-spetia-orange-600 text-white px-10 py-5 rounded-sm font-bold uppercase tracking-wider hover:bg-white hover:text-spetia-dark transition-all duration-300 flex items-center gap-3 text-sm"
                            >
                                Get Consultation
                                <span className="text-lg">→</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            <ScrollDown className="absolute bottom-8 left-1/2 -translate-x-1/2" />
        </section>
    );
};

export default AboutHero;
