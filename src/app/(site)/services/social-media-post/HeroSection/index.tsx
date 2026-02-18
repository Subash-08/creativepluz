import React from 'react';
import HeroContent from './HeroContent';
import HeroVisuals from './HeroVisuals.client';

export default function HeroSection() {
    return (
        <section className="relative min-h-[100vh] bg-[#050505] overflow-hidden flex flex-col justify-center pt-12 pb-20">
            {/* Background Gradient Spotlights */}
            <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-purple-900/20 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#ffd700]/5 rounded-full blur-[150px] pointer-events-none" />

            {/* Grid Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none" />

            <div className="max-w-[1920px] mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-20 items-center relative z-10">
                <HeroContent />
                <HeroVisuals />
            </div>
        </section>
    );
}
