import React from 'react';
import HeroContent from './HeroContent';
import HeroVisual from './HeroVisual.client';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen bg-[#050505] overflow-hidden flex items-center pt-24 px-6 lg:px-12">
            {/* Background Matrix/Grid */}
            <div className="absolute inset-0 z-0 opacity-20"
                style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-[1800px] mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <HeroContent />
                <HeroVisual />
            </div>
        </section>
    );
}
