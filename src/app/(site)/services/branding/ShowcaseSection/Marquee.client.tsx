'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Marquee({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex overflow-hidden group">
            <motion.div
                className="flex gap-8 w-max"
                animate={{ x: "-50%" }}
                transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            >
                <div className="flex gap-8 shrink-0 items-center">
                    {children}
                </div>
                <div className="flex gap-8 shrink-0 items-center">
                    {children}
                </div>
            </motion.div>
        </div>
    );
}
