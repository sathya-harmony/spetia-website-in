import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// Icons removed - using typography instead
import { Link } from 'react-router-dom';

const IntroSection = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

    return (
        <section ref={sectionRef} className="section-padding bg-spetia-light border-b border-gray-200 overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                        style={{ y: textY }}
                        className="flex flex-col items-center text-center lg:items-start lg:text-left"
                    >
                        {/* Minimal label */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex items-center gap-2 mb-6"
                        >
                            <span className="h-[2px] w-6 bg-spetia-orange-600"></span>
                            <span className="text-spetia-orange-600 text-xs md:text-sm font-bold tracking-widest uppercase">
                                About Spetia
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-spetia-dark mb-6 leading-none">
                            Your Extended <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-spetia-dark to-gray-500">Engineering Team</span>
                        </h2>

                        {/* Description */}
                        <p className="text-lg text-gray-600 mb-6 max-w-xl leading-relaxed font-medium">
                            We operate as a seamless extension of your workforce, delivering high-quality digital engineering support without the overhead.
                        </p>

                        <p className="text-gray-500 mb-10 max-w-xl leading-relaxed text-sm">
                            With compliance to US & Global standards (AIA, ISO), we support healthcare, hospitality, and data center projects with speed and precision.
                        </p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-4"
                        >
                            <Link
                                to="/about"
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-spetia-dark text-white rounded-sm font-bold uppercase tracking-wider text-sm hover:bg-spetia-orange-600 transition-all duration-300"
                            >
                                <span>Learn about our workflow</span>
                                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Image - Parallax */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="relative aspect-[4/5] rounded-sm overflow-hidden border border-gray-200"
                    >
                        {/* Subtle shadow overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
                        <motion.img
                            src="/images/6883f984d5dc8ecd074dbba5_5-Brown.avif"
                            alt="Digital engineering workspace"
                            className="w-full h-full object-cover transition-all duration-700"
                            style={{ y: imageY, scale: imageScale }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
