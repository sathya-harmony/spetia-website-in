import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
    {
        value: 15,
        suffix: "+",
        label: "Years in Business",
        description: "Established 2011"
    },
    {
        value: 150,
        suffix: "+",
        label: "Projects Delivered",
        description: "Residential & Commercial"
    },
    {
        value: 50,
        suffix: "+",
        label: "Engineers",
        description: "In-House Experts"
    },
    {
        value: 100,
        suffix: "%",
        label: "Transparency",
        description: "No Hidden Costs"
    },
];

const AnimatedCounter = ({ value, prefix = "", suffix = "", duration = 2 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    useEffect(() => {
        if (!isInView) return;

        let startTime;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

            // Easing function for smooth animation
            const easeOutExpo = 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easeOutExpo * value));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(value);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, value, duration]);

    return (
        <span ref={ref}>
            {prefix}{count}{suffix}
        </span>
    );
};

const StatsSection = () => {
    return (
        <section className="relative bg-spetia-dark py-20 md:py-28 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="stats-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#stats-grid)" />
                </svg>
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="h-[2px] w-8 bg-spetia-orange-500"></span>
                        <span className="text-spetia-orange-500 text-xs font-bold tracking-widest uppercase">
                            Engineering Excellence
                        </span>
                        <span className="h-[2px] w-8 bg-spetia-orange-500"></span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-spetia-orange-500 to-spetia-orange-600">Gold Standard</span> in Construction
                    </h2>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-sm h-full hover:bg-white/10 transition-all duration-300 hover:border-spetia-orange-500/50">
                                {/* Number Badge */}
                                <div className="absolute top-4 right-4 text-4xl font-black text-spetia-orange-500/10 tracking-tighter">
                                    0{index + 1}
                                </div>

                                {/* Value */}
                                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-none">
                                    <AnimatedCounter
                                        value={stat.value}
                                        prefix={stat.prefix}
                                        suffix={stat.suffix}
                                        duration={2.5}
                                    />
                                </div>

                                {/* Label */}
                                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                                    {stat.label}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-white/50 leading-relaxed">
                                    {stat.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-wrap justify-center items-center gap-8 mt-16 pt-12 border-t border-white/10"
                >
                    <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-sm border border-white/10">
                        <span className="text-2xl font-black text-spetia-orange-500 tracking-tighter">TK</span>
                        <span className="text-xs font-bold uppercase tracking-widest text-white/70">Turnkey Execution</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-sm border border-white/10">
                        <span className="text-2xl font-black text-spetia-orange-500 tracking-tighter">3D</span>
                        <span className="text-xs font-bold uppercase tracking-widest text-white/70">BIM Planning</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-sm border border-white/10">
                        <span className="text-2xl font-black text-spetia-orange-500 tracking-tighter">QC</span>
                        <span className="text-xs font-bold uppercase tracking-widest text-white/70">Quality Control</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-sm border border-white/10">
                        <span className="text-2xl font-black text-spetia-orange-500 tracking-tighter">PM</span>
                        <span className="text-xs font-bold uppercase tracking-widest text-white/70">Project Management</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default StatsSection;
