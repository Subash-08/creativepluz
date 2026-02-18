'use client';
import React, { useState, useEffect } from 'react'; // Added useEffect
import Link from 'next/link';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
const logoImage = '/assets/images/service/creative_logo.png'
import { THEME } from '@/config/theme';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showServices, setShowServices] = useState(false);

    // 1. Add state to track scrolling
    const [isScrolled, setIsScrolled] = useState(false);

    // 2. Add scroll listener
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Work', path: '/portfolio' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const serviceLinks = [
        { name: 'Logo & Branding', path: '/services/branding' },
        { name: 'Product Package Designing', path: '/services/product-package-design' },
        { name: 'Social Media Post', path: '/services/social-media-post' },
        { name: 'Banner Designs & Corporate Display', path: '/services/flex-banner-corporate-display' },
        { name: 'Brochure & Print Advertising', path: '/services/brochure-print-advertising' },
        { name: 'Website Development', path: '/services/website-development' },
    ];

    return (
        <>
            {/* 3. Apply conditional classes based on isScrolled */}
            <nav
                className={`fixed z-999 top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled
                    ? 'py-3 backdrop-blur-md shadow-lg bg-black/30 border-b border-white/10'
                    : 'py-6 bg-transparent border-b border-transparent'
                    }`}
            >
                <div className="flex items-center justify-between mx-auto px-6 md:px-12" style={{ maxWidth: THEME.layout.containerWidth }}>
                    {/* 1. Logo (Left) */}
                    <div className="flex-none">
                        <Link href="/" className="group relative z-50 flex items-center">
                            <div className="relative w-[140px] h-[50px]">
                                <Image
                                    src={logoImage}
                                    alt="CreativePluz Logo"
                                    fill
                                    className="object-contain object-left transition-transform duration-300 group-hover:scale-105"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* 2. Desktop Menu (Center) */}
                    <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                        {/* Home Link */}
                        <Link
                            href="/"
                            className="text-sm font-bold uppercase tracking-widest transition-colors relative group"
                            style={{ color: THEME.colors.foreground }}
                        >
                            Home
                            <span
                                className="absolute -bottom-1 left-0 h-[1px] transition-all duration-300 w-0 group-hover:w-full"
                                style={{ backgroundColor: THEME.colors.primary }}
                            ></span>
                        </Link>

                        {/* Work Link */}
                        <Link
                            href="/portfolio"
                            className="text-sm font-bold uppercase tracking-widest transition-colors relative group"
                            style={{ color: THEME.colors.foreground }}
                        >
                            Work
                            <span
                                className="absolute -bottom-1 left-0 h-[1px] transition-all duration-300 w-0 group-hover:w-full"
                                style={{ backgroundColor: THEME.colors.primary }}
                            ></span>
                        </Link>

                        {/* Services Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setShowServices(true)}
                            onMouseLeave={() => setShowServices(false)}
                        >
                            <button
                                className="flex items-center gap-1 text-sm font-bold uppercase tracking-widest transition-colors py-2 outline-none"
                                style={{ color: THEME.colors.foreground }}
                            >
                                Services <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showServices ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {showServices && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
                                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                        exit={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full -left-4 w-72 border p-2 mt-2 shadow-2xl backdrop-blur-xl rounded-xl"
                                        style={{
                                            backgroundColor: `${THEME.colors.background}F2`,
                                            borderColor: 'rgba(255,255,255,0.1)'
                                        }}
                                    >
                                        <div className="flex flex-col gap-1">
                                            {serviceLinks.map((service) => (
                                                <Link
                                                    key={service.name}
                                                    href={service.path}
                                                    className="block py-3 px-4 text-xs font-bold uppercase tracking-widest transition-all rounded-lg"
                                                    style={{ color: `${THEME.colors.foreground}B3` }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.backgroundColor = THEME.colors.primary;
                                                        e.currentTarget.style.color = THEME.colors.background;
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.backgroundColor = 'transparent';
                                                        e.currentTarget.style.color = `${THEME.colors.foreground}B3`;
                                                    }}
                                                >
                                                    {service.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* About Link */}
                        <Link
                            href="/about"
                            className="text-sm font-bold uppercase tracking-widest transition-colors relative group"
                            style={{ color: THEME.colors.foreground }}
                        >
                            About
                            <span
                                className="absolute -bottom-1 left-0 h-[1px] transition-all duration-300 w-0 group-hover:w-full"
                                style={{ backgroundColor: THEME.colors.primary }}
                            ></span>
                        </Link>

                        {/* Contact Link */}
                        <Link
                            href="/contact"
                            className="text-sm font-bold uppercase tracking-widest transition-colors relative group"
                            style={{ color: THEME.colors.foreground }}
                        >
                            Contact
                            <span
                                className="absolute -bottom-1 left-0 h-[1px] transition-all duration-300 w-0 group-hover:w-full"
                                style={{ backgroundColor: THEME.colors.primary }}
                            ></span>
                        </Link>
                    </div>

                    {/* 3. Get in Touch + Mobile Toggle (Right) */}
                    <div className="flex items-center gap-4 flex-none">
                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "#e6c200" }} // Slightly darker gold on hover
                                whileTap={{ scale: 0.95 }}
                                className="hidden lg:flex px-6 py-3 rounded-full font-bold text-xs items-center gap-2 uppercase tracking-wider transition-colors"
                                style={{
                                    backgroundColor: THEME.colors.primary,
                                    color: THEME.colors.background,
                                    boxShadow: `0 0 20px ${THEME.colors.primary}4D`
                                }}
                            >
                                Get in Touch
                                <ArrowUpRight size={16} />
                            </motion.button>
                        </Link>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center z-50">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="focus:outline-none p-2 -mr-2 transition-colors"
                                style={{ color: THEME.colors.foreground }}
                                aria-label="Toggle Menu"
                            >
                                {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black flex flex-col"
                    >
                        {/* Mobile Menu Content (Same as your original code) */}
                        <div className="flex justify-between items-center px-6 py-8 border-b border-white/5">
                            <Link href="/" className="group relative z-50 flex items-center">
                                <div className="relative w-[140px] h-[50px]">
                                    <Image
                                        src={logoImage}
                                        alt="CreativePluz Logo"
                                        fill
                                        className="object-contain object-left transition-transform duration-300 group-hover:scale-105"
                                        priority
                                    />
                                </div>
                            </Link>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:text-brand-primary transition-colors text-[10px] font-black uppercase tracking-widest"
                            >
                                [ Close ]
                            </button>
                        </div>

                        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
                            {/* Primary Navigation */}
                            <div className="flex-[2] flex flex-col justify-center px-6 md:px-20 border-b lg:border-b-0 lg:border-r border-white/5">
                                <nav className="space-y-4 md:space-y-8">
                                    {navLinks.map((link, i) => (
                                        <motion.div
                                            key={link.name}
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <Link
                                                href={link.path}
                                                onClick={() => setIsOpen(false)}
                                                className="group inline-flex items-baseline gap-4"
                                            >
                                                <span className="text-brand-primary font-mono text-xs md:text-sm">0{i + 1}</span>
                                                <span className="text-4xl md:text-8xl font-display font-black text-white group-hover:text-brand-primary transition-all uppercase tracking-tighter group-hover:italic">
                                                    {link.name}
                                                </span>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>
                            </div>

                            {/* Secondary Section */}
                            <div className="flex-1 bg-white/[0.02] p-6 md:p-12 flex flex-col justify-between">
                                <div>
                                    <p className="text-[12px] font-black text-brand-primary uppercase tracking-[0.4em] mb-8">Expertise</p>
                                    <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                                        {serviceLinks.map((service, i) => (
                                            <Link
                                                key={service.name}
                                                href={service.path}
                                                onClick={() => setIsOpen(false)}
                                                className="text-[11px] md:text-xs font-bold text-white hover:text-brand-primary transition-colors uppercase tracking-widest"
                                            >
                                                {service.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-12 lg:mt-0 pt-8 border-t border-white/5 flex flex-col gap-6">
                                    <div className="space-y-1">
                                        <p className="text-[10px] text-white/30 uppercase font-bold tracking-tighter">Inquiries</p>
                                        <p className="text-sm font-medium text-white">hello@creativepluz.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
