import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const servicesData = [
    {
        number: "01",
        title: "Construction",
        description: "End-to-end turnkey construction transparency. From excavation to handover, we adhere to IS standards and rigorous quality checks.",
        tools: ["IS Code Compliance", "Daily Reporting", "Zero-Deviation"],
        link: "/services/construction",
        image: "/images/service-construction.png"
    },
    {
        number: "02",
        title: "Luxury Interiors",
        description: "Personalized interior journeys. We blend global trends with Indian functionality, using Vastu-compliant layouts and premium finishes.",
        tools: ["Vastu Planning", "Global Sourcing", "Custom Joinery"],
        link: "/services/interiors",
        image: "/images/service-interiors.png"
    },
    {
        number: "03",
        title: "Architectural Design",
        description: "Climate-responsive architecture that stands the test of time. We design for ventilation, light, and sustainable urban living.",
        tools: ["Sustainability", "Urban Planning", "Structural Audit"],
        link: "/services/architectural-design",
        image: "/images/service-architecture.png"
    }
];


const ServiceCard = ({ service, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group relative bg-white border border-gray-200 hover:border-spetia-orange-500 transition-all duration-300 overflow-hidden"
        >
            <Link to={service.link} className="block">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-spetia-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Number */}
                    <span className="absolute top-4 left-4 text-3xl font-black text-white/90 tracking-tighter z-20">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                </div>

                {/* Content */}
                <div className="p-6">
                    <h3 className="text-lg font-bold text-spetia-dark uppercase tracking-tight mb-2 group-hover:text-spetia-orange-600 transition-colors">
                        {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                        {service.description}
                    </p>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-1.5">
                        {service.tools.map((tool, i) => (
                            <span key={i} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-gray-100 text-gray-500 group-hover:bg-spetia-dark group-hover:text-white transition-colors">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

const ServicesList = ({ theme = "light", title = "Engineering Excellence", subtitle = "Our Capabilities", description = "Full spectrum digital engineering services for mission-critical infrastructure.", items = servicesData }) => {
    const isDark = theme === "dark";

    return (
        <section className={`py-20 ${isDark ? 'bg-spetia-dark' : 'bg-gray-50'}`}>
            <div className="container-custom">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12 pb-8 border-b border-gray-200">
                    <div className="max-w-2xl">
                        <span className={`font-bold uppercase tracking-widest text-xs mb-4 block ${isDark ? 'text-spetia-orange-500' : 'text-spetia-orange-600'}`}>
                            {subtitle}
                        </span>
                        <h2 className={`text-3xl md:text-4xl font-bold uppercase tracking-tight leading-none ${isDark ? 'text-white' : 'text-spetia-dark'}`}>
                            {title}
                        </h2>
                    </div>
                    <div className="hidden md:block text-right">
                        <p className={`max-w-md text-sm leading-relaxed mb-4 ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
                            {description}
                        </p>
                    </div>
                </div>

                {/* Uniform Grid - 2 cols tablet, 4 cols desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((service, index) => (
                        <ServiceCard key={service.number || index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesList;
