'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HeroAnimations() {
    return (
        <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-black leading-[0.8] tracking-tighter uppercase mb-12 mix-blend-difference text-white">
            <motion.div
                initial={{ x: "-10%" }} animate={{ x: 0 }}
                transition={{ duration: 1, ease: "circOut" }}
            >
                Make It
            </motion.div>
            <motion.div
                initial={{ x: "10%" }} animate={{ x: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: "circOut" }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-white"
            >
                Impossible
            </motion.div>
            <motion.div
                initial={{ x: "-10%" }} animate={{ x: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
            >
                To Ignore.
            </motion.div>
        </h1>
    );
}
