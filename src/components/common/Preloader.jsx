import { motion } from 'framer-motion';
import SpetiaLogo from '../../assets/spetia-logo.svg';

const Preloader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F5F5F0]"
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{
                    scale: [0.9, 1, 1],
                    opacity: 1
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-64 md:w-96"
            >
                <img
                    src={SpetiaLogo}
                    alt="Spetia"
                    className="w-full h-auto object-contain"
                />
            </motion.div>
        </motion.div>
    );
};

export default Preloader;
