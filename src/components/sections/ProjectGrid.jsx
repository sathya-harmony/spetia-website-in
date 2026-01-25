import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// Icons removed - using typography instead
import { Link } from 'react-router-dom';

const verticals = [
    {
        title: "Healthcare",
        description: "Complex healthcare facilities benefit from BIM's ability to coordinate intricate MEP systems, ensure regulatory compliance, and optimize patient flow.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80"
    },
    {
        title: "Hospitality",
        description: "From boutique hotels to large resorts, we model every guest room, service area, and common space with precision.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80"
    },
    {
        title: "Commercial",
        description: "Office towers, retail centers, and mixed-use developments—designed for efficiency, built with accuracy.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
    },
    {
        title: "Residential",
        description: "High-rise apartments, gated communities, and custom homes—each modeled to the last detail.",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80"
    },
    {
        title: "Education",
        description: "Schools, universities, and research facilities designed for collaboration and built for longevity.",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80"
    }
];

const VerticalCard = ({ vertical, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ['start end', 'center center'],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
        >
            <Link
                to="/project/projects-a"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="bg-white rounded-lg overflow-hidden flex flex-col-reverse lg:flex-row gap-0 lg:gap-8 group block shadow-sm border border-black/5"
            >
                {/* Content */}
                <div className="flex-1 flex flex-col justify-between p-6 lg:p-8">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl md:text-3xl font-light tracking-tight text-arch-black">
                            {vertical.title}
                        </h3>
                        <p className="text-arch-brown/60 leading-relaxed">
                            {vertical.description}
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-3 mt-6">
                        <motion.div
                            className="inline-flex items-center gap-2 text-arch-black font-medium"
                            animate={{ x: isHovered ? 5 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <span>Learn more</span>
                            <span>→</span>
                        </motion.div>
                    </div>
                </div>

                {/* Image */}
                <div className="flex-1 h-[250px] lg:h-[350px] overflow-hidden">
                    <motion.img
                        src={vertical.image}
                        alt={vertical.title}
                        style={{ scale: imageScale }}
                        className="w-full h-full object-cover"
                    />
                </div>
            </Link>
        </motion.div>
    );
};

const ProjectGrid = () => {
    return (
        <section className="section-padding bg-arch-black border-b border-white/10">
            <div className="container-custom">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:items-end lg:text-left gap-8 lg:gap-16 mb-12 md:mb-16">
                    <div className="flex flex-col items-center lg:items-start gap-4 md:gap-6 max-w-2xl">
                        <span className="text-brick-600 text-xs md:text-sm font-medium tracking-widest uppercase">
                            Verticals
                        </span>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
                            Solutions for every sector
                        </h2>
                    </div>

                    <div className="flex flex-col items-center lg:items-start gap-6 max-w-md">
                        <p className="text-lg text-white/60 leading-relaxed">
                            Specialized expertise across healthcare, hospitality, commercial,
                            residential, and education projects.
                        </p>
                        <Link
                            to="/contact/contact-a"
                            className="inline-flex items-center gap-2 text-white font-medium group"
                        >
                            <span>Start a project</span>
                            <span className="text-lg transition-transform duration-300 group-hover:translate-x-2 inline-block">→</span>
                        </Link>
                    </div>
                </div>

                {/* Verticals List */}
                <div className="flex flex-col gap-5">
                    {verticals.map((vertical, index) => (
                        <VerticalCard key={index} vertical={vertical} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectGrid;
