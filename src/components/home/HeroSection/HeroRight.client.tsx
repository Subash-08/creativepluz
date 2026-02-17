'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useHeroState } from './HeroStateProvider';
import { THEME } from '@/config/theme';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function HeroRight() {
    const { services, activeServiceIndex, handleServiceHover, handleServiceLeave } = useHeroState();
    const activeService = services[activeServiceIndex];

    return (
        <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="hidden lg:flex flex-col items-end gap-6 w-full max-w-[500px] ml-auto"
        >
            {/* 1. GLASS DETAILS CARD (Top Right) */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeService.id}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="w-full bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative overflow-hidden group"
                >
                    <div className="flex gap-6 items-start">
                        {/* Left Content */}
                        <div className="flex-1 flex flex-col justify-between h-full gap-4">
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[#ffd700] mb-2 block">
                                    Service Highlight
                                </span>
                                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                                    {activeService.title}
                                </h3>
                                <p className="text-white/70 text-xs leading-relaxed line-clamp-3">
                                    {activeService.description}
                                </p>
                            </div>

                            <div className="flex items-center gap-2 text-white/50 text-[10px] uppercase font-bold tracking-wider group-hover:text-[#ffd700] transition-colors">
                                Learn More <ArrowUpRight className="w-3 h-3" />
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="w-[140px] h-[100px] relative rounded-xl overflow-hidden shadow-lg shrink-0 border border-white/10">
                            <Image
                                src={activeService.image}
                                alt={activeService.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="200px"
                            />
                        </div>
                    </div>

                    {/* Subtle Gradient Glow */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#ffd700]/20 rounded-full blur-[60px] pointer-events-none" />
                </motion.div>
            </AnimatePresence>

            {/* 2. SERVICE LIST (Bottom Right) */}
            <div className="flex flex-col items-end gap-1 w-full pl-8">
                {services.map((service, index) => {
                    const isActive = index === activeServiceIndex;
                    return (
                        <motion.div
                            key={service.id}
                            onMouseEnter={() => handleServiceHover(index)}
                            className="group cursor-pointer py-1 relative w-full text-right"
                        >
                            <h3
                                className={`text-[15px] transition-all duration-300 ${isActive
                                    ? "text-white font-bold translate-x-0"
                                    : "text-white/40 hover:text-white/80"}`}
                            >
                                {service.title}
                            </h3>

                            {/* Active Indicator Dot */}
                            {isActive && (
                                <motion.div
                                    layoutId="activeDot"
                                    className="absolute right-[-16px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#ffd700]"
                                />
                            )}
                        </motion.div>
                    );
                })}
            </div>

        </motion.div>
    );
}
