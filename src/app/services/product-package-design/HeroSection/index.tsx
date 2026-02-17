import React from 'react';
import HeroContent from './HeroContent';
import HeroVisuals from './HeroVisuals.client';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center bg-[#050505] overflow-hidden px-6 lg:px-12 pt-20">
            <div className="max-w-[1800px] mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
                <HeroContent />
                <HeroVisuals />
            </div>
        </section>
    );
}
