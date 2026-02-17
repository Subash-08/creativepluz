import React from 'react';
import HeroContent from './HeroContent';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col justify-end pb-24 px-6 lg:px-12 bg-[#050505] overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
                <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[#ffd700]/5 rounded-full blur-[150px] pointer-events-none" />
            </div>

            <HeroContent />
        </section>
    );
}
