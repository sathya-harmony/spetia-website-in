import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AccentIcon from '../common/CheckIcon';
const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isHovered, setIsHovered] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const recipientEmail = 'contact@spetia.com';
        const subject = encodeURIComponent(formData.subject || 'Project Inquiry from Website');
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone}\n\n` +
            `Message:\n${formData.message}`
        );

        window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    };

    return (
        <section className="bg-spetia-dark pt-48 pb-24 min-h-screen relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
            <div className="absolute inset-0 border-r border-l border-white/5 max-w-[1800px] mx-auto pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">

                    {/* Left Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-12 lg:pt-12"
                    >
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <span className="h-[2px] w-8 bg-spetia-orange-600"></span>
                                <span className="text-spetia-orange-600 text-sm font-bold tracking-widest uppercase">
                                    Contact Us
                                </span>
                            </div>

                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[0.9] mb-8">
                                Let's Engineer <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spetia-orange-500 to-spetia-orange-400">Your Vision.</span>
                            </h2>

                            <p className="text-lg md:text-xl text-white/60 max-w-lg leading-relaxed font-medium">
                                Ready to scale your engineering capabilities? Connect with our global delivery team for a proposal or consultation.
                            </p>
                        </div>

                        <div className="flex flex-col gap-10 mt-4 border-t border-white/10 pt-10">
                            <div className="group">
                                <div className="flex items-center gap-2 text-xs text-white/40 uppercase tracking-widest mb-3 group-hover:text-spetia-orange-500 transition-colors">
                                    <AccentIcon variant="location" /> Head Office
                                </div>
                                <p className="text-2xl text-white font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                                    HSR Layout, Bangalore
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="group">
                                    <div className="flex items-center gap-2 text-xs text-white/40 uppercase tracking-widest mb-3 group-hover:text-spetia-orange-500 transition-colors">
                                        <AccentIcon variant="email" /> Email Us
                                    </div>
                                    <a href="mailto:contact@spetia.com" className="text-lg text-white font-medium hover:text-spetia-orange-400 transition-colors flex items-center gap-2 group-hover:translate-x-2 duration-300">
                                        contact@spetia.com <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                                    </a>
                                </div>
                                <div className="group">
                                    <div className="flex items-center gap-2 text-xs text-white/40 uppercase tracking-widest mb-3 group-hover:text-spetia-orange-500 transition-colors">
                                        <AccentIcon variant="phone" /> Call Us
                                    </div>
                                    <a href="tel:+919611524249" className="text-lg text-white font-medium hover:text-spetia-orange-400 transition-colors flex items-center gap-2 group-hover:translate-x-2 duration-300">
                                        +91 9611524249
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Form - Industrial Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/[0.02] border border-white/10 p-8 md:p-12 shadow-2xl relative"
                    >
                        {/* Technical Corner Markers */}
                        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-spetia-orange-500"></div>
                        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-spetia-orange-500"></div>
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-spetia-orange-500"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-spetia-orange-500"></div>

                        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2 group">
                                    <label className="text-[10px] text-white/40 uppercase tracking-widest ml-1 font-bold group-focus-within:text-spetia-orange-500 transition-colors">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Smith"
                                        required
                                        className="bg-black/20 border border-white/10 rounded-none px-4 py-4 text-white text-sm focus:outline-none focus:border-spetia-orange-500 focus:bg-white/5 transition-all placeholder:text-white/20 font-mono"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 group">
                                    <label className="text-[10px] text-white/40 uppercase tracking-widest ml-1 font-bold group-focus-within:text-spetia-orange-500 transition-colors">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@company.com"
                                        required
                                        className="bg-black/20 border border-white/10 rounded-none px-4 py-4 text-white text-sm focus:outline-none focus:border-spetia-orange-500 focus:bg-white/5 transition-all placeholder:text-white/20 font-mono"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2 group">
                                    <label className="text-[10px] text-white/40 uppercase tracking-widest ml-1 font-bold group-focus-within:text-spetia-orange-500 transition-colors">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 (555) 000-0000"
                                        className="bg-black/20 border border-white/10 rounded-none px-4 py-4 text-white text-sm focus:outline-none focus:border-spetia-orange-500 focus:bg-white/5 transition-all placeholder:text-white/20 font-mono"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 group">
                                    <label className="text-[10px] text-white/40 uppercase tracking-widest ml-1 font-bold group-focus-within:text-spetia-orange-500 transition-colors">Inquiry Type</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="BIM Services, Design Support, etc."
                                        required
                                        className="bg-black/20 border border-white/10 rounded-none px-4 py-4 text-white text-sm focus:outline-none focus:border-spetia-orange-500 focus:bg-white/5 transition-all placeholder:text-white/20 font-mono"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 group">
                                <label className="text-[10px] text-white/40 uppercase tracking-widest ml-1 font-bold group-focus-within:text-spetia-orange-500 transition-colors">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project requirements..."
                                    required
                                    className="bg-black/20 border border-white/10 rounded-none px-4 py-4 text-white h-40 focus:outline-none focus:border-spetia-orange-500 focus:bg-white/5 transition-all resize-none placeholder:text-white/20 font-mono text-sm"
                                />
                            </div>

                            <button
                                type="submit"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className="mt-4 w-full bg-spetia-orange-600 text-white py-5 rounded-none font-bold uppercase tracking-widest text-sm relative overflow-hidden group hover:bg-white hover:text-spetia-dark transition-colors duration-300"
                            >
                                <div className="flex items-center justify-center gap-3">
                                    <span>Initiate Request</span>
                                    <span
                                        className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
                                    >→</span>
                                </div>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

