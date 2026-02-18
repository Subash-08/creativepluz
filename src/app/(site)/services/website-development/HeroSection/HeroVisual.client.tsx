'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import Image from 'next/image';

export default function HeroVisual() {
    return (
        <div className="relative h-[500px] lg:h-[700px] perspective-1000">
            <motion.div
                initial={{ rotateX: 20, rotateY: -20, opacity: 0, scale: 0.8 }}
                animate={{ rotateX: 10, rotateY: -10, opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full bg-[#111] border border-white/10 rounded-xl shadow-2xl overflow-hidden transform-style-3d group hover:rotate-0 transition-transform duration-700"
            >
                {/* Browser Bar */}
                <div className="h-10 bg-[#1a1a1a] border-b border-white/5 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    <div className="ml-4 flex-1 h-6 bg-black/50 rounded flex items-center px-3 text-[10px] text-white/30 font-mono">
                        https://creativepluz.com
                    </div>
                </div>
                {/* Content */}
                <div className="relative w-full h-full bg-black">
                    <Image
                        src="/assets/images/service/web-development/web-development.jpg"
                        alt="Web Interface"
                        fill
                        className="object-cover opacity-80"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Floating Elements */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute top-20 right-10 bg-black/80 backdrop-blur-md p-4 rounded-lg border border-white/10 shadow-xl"
                    >
                        <div className="flex items-center gap-3">
                            <div className="text-green-400 font-bold text-xl">99</div>
                            <div className="text-xs text-white/60 uppercase tracking-widest">Performance</div>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-32 left-10 bg-black/80 backdrop-blur-md p-4 rounded-lg border border-white/10 shadow-xl"
                    >
                        <div className="flex items-center gap-3">
                            <Zap size={20} className="text-[#ffd700]" />
                            <div className="text-xs text-white/60 uppercase tracking-widest">Instant Load</div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export function HeroTitles() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
        >
            <div className="px-3 py-1 rounded bg-[#ffd700]/10 border border-[#ffd700]/30 text-[#ffd700] text-xs font-mono">
                &lt;Service type=&quot;Web&quot; /&gt;
            </div>
        </motion.div>
    )
}
