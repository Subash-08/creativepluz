'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const col1 = [
    "/assets/images/service/BROUCHURE/C PLUS 1080 X 1350_02.png",
    "/assets/images/service/BROUCHURE/C PLUS 1080 X 1350_05.png",
    "/assets/images/service/BROUCHURE/C PLUS 1080 X 1350_09.png",
];
const col2 = [
    "/assets/images/service/BROUCHURE/C PLUS 1080 X 1350_04.png",
    "/assets/images/service/BROUCHURE/C PLUS 1080 X 1350_06.png",
    "/assets/images/service/BROUCHURE/C PLUS 1080 X 1350_08.png",
];
const col3 = [
    "/assets/images/service/BROUCHURE/1.png",
    "/assets/images/service/BROUCHURE/C PLUS 1080 X 1350_07.png",
    "/assets/images/service/BROUCHURE/C PLUS 1080 X 1350_03.png",
];

export default function ParallaxGallery() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

    // Parallax speeds
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]); // Faster, middle column
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

    return (
        <section ref={containerRef} className="pt-16 bg-[#0a0a0a] overflow-hidden">
            <div className="max-w-[1800px] mx-auto px-6 lg:px-12 mb-20 flex justify-between ">
                <div>
                    <span className="text-[#ffd700] text-xs font-bold uppercase tracking-widest mb-2 block">The Showcase</span>
                    <h2 className="text-5xl font-bold">Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ef4444]">Works</span></h2>
                </div>
            </div>

            <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 px-6 lg:px-12 h-[150vh] md:h-auto overflow-y-auto md:overflow-visible no-scrollbar">
                {/* Column 1 */}
                <motion.div style={{ y: y1 }} className="flex flex-col gap-6 lg:gap-8">
                    {col1.map((src, i) => (
                        <div key={i} className="group relative w-full aspect-[4/5] overflow-hidden rounded-xl">
                            <Image src={src} className="object-cover transition-transform duration-700 " alt="Print Work" fill sizes="(max-width: 768px) 100vw, 33vw" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                    ))}
                </motion.div>

                {/* Column 2 (Offset / Faster) */}
                <motion.div style={{ y: y2 }} className="flex flex-col gap-6 lg:gap-8 md:-mt-24">
                    {col2.map((src, i) => (
                        <div key={i} className="group relative w-full aspect-[4/5] overflow-hidden rounded-xl">
                            <Image src={src} className="object-cover transition-transform duration-700 " alt="Print Work" fill sizes="(max-width: 768px) 100vw, 33vw" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                    ))}
                </motion.div>

                {/* Column 3 */}
                <motion.div style={{ y: y3 }} className="flex flex-col gap-6 lg:gap-8">
                    {col3.map((src, i) => (
                        <div key={i} className="group relative w-full aspect-[4/5] overflow-hidden rounded-xl">
                            <Image src={src} className="object-cover transition-transform duration-700 " alt="Print Work" fill sizes="(max-width: 768px) 100vw, 33vw" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
