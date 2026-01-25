import React from 'react';
import { motion } from 'framer-motion';
// Icons removed - using typography instead
import { Link } from 'react-router-dom';

const VideoSection = () => {
    return (
        <section className="relative min-h-screen w-full overflow-hidden py-12 px-5 md:px-10">
            {/* Background Video Container */}
            <div className="absolute inset-5 md:inset-10 rounded-2xl md:rounded-3xl overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source
                        src="/media/68473d24060dc01d9ede8c03%252F6884b9017aae78d41d13a875_4865386-hd_2048_1080_25fps-transcode.mp4"
                        type="video/mp4"
                    />
                </video>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-dark-overlay"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full min-h-[80vh] flex flex-col justify-end container-custom pb-16 md:pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto md:mx-0 flex flex-col items-center text-center md:items-start md:text-left"
                >
                    <p className="text-2xl md:text-3xl lg:text-4xl text-white font-medium leading-snug tracking-tight mb-8 md:mb-10">
                        We handle end-to-end Turnkey Construction, Luxury Interiors, and Architectural Planning. Our team manages your project on-site from start to finish, ensuring zero deviation from design.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link
                            to="/contact/contact-a"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brick-600 text-white rounded-full font-medium text-sm transition-all duration-300 hover:bg-brick-700 hover:scale-[1.02] group w-full sm:w-auto"
                        >
                            <span>Get Consultation</span>
                            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 inline-block">→</span>
                        </Link>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoSection;
