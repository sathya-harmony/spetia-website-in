import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import AccentIcon from '../../components/common/CheckIcon';

const services = [
    {
        title: "Turnkey Residential Construction",
        description: "From 'Bhoomi Pujan' to 'Greh Pravesh', we manage every aspect. Our turnkey solutions include architectural liaising, structural execution, and premium finishing.",
        features: ["Soil Testing & Structural Vetting", "Vastu-Compliant Footing", "Premium Cement (UltraTech/ACC)", "Tata MS Life Steel", "Waterproofing Warranties", "Dedicated Site Engineer"]
    },
    {
        title: "Commercial & Office Spaces",
        description: "High-grade commercial structures designed for maximum FSI utilization and rental yield. We specialize in steel structures and composite buildings.",
        features: ["Steel Frame Construction", "Fire Safety Compliance (NBC)", "High-Traffic Flooring", "Facade Glazing", "MEP Integration", "Parking Optimization"]
    },
    {
        title: "Villa Renovations & Extensions",
        description: "Transforming existing structures with modern strengthening techniques. We handle vertical extensions and structural modifications with care.",
        features: ["Load Bearing Analysis", "Retrofitting", "Column Jacketing", "Terrace Gardening", "Facade Modernization", "Flooring Upgrades"]
    }
];

const processSteps = [
    { title: "Consultation & estimates", desc: "Detailed BOQ with brand-specific material list." },
    { title: "Design & Approval", desc: "BBMP/Municipal sanction drawings and structural vetting." },
    { title: "Foundation to Plinth", desc: "Anti-termite treatment and curing monitoring." },
    { title: "Superstructure", desc: "Precision brickwork with laser-levelled plastering." },
    { title: "Finishing & Handover", desc: "Painting, flooring, and deep cleaning before keys." }
];

const Construction = () => {
    return (
        <div className="bg-spetia-light min-h-screen">
            <SEO
                title="Construction Services"
                description="Premium turnkey construction in India. Residential villas and commercial buildings with documented quality checks and verified materials."
            />

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center bg-spetia-dark overflow-hidden pt-32 pb-16">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

                <div className="container-custom relative z-10 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <div className="h-[2px] w-8 bg-spetia-orange-500"></div>
                                <span className="text-spetia-orange-500 text-xs font-bold tracking-widest uppercase">
                                    Quality First
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white leading-[0.95] tracking-tight mb-6">
                                Construction <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spetia-orange-500 to-spetia-orange-400">Beyond Standards.</span>
                            </h1>

                            <p className="text-lg text-white/60 leading-relaxed max-w-lg mb-8 border-l-2 border-white/10 pl-6">
                                We believe a home is built once in a lifetime. Our "Build Beyond Intelligence" approach ensures every square foot adheres to rigorous Indian Standards (IS Codes) for safety and longevity.
                            </p>

                            <Link
                                to="/contact/contact-a"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-spetia-orange-600 text-white rounded-sm font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-spetia-dark transition-all duration-300"
                            >
                                <span>Get a Quote</span>
                                <span className="text-lg">→</span>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[450px] w-full rounded-sm overflow-hidden border border-white/10"
                        >
                            <img
                                src="/images/hero-construction.png"
                                alt="Construction site in India"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md p-6 border-l-4 border-spetia-orange-500">
                                <p className="text-white text-sm font-semibold">"Zero Compromise on Quality"</p>
                                <p className="text-white/60 text-xs mt-1">We use only grade-A materials like Tata Steel and River Sand alternatives.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Detailed Services Grid */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="max-w-3xl mb-16">
                        <span className="text-spetia-orange-600 text-xs font-bold tracking-widest uppercase mb-4 block">Our Expertise</span>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase text-spetia-dark tracking-tight">
                            Engineered for Indian Conditions
                        </h2>
                        <p className="text-gray-500 mt-6 text-lg">
                            Building in India requires understanding local soil, weather patterns, and material availability. We have mastered this over 15+ years.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-sm border border-gray-200 hover:border-spetia-orange-500 transition-all duration-300 shadow-sm hover:shadow-xl"
                            >
                                <span className="text-4xl font-bold text-spetia-orange-500/20 font-mono mb-4 block">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <h3 className="text-xl font-bold uppercase text-spetia-dark mb-3">{service.title}</h3>
                                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{service.description}</p>

                                <div className="space-y-3">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-gray-700 text-sm font-medium">
                                            <div className="w-1.5 h-1.5 bg-spetia-orange-500 rounded-full"></div>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold uppercase text-spetia-dark">The Spetia Guarantee</h2>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gray-200 -z-10"></div>

                        {processSteps.map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center w-full md:w-1/5">
                                <div className="w-12 h-12 rounded-full bg-spetia-dark text-white flex items-center justify-center font-bold mb-4 border-4 border-white shadow-lg z-10">
                                    {idx + 1}
                                </div>
                                <h4 className="font-bold uppercase text-sm mb-2">{step.title}</h4>
                                <p className="text-xs text-gray-500 max-w-[150px]">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Material Partners - Typography Based */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="container-custom text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">Trusted Brand Partners</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
                        <span className="text-xl font-black text-gray-800">TATA STEEL</span>
                        <span className="text-xl font-black text-gray-800">ULTRATECH</span>
                        <span className="text-xl font-black text-gray-800">ASIAN PAINTS</span>
                        <span className="text-xl font-black text-gray-800">JINDAL</span>
                        <span className="text-xl font-black text-gray-800">KAJARIA</span>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-spetia-dark">
                <div className="container-custom text-center">
                    <h2 className="text-2xl md:text-4xl font-bold uppercase text-white tracking-tight mb-6">
                        Construct With Confidence
                    </h2>
                    <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto">
                        Call us at <span className="text-white font-bold">+91 9611524249</span> or book a site visit today.
                    </p>
                    <Link
                        to="/contact/contact-a"
                        className="inline-flex items-center gap-3 bg-white text-spetia-dark px-10 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-spetia-orange-600 hover:text-white transition-all duration-300"
                    >
                        <span>Schedule Site Visit</span>
                        <span className="text-lg">→</span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Construction;
