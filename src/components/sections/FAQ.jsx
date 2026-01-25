import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Icons removed - using typography instead
import { Link } from 'react-router-dom';

const faqs = [
    {
        question: "What makes Spetia different from other engineering firms?",
        answer: "We specialize in digital engineering—3D to 7D BIM, AR/VR visualization, and clash-free coordination. This focus means higher accuracy and faster delivery for your projects."
    },
    {
        question: "What industries do you work with?",
        answer: "Healthcare, hospitality, commercial, residential, education, industrial, retail, heritage restoration, and mixed-use developments."
    },
    {
        question: "What is BIM and how does it benefit my project?",
        answer: "BIM captures every building element in an intelligent 3D model. It catches clashes before construction, reduces waste, and provides accurate quantity takeoffs—saving you time and money."
    },
    {
        question: "Do you offer visualization services?",
        answer: "Yes. AR/VR walkthroughs and Digital Twins let you experience spaces before they're built."
    },
    {
        question: "What's your typical project process?",
        answer: "Submit requirements, scope the project together, then we develop and deliver—with regular updates throughout."
    },
    {
        question: "Why choose Spetia?",
        answer: "Reliable timelines, transparent communication, and a decade of experience across 500+ projects worldwide."
    }
];

const FAQItem = ({ faq, index, isActive, onToggle, theme }) => {
    // Theme-based colors
    const isDark = theme === 'dark';
    const textColor = isDark ? 'text-white' : 'text-arch-black';
    const activeColor = 'text-spetia-orange-600';
    const borderColor = isDark ? 'border-white/10' : 'border-spetia-dark/10';
    const answerColor = isDark ? 'text-white/60' : 'text-spetia-dark/60';
    const buttonBg = isDark ? 'bg-white/10' : 'bg-arch-gray';
    const buttonText = isDark ? 'text-white' : 'text-arch-black';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                delay: index * 0.05,
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className={`border-b ${borderColor} last:border-0`}
        >
            <button
                onClick={onToggle}
                className="w-full py-6 md:py-7 flex justify-between items-center text-left"
            >
                <h6 className={`text-lg md:text-xl font-medium pr-4 transition-colors ${isActive ? activeColor : textColor}`}>
                    {faq.question}
                </h6>

                <div className={`w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full transition-colors ${isActive ? 'bg-spetia-orange-600 text-white' : `${buttonBg} ${buttonText}`}`}>
                    <span className="text-xl font-bold leading-none">{isActive ? '−' : '+'}</span>
                </div>
            </button>

            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                    >
                        <p className={`pb-6 ${answerColor} max-w-2xl leading-relaxed`}>
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ = ({ theme = 'light' }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const isDark = theme === 'dark';

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={`section-padding ${isDark ? 'bg-spetia-dark' : 'bg-spetia-light'}`}>
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left Sidebar - Sticky on desktop */}
                    <div className="w-full lg:w-1/3 flex flex-col items-center text-center lg:items-start lg:text-left gap-6 lg:sticky lg:top-32 lg:h-fit">
                        <span className="text-spetia-orange-600 text-xs md:text-sm font-medium tracking-widest uppercase">
                            FAQ
                        </span>

                        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight ${isDark ? 'text-white' : 'text-spetia-dark'}`}>
                            Common questions
                        </h2>

                        <p className={`text-lg leading-relaxed max-w-lg lg:max-w-none ${isDark ? 'text-white/60' : 'text-spetia-dark/60'}`}>
                            Quick answers about our services, process, and what sets us apart.
                        </p>

                        <div className="mt-2">
                            <Link
                                to="/contact/contact-a"
                                className={`inline-flex items-center gap-2 font-medium group ${isDark ? 'text-white' : 'text-spetia-dark'}`}
                            >
                                <span>Still have questions?</span>
                                <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">→</span>
                            </Link>
                        </div>
                    </div>

                    {/* Right - Accordion */}
                    <div className="w-full lg:w-2/3 flex flex-col">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                faq={faq}
                                index={index}
                                isActive={activeIndex === index}
                                onToggle={() => toggle(index)}
                                theme={theme}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
