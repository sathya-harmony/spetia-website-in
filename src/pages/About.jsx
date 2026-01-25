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
                description="Spetia was founded in 2011 and provides BIM, structural, MEPF, and plant engineering services. 150+ engineers based in Bangalore serving AEC firms globally."
            />
            <AboutHero />
            <TeamSection />
            <WhySpetia />
            <AboutIntro />
        </>
    );
};

export default About;

