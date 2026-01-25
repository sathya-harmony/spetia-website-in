import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Icons removed - using typography instead

const tabs = [
    { id: 'architecture', label: 'Architecture' },
    { id: 'construction', label: 'Construction' },
    { id: 'interiors', label: 'Interiors' },
];

const contentInfo = {
    architecture: {
        title: 'Architecture',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80', // Modern House
        steps: [
            {
                id: 1,
                title: 'Submit Requirement',
                description: 'Upon submission of the design requirement of the client, our Architect or Structural Engineer or MEP Engineer detail the requirements.'
            },
            {
                id: 2,
                title: 'Onboarding',
                description: 'After the design discussions are completed, onboarding of resources, planning & execution takes place during this phase.'
            },
            {
                id: 3,
                title: 'Get your design',
                description: 'Client will get all the deliverables as per the agreement, upon quality checks, the designs are delivered during this phase.'
            }
        ]
    },
    construction: {
        title: 'Construction',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80', // Construction Site (Visual placeholder)
        list: [
            { label: 'Consultation', text: 'Meet with our clients to discuss their needs, budget and timeline' },
            { label: 'Design', text: 'Our Architects and Designers to create a custom design that meets our client\'s needs and preferences' },
            { label: 'Pre-construction', text: 'We prepare the site for construction, obtain necessary permits, and develop detailed plan for execution.' },
            { label: 'Construction', text: 'Our team of skilled professionals works to bring the design to life, adhering to the plan and timeline' },
            { label: 'Post-construction', text: 'We conduct a final inspection and ensure that our client is completely satisfied with the finished project.' }
        ]
    },
    interiors: {
        title: 'Interiors',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80', // Modern Interior
        checklist: [
            'Book a free design requirement session.',
            'Meet our designer to get an idea of interior design through a sample 3D walkthrough of client\'s dream home.',
            'Receive personalized quote as per requirements for the agreed design.',
            'Engage & agree with payment schedule.',
            'Get your interiors delivered & installed in just 25 days.'
        ]
    }
};

const WorkingModels = () => {
    const [activeTab, setActiveTab] = useState('architecture');
    const activeContent = contentInfo[activeTab];

    return (
        <section className="py-24 bg-arch-black text-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-light mb-6"
                    >
                        Working <span className="font-serif italic text-brick-400">Models</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Column: Tabs */}
                    <div className="lg:col-span-3 flex flex-col gap-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`
                                    group w-full flex items-center justify-between px-8 py-5 text-left rounded-xl transition-all duration-300 font-medium text-lg
                                    ${activeTab === tab.id
                                        ? 'bg-brick-600 text-white shadow-lg shadow-brick-900/20'
                                        : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'}
                                `}
                            >
                                <span>{tab.label}</span>
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="active-pill"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <span className="text-lg">→</span>
                                    </motion.div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Middle Column: Image */}
                    <div className="lg:col-span-4 h-[400px] lg:h-[600px] rounded-2xl overflow-hidden relative group">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeContent.image}
                                src={activeContent.image}
                                alt={activeContent.title}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full object-cover"
                            />
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-gradient-to-t from-arch-black/60 to-transparent" />
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:col-span-5 relative min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="space-y-8"
                            >
                                <h3 className="text-3xl font-light text-brick-400 border-b border-white/10 pb-4 inline-block">
                                    {activeContent.title}
                                </h3>

                                {/* Architecture Steps Format */}
                                {activeContent.steps && (
                                    <div className="space-y-8">
                                        {activeContent.steps.map((step) => (
                                            <div key={step.id} className="group">
                                                <h4 className="text-xl font-medium text-white mb-2 group-hover:text-brick-400 transition-colors">
                                                    <span className="text-brick-400/50 mr-2">{step.id}.</span>
                                                    {step.title}
                                                </h4>
                                                <p className="text-white/60 leading-relaxed pl-8 border-l border-white/10 ml-1.5">
                                                    {step.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Construction List Format */}
                                {activeContent.list && (
                                    <div className="space-y-6">
                                        {activeContent.list.map((item, idx) => (
                                            <div key={idx} className="relative pl-6">
                                                <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-brick-500" />
                                                <h4 className="text-lg font-medium text-white inline mr-2">
                                                    {item.label}:
                                                </h4>
                                                <span className="text-white/60 leading-relaxed">
                                                    {item.text}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Interiors Checklist Format */}
                                {activeContent.checklist && (
                                    <div className="space-y-5">
                                        {activeContent.checklist.map((item, idx) => (
                                            <div key={idx} className="flex gap-4 items-start">
                                                <div className="mt-1 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-brick-400 text-xs font-medium">
                                                    {idx + 1}
                                                </div>
                                                <p className="text-white/70 leading-relaxed">
                                                    {item}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WorkingModels;
