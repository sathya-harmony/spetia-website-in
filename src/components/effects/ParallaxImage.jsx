import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxImage = ({
    src,
    alt,
    className = '',
    speed = 0.15, // Reduced default speed for subtler effect
}) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    // Simpler parallax - just Y movement, no scale (reduces GPU load)
    const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 100}%`, `${speed * 100}%`]);

    return (
        <div ref={ref} className={`overflow-hidden ${className}`}>
            <motion.img
                src={src}
                alt={alt}
                style={{ y }}
                className="w-full h-full object-cover will-change-transform"
                loading="lazy"
            />
        </div>
    );
};

export default ParallaxImage;
