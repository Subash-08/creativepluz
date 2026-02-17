'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Eye } from 'lucide-react';

export default function MetricsTicker() {
    return (
        <div className="bg-[#ffd700] py-4 overflow-hidden border-y border-white/10">
            <motion.div
                className="flex whitespace-nowrap gap-12 text-black font-black uppercase tracking-widest text-sm"
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
                {[...Array(10)].map((_, i) => (
                    <React.Fragment key={i}>
                        <span className="flex items-center gap-2"><TrendingUp size={16} /> High Engagement</span>
                        <span className="w-2 h-2 bg-black rounded-full" />
                        <span className="flex items-center gap-2"><Users size={16} /> Community Growth</span>
                        <span className="w-2 h-2 bg-black rounded-full" />
                        <span className="flex items-center gap-2"><Eye size={16} /> Brand Awareness</span>
                        <span className="w-2 h-2 bg-black rounded-full" />
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    )
}
