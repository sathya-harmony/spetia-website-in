import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SpetiaLogo from '../../assets/spetia-logo.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navigation = [
        {
            name: 'Services',
            path: '/services',
            children: [
                { name: 'Construction', path: '/services/construction' },
                { name: 'Luxury Interiors', path: '/services/interiors' },
                { name: 'Architectural Design', path: '/services/architectural-design' },
            ]
        },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            {/* TOP BAR - Clean Minimal Design */}
            <div className="bg-spetia-dark text-white/60 text-[11px] font-medium tracking-wide hidden md:block relative z-[60]">
                <div className="max-w-[1800px] mx-auto px-6 h-9 flex justify-between items-center">
                    {/* Left: Tagline */}
                    <div className="flex items-center gap-4">
                        <span className="text-white/80 uppercase tracking-widest">Premium Construction & Design Partner</span>
                        <span className="text-white/20">—</span>
                        <span className="text-white/50">Pan India  |  Nationwide</span>
                    </div>

                    {/* Right: Contact + Socials */}
                    <div className="flex items-center gap-5">
                        <a href="tel:+919611524249" className="hover:text-white transition-colors">
                            +91 9611524249
                        </a>
                        <a href="mailto:contact@spetia.com" className="hover:text-white transition-colors">
                            contact@spetia.com
                        </a>
                        <span className="text-white/20">|</span>
                        <div className="flex items-center gap-4">
                            <a href="https://www.linkedin.com/company/spetia-engineering" target="_blank" rel="noopener noreferrer" className="hover:text-spetia-orange-500 transition-colors" aria-label="LinkedIn">
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/spetia_engineering/" target="_blank" rel="noopener noreferrer" className="hover:text-spetia-orange-500 transition-colors" aria-label="Instagram">
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a href="https://x.com/spetia" target="_blank" rel="noopener noreferrer" className="hover:text-spetia-orange-500 transition-colors" aria-label="X">
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN NAVIGATION */}
            <nav className={`fixed left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'top-0 bg-white shadow-lg' : 'md:top-10 bg-white border-b border-gray-100'}`}>
                <div className="max-w-[1800px] mx-auto px-6 h-[80px] flex justify-between items-center">

                    {/* Logo Area */}
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 group">
                            <img
                                src={SpetiaLogo}
                                alt="Spetia"
                                className="h-10 w-auto transition-all duration-300 group-hover:scale-105"
                            />
                        </Link>
                    </div>

                    {/* Centered Desktop Links */}
                    <div className="hidden lg:flex items-center justify-center gap-10 h-full absolute left-1/2 -translate-x-1/2">
                        {navigation.map((item) => (
                            <div key={item.name} className="relative group h-full flex items-center">
                                <Link
                                    to={item.path}
                                    className={`text-sm font-bold uppercase tracking-wider hover:text-spetia-orange-600 transition-colors py-8 border-b-2 border-transparent hover:border-spetia-orange-500 flex items-center gap-1 ${location.pathname.includes(item.path) && item.path !== '/' ? 'text-spetia-orange-600 border-spetia-orange-500' : 'text-spetia-dark'}`}
                                >
                                    {item.name}
                                    {item.children && <span className="text-[10px] opacity-40 ml-1">▼</span>}
                                </Link>

                                {/* Dropdown Menu */}
                                {item.children && (
                                    <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-72 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-left py-2 border-t-2 border-spetia-orange-600">
                                        {item.children.map((child) => (
                                            <div key={child.name} className="relative group/sub">
                                                <Link
                                                    to={child.path}
                                                    className="block px-6 py-4 text-sm font-bold uppercase tracking-wide text-gray-600 hover:text-spetia-orange-600 hover:bg-gray-50 transition-colors border-l-2 border-transparent hover:border-spetia-orange-500 flex items-center justify-between"
                                                >
                                                    {child.name}
                                                    {child.children && <span className="text-[10px] opacity-40">►</span>}
                                                </Link>
                                                {/* Nested submenu */}
                                                {child.children && (
                                                    <div className="absolute top-0 left-full w-64 bg-white shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 text-left py-2 border-t-2 border-spetia-orange-600">
                                                        {child.children.map((subChild) => (
                                                            <Link
                                                                key={subChild.name}
                                                                to={subChild.path}
                                                                className="block px-6 py-3 text-sm font-medium text-gray-600 hover:text-spetia-orange-600 hover:bg-gray-50 transition-colors border-l-2 border-transparent hover:border-spetia-orange-500"
                                                            >
                                                                {subChild.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Actions - Typography Only */}
                    <div className="flex items-center gap-4">
                        <Link
                            to="/contact"
                            className="hidden lg:flex items-center gap-2 bg-spetia-orange-600 text-white px-6 py-3 font-bold text-xs uppercase tracking-widest hover:bg-spetia-dark transition-all duration-300 rounded-sm"
                        >
                            <span>Request Proposal</span>
                            <span className="text-sm">→</span>
                        </Link>

                        {/* Mobile Menu Toggle - Typography */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 text-spetia-dark text-2xl"
                        >
                            {isOpen ? '×' : '☰'}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white pt-[100px] px-6 overflow-y-auto lg:hidden"
                    >
                        <div className="flex flex-col gap-2 pb-10">
                            {navigation.map((item) => (
                                <div key={item.name} className="border-b border-gray-100 py-4">
                                    <Link
                                        to={item.path}
                                        onClick={() => !item.children && setIsOpen(false)}
                                        className="text-2xl font-bold text-spetia-dark block"
                                    >
                                        {item.name}
                                    </Link>

                                    {/* Mobile Submenu */}
                                    {item.children && (
                                        <div className="mt-4 flex flex-col gap-3 pl-4 border-l-2 border-spetia-orange-500/20">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    to={child.path}
                                                    onClick={() => setIsOpen(false)}
                                                    className="text-base font-bold text-gray-500 uppercase tracking-wider hover:text-spetia-orange-600 block py-1"
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 w-full bg-spetia-orange-600 text-white py-4 flex items-center justify-center gap-2 font-bold uppercase tracking-widest"
                            >
                                Request Proposal →
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
