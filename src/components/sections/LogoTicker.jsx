import React from 'react';

const logos = [
    { src: "/images/master power logo.webp", name: "Master Power" },
    { src: "/images/nova loga.webp", name: "Nova" },
    { src: "/images/smart agro logo.webp", name: "Smart Agro" },
    { src: "/images/VCNR CLIENT LOGO.webp", name: "VCNR" },
];

const LogoTicker = () => {
    return (
        <section className="relative bg-arch-gray py-12 md:py-16 border-t border-arch-light-brown/30 overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-arch-gray to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-arch-gray to-transparent z-10 pointer-events-none"></div>

            {/* Marquee Track */}
            <div className="flex overflow-hidden">
                <div className="flex items-center gap-20 md:gap-32 animate-scroll">
                    {/* First set */}
                    {logos.map((logo, index) => (
                        <div key={`a-${index}`} className="flex-shrink-0 flex items-center gap-20 md:gap-32">
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="h-16 md:h-40 w-auto object-contain"
                            />
                        </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {logos.map((logo, index) => (
                        <div key={`b-${index}`} className="flex-shrink-0 flex items-center gap-20 md:gap-32">
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="h-16 md:h-40 w-auto object-contain"
                            />
                        </div>
                    ))}
                    {/* Third set for extra coverage */}
                    {logos.map((logo, index) => (
                        <div key={`c-${index}`} className="flex-shrink-0 flex items-center gap-20 md:gap-32">
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="h-16 md:h-40 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoTicker;
