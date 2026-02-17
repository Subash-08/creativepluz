import React from 'react';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-32 pb-20 overflow-hidden bg-black text-white">
            <HeroImage />
            <HeroContent />
        </section>
    );
}
