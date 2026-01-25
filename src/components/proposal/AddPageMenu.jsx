import React, { useState } from 'react';

const AddPageMenu = ({ onAdd }) => {
    const [isOpen, setIsOpen] = useState(false);

    const templates = [
        { type: 'cover', label: 'Cover Page', color: 'bg-black' },
        { type: 'letter', label: 'Letterhead', color: 'bg-white text-black' },
        { type: 'service', label: 'Service Page', color: 'bg-spetia-orange-500' },
        { type: 'pricing', label: 'Pricing Table', color: 'bg-spetia-teal' },
    ];

    return (
        <div className="w-[210mm] relative flex justify-center py-4 group print:hidden">

            {/* Hover Line */}
            <div className="absolute inset-x-0 top-1/2 h-[2px] bg-spetia-orange-500/0 group-hover:bg-spetia-orange-500/20 transition-all cursor-pointer" onClick={() => setIsOpen(!isOpen)}></div>

            <div className={`relative z-10 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}`}>
                <div className="bg-[#1a1a1a] p-2 rounded-full shadow-xl flex gap-3 items-center backdrop-blur-md border border-white/10">
                    <span className="text-[10px] uppercase font-bold text-gray-400 pl-3 pr-2">Add Page:</span>
                    {templates.map((t) => (
                        <button
                            key={t.type}
                            onClick={() => { onAdd(t.type); setIsOpen(false); }}
                            className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide transition-transform hover:scale-105 ${t.color.includes('text') ? t.color : `${t.color} text-white`}`}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AddPageMenu;
