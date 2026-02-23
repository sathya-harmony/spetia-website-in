import React from 'react';
import { Link } from 'react-router-dom';
import SpetiaLogo from '../../assets/spetia-logo.svg';
import AccentIcon from '../common/CheckIcon';

const Footer = () => {
    const services = [
        { name: 'Construction', path: '/services/construction' },
        { name: 'Luxury Interiors', path: '/services/interiors' },
        { name: 'Architectural Design', path: '/services/architectural-design' },
    ];

    const company = [
        { name: 'About Spetia', path: '/about' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        <footer className="bg-spetia-dark text-white border-t border-white/5 font-sans">
            <div className="max-w-[1800px] mx-auto px-6 lg:px-12">

                {/* Top Section: CTA - Typography Only */}
                <div className="py-20 border-b border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
                            Build Beyond Intelligence.
                        </h2>
                        <p className="text-white/60 text-lg max-w-xl">
                            Ready to build your dream? Get a proposal for your home, office, or design project.
                        </p>
                    </div>
                    <div>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-spetia-orange-600 text-white rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-spetia-dark transition-all duration-300"
                        >
                            <span>Start Project</span>
                            <span className="text-lg">→</span>
                        </Link>
                    </div>
                </div>

                {/* Main Footer Links Grid */}
                <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 pr-10">
                        <Link to="/" className="mb-8 inline-block">
                            <img
                                src={SpetiaLogo}
                                alt="Spetia"
                                className="h-8 w-auto brightness-0 invert"
                            />
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed mb-8">
                            Spetia is India's premier tech-enabled construction and design firm. We blend architectural vision with engineering precision to build spaces that inspire.
                        </p>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-2">
                        <h4 className="text-spetia-orange-500 text-xs font-bold uppercase tracking-widest mb-8">Services</h4>
                        <ul className="space-y-4">
                            {services.map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} className="text-sm text-white/70 hover:text-white hover:text-spetia-orange-400 transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-spetia-orange-500 text-xs font-bold uppercase tracking-widest mb-8">Company</h4>
                        <ul className="space-y-4">
                            {company.map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} className="text-sm text-white/70 hover:text-white hover:text-spetia-orange-400 transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info Column - Typography Only */}
                    <div className="lg:col-span-4 pl-0 lg:pl-10 lg:border-l border-white/5">
                        <h4 className="text-spetia-orange-500 text-xs font-bold uppercase tracking-widest mb-8">Contact Us</h4>

                        <div className="space-y-8">


                            <div>
                                <h5 className="text-white font-bold text-sm mb-2">India Head Office</h5>
                                <div className="flex items-start gap-3 text-sm text-white/60">
                                    <AccentIcon variant="location" className="mt-0.5" />
                                    <span>HSR Layout, Sector 2,<br />Bangalore, KA 560102</span>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/5">
                                <a href="mailto:contact@spetia.com" className="group flex items-center gap-3 text-white hover:text-spetia-orange-500 transition-colors mb-4">
                                    <AccentIcon variant="email" />
                                    <span className="font-medium group-hover:translate-x-0.5 transition-transform">contact@spetia.com</span>
                                </a>
                                <a href="tel:+919611524249" className="group flex items-center gap-3 text-white hover:text-spetia-orange-500 transition-colors">
                                    <AccentIcon variant="phone" />
                                    <span className="font-medium group-hover:translate-x-0.5 transition-transform">+91 9611524249</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar - Typography Social Links */}
                <div className="py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-white/30">
                        &copy; {new Date().getFullYear()} Spetia OPC Private Ltd. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs">
                        <Link to="/privacy-policy" className="text-white/40 hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms-of-use" className="text-white/40 hover:text-white transition-colors">Terms of Use</Link>
                    </div>
                    <div className="flex gap-5 items-center">
                        <a href="https://www.linkedin.com/company/spetia-engineering" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-spetia-orange-500 transition-colors" aria-label="LinkedIn">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                        <a href="https://www.instagram.com/spetia_engineering/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-spetia-orange-500 transition-colors" aria-label="Instagram">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                        </a>
                        <a href="https://x.com/spetia" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-spetia-orange-500 transition-colors" aria-label="X">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
