'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, FileText, Component, Scissors } from 'lucide-react';
import { MaterialItem } from './types';

const materials: MaterialItem[] = [
    { title: "Matte Art", w: "300gsm", icon: Layers },
    { title: "Uncoated", w: "120gsm", icon: FileText },
    { title: "Spot UV", w: "Finish", icon: Component },
    { title: "Foil Block", w: "Accent", icon: Scissors }
];

export default function MaterialGrid() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[1400px] mx-auto">
            {materials.map((item, i) => (
                <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square rounded-[32px] bg-[#111] border border-white/5 flex flex-col items-center justify-center p-6 cursor-default hover:bg-white hover:text-black transition-colors duration-300 group"
                >
                    <item.icon className="w-10 h-10 mb-4 text-[#ffd700] group-hover:text-black" />
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-xs font-mono uppercase tracking-widest opacity-60 mt-2">{item.w}</p>
                </motion.div>
            ))}
        </div>
    );
}
