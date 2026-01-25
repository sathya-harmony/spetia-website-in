import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Reusable Schema.org component for 2026 AEO (Answer Engine Optimization).
 * Injects JSON-LD structured data into the <head>.
 * 
 * @param {Object} schema - The Schema.org object to inject
 */
const SchemaOrg = ({ schema }) => {
    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default SchemaOrg;
