import React, { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    // Direct motion values for instant 1:1 cursor movement (no spring lag)
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    useEffect(() => {
        // Only enable on devices with hover capability
        if (!window.matchMedia('(hover: hover)').matches) return;

        setIsVisible(true);

        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        // Simple hover detection with throttling
        let lastHoverCheck = 0;
        const handleElementHover = (e) => {
            const now = Date.now();
            if (now - lastHoverCheck < 50) return; // Throttle to 20fps
            lastHoverCheck = now;

            const target = e.target.closest('a, button, [data-cursor="pointer"]');
            setIsHovering(!!target);
        };

        window.addEventListener('mousemove', moveCursor, { passive: true });
        window.addEventListener('mouseenter', handleMouseEnter);
        window.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseover', handleElementHover, { passive: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseenter', handleMouseEnter);
            window.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseover', handleElementHover);
        };
    }, [cursorX, cursorY]);

    if (!isVisible) return null;

    return (
        <>
            {/* Hide default cursor */}
            <style>{`
                @media (hover: hover) {
                    * { cursor: none !important; }
                }
            `}</style>

            {/* Simple cursor dot with ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{ x: cursorX, y: cursorY }}
            >
                <motion.div
                    className="flex items-center justify-center"
                    style={{ marginLeft: '-16px', marginTop: '-16px' }}
                    animate={{
                        width: isHovering ? 48 : 32,
                        height: isHovering ? 48 : 32,
                    }}
                    transition={{ duration: 0.15 }}
                >
                    {/* Outer ring */}
                    <div className="absolute inset-0 border border-white rounded-full" />
                    {/* Inner dot */}
                    <motion.div
                        className="w-2 h-2 bg-white rounded-full"
                        animate={{ scale: isHovering ? 0 : 1 }}
                        transition={{ duration: 0.1 }}
                    />
                </motion.div>
            </motion.div>
        </>
    );
};

export default CustomCursor;
