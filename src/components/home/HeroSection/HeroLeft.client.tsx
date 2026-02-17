'use client';

import React from 'react';
import { motion, Variants, TargetAndTransition } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { THEME } from '@/config/theme';

export default function HeroLeft() {
    const headlineContainer: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.3,
            },
        },
    };

    const wordVariant: Variants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const floatAnimation: TargetAndTransition = {
        y: [0, -6, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
        },
    };

    return (
        <div className="flex flex-col justify-end lg:pb-0 pt-20">
            {/* BADGE */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-white px-3 py-1 rounded-full mb-8 self-start shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
                <span className="text-xs font-bold tracking-wider uppercase text-black text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ff6b4a]">
                    Visual Impact Meets Strategic Craft
                </span>
            </motion.div>

            {/* HEADLINE */}
            <motion.div
                variants={headlineContainer}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white mb-6"
                >
                    {["We", "Create", "Brands", "&"].map((word, i) => (
                        <motion.span key={i} variants={wordVariant} className="inline-block mr-4">
                            {word}
                        </motion.span>
                    ))}
                    <br className="hidden md:block" />

                    <motion.span variants={wordVariant} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ff6b4a]">
                        Digital Stories
                    </motion.span>
                </motion.h1>
            </motion.div>

            {/* SUBTEXT */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className=" text-xl text-white/80 max-w-lg leading-relaxed"
            >
                Branding, websites, and photography — crafted to connect, inspire, and grow your business.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4 mt-10"
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-white text-black px-8 py-4 rounded-full flex items-center gap-3 font-bold text-sm uppercase tracking-wider transition-all hover:bg-gray-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                >
                    Let's Collaborate
                    <ArrowUpRight size={18} />
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-[#ffd700] text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(74,222,128,0.4)] transition-all"
                >
                    Our Services
                </motion.button>
            </motion.div>
        </div>
    );
}
