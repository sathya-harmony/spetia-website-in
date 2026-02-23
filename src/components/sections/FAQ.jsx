import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const faqs = [
    {
        question: "What approvals are needed to build a house in Bangalore (2026)?",
        answer: "For residential construction in Bangalore, you need a BBMP/BDA building plan sanction, NOC from BWSSB (water & sewage), BESCOM (electrical), and the Karnataka Fire & Emergency Services for buildings above 15m. As of 2026, all building plan approvals are processed digitally through the SAKALA portal with e-khata integration. Spetia handles the entire approval process on your behalf, ensuring full compliance with NBC 2016 and Karnataka Building Bye-laws."
    },
    {
        question: "What is the current cost of construction per sq ft in Bangalore?",
        answer: "As of 2026, construction costs in Bangalore range from ₹1,800–₹2,500/sq ft for standard residential, ₹2,500–₹3,500/sq ft for premium construction, and ₹3,500–₹5,500/sq ft for luxury builds with high-end interiors. These rates include structure, finishing, electrical, plumbing, and basic interiors. At Spetia, we provide a transparent Bill of Quantities (BOQ) upfront with branded material specifications — no hidden costs or surprise escalations."
    },
    {
        question: "How long does it take to build a house in Bangalore?",
        answer: "A typical 2,400 sq ft independent house in Bangalore takes 10–14 months from foundation to handover. This includes 1–2 months for approvals, 3–4 months for structure, 4–5 months for finishing works (electrical, plumbing, flooring, painting), and 2–3 months for interiors. Spetia uses BIM-based project scheduling and digital milestone tracking to ensure on-time delivery."
    },
    {
        question: "What is RERA and does it apply to independent house construction?",
        answer: "RERA (Real Estate Regulatory Authority) under the Karnataka RERA Act primarily applies to real estate developers selling apartments and plotted developments above 8 units or 500 sq m. Independent house construction on your own plot is typically exempt from RERA registration. However, if you're purchasing a villa in a developer project, always verify RERA registration on rera.karnataka.gov.in. Spetia ensures all regulatory compliance regardless of project type."
    },
    {
        question: "What does turnkey construction mean and what's included?",
        answer: "Turnkey construction means Spetia handles everything — from architectural design, structural engineering, and government approvals to material procurement, construction, interiors, and final handover. You get a single contract, single point of contact, and a fixed timeline. Our turnkey package includes: structural works (RCC frame, foundation, slabs), all MEP (electrical, plumbing, HVAC), internal & external finishing, and basic interior fittings."
    },
    {
        question: "What materials and brands does Spetia use?",
        answer: "We exclusively use ISI-certified, branded materials: UltraTech/ACC for cement, JSW/TATA for steel (Fe500D grade), Havells/Polycab for wiring, Finolex/Ashirvad for plumbing, Jaquar/Kohler for bathroom fittings, and Asian Paints/Berger for finishes. Every material is specified in the BOQ with brand, grade, and quantity — you approve everything before purchase."
    },
    {
        question: "How does Spetia ensure construction quality?",
        answer: "We follow a 150+ point quality checklist across all construction stages. This includes: concrete cube testing (IS 456 compliance), rebar inspection before every pour, waterproofing membrane testing, electrical earthing resistance testing, and plumbing pressure testing. Our site engineers conduct daily inspections, and you receive weekly photo/video progress reports through our project tracking app."
    },
    {
        question: "Can I build on agricultural land in Karnataka?",
        answer: "No, agricultural land must first be converted to non-agricultural (NA) use under the Karnataka Land Revenue Act before any construction. The NA conversion process (now digitized via the Bhoomi portal) takes 3–6 months and involves the DC office approval, payment of conversion fees (varies by zone), and land use re-classification. After conversion, you'll need a layout approval from BDA/DTCP before applying for a building plan sanction. Spetia's team can guide you through the entire land conversion and approval process."
    },
    {
        question: "What is BIM and how does Spetia use it in construction?",
        answer: "BIM (Building Information Modeling) is a 3D digital model that contains every detail of your building — structure, electrical, plumbing, HVAC — before construction begins. At Spetia, we use BIM to detect clashes between systems (e.g., a beam conflicting with a duct), generate accurate material quantities, visualize your home in 3D before construction, and optimize costs. This technology reduces construction waste by up to 30% and eliminates costly on-site surprises."
    },
    {
        question: "What areas does Spetia cover for construction projects?",
        answer: "Spetia is headquartered in HSR Layout, Bangalore, and actively takes projects across all of Bangalore (including BBMP, BDA, BMRDA limits), Mysore, Mangalore, Hubli-Dharwad, and other major Karnataka cities. We also execute projects in Chennai, Hyderabad, Kochi, and other south Indian metros. For projects outside Karnataka, we deploy our core team with local support partners."
    }
];

const FAQItem = ({ faq, index, isActive, onToggle, theme }) => {
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
                            Everything you need to know about building with Spetia — approvals, costs, timelines, and quality.
                        </p>

                        <div className="mt-2">
                            <Link
                                to="/contact"
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
