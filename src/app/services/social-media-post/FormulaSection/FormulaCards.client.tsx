'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Layers, ArrowUpRight } from 'lucide-react';
import { FormulaItem } from './types';

const items: FormulaItem[] = [
    { title: "The Hook", icon: Zap, desc: "The first 3 seconds. Visual or textual disruption that stops the scrolling thumb instantly.", color: "from-yellow-400 to-orange-500" },
    { title: "The Value", icon: Layers, desc: "The retention mechanism. Educational, entertaining, or inspiring content that justifies the time spent.", color: "from-blue-400 to-indigo-500" },
    { title: "The Action", icon: ArrowUpRight, desc: "The conversion trigger. Clear, compelling direction on what the user should do next.", color: "from-green-400 to-emerald-500" },
];

export default function FormulaCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item, i) => (
                <motion.div
                    key={i}
                    whileHover={{ y: -10 }}
                    className="relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent"
                >
                    <div className="bg-[#111] p-10 rounded-[22px] h-full relative overflow-hidden group">
                        {/* Hover Gradient Blob */}
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity`} />

                        <div className="relative z-10">
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-8 shadow-lg`}>
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-white/60 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
