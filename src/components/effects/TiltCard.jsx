import React, { useRef, useCallback, useMemo } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const TiltCard = ({ children, className = '', intensity = 10 }) => {
    const ref = useRef(null);

    // Use motion values instead of state for better performance
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring for subtle tilt effect
    const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [intensity, -intensity]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-intensity, intensity]), springConfig);

    const handleMouse = useCallback((e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;

        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        mouseX.set(x);
        mouseY.set(y);
    }, [mouseX, mouseY]);

    const handleMouseLeave = useCallback(() => {
        mouseX.set(0);
        mouseY.set(0);
    }, [mouseX, mouseY]);

    const style = useMemo(() => ({
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
    }), [rotateX, rotateY]);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            style={style}
            className={className}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
        >
            {children}
        </motion.div>
    );
};

export default TiltCard;
