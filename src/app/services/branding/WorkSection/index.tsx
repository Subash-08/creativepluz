import React from 'react';
import { Hexagon, Circle, Triangle, Diamond, Square, Layers, Zap, Box } from 'lucide-react';
import LogoGrid from './LogoGrid';
import { LogoItem } from './types';

import Link from 'next/link';

const logos: LogoItem[] = [
    { name: "Krona", industry: "Architecture", icon: Hexagon, image: '/assets/images/service/OurLogoDesigns/LOGO_1.png' },
    { name: "Velto", industry: "Automotive", icon: Circle, image: '/assets/images/service/OurLogoDesigns/LOGO_2.png' },
    { name: "Nexis", industry: "Technology", icon: Triangle, image: '/assets/images/service/OurLogoDesigns/LOGO_3.png' },
    { name: "Liva", industry: "Beauty", icon: Diamond, image: '/assets/images/service/OurLogoDesigns/LOGO_4.png' },
    { name: "Apex", industry: "Finance", icon: Square, image: '/assets/images/service/OurLogoDesigns/LOGO_5.png' },
    { name: "Echo", industry: "Media", icon: Layers, image: '/assets/images/service/OurLogoDesigns/LOGO_6.png' },
    { name: "Flux", industry: "Energy", icon: Zap, image: '/assets/images/service/OurLogoDesigns/LOGO_7.png' },
    { name: "Core", industry: "Wellness", icon: Box, image: '/assets/images/service/OurLogoDesigns/LOGO_8.png' },
];

export default function WorkSection() {
    return (
        <section className="py-32 px-6 lg:px-12 bg-black border-t border-white/5">
            <div className="max-w-[1600px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <span className="text-[#ffd700] font-bold uppercase tracking-widest text-xs mb-4 block">Selected Works</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white">The Logofolio</h2>
                    </div>
                    <p className="text-white/50 max-w-md text-sm md:text-base leading-relaxed">
                        A collection of distinct marks designed to stand the test of time and cut through the noise.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-white/10">
                    {logos.map((logo, i) => (
                        <LogoGrid
                            key={i}
                            name={logo.name}
                            industry={logo.industry}
                            icon={logo.icon}
                            image={logo.image}
                            delay={i * 0.05}
                        />
                    ))}
                </div>

                <div className="flex justify-center mt-16">
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-[#ffd700] transition-colors duration-300"
                    >
                        View All Works
                    </Link>
                </div>
            </div>
        </section>
    )
}
