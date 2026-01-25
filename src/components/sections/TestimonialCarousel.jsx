import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "Spetia delivered exceptional BIM solutions for our hospital project. The real-time visualization helped all stakeholders make informed decisions.",
        author: "Dr. Rajesh Kumar",
        role: "Hospital Director, Healthcare",
        logo: "/images/684776dca684ec6c4fd24cc5_27c8fe8db4c46993762a787e784976a4_Example%20Logo%202.svg"
    },
    {
        quote: "Their AR/VR capabilities transformed how we present designs to clients. The immersive experience exceeded our expectations.",
        author: "Priya Sharma",
        role: "Architect, Commercial Projects",
        logo: "/images/684776dc62d6da91e50a0ffa_d57c7c4f3e0c80d23bdfdedbea12def1_Example%20Logo%203.svg"
    },
    {
        quote: "The structural design team's expertise ensured our project was completed on time with zero design revisions. Truly professional.",
        author: "Arun Mehta",
        role: "Construction Manager, Residential",
        logo: "/images/684776dca684ec6c4fd24cc5_27c8fe8db4c46993762a787e784976a4_Example%20Logo%202.svg"
    },
    {
        quote: "Spetia's value engineering approach saved us 20% on construction costs while improving the overall quality of our hospitality project.",
        author: "Neha Gupta",
        role: "Developer, Hospitality Sector",
        logo: "/images/684776dc62d6da91e50a0ffa_d57c7c4f3e0c80d23bdfdedbea12def1_Example%20Logo%203.svg"
    }
];

const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="section-padding bg-arch-gray border-b border-arch-light-brown/30 overflow-hidden">
            <div className="container-custom">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-6 max-w-2xl"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2.5 bg-brick-100 text-brick-700 px-4 py-2 rounded-lg w-fit">
                            <span className="w-2 h-2 rounded-full bg-brick-500"></span>
                            <span className="font-medium text-sm">Client Says</span>
                        </div>
                        <h2 className="text-heading-2 md:text-heading-1 lg:text-hero font-medium tracking-tight text-arch-black">
                            Why do <span className="font-serif italic">clients</span> trust Spetia?
                        </h2>
                    </motion.div>

                    {/* Navigation */}
                    <div className="flex gap-3">
                        <button
                            onClick={prevSlide}
                            className="w-11 h-11 bg-white rounded-full flex items-center justify-center hover:bg-brick-50 transition-colors duration-300 shadow-sm text-arch-brown font-bold"
                            aria-label="Previous testimonial"
                        >
                            ←
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-11 h-11 bg-brick-600 rounded-full flex items-center justify-center hover:bg-brick-700 transition-colors duration-300 text-white font-bold"
                            aria-label="Next testimonial"
                        >
                            →
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <div className="relative overflow-hidden" ref={containerRef}>
                    <motion.div
                        className="flex gap-5"
                        animate={{ x: `-${currentIndex * (100 / 3)}%` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="min-w-[90%] md:min-w-[45%] lg:min-w-[calc(33.333%-0.85rem)] bg-brick-50 p-8 md:p-10 rounded-2xl flex flex-col justify-between gap-8 min-h-[380px]"
                            >
                                <img
                                    src={testimonial.logo}
                                    alt={testimonial.author}
                                    className="h-6 md:h-7 opacity-70 w-fit"
                                />
                                <div className="flex flex-col gap-6 flex-grow justify-end">
                                    <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-arch-black">
                                        "{testimonial.quote}"
                                    </p>
                                    <div>
                                        <p className="font-medium text-arch-black">{testimonial.author}</p>
                                        <p className="text-sm text-arch-brown/60">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Progress Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-brick-600 w-6' : 'bg-brick-200'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialCarousel;
