import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const verticals = [
    {
        title: "Healthcare",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
        link: "/industries/healthcare"
    },
    {
        title: "Hospitality",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
        link: "/industries/hospitality"
    },
    {
        title: "Commercial",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
        link: "/industries/commercial"
    },
    {
        title: "Residential",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        link: "/industries/residential"
    },
    {
        title: "Education",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
        link: "/industries/education"
    },

];

const GalleryCard = ({ vertical, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ['start end', 'center center'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
    const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

    // Calculate stagger delay based on row and column
    const column = index % 3;
    const row = Math.floor(index / 3);
    const delay = (row * 0.1) + (column * 0.05);

    return (
        <motion.div
            ref={cardRef}
            style={{ y, scale }}
            initial={{ opacity: 0, y: 80, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.215, 0.61, 0.355, 1]
            }}
        >
            <Link
                to={vertical.link}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="block group relative"
            >
                {/* Image Container */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                    <motion.img
                        src={vertical.image}
                        alt={vertical.title}
                        style={{ scale: imageScale }}
                        className="w-full h-full object-cover"
                    />

                    {/* Multi-layer hover overlay */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.4 }}
                    />

                    {/* Shine effect on hover */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none"
                        initial={{ x: '-100%', opacity: 0 }}
                        animate={{
                            x: isHovered ? '100%' : '-100%',
                            opacity: isHovered ? 1 : 0
                        }}
                        transition={{ duration: 0.7 }}
                    />

                    {/* Title Overlay - always visible at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                        <motion.h3
                            className="text-lg md:text-xl font-medium text-white"
                            animate={{
                                y: isHovered ? -5 : 0,
                                scale: isHovered ? 1.05 : 1
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {vertical.title}
                        </motion.h3>
                    </div>

                    {/* Hover: Explore CTA */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="bg-white text-arch-black px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2"
                            initial={{ scale: 0.8, y: 20 }}
                            animate={{
                                scale: isHovered ? 1 : 0.8,
                                y: isHovered ? 0 : 20
                            }}
                            transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                        >
                            <span>Explore</span>
                            <span>→</span>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Explore link with animated arrow */}
                <div className="flex items-center justify-between">
                    <motion.span
                        className="text-sm text-arch-brown/70"
                        animate={{ opacity: isHovered ? 1 : 0.7 }}
                    >
                        Explore solutions
                    </motion.span>
                    <motion.div
                        animate={{
                            x: isHovered ? 0 : -10,
                            opacity: isHovered ? 1 : 0,
                            rotate: isHovered ? -45 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-brick-600 font-bold"
                    >
                        →
                    </motion.div>
                </div>
            </Link>
        </motion.div>
    );
};

const GalleryGrid = () => {
    const sectionRef = useRef(null);

    return (
        <section ref={sectionRef} className="section-padding bg-arch-gray relative overflow-hidden">
            {/* Background decorative elements */}
            <motion.div
                className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-brick-500/5 to-transparent rounded-full blur-3xl pointer-events-none"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="container-custom relative">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {verticals.map((vertical, index) => (
                        <GalleryCard key={index} vertical={vertical} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default GalleryGrid;
