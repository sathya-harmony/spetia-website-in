import React from 'react';
import { motion } from 'framer-motion';
import CheckIcon from '../common/CheckIcon';

const differentiators = [
    {
        title: "US Standard Expertise",
        description: "Deep knowledge of IBC, ASHRAE, NFPA, NEC, and local codes across US, UK, Australia, India, and Middle East markets.",
        stat: "100%",
        statLabel: "Code Compliance"
    },
    {
        title: "24/7 Follow-the-Sun",
        description: "Round-the-clock delivery model ensures continuous progress and accelerated project timelines.",
        stat: "50%",
        statLabel: "Faster Delivery"
    },
    {
        title: "Technology Agnostic",
        description: "We work in Revit, Bentley, AutoCAD, Navisworks, and adapt to your BIM workflows.",
        stat: "15+",
        statLabel: "Platforms"
    },
    {
        title: "Scalable On-Demand",
        description: "Rapidly scale your team from 5 to 50+ specialists without hiring overhead or training delays.",
        stat: "2 Weeks",
        statLabel: "Ramp-up Time"
    }
];

const benefits = [
    {
        title: "Enterprise Capabilities",
        description: "Mid-size firms gain access to the same engineering depth as Fortune 500 companies."
    },
    {
        title: "Cost Reduction",
        description: "Reduce project engineering costs by 40-60% without compromising quality or timelines."
    },
    {
        title: "Accelerated Timelines",
        description: "Compress schedules significantly through parallel workflows and overnight turnaround."
    },
    {
        title: "Domain Specialists",
        description: "Access sector-specific experts in healthcare, data centers, industrial, and commercial facilities."
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
                        We're not just another outsourcing firm. We're your strategic engineering partner built for the demands of modern AEC projects.
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
                            Why Engage
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">
                            Your Extended <br />
                            <span className="text-white/50">Engineering Team</span>
                        </h3>
                        <p className="text-white/60 leading-relaxed mb-8">
                            We work as an extension of your team—following your standards, using your templates, and delivering in your workflows. Minimal onboarding required.
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
