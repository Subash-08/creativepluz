'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ServiceItem } from './types';
import Image from 'next/image';

const services: ServiceItem[] = [
    {
        id: "01",
        title: "Editorial & Lookbooks",
        desc: "Multi-page visual storytelling for fashion and luxury brands.",
        img: "/assets/images/service/BROUCHURE/1.png"
    },
    {
        id: "02",
        title: "Corporate Brochures",
        desc: "Structured layouts that communicate value and capability.",
        img: "/assets/images/service/BROUCHURE/Creative 2540 x 3368_19.png"
    },
    {
        id: "03",
        title: "Event Flyers & Posters",
        desc: "High-impact visuals designed to grab attention from a distance.",
        img: "/assets/images/service/BROUCHURE/C PLUS 1080 X 1350_05.png"
    },
    {
        id: "04",
        title: "Business Stationery",
        desc: "Cards, letterheads, and envelopes that leave a lasting mark.",
        img: "/assets/images/service/BROUCHURE/C PLUS 1080 X 1350_09.png"
    }
];

export default function ServiceCatalog() {
    const [hoveredService, setHoveredService] = useState(0);

    return (
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-20">

            {/* Left: Interactive List */}
            <div className="flex flex-col justify-center">
                <div className="mb-12">
                    <h2 className="text-5xl font-bold mb-4">Print <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ef4444]"> Formats</span></h2>
                    <p className="text-white/50">Hover to preview the finish.</p>
                </div>

                <div className="flex flex-col">
                    {services.map((s, i) => (
                        <div
                            key={s.id}
                            onMouseEnter={() => setHoveredService(i)}
                            className="group py-8 border-b border-white/10 cursor-pointer flex items-baseline gap-6 relative"
                        >
                            <span className="text-[#ffd700] font-mono text-sm opacity-50 group-hover:opacity-100 transition-opacity">/{s.id}</span>
                            <div className="flex-1">
                                <h3 className="text-3xl md:text-4xl font-bold text-white/40 group-hover:text-white transition-colors duration-300 mb-2">
                                    {s.title}
                                </h3>
                                <p className={`text-sm text-white/60 max-w-md overflow-hidden transition-all duration-300 ${hoveredService === i ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                    {s.desc}
                                </p>
                            </div>
                            <ArrowUpRight className={`text-[#ffd700] transition-transform duration-300 ${hoveredService === i ? 'rotate-45 scale-110' : 'scale-0'}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Right: Floating Preview */}
            <div className="hidden lg:flex items-center justify-center relative h-[600px]">
                <div className="absolute inset-0 bg-white/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative w-[400px] aspect-[4/5] perspective-1000">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={hoveredService}
                            initial={{ opacity: 0, rotateY: 15, x: 20 }}
                            animate={{ opacity: 1, rotateY: 0, x: 0 }}
                            exit={{ opacity: 0, rotateY: -15, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 rounded-2xl overflow-hidden border-8 border-white p-2 bg-white shadow-2xl"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <Image
                                src={services[hoveredService].img}
                                alt="Preview"
                                fill
                                className="object-cover rounded-lg"
                                sizes="(max-width: 768px) 100vw, 400px"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

        </div>
    );
}
