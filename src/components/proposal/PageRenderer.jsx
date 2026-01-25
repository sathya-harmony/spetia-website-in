import React from 'react';
import CoverTemplate from './templates/CoverTemplate';
import LetterTemplate from './templates/LetterTemplate';
import ServiceTemplate from './templates/ServiceTemplate';
import PricingTemplate from './templates/PricingTemplate';

const PageRenderer = ({ page, onUpdate }) => {
    switch (page.type) {
        case 'cover':
            return <CoverTemplate data={page.data} onUpdate={onUpdate} />;
        case 'letter':
            return <LetterTemplate data={page.data} onUpdate={onUpdate} />;
        case 'service':
            return <ServiceTemplate data={page.data} onUpdate={onUpdate} />;
        case 'pricing':
            return <PricingTemplate data={page.data} onUpdate={onUpdate} />;
        default:
            return <div className="p-10 text-red-500">Unknown Page Type: {page.type}</div>;
    }
};

export default PageRenderer;
