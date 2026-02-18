'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ProjectItem } from './types';
import Image from 'next/image';
import Link from 'next/link';

const projects: ProjectItem[] = [
    { id: 1, title: "Lumina Skin", cat: "Cosmetics", img: "/assets/images/service/PACKAGINGDESIGN/C_PLUS 1000 X 1000_01.png" },
    { id: 2, title: "Brew & Co", cat: "Beverage", img: "/assets/images/service/PACKAGINGDESIGN/C_PLUS 1000 X 1000_02.png" },
    { id: 3, title: "Pure Earth", cat: "Sustainable", img: "/assets/images/service/PACKAGINGDESIGN/C_PLUS 1000 X 1000_03.png" },
    { id: 4, title: "Velvet Box", cat: "Luxury", img: "/assets/images/service/PACKAGINGDESIGN/C_PLUS 1000 X 1000_04.png" },
    { id: 5, title: "Aura Scent", cat: "Fragrance", img: "/assets/images/service/PACKAGINGDESIGN/C_PLUS 1000 X 1000_06.png" },
];

export default function GalleryScroll() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);

    return (
        <section ref={ref} className="h-[300vh] bg-black relative">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                <div className="px-6 lg:px-12 mb-10 max-w-[1600px] mx-auto w-full flex justify-between items-end">
                    <div>
                        <span className="text-[#ffd700] uppercase tracking-widest text-xs font-bold mb-2 block">The Collection</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white">Selected Works</h2>
                    </div>
                    <div className="hidden md:flex items-center gap-2 text-white/40 text-sm">
                        <Link
                            href="/portfolio"
                            className="inline-flex items-center gap-2 text-white text-sm font-medium tracking-wide hover:text-[#ffd700] transition-colors duration-300"
                        >
                            Explore more
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Link>
                    </div>
                </div>

                <motion.div style={{ x }} className="flex gap-8 px-6 lg:px-12 w-max">
                    {projects.map((p) => (
                        <div key={p.id} className="group relative w-[300px] md:w-[400px] aspect-[4/5] flex-shrink-0 bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-[#ffd700]/50 transition-colors duration-500">
                            <Image
                                src={p.img}
                                alt={p.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-10">
                                <p className="text-[#ffd700] text-xs font-bold uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity delay-100">{p.cat}</p>
                                <h3 className="text-3xl font-bold text-white">{p.title}</h3>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
