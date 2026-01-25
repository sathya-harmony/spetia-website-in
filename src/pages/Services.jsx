import React from 'react';
import ServicesHero from '../components/sections/ServicesHero';
import ServiceCategories from '../components/sections/ServiceCategories';
import SEO from '../components/SEO';

const Services = () => {
    return (
        <>
            <SEO
                title="Services"
                description="Premium construction, interiors, and architectural design services."
            />
            <ServicesHero />
            <ServiceCategories />
        </>
    );
};

export default Services;
