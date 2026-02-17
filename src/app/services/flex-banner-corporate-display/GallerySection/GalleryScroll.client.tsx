'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem } from './types';

const projects: ProjectItem[] = [
    { id: 1, client: "Neon Nights", category: "Event Billboard", img: "/assets/images/service/BANNERS/C_PLUS 970 x 600_001.png" },
    { id: 2, client: "Tech Flow", category: "Web Header", img: "/assets/images/service/BANNERS/C_PLUS 970 x 600_002.png" },
    { id: 3, client: "Apex Gear", category: "Ad Campaign", img: "/assets/images/service/BANNERS/C_PLUS 970 x 600_003.png" },
    { id: 4, client: "Liva Skin", category: "Display Banner", img: "/assets/images/service/BANNERS/C_PLUS 970 x 600_004.png" },
    { id: 5, client: "Velocity", category: "Showroom Signage", img: "/assets/images/service/BANNERS/C_PLUS 970 x 600_005.png" },
];

export default function GalleryScroll() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-[#050505]">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                <div className="max-w-[1800px] mx-auto w-full px-6 lg:px-12 mb-12 flex justify-between items-end">
                    <div>
                        <span className="text-[#ffd700] font-bold uppercase tracking-widest text-xs mb-4 block">Selected Works</span>
                        <h2 className="text-5xl font-bold text-white">The
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ef4444]"> Billboard</span></h2>
                    </div>
                    <div className="flex items-center gap-2 text-white/40 text-sm">
                        <ArrowUpRight size={18} /> Scroll to navigate
                    </div>
                </div>

                <div className="w-full overflow-hidden pl-6 lg:pl-12">
                    <motion.div style={{ x }} className="flex gap-10 w-max">
                        {projects.map((p) => (
                            <div key={p.id} className="relative group">
                                <div className="w-[80vw] md:w-[60vw] lg:w-[45vw] aspect-[16/10] rounded-[2rem] overflow-hidden bg-[#111] border border-white/10 relative">
                                    <img
                                        src={p.img}
                                        alt={p.client}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                </div>

                                <div className="absolute bottom-8 left-8 z-10">
                                    <span className="px-3 py-1 bg-[#ffd700] text-black text-xs font-bold uppercase tracking-widest rounded-md mb-3 inline-block">
                                        {p.category}
                                    </span>
                                    <h3 className="text-4xl font-bold text-white">{p.client}</h3>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
