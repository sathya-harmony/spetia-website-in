import React from 'react';
import { motion } from 'framer-motion';

const AboutIntro = () => {
    return (
        <>
            {/* 1. Overview Section - DARK */}
            <section className="bg-spetia-dark text-white py-20 md:py-32 relative">
                <div className="container mx-auto px-8 md:px-12 lg:px-16 container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
                        <div className="text-center lg:text-left">
                            <span className="text-spetia-orange-600 text-xs font-bold tracking-widest uppercase mb-6 block">Overview</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-none text-white">
                                Building India's <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spetia-orange-500 to-spetia-orange-400">Future Landmarks.</span>
                            </h2>
                        </div>
                        <div className="lg:pt-12 text-center lg:text-left">
                            <p className="text-xl text-white/70 leading-relaxed mb-6 font-light">
                                We use world-class tools and continuous innovation to deliver unique design concepts for every project.
                            </p>
                            <p className="text-white/50 leading-relaxed text-base">
                                Our architects and engineers handle projects of all scales—from luxury villas to high-rise apartments and commercial complexes across Pan India.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Key Facts Section - DARK GLASS */}
            <section className="bg-spetia-dark text-white py-20 md:py-28 border-t border-white/5 relative overflow-hidden">
                {/* Background Noise */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

                <div className="container mx-auto px-8 md:px-12 lg:px-16 container-custom relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-spetia-orange-500 text-xs font-bold tracking-widest uppercase mb-4 block">Key Facts</span>
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-2">The Numbers</h2>
                        <p className="text-white/40 uppercase tracking-widest text-sm">That Define Us</p>
                    </div>

                    {/* Primary Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
                        {[
                            { val: "15+", label: "Years", sub: "Building Trust" },
                            { val: "200+", label: "Homes", sub: "Delivered" },
                            { val: "50+", label: "Engineers", sub: "On Site" },
                            { val: "Pan India", label: "Coverage", sub: "Nationwide" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-sm border border-white/10 text-center hover:border-spetia-orange-500/50 transition-colors group"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-spetia-orange-500 transition-colors">{stat.val}</div>
                                <div className="text-xs md:text-sm text-white/60 uppercase tracking-wide mb-1">{stat.label}</div>
                                <div className="text-[10px] md:text-xs text-white/30 uppercase tracking-wider">{stat.sub}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Secondary Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-black/40 p-8 rounded-sm border border-white/5"
                        >
                            <div className="text-xs text-spetia-orange-500 uppercase tracking-widest mb-4 font-bold">Primary Markets</div>
                            <div className="flex flex-wrap gap-2">
                                {['Pan India', 'Metro Cities', 'Tier 2 Cities', 'Remote Sites'].map(market => (
                                    <span key={market} className="px-3 py-1 bg-white/5 border border-white/10 text-white/80 text-xs uppercase tracking-wide rounded-full">
                                        {market}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-black/40 p-8 rounded-sm border border-white/5"
                        >
                            <div className="text-xs text-spetia-orange-500 uppercase tracking-widest mb-4 font-bold">Our Promise</div>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-white/5 border border-white/10 text-white/80 text-xs uppercase tracking-wide rounded-full">On-Time Delivery</span>
                                <span className="px-3 py-1 bg-white/5 border border-white/10 text-white/80 text-xs uppercase tracking-wide rounded-full">Zero Cost Overruns</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Mission & Vision - DARK */}
            <section className="bg-spetia-dark text-white py-20 md:py-32 border-t border-white/5">
                <div className="container mx-auto px-8 md:px-12 lg:px-16 container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center lg:text-left"
                        >
                            <span className="text-spetia-orange-500 text-xs font-bold tracking-widest uppercase mb-6 block">Mission</span>
                            <p className="text-2xl md:text-4xl font-light leading-snug text-white/90">
                                To be India's most trusted construction partner—driven
                                by transparency, quality materials, and scientific execution.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-center lg:text-left"
                        >
                            <span className="text-spetia-orange-500 text-xs font-bold tracking-widest uppercase mb-6 block">Vision</span>
                            <p className="text-2xl md:text-4xl font-light leading-snug text-white/90">
                                To create homes and workspaces that inspire, using modern
                                technology to ensure they last for generations.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. Core Values - DARK GLASS */}
            <section className="bg-spetia-dark text-white py-20 md:py-32 border-t border-white/5 relative">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

                <div className="container mx-auto px-8 md:px-12 lg:px-16 container-custom relative z-10">
                    <div className="mb-16 text-center md:text-left">
                        <span className="text-spetia-orange-500 text-xs font-bold tracking-widest uppercase mb-4 block">Core Values</span>
                        <h2 className="text-3xl md:text-5xl font-bold uppercase text-white tracking-tight">Our Principles</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { title: "Transparency", desc: "We provide clear Bill of Quantities (BOQ) and daily progress reports. No hidden costs, no surprises." },
                            { title: "Quality", desc: "We use only premium brands (Tata, UltraTech, Asian Paints) and conduct 400+ quality checks during construction." },
                            { title: "Commitment", desc: "We handover keys on time. Our penalty-backed delivery guarantee allows you to plan your move with certainty." }
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-colors"
                            >
                                <h3 className="text-xl font-bold uppercase text-white mb-4">{value.title}</h3>
                                <p className="text-white/50 leading-relaxed text-sm">
                                    {value.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Expertise - DARK */}
            <section className="bg-spetia-dark text-white py-20 md:py-32 border-t border-white/5">
                <div className="container mx-auto px-8 md:px-12 lg:px-16 container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[400px] md:h-[550px] rounded-sm overflow-hidden"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
                                alt="Spetia workspace"
                                className="w-full h-full object-cover filter grayscale contrast-125"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-spetia-dark/20 mix-blend-multiply"></div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-center lg:text-left"
                        >
                            <span className="text-spetia-orange-500 text-xs font-bold tracking-widest uppercase mb-6 block">Our Expertise</span>
                            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8 text-white leading-tight">
                                Time and cost efficiency <br />
                                <span className="text-white/50">through technology</span>
                            </h3>
                            <div className="space-y-6 text-white/60 leading-relaxed text-lg font-light">
                                <p>
                                    We bridge the gap between architectural vision and on-site reality.
                                    By integrating structural consultants, site engineers, and interior designers,
                                    we eliminate communication gaps.
                                </p>
                                <p>
                                    Our approach is rooted in Indian sensibilities—respecting Vastu, optimizing
                                    circulation for large families, and selecting materials that withstand the Indian climate.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutIntro;
