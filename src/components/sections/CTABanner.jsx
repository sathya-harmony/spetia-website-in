import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AccentIcon from '../common/CheckIcon';

const CTABanner = ({
    title = "Ready to Build Your Dream?",
    subtitle = "Our team of 150+ specialists delivers turnkey construction, luxury interiors, and architectural design tailored to your vision.",
    variant = "default" // "default", "industry", "services"
}) => {
    return (
        <section className="relative bg-gradient-to-r from-spetia-dark via-spetia-dark to-gray-900 py-20 md:py-28 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#cta-grid)" />
                </svg>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-spetia-orange-600/10 via-transparent to-spetia-orange-600/10 pointer-events-none"></div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-spetia-orange-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-spetia-orange-500/5 rounded-full blur-3xl"></div>

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-spetia-orange-500/10 border border-spetia-orange-500/30 px-4 py-2 rounded-sm mb-8"
                    >
                        <span className="w-2 h-2 bg-spetia-orange-500 rounded-full animate-pulse"></span>
                        <span className="text-spetia-orange-500 text-xs font-bold tracking-widest uppercase">
                            24/7 Support Available
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight mb-6"
                    >
                        {title.split(' ').map((word, i) =>
                            i === title.split(' ').length - 1 ? (
                                <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-spetia-orange-500 to-spetia-orange-600">
                                    {word}
                                </span>
                            ) : (
                                <span key={i}>{word} </span>
                            )
                        )}
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto"
                    >
                        {subtitle}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            to="/contact"
                            className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-spetia-orange-600 text-white rounded-sm font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-spetia-dark transition-all duration-300"
                        >
                            <span>Start Your Project</span>
                            <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                        <Link
                            to="/services"
                            className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-white/20 text-white rounded-sm font-bold uppercase tracking-wider text-sm hover:bg-white/10 transition-all duration-300"
                        >
                            <span>View All Services</span>
                        </Link>
                    </motion.div>

                    {/* Trust Indicator - Spetia's Unique Value */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-white/10"
                    >
                        <div className="flex items-center gap-2 text-white/40 text-sm">
                            <AccentIcon variant="diamond" />
                            <span>Turnkey Delivery</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/40 text-sm">
                            <AccentIcon variant="diamond" />
                            <span>Fixed-Price Contracts</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/40 text-sm">
                            <AccentIcon variant="diamond" />
                            <span>Quality Assured</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/40 text-sm">
                            <AccentIcon variant="diamond" />
                            <span>Pan India</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTABanner;
