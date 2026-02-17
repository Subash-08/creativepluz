'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HeroAnimations() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-12"
        >
            <span className="w-3 h-3 bg-[#ffd700] rounded-full animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/60">
                Service — 05
            </span>
        </motion.div>
    );
}
