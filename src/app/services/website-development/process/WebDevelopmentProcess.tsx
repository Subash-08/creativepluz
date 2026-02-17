'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const PROCESS = [
    {
        step: '01',
        title: 'Strategy & Planning',
        desc: 'Every successful build starts with a blueprint. We analyze your requirements, define technical specs, and map out a user journey that converts.',
        image: '/assets/images/service/web-development/process-1.png',
        align: 'left'
    },
    {
        step: '02',
        title: 'Design & Build',
        desc: 'Where form meets function. Our team crafts high-fidelity UI designs and develops them into pixel-perfect, responsive web experiences using modern frameworks.',
        image: '/assets/images/service/web-development/process-2.png',
        align: 'right'
    },
    {
        step: '03',
        title: 'Testing & Launch',
        desc: 'Perfection is in the details. We rigorously test for performance, security, and cross-device compatibility before seamless deployment.',
        image: '/assets/images/service/web-development/process-3.png',
        align: 'left'
    },
];

export default function WebDevelopmentProcess() {
    return (
        <section className="py-16 bg-[#050505] overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="text-[#ffd700] text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
                        Our Methodology
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter">
                        From Concept to
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ef4444]"> Code.</span>
                    </h2>
                </div>

                {/* Process Steps */}
                <div className="flex flex-col gap-32 relative">
                    {/* Connecting Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2 hidden lg:block" />

                    {PROCESS.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Center Node (Desktop) */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#ffd700] rounded-full shadow-[0_0_20px_rgba(255,215,0,0.5)] z-10 hidden lg:block border-[4px] border-black" />

                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#111]">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent z-10" />
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                {/* Decorative number behind */}
                                <div className={`absolute -top-12 ${index % 2 === 1 ? '-right-12' : '-left-12'} text-[120px] font-black text-white/5 select-none pointer-events-none font-display transform translate-y-4`}>
                                    {item.step}
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2 text-center lg:text-left">
                                <div className={`flex flex-col ${index % 2 === 1 ? 'lg:items-end lg:text-right' : 'lg:items-start'}`}>
                                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#ffd700] font-bold mb-6 bg-white/5 lg:hidden mx-auto">
                                        {item.step}
                                    </div>

                                    <h3 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                                        {item.title}
                                    </h3>

                                    <p className="text-white/60 text-lg leading-relaxed max-w-md">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
