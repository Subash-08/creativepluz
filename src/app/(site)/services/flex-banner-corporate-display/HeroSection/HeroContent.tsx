import React from 'react';
import HeroAnimations from './HeroAnimations.client';
import { FadeInRight } from '@/app/(site)/services/branding/ui/Animation.client';

export default function HeroContent() {
    return (
        <div className="relative z-10 max-w-[1800px] mx-auto w-full">
            <FadeInRight className="flex items-center gap-4 mb-8">
                <span className="px-4 py-1.5 rounded-full border border-[#ffd700]/30 bg-[#ffd700]/5 text-[#ffd700] text-xs font-bold uppercase tracking-[0.2em]">
                    Service — 04
                </span>
            </FadeInRight>

            <HeroAnimations />

            <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-10">
                <p className="text-xl md:text-2xl text-white/60 max-w-xl leading-relaxed font-light">
                    From 970px web headers to 50ft billboards. We design high-impact visuals that command attention in a crowded digital and physical world.
                </p>
                <div className="flex gap-12 mt-10 md:mt-0">
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-[#ffd700] uppercase tracking-widest mb-1">CTR Avg.</span>
                        <span className="text-4xl font-bold">3.8%</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-[#ffd700] uppercase tracking-widest mb-1">Resolution</span>
                        <span className="text-4xl font-bold">8K+</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
