'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const TestimonialsHeader = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center mx-auto mb-20 text-center"
        >
            <div className="flex justify-center mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full border border-[#ffd700]/20 bg-[#ffd700]/5 text-[#ffd700] text-xs font-bold uppercase tracking-widest">
                    Client Stories
                </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black tracking-tighter text-white mb-6">
                Trusted by the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ef4444]">innovators.</span>
            </h2>
            <p className="text-white/50 text-lg max-w-md mx-auto">
                See what our partners have to say about collaborating with Creative pluz.
            </p>
        </motion.div>
    );
};
