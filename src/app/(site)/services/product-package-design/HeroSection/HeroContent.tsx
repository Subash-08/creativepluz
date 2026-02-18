import React from 'react';
import { Box } from 'lucide-react';
import { FadeInRight } from './HeroAnimation.client';

export default function HeroContent() {
    return (
        <div className="relative z-10 pt-20 lg:pt-0">
            <FadeInRight className="flex items-center gap-4 mb-6">
                <span className="text-[#ffd700] text-xs font-bold uppercase tracking-[0.3em] border-b border-[#ffd700]/30 pb-1">
                    Service — 02
                </span>
            </FadeInRight>

            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-white mb-8 uppercase">
                <span className="block">Shelf</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-white">Stopper.</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-md leading-relaxed mb-10 border-l border-white/20 pl-6">
                Packaging is the silent salesman. We craft tactile, structural, and visual experiences that trigger the impulse to touch, hold, and buy.
            </p>

            <button className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#ffd700] transition-colors">
                Start Design
                <Box size={18} className="group-hover:-translate-y-1 transition-transform" />
            </button>
        </div>
    );
}
