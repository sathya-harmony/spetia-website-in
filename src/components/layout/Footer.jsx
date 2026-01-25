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
        { name: 'Contact Us', path: '/contact/contact-a' },
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
                            to="/contact/contact-a"
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
                    <div className="flex gap-6 text-xs font-bold uppercase tracking-widest">
                        <a href="https://www.linkedin.com/company/spetia-engineering" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">LinkedIn</a>
                        <a href="https://x.com/spetia" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">X</a>
                        <a href="https://www.instagram.com/spetia_engineering/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
