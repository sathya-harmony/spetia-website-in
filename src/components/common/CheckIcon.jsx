import React from 'react';

/**
 * Premium accent icon with multiple style variants
 * Used for list items, benefits, features - more elegant than checkmarks
 */
const AccentIcon = ({ variant = 'line', number = null, size = 'md', className = '' }) => {
    const sizes = {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base'
    };

    // Numbered badge - elegant circular number
    if (variant === 'number' && number) {
        return (
            <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-spetia-orange-500 to-spetia-orange-600 text-white text-[10px] font-bold shadow-lg shadow-spetia-orange-500/20 flex-shrink-0 ${className}`}>
                {String(number).padStart(2, '0')}
            </span>
        );
    }

    // Horizontal gradient line - minimal and sleek
    if (variant === 'line') {
        return (
            <span className={`inline-flex items-center flex-shrink-0 ${className}`}>
                <span className="w-4 h-[3px] bg-gradient-to-r from-spetia-orange-500 to-spetia-orange-400 rounded-full"></span>
            </span>
        );
    }

    // Diamond shape - geometric and premium
    if (variant === 'diamond') {
        return (
            <span className={`inline-flex items-center justify-center w-3 h-3 rotate-45 bg-gradient-to-br from-spetia-orange-500 to-spetia-orange-600 shadow-lg shadow-spetia-orange-500/20 flex-shrink-0 ${className}`}></span>
        );
    }

    // Dot - clean and crisp (no glow)
    if (variant === 'dot') {
        return (
            <span className={`inline-flex items-start mt-[6px] justify-center w-2 h-2 rounded-full bg-spetia-orange-500 flex-shrink-0 ${className}`}></span>
        );
    }

    // Arrow pointing right - dynamic and forward-looking
    if (variant === 'arrow') {
        return (
            <span className={`inline-flex items-center text-spetia-orange-500 font-bold ${sizes[size]} flex-shrink-0 ${className}`}>
                →
            </span>
        );
    }

    // Vertical bar accent
    if (variant === 'bar') {
        return (
            <span className={`inline-flex items-center flex-shrink-0 ${className}`}>
                <span className="w-[3px] h-5 bg-gradient-to-b from-spetia-orange-500 to-spetia-orange-400 rounded-full"></span>
            </span>
        );
    }

    // Location pin - premium map marker
    if (variant === 'location') {
        return (
            <span className={`inline-flex items-center justify-center text-spetia-orange-500 flex-shrink-0 ${className}`}>
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0C3.134 0 0 3.134 0 7c0 5.25 7 9 7 9s7-3.75 7-9c0-3.866-3.134-7-7-7zm0 9.5c-1.381 0-2.5-1.119-2.5-2.5S5.619 4.5 7 4.5s2.5 1.119 2.5 2.5S8.381 9.5 7 9.5z" fill="currentColor" />
                </svg>
            </span>
        );
    }

    // Email envelope - sleek mail icon
    if (variant === 'email') {
        return (
            <span className={`inline-flex items-center justify-center text-spetia-orange-500 flex-shrink-0 ${className}`}>
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.4 0H1.6C.72 0 .008.675.008 1.5L0 10.5c0 .825.72 1.5 1.6 1.5h12.8c.88 0 1.6-.675 1.6-1.5v-9C16 .675 15.28 0 14.4 0zm0 3l-6.4 3.75L1.6 3V1.5l6.4 3.75 6.4-3.75V3z" fill="currentColor" />
                </svg>
            </span>
        );
    }

    // Phone - modern telephone icon
    if (variant === 'phone') {
        return (
            <span className={`inline-flex items-center justify-center text-spetia-orange-500 flex-shrink-0 ${className}`}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.803.333H.47c-.92 0-1.453.96-.92 1.653A15.19 15.19 0 0 0 12.013 14.45c.693.533 1.654 0 1.654-.92v-2.333c0-.367-.234-.7-.6-.8l-2.447-.627a.833.833 0 0 0-.86.24l-.946 1.147a.833.833 0 0 1-.927.253A9.174 9.174 0 0 1 2.59 6.114a.833.833 0 0 1 .254-.927l1.146-.946a.833.833 0 0 0 .24-.86L3.603.933a.833.833 0 0 0-.8-.6z" fill="currentColor" />
                </svg>
            </span>
        );
    }

    // Default fallback to line
    return (
        <span className={`inline-flex items-center flex-shrink-0 ${className}`}>
            <span className="w-4 h-[3px] bg-gradient-to-r from-spetia-orange-500 to-spetia-orange-400 rounded-full"></span>
        </span>
    );
};

export default AccentIcon;
