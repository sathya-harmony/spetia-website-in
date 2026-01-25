import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Icons removed - using typography instead

const testimonials = [
    {
        quote: "We needed extra BIM capacity for a hospital deadline. Spetia delivered LOD 400 models in three weeks—our in-house team would have taken six. They understood our Revit standards from day one.",
        author: "James M.",
        role: "Principal Architect"
    },
    {
        quote: "Been working with them for two years on MEPF modeling. They know US codes well and adapt quickly when we change project specs mid-stream. Reliable team.",
        author: "Anonymous",
        role: "VDC Manager"
    },
    {
        quote: "The Scan-to-BIM work they did for our renovation project was solid. Point cloud to Revit, minimal back-and-forth. Would use again for similar work.",
        author: "Robert C.",
        role: "Project Manager"
    },
    {
        quote: "Helped us clear a backlog of structural detailing when we were short-staffed. Three projects running in parallel, all delivered on schedule.",
        author: "Anonymous",
        role: "Engineering Director"
    },
    {
        quote: "Their value engineering review caught some material inefficiencies we missed. Saved us around 12% on steel costs for the data hall project.",
        author: "David A.",
        role: "Lead Engineer"
    },
    {
        quote: "The time zone difference actually works in our favor. We hand off work at end of day, get it back by morning. Good for tight deadlines.",
        author: "Amanda C.",
        role: "Project Coordinator"
    }
];

const ClientSays = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="section-padding bg-spetia-light relative overflow-hidden border-b border-gray-200">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left: Heading & Navigation */}
                    <div className="lg:w-1/3 space-y-8 text-center lg:text-left">
                        <div className="flex flex-col items-center lg:items-start">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="h-[2px] w-6 bg-spetia-orange-600"></span>
                                <span className="text-spetia-orange-600 text-xs md:text-sm font-bold tracking-widest uppercase">
                                    Testimonials
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-spetia-dark leading-none">
                                Proven <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spetia-orange-600 to-spetia-orange-400">Reliability</span>
                            </h2>
                            <p className="mt-4 text-gray-500 max-w-md mx-auto lg:mx-0 font-medium">
                                Feedback from AEC firms we've worked with.
                            </p>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex items-center justify-center lg:justify-start gap-4">
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:bg-spetia-dark hover:text-white transition-all duration-300 group rounded-sm"
                            >
                                <span className="text-lg group-hover:-translate-x-1 transition-transform inline-block">←</span>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 bg-spetia-dark text-white flex items-center justify-center hover:bg-spetia-orange-600 transition-colors duration-300 group rounded-sm"
                            >
                                <span className="text-lg group-hover:translate-x-1 transition-transform inline-block">→</span>
                            </button>
                        </div>
                    </div>

                    {/* Right: Active Testimonial Card */}
                    <div className="lg:w-2/3 w-full">
                        <div className="relative min-h-[400px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="bg-white p-8 md:p-12 rounded-sm border-l-4 border-spetia-orange-500 shadow-xl shadow-black/5 relative"
                                >
                                    {/* Quote Icon */}
                                    <div className="absolute top-8 left-8 md:top-12 md:left-12 text-gray-100 -z-10">
                                        <span className="text-9xl font-serif text-gray-100 leading-none">"</span>
                                    </div>

                                    <div className="relative z-10">


                                        {/* Content */}
                                        <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
                                            <p className="text-xl md:text-2xl leading-relaxed text-spetia-dark font-medium mb-6">
                                                "{testimonials[currentIndex].quote}"
                                            </p>
                                        </div>

                                        {/* Author */}
                                        <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                                            <div className="w-12 h-12 bg-spetia-dark text-white flex items-center justify-center font-bold text-lg rounded-sm">
                                                {testimonials[currentIndex].author.charAt(0)}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-spetia-dark text-sm uppercase tracking-wider">{testimonials[currentIndex].author}</h4>
                                                <p className="text-xs text-gray-500 uppercase tracking-widest">{testimonials[currentIndex].role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientSays;
