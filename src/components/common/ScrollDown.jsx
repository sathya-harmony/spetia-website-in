import React from 'react';
import { motion } from 'framer-motion';

const ScrollDown = ({ className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className={`flex flex-col items-center gap-2 ${className}`}
        >
            <div className="w-[30px] h-[50px] border-2 border-white/30 rounded-full flex justify-center p-1.5 backdrop-blur-sm bg-white/5">
                <motion.div
                    className="w-1.5 h-2.5 bg-white rounded-full"
                    animate={{
                        y: [0, 20, 0],
                        opacity: [1, 0, 0]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium">Scroll</span>
        </motion.div>
    );
};

export default ScrollDown;
