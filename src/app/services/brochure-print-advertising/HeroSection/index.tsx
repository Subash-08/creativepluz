import React from 'react';
import HeroContent from './HeroContent';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 lg:px-12 flex flex-col justify-center">
            {/* Grid Lines Background */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="h-full w-full border-r border-white/5 absolute left-1/4 top-0" />
                <div className="h-full w-full border-r border-white/5 absolute left-2/4 top-0" />
                <div className="h-full w-full border-r border-white/5 absolute left-3/4 top-0" />
            </div>

            <HeroContent />
        </section>
    );
}
