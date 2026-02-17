'use client';

import { THEME } from '@/config/theme';
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, Smile, Coffee } from 'lucide-react';

export default function StatsGrid() {
    const stats = [
        { label: "Market Leaders", val: "50+", icon: <Award className="w-8 h-8 mb-6 mx-auto" style={{ color: `${THEME.colors.primary}66` /* 40% opacity */ }} /> },
        { label: "Design Iterations", val: "∞", icon: <Coffee className="w-8 h-8 mb-6 mx-auto" style={{ color: `${THEME.colors.primary}66` }} /> },
        { label: "Average Growth", val: "4.5x", icon: <Zap className="w-8 h-8 mb-6 mx-auto" style={{ color: `${THEME.colors.primary}66` }} /> },
        { label: "Global Reach", val: "12", icon: <Smile className="w-8 h-8 mb-6 mx-auto" style={{ color: `${THEME.colors.primary}66` }} /> }
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
            {stats.map((stat, idx) => (
                <motion.div key={idx} whileHover={{ y: -10 }} className="group">
                    {stat.icon}
                    <div
                        className="text-5xl md:text-7xl font-display font-black mb-3 transition-colors italic group-hover:text-[var(--hover-color)]"
                        style={{ color: THEME.colors.foreground, '--hover-color': THEME.colors.primary } as React.CSSProperties}
                    >
                        {stat.val}
                    </div>
                    <div className="text-slate-500 font-black uppercase tracking-[0.3em] text-[9px]">{stat.label}</div>
                </motion.div>
            ))}
        </div>
    );
}
