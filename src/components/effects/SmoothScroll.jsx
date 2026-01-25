import { createContext, useContext, useEffect, useRef } from 'react';
import Lenis from 'lenis';

const LenisContext = createContext(null);

export const useLenis = () => useContext(LenisContext);

const SmoothScroll = ({ children }) => {
    const lenisRef = useRef(null);

    useEffect(() => {
        // Initialize Lenis with the industry-standard configuration
        const lenis = new Lenis({
            autoRaf: true, // Automatically handle requestAnimationFrame
            duration: 1.0, // Smooth duration
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo easing
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            syncTouch: false, // Better mobile performance
            touchMultiplier: 2,
        });

        lenisRef.current = lenis;

        // Cleanup
        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    const scrollTo = (target, options = {}) => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(target, options);
        }
    };

    return (
        <LenisContext.Provider value={{ lenis: lenisRef.current, scrollTo }}>
            {children}
        </LenisContext.Provider>
    );
};

export default SmoothScroll;
