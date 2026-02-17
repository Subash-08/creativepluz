'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layers, Cpu } from 'lucide-react';
import { ServiceItem } from './types';

const services: ServiceItem[] = [
    { title: "Frontend Engineering", desc: "React, Vue, and WebGL implementations that feel like native apps.", icon: Code },
    { title: "Headless CMS", desc: "Sanity, Contentful, or Strapi integrations for ultimate flexibility.", icon: Database },
    { title: "E-Commerce", desc: "Shopify Plus and custom cart experiences designed for conversion.", icon: Layers },
    { title: "Creative Coding", desc: "Interactive canvas elements, Three.js 3D models, and shaders.", icon: Cpu },
];

export default function ServiceGrid() {
    return (
        <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
                <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-8 rounded-2xl bg-[#111] border border-white/5 hover:border-[#ffd700]/30 transition-all"
                >
                    <s.icon className="text-[#ffd700] mb-6" size={32} />
                    <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
            ))}
        </div>
    );
}
