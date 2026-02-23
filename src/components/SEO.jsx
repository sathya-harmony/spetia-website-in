import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

/**
 * Enhanced SEO component for spetia.in
 * - Uses react-helmet-async for proper meta tag management
 * - Supports robots directives for AI crawlers
 * - Includes Twitter card and OG enhancements
 * 
 * @param {string} title - Page title
 * @param {string} description - Page meta description
 * @param {string} keywords - Optional comma-separated keywords
 * @param {string} image - Optional OG/Twitter image URL
 */
const SEO = ({
    title,
    description,
    keywords,
    image = '/images/favicon.png',
}) => {
    const location = useLocation();
    const siteUrl = 'https://spetia.in';
    const fullUrl = `${siteUrl}${location.pathname}`;
    const fullTitle = title ? `${title} | Spetia` : 'Spetia | Premium Construction & Design Partner — Pan India';
    const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Robots - AI-friendly directives */}
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={fullTitle} />
            {description && <meta property="og:description" content={description} />}
            <meta property="og:image" content={fullImageUrl} />
            <meta property="og:site_name" content="Spetia" />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={fullTitle} />
            {description && <meta name="twitter:description" content={description} />}
            <meta name="twitter:image" content={fullImageUrl} />
            <meta name="twitter:site" content="@spetia" />

            {/* Canonical URL */}
            <link rel="canonical" href={fullUrl} />
        </Helmet>
    );
};

export default SEO;
