import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
    {
        number: "01",
        title: "Construction",
        subtitle: "Built to Last",
        description: "Premium residential and commercial construction with uncompromising quality and attention to detail.",
        link: "/services/construction",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
    },
    {
        number: "02",
        title: "Luxury Interiors",
        subtitle: "Designed for Living",
        description: "Bespoke interior design and execution that transforms spaces into experiences.",
        link: "/services/interiors",
        image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?w=800&q=80"
    },
    {
        number: "03",
        title: "Architectural Design",
        subtitle: "Visionary Planning",
        description: "Visionary architectural design and planning for residential and commercial spaces.",
        link: "/services/architectural-design",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    }
];

const CategoryCard = ({ category, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative"
        >
            <Link to={category.link} className="block">
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-6">
                    <div className="absolute inset-0 bg-spetia-dark/40 group-hover:bg-spetia-dark/20 transition-colors duration-500 z-10" />
                    <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Number Badge */}
                    <span className="absolute top-4 left-4 text-5xl font-black text-white/20 z-20">
                        {category.number}
                    </span>
                    {/* Hover Arrow */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-spetia-orange-600 rounded-full flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <span className="text-white text-xl">→</span>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                    <span className="text-spetia-orange-500 text-[10px] font-bold uppercase tracking-widest">
                        {category.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-spetia-dark uppercase tracking-tight group-hover:text-spetia-orange-600 transition-colors">
                        {category.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        {category.description}
                    </p>
                </div>
            </Link>
        </motion.div>
    );
};

const ServiceCategories = () => {
    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 pb-8 border-b border-gray-200">
                    <div>
                        <span className="text-spetia-orange-600 text-xs font-bold uppercase tracking-widest mb-3 block">
                            What We Do
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase text-spetia-dark tracking-tight leading-none">
                            Our Expertise
                        </h2>
                    </div>
                    <p className="text-gray-500 text-sm max-w-md leading-relaxed">
                        Three core disciplines. One integrated approach to premium living and working spaces.
                    </p>
                </div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {categories.map((category, index) => (
                        <CategoryCard key={index} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceCategories;
