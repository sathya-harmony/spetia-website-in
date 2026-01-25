import React from 'react';
import Hero from '../components/sections/Hero';
import LogoTicker from '../components/sections/LogoTicker';
import ServicesList from '../components/sections/ServicesList';
import StatsSection from '../components/sections/StatsSection';
import WorkSamples from '../components/sections/WorkSamples';
import ClientSays from '../components/sections/ClientSays';
import VideoSection from '../components/sections/VideoSection';
import SEO from '../components/SEO';

const Home = () => {
    return (
        <>
            <SEO
                title={null}
                description="Spetia is India's premier tech-enabled construction and design firm. Expert Residential Construction, Luxury Interiors, and Architectural Planning across Pan India."
            />
            <Hero />
            <LogoTicker />
            <ServicesList />
            <StatsSection />
            <WorkSamples />
            <ClientSays />
            <VideoSection />
        </>
    );
};

export default Home;

