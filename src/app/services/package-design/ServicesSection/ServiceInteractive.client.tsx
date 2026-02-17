'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ServiceItem } from './types';
import Image from 'next/image';

const services: ServiceItem[] = [
    {
        id: 1,
        title: "Structural Design",
        desc: "Custom dielines and form factors that protect and present.",
        img: "/assets/images/service/PACKAGINGDESIGN/C_PLUS 1000 X 1000_01.png"
    },
    {
        id: 2,
        title: "Label & Graphics",
        desc: "High-fidelity typography and illustration for shelf pop.",
        img: "/assets/images/service/PACKAGINGDESIGN/C_PLUS 1000 X 1000_02.png"
    },
    {
        id: 3,
        title: "Unboxing Experience",
        desc: "Designing the journey from shipping box to product reveal.",
        img: "/assets/images/service/PACKAGINGDESIGN/C_PLUS 1000 X 1000_03.png"
    },
    {
        id: 4,
        title: "Sustainable Materials",
        desc: "Eco-friendly substrates: mushroom, bamboo, and recycled stocks.",
        img: "/assets/images/service/PACKAGINGDESIGN/C_PLUS 1000 X 1000_04.png"
    },
    {
        id: 5,
        title: "3D Visualization",
        desc: "Photorealistic renders to test designs before production.",
        img: "/assets/images/service/PACKAGINGDESIGN/C_PLUS 1000 X 1000_05.png"
    }
];

export default function ServiceInteractive() {
    const [activeImg, setActiveImg] = useState(services[0].img);

    return (
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
            {/* Left: Menu */}
            <div>
                <div className="mb-16 space-y-5">

                    {/* Label / eyebrow */}
                    <span className="text-xs uppercase tracking-[0.3em] text-white/40 font-semibold">
                        Services
                    </span>

                    {/* Main heading */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">

                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ef4444]">
                            Our Craft
                        </span>

                        <span className="block text-white mt-1">
                            Packaging that performs
                        </span>

                    </h2>

                    {/* Description */}
                    <p className="text-base md:text-lg text-white/60 max-w-lg leading-relaxed font-medium">
                        We design structural and visual packaging systems that elevate your product,
                        enhance brand perception.
                    </p>

                </div>

                <div className="flex flex-col">
                    {services.map((s) => (
                        <div
                            key={s.id}
                            onMouseEnter={() => setActiveImg(s.img)}
                            className="group border-t border-white/10 py-8 cursor-pointer transition-colors hover:bg-white/[0.02]"
                        >
                            <div className="flex items-baseline justify-between mb-2">
                                <h3 className="text-2xl md:text-3xl font-bold text-white/50 group-hover:text-white transition-colors">
                                    {s.title}
                                </h3>
                                <ArrowUpRight className="opacity-0 group-hover:opacity-100 text-[#ffd700] transition-opacity -translate-x-4 group-hover:translate-x-0 transform duration-300" />
                            </div>
                            <p className="text-sm text-white/40 group-hover:text-white/70 max-w-md transition-colors">
                                {s.desc}
                            </p>
                        </div>
                    ))}
                    <div className="border-t border-white/10" />
                </div>
            </div>

            {/* Right: Sticky Image Reveal */}
            <div className="hidden lg:block h-[600px] sticky top-32">
                <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-[#111]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeImg}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <Image
                                src={activeImg}
                                alt="Service visuals"
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 50vw, 100vw"
                            />
                        </motion.div>
                    </AnimatePresence>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                </div>
            </div>
        </div>
    );
}
