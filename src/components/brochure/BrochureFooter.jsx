import React from 'react';

const BrochureFooter = ({ pageNumber, className = "", textColor = "text-gray-600" }) => {
    return (
        <div className={`flex justify-between items-end border-t border-gray-900/20 pt-6 mt-auto ${className}`}>

            {/* Left Side: Company Details */}
            <div className="flex flex-col gap-1.5">
                {/* Legal Name */}
                <div className={`text-[9pt] font-mono font-bold uppercase tracking-widest ${textColor} text-spetia-dark`}>
                    Spetia OPC Pvt LTD.
                </div>

                {/* Contact Info */}
                <div className={`text-[8pt] font-mono uppercase tracking-wider ${textColor} font-medium`}>
                    www.spetia.in | contact@spetia.in | +91 9611524249
                </div>

                {/* Locations */}
                <div className={`text-[8pt] font-mono uppercase tracking-wider ${textColor} opacity-80 mt-1`}>
                    USA | UK | AUSTRALIA | MIDDLE EAST | INDIA
                </div>
            </div>

            {/* Right Side: Page Number / Confidential */}
            <div className={`text-[8pt] font-mono uppercase tracking-wider text-right ${textColor} font-medium`}>
                <div className="mb-1.5 opacity-80">Confidential</div>
                {pageNumber && <div className="font-bold">{pageNumber}</div>}
            </div>
        </div>
    );
};

export default BrochureFooter;
