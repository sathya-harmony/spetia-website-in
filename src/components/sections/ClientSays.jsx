import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Icons removed - using typography instead

const testimonials = [
    {
        quote: "Last year, I had the opportunity to work with Sangeetha on design and execution of our new kitchen premises at Gopasandra. She has done a remarkable job right from understanding our goals, planning and giving us the drawings to effectively executing the same as per our requirements to give us an amazing space to work. I am extremely happy with the care and support that you have provided throughout the complete project.",
        author: "Sreelakshmi",
        role: "Owner, Surya Enterprises"
    },
    {
        quote: "We recently got the elevation and interiors done for our office at Sarjapur through Spetia. We thank Sangeetha for her attention to detail and professionalism inorder to make our dream space come true. Our team was very happy as they found it very easy to coordinate with her for all our requirements. We found her Very easy to work with, an excellent craftsperson and a good communicator.",
        author: "Sreelakshmi",
        role: "Owner, Carnival Cakes & Breads"
    },
    {
        quote: "Very professional. We really appreciate their patience on any new add-ons and plan customisation at last moment. Very transparent and Excellent workmanship. I like their accurate planning and execution. Overall, we recommend and happy to engage with Spetia.",
        author: "Aman & Santhiya",
        role: "Owner Villa# 72, Pride Vatika Phase 2"
    },
    {
        quote: "We chose Spetia to build our first house as we got the confidence to go with them after seeing one of their residential projects. Our decision is turning out to be the right one as we have got excellent ideas and support right from planning different layout options, elevation designs, Khata Amalgamation, Plan Sanction to Electricity Supply, etc. Right now, plinth work is going on and we are discussing about next course of action, materials, finishes, etc. and thank the skillful and experienced Spetia team in building our dream house by the end of the year",
        author: "Madhumathi and Bhavani Shankar",
        role: "Villa Owner, 145 & 146, Pride Rolling Hills Phase 2"
    },
    {
        quote: "I was looking for a honest, reliable architect/builder who could convert my vision to a dream home, albeit with strict budget requirements. Fortunately, I met Sangeetha and Srikanth from Spetia, through one of my neighbours. I could sense that the project would be in safe hands from the initial meetings itself. Sangeetha maam has been in this space for nearly 20 years and has a brilliant track record. This rich experience has helped her form a reliable core team. They promised end-to-end delivery of the project, that also includes several approval processes from government agencies, which is a pain to say the least. With the house now set to complete, I have several favorite places within the house. I enjoy watching the play of light falling on my courtyard wall through the circular windows and pergolas. I also love relaxing by the bay window and enjoying the nature outside. These small design elements are what makes a beautiful home, and the full credits go to them. Overall, this eight-month journey with Spetia has been smooth sailing and they have ensured me a peace of mind throughout. They have taken my design and made it a reality. I would recommend them for your future house construction.",
        author: "Shankar",
        role: "Owner Villa# 257, Pride Rolling Hills Phase 2"
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
                                Feedback from clients we've built for.
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
