import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WorkSamples = () => {
    const [images, setImages] = useState([
        '/images/work-samples/3.jpg',
        '/images/work-samples/4.jpg',
        '/images/work-samples/5.jpg',
        '/images/work-samples/6.jpg',
        '/images/work-samples/Carnival Cakes.jpg',
        '/images/work-samples/GreenX_1.jpg'
    ]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const openLightbox = (index) => {
        setSelectedImageIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImageIndex(null);
        document.body.style.overflow = 'unset';
    };

    const navigateImage = (direction, e) => {
        e.stopPropagation();
        if (selectedImageIndex === null) return;

        let newIndex = selectedImageIndex + direction;
        if (newIndex < 0) newIndex = images.length - 1;
        if (newIndex >= images.length) newIndex = 0;

        setSelectedImageIndex(newIndex);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedImageIndex === null) return;

            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') navigateImage(-1, e);
            if (e.key === 'ArrowRight') navigateImage(1, e);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImageIndex]);

    if (images.length === 0) return null;

    return (
        <section className="py-24 md:py-32 bg-spetia-dark">
            <div className="container-custom">
                {/* Editorial Header */}
                <div className="mb-16 md:mb-24">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-spetia-orange-500 text-xs font-bold tracking-[0.3em] uppercase">Portfolio</span>
                        <div className="h-[1px] w-24 bg-spetia-orange-500/30"></div>
                    </div>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase text-white tracking-tight leading-[0.9]">
                        Selected<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-spetia-orange-500 to-spetia-orange-400">Works.</span>
                    </h2>
                </div>

                {/* Magazine-Style Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            layoutId={`image-${index}`}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
                            onClick={() => openLightbox(index)}
                        >
                            <motion.img
                                src={src}
                                alt={`Work Sample ${index + 1}`}
                                className="w-full h-full object-cover"
                                whileHover={{ scale: 1.08 }}
                                transition={{ duration: 0.8 }}
                            />
                            {/* Editorial Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <span className="text-spetia-orange-500 text-xs font-mono tracking-wider block mb-2">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="text-white font-bold uppercase tracking-wider text-sm">
                                        View Project →
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox - Typography Only */}
            <AnimatePresence>
                {selectedImageIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
                        onClick={closeLightbox}
                    >
                        {/* Close Button - Typography */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 md:top-10 md:right-10 text-white/60 hover:text-white text-4xl font-light z-50 transition-colors"
                        >
                            ×
                        </button>

                        {/* Prev Button - Typography */}
                        <button
                            onClick={(e) => navigateImage(-1, e)}
                            className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-5xl font-light z-50 transition-colors"
                        >
                            ←
                        </button>

                        {/* Image */}
                        <motion.img
                            key={selectedImageIndex}
                            layoutId={`image-${selectedImageIndex}`}
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            src={images[selectedImageIndex]}
                            alt={`Work Sample ${selectedImageIndex + 1}`}
                            className="max-h-[85vh] max-w-[85vw] object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />

                        {/* Next Button - Typography */}
                        <button
                            onClick={(e) => navigateImage(1, e)}
                            className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-5xl font-light z-50 transition-colors"
                        >
                            →
                        </button>

                        {/* Counter - Editorial Style */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 font-mono tracking-widest text-sm">
                            <span className="text-spetia-orange-500">{String(selectedImageIndex + 1).padStart(2, '0')}</span>
                            <span className="mx-2">/</span>
                            <span>{String(images.length).padStart(2, '0')}</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default WorkSamples;
