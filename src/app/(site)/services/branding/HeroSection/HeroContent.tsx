import React from 'react';
import { FadeInUp, TextReveal, ExpandWidth } from './Animation.client';

export default function HeroContent() {
    return (
        <div className="relative z-10 max-w-[1800px] mx-auto w-full">
            <FadeInUp className="flex items-center gap-4 mb-8">
                <span className="px-4 py-1.5 rounded-full border border-[#ffd700]/30 bg-[#ffd700]/5 text-[#ffd700] text-xs font-bold uppercase tracking-[0.2em]">
                    Service — 01
                </span>
                <div className="h-px w-24 bg-gradient-to-r from-[#ffd700]/50 to-transparent"></div>
            </FadeInUp>

            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase mb-12">
                <span className="block overflow-hidden">
                    <TextReveal>Identity</TextReveal>
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40 overflow-hidden">
                    <TextReveal delay={0.1}>Is Not Just</TextReveal>
                </span>
                <div className="flex items-center gap-4 overflow-hidden">
                    <TextReveal delay={0.2} className="flex items-center gap-4">
                        <span>A Logo.</span>
                        <ExpandWidth delay={0.8} className="hidden lg:block h-[0.7em] aspect-video bg-[#ffd700] rounded-full mt-2" />
                    </TextReveal>
                </div>
            </h1>

            <div className="flex flex-col lg:flex-row justify-between items-end gap-12 border-t border-white/10 pt-12">
                <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed font-light">
                    We engineer brands that bypass the brain and aim straight for the gut.
                    A strategic blend of visual psychology, market positioning, and immaculate craft.
                </p>
                <div className="flex flex-col gap-4 shrink-0">
                    <div className="flex items-center gap-8">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold">4-6</span>
                            <span className="text-xs text-white/40 uppercase tracking-widest">Weeks Avg.</span>
                        </div>
                        <div className="w-px h-12 bg-white/10"></div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold">100%</span>
                            <span className="text-xs text-white/40 uppercase tracking-widest">Tailored</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
