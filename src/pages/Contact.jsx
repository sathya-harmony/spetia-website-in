import React from 'react';
import ContactSection from '../components/sections/ContactSection';
import SEO from '../components/SEO';

const Contact = () => {
    return (
        <>
            <SEO
                title="Contact Us"
                description="Get in touch with Spetia for a free consultation. Connect with our experts for residential construction, luxury interiors, and architectural design services across Bangalore and Pan India."
            />
            <ContactSection />
        </>
    );
};

export default Contact;
