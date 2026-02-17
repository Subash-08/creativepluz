'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useHeroState } from './HeroStateProvider';
import Image from 'next/image';

export default function HeroBackground() {
    const { services, activeServiceIndex } = useHeroState();
    const activeService = services[activeServiceIndex];

    return (
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeService.image}
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{
                        opacity: 1,
                        scale: 1.06,
                        transition: {
                            opacity: { duration: 0.8 },
                            scale: { duration: 8, ease: "linear" },
                        },
                    }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image
                        src={activeService.image}
                        alt=""
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
            </AnimatePresence>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40 hidden lg:block" />
        </div>
    );
}
