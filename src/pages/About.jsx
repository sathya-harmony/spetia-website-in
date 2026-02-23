import React from 'react';
import AboutHero from '../components/sections/AboutHero';
import TeamSection from '../components/sections/TeamSection';
import WhySpetia from '../components/sections/WhySpetia';
import AboutIntro from '../components/sections/AboutIntro';
import SEO from '../components/SEO';

const About = () => {
    return (
        <>
            <SEO
                title="About Us"
                description="Spetia was founded in 2011 and delivers premium residential and commercial construction, luxury interiors, and architectural design services across Bangalore and Pan India. 50+ in-house engineers."
            />
            <AboutHero />
            <TeamSection />
            <WhySpetia />
            <AboutIntro />
        </>
    );
};

export default About;

