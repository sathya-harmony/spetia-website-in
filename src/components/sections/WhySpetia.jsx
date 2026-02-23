import React from 'react';
import { motion } from 'framer-motion';
import CheckIcon from '../common/CheckIcon';

const differentiators = [
    {
        title: "IS & NBC Compliant",
        description: "Full compliance with IS 456, IS 1893, NBC 2016, and all BBMP/BDA regulations. Every project meets the highest safety and structural standards.",
        stat: "100%",
        statLabel: "Code Compliance"
    },
    {
        title: "End-to-End Execution",
        description: "From architectural planning to final handover — single point of accountability. No fragmented vendors, no coordination headaches.",
        stat: "1",
        statLabel: "Point of Contact"
    },
    {
        title: "Technology Driven",
        description: "We leverage BIM, 3D visualization, digital project tracking, and smart procurement to deliver precision-built homes and spaces.",
        stat: "3D",
        statLabel: "BIM Modeled"
    },
    {
        title: "Transparent Pricing",
        description: "Detailed BOQ with material specifications upfront. Milestone-based billing with no hidden costs or surprise escalations.",
        stat: "0",
        statLabel: "Hidden Charges"
    }
];

const benefits = [
    {
        title: "Premium Quality",
        description: "We use only branded materials — UltraTech, JSW, Havells, Jaquar — with strict quality checks at every stage."
    },
    {
        title: "On-Time Delivery",
        description: "Strict project scheduling with milestone tracking. We commit to timelines and deliver on them."
    },
    {
        title: "Expert Team",
        description: "In-house architects, structural engineers, MEP specialists, and skilled contractors — no outsourced labor."
    },
    {
        title: "Pan India Reach",
        description: "Headquartered in Bangalore with projects delivered across Karnataka, Tamil Nadu, Kerala, and major Indian cities."
    }
];

const WhySpetia = () => {
    return (
        <section className="bg-spetia-dark text-white py-20 md:py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
            <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-spetia-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-8 md:px-12 lg:px-16 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-spetia-orange-500 text-xs font-bold tracking-widest uppercase mb-4 block">
                        The Spetia Advantage
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-6">
                        Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-spetia-orange-500 to-spetia-orange-400">Spetia</span>
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
                        We're not just another construction company. We're your tech-enabled building partner, delivering precision-built spaces with complete transparency.
                    </p>
                </motion.div>

                {/* Differentiators Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {differentiators.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-sm hover:border-spetia-orange-500/50 transition-all duration-300 group"
                        >
                            <div className="mb-6">
                                <span className="text-4xl md:text-5xl font-bold text-spetia-orange-500">{item.stat}</span>
                                <span className="block text-xs text-white/40 uppercase tracking-wider mt-1">{item.statLabel}</span>
                            </div>
                            <h3 className="text-lg font-bold text-white uppercase mb-3 group-hover:text-spetia-orange-500 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-white/50 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Why Engage Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5"
                    >
                        <span className="text-spetia-orange-500 text-xs font-bold tracking-widest uppercase mb-4 block">
                            Why Build With Us
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">
                            Your Complete <br />
                            <span className="text-white/50">Building Partner</span>
                        </h3>
                        <p className="text-white/60 leading-relaxed mb-8">
                            From planning approvals to final handover — we manage everything. You get one team, one timeline, and zero coordination hassles.
                        </p>

                    </motion.div>

                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-black/30 border border-white/5 p-6 rounded-sm hover:bg-black/50 transition-colors"
                            >
                                <div className="flex items-start gap-3 mb-3">
                                    <CheckIcon variant="diamond" className="mt-1.5" />
                                    <h4 className="text-white font-bold uppercase text-sm tracking-wider">
                                        {benefit.title}
                                    </h4>
                                </div>
                                <p className="text-white/50 text-sm leading-relaxed pl-7">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhySpetia;
