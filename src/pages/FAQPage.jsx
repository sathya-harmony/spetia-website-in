import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FAQ from '../components/sections/FAQ';

const FAQPage = () => {
    return (
        <div className="bg-spetia-dark min-h-screen">
            <SEO
                title="FAQ"
                description="Frequently asked questions about Spetia's digital engineering services, BIM solutions, project process, and what makes us different from other engineering firms."
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 border-b border-white/5 bg-spetia-dark overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                <div className="container-custom relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <span className="text-spetia-orange-500 text-xs font-bold tracking-widest uppercase mb-4 block">
                            Support
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold uppercase text-white leading-[0.9] tracking-tight mb-8">
                            Frequently Asked{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-spetia-orange-500 to-spetia-orange-400">Questions.</span>
                        </h1>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
                            Everything you need to know about our services, process, and capabilities.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQ theme="dark" />

            {/* CTA */}
            <section className="py-20 border-t border-white/10 bg-gradient-to-b from-spetia-dark to-black relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
                <div className="container-custom text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase text-white mb-6 tracking-tight">
                        Didn't Find Your Answer?
                    </h2>
                    <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto font-light">
                        Our team is ready to help with any specific questions about your project.
                    </p>
                    <Link
                        to="/contact/contact-a"
                        className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-spetia-orange-500 transition-all duration-300 group"
                    >
                        <span>Contact Us</span>
                        <span className="group-hover:translate-x-1 transition-transform text-lg">→</span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default FAQPage;
