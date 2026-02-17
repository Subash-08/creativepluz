import React from 'react';
import { HeroTitles } from './HeroVisual.client';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function HeroContent() {
    return (
        <div>
            <HeroTitles />

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-white mb-8">
                Digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ef4444]">Real Estate.</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-lg leading-relaxed mb-10">
                Your website is your 24/7 headquarters. We build pixel-perfect, lightning-fast digital experiences that convert traffic into revenue.
            </p>

            <div className="flex flex-wrap gap-4">
                <button className="px-6 py-4 bg-white text-black font-bold rounded-lg hover:bg-[#ffd700] transition-colors flex items-center gap-2">
                    <Link href="/portfolio" className='flex items-center gap-2'>View Projects <ArrowUpRight size={18} /></Link>
                </button>
            </div>
        </div>
    );
}
