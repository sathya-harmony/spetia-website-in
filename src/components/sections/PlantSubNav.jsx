import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const disciplines = [
    { name: 'Process', path: '/services/plant-engineering/process', short: 'Process Engineering' },
    { name: 'Piping', path: '/services/plant-engineering/piping', short: 'Piping Engineering' },
    { name: 'Mechanical', path: '/services/plant-engineering/mechanical', short: 'Mechanical Engineering' },
    { name: 'Civil & Structural', path: '/services/plant-engineering/civil-structural', short: 'Civil & Structural' },
    { name: 'E&I', path: '/services/plant-engineering/electrical', short: 'Electrical & Instrumentation' },
];

const PlantSubNav = () => {
    const location = useLocation();

    return (
        <div className="bg-spetia-dark border-b border-white/5 sticky top-[80px] z-30">
            <div className="container-custom">
                <div className="flex flex-wrap justify-center gap-2 md:gap-8 py-2 md:py-0">
                    {disciplines.map((discipline) => {
                        const isActive = location.pathname === discipline.path;
                        return (
                            <Link
                                key={discipline.path}
                                to={discipline.path}
                                className={`py-4 md:py-6 px-2 text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 relative group whitespace-nowrap ${isActive
                                        ? 'text-white'
                                        : 'text-white/40 hover:text-white/70'
                                    }`}
                            >
                                <span className="hidden md:inline">{discipline.short}</span>
                                <span className="md:hidden">{discipline.name}</span>
                                <span
                                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-spetia-orange-500 transition-transform duration-300 transform ${isActive
                                            ? 'scale-x-100'
                                            : 'scale-x-0 group-hover:scale-x-100'
                                        }`}
                                />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PlantSubNav;
