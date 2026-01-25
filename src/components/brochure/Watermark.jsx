import React from 'react';
import SpetiaLogo from '../../assets/spetia-logo.svg';

const Watermark = () => {
    return (
        <div className="absolute inset-0 pointer-events-none z-[40] overflow-hidden select-none print:opacity-100">
            {/* Watermark Pattern - Horizontal, Dense, Meaningful */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] flex flex-wrap content-start items-center justify-center gap-24 opacity-[0.1] print:opacity-[0.1]">
                {Array.from({ length: 150 }).map((_, i) => (
                    <div key={i} className="flex flex-col items-center justify-center">
                        <img
                            src={SpetiaLogo}
                            className="w-40 h-auto grayscale contrast-150 mix-blend-multiply"
                            alt=""
                        />
                    </div>
                ))}
            </div>

            {/* Additional Security Text (Optional, barely visible) */}
            <div className="absolute bottom-4 right-4 text-[6pt] font-mono text-gray-400 opacity-60 z-50 font-bold uppercase tracking-widest">
                PROPRIETARY & CONFIDENTIAL
            </div>
        </div>
    );
};

export default Watermark;
