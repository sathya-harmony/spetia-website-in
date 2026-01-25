import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SEO component - sets page title and updates meta description
 * @param {string} title - Page title
 * @param {string} description - Page meta description
 */
const SEO = ({ title, description }) => {
    const location = useLocation();

    useEffect(() => {
        // Update document title
        document.title = title ? `${title} | Spetia` : 'Spetia | Digital Engineering Services';

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription && description) {
            metaDescription.setAttribute('content', description);
        }

        // Update OG title
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', title || 'Spetia | Digital Engineering Services');
        }

        // Update OG description
        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription && description) {
            ogDescription.setAttribute('content', description);
        }

        // Update canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', `https://spetia.com${location.pathname}`);
        }
    }, [title, description, location.pathname]);

    return null;
};

export default SEO;
