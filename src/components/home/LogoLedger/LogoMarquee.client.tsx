'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { LogoMarqueeProps } from './types';

export const LogoMarquee = ({ reverse = false, speed = 60, logos = [] }: LogoMarqueeProps) => {
    // Triple the array to ensure seamless looping
    const marqueeLogos = [...logos, ...logos, ...logos];

    return (
        <div className="flex overflow-hidden py-4 select-none">
            <motion.div
                className="flex gap-6 min-w-full"
                initial={{ x: reverse ? "-100%" : "0%" }}
                animate={{ x: reverse ? "0%" : "-100%" }}
                transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
            >
                {marqueeLogos.map((logo, i) => (
                    <div
                        key={`${logo.name}-${i}`}
                        className="group relative flex-shrink-0 w-72 md:w-96 h-40 md:h-48 bg-white rounded-2xl shadow-sm border border-white/5 flex flex-col items-center justify-center p-8 transition-all hover:shadow-xl hover:-translate-y-1"
                    >
                        {/* Image Container - Using next/image for optimization */}
                        <div className="relative w-full h-full flex items-center justify-center transition-all duration-500">
                            <div className="relative w-full h-full">
                                <Image
                                    src={logo.src}
                                    alt={`Logo of ${logo.name}`}
                                    fill
                                    className="object-contain p-2 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};
