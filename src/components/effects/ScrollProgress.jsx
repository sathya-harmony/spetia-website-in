import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();

    // Smooth spring animation for the progress bar
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            {/* Main progress bar with gradient */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-spetia-orange-500 via-spetia-orange-600 to-spetia-orange-500 z-[9997] origin-left"
                style={{ scaleX }}
            />

            {/* Glow effect underneath */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[6px] bg-gradient-to-r from-spetia-orange-500/40 via-spetia-orange-600/40 to-spetia-orange-500/40 z-[9996] origin-left blur-sm"
                style={{ scaleX }}
            />
        </>
    );
};

export default ScrollProgress;
