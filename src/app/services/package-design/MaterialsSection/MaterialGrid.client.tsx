'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Droplet, Feather } from 'lucide-react';
import { MaterialItem } from './types';

const materials: MaterialItem[] = [
    { icon: Layers, title: "Embossing", desc: "Raised texture for tactile impact." },
    { icon: Zap, title: "Hot Foil", desc: "Metallic accents for luxury appeal." },
    { icon: Droplet, title: "Spot UV", desc: "Glossy contrast on matte surfaces." },
    { icon: Feather, title: "Soft Touch", desc: "Velvety coating for premium feel." }
];

export default function MaterialGrid() {
    return (
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {materials.map((m, i) => (
                <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-8 bg-[#111] border border-white/5 rounded-2xl flex flex-col items-center text-center group hover:bg-white hover:text-black transition-colors duration-300"
                >
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-black/10 group-hover:text-black transition-colors">
                        <m.icon size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-white group-hover:text-black transition-colors">{m.title}</h3>
                    <p className="text-sm text-white/60 group-hover:text-black/60 leading-relaxed transition-colors">{m.desc}</p>
                </motion.div>
            ))}
        </div>
    );
}
