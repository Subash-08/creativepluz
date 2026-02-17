'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Printer, Megaphone, Maximize2 } from 'lucide-react';
import { FormatItem } from './types';

const formats: FormatItem[] = [
    {
        title: "Digital Display",
        icon: Monitor,
        specs: "HTML5, GIF, Static",
        desc: "Google Ads, Programmatic, and Affiliate banners designed for high click-through rates."
    },
    {
        title: "Large Format Print",
        icon: Printer,
        specs: "CMYK, Vector, 300DPI",
        desc: "Billboards, Trade Show Booths, and Event Signage that dominate physical spaces."
    },
    {
        title: "Social Covers",
        icon: Megaphone,
        specs: "Multi-platform Adaptive",
        desc: "Cohesive headers for LinkedIn, YouTube, Twitter, and Facebook profiles."
    },
    {
        title: "Website Heros",
        icon: Maximize2,
        specs: "Responsive, Interactive",
        desc: "The prime real estate of your website. We make the first fold count."
    }
];

export default function FormatGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {formats.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group p-10 rounded-[2rem] bg-[#111] border border-white/5 hover:border-[#ffd700]/30 transition-all duration-500 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-32 bg-[#ffd700]/5 rounded-full blur-[80px] group-hover:bg-[#ffd700]/10 transition-colors" />

                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-8">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:text-[#ffd700] group-hover:scale-110 transition-all">
                                <item.icon size={28} />
                            </div>
                            <span className="px-3 py-1 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/40">
                                {item.specs}
                            </span>
                        </div>
                        <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                        <p className="text-white/60 text-lg leading-relaxed">{item.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
