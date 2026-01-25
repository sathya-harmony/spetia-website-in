import React from 'react';
import { motion } from 'framer-motion';

// Simple fade-up animation for headings (efficient, no per-word splits)
export const AnimatedHeading = ({ children, className = '', delay = 0 }) => {
    return (
        <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={`inline-block ${className}`}
        >
            {children}
        </motion.span>
    );
};

// Simple fade-in for text (no per-character animations)
export const AnimatedText = ({ children, className = '', delay = 0 }) => {
    return (
        <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.5,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={`inline-block ${className}`}
        >
            {children}
        </motion.span>
    );
};

// Fade reveal for paragraphs (simplified, no blur filter which is expensive)
export const BlurReveal = ({ children, className = '', delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Slide up reveal
export const SlideUp = ({ children, className = '', delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedHeading;
