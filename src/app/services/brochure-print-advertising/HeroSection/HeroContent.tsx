import React from 'react';
import HeroAnimations from './HeroAnimations.client';
import Image from 'next/image';

export default function HeroContent() {
    return (
        <>
            <div className="max-w-[1800px] mx-auto w-full relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-end">

                    {/* Title Area */}
                    <div className="lg:col-span-8">
                        <HeroAnimations />

                        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase mb-8">
                            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40">Tangible</span>
                            <span className="block pl-12 md:pl-32 text-[#ffd700]">Impact.</span>
                        </h1>
                    </div>

                    {/* Intro Text */}
                    <div className="lg:col-span-4 pb-4">
                        <p className="text-xl text-white/70 leading-relaxed font-light border-l border-[#ffd700] pl-6">
                            In a digital world, physical media signals authority. We design editorial-grade brochures, catalogs, and print ads that people actually want to keep.
                        </p>
                        <div className="mt-8 flex gap-4">
                            <div className="px-4 py-2 border border-white/10 rounded-full text-xs uppercase tracking-widest text-white/50">CMYK Ready</div>
                            <div className="px-4 py-2 border border-white/10 rounded-full text-xs uppercase tracking-widest text-white/50">300 DPI</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Visual showing a spread */}
            <div className="max-w-[1800px] mx-auto w-full mt-24 relative h-[400px] md:h-[600px] overflow-hidden rounded-t-[40px] border-t border-x border-white/10 group">
                <div className="relative w-full h-full">
                    <Image
                        src="/assets/images/service/BROUCHURE/brochure-service.jpg"
                        alt="Magazine Spread"
                        fill
                        className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2s] ease-out"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
            </div>
        </>
    );
}
