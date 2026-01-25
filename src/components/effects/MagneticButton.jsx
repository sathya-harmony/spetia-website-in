import React, { useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MagneticButton = ({ children, className = '', strength = 0.25 }) => {
    const ref = useRef(null);

    // Use motion values for performance (no re-renders)
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Light spring for subtle magnetic effect
    const springConfig = { stiffness: 200, damping: 20 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouse = useCallback((e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;

        const newX = (e.clientX - rect.left - rect.width / 2) * strength;
        const newY = (e.clientY - rect.top - rect.height / 2) * strength;

        x.set(newX);
        y.set(newY);
    }, [x, y, strength]);

    const handleMouseLeave = useCallback(() => {
        x.set(0);
        y.set(0);
    }, [x, y]);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default MagneticButton;
