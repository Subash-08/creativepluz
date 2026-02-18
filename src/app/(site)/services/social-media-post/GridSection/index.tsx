import React from 'react';
import SocialGrid from './SocialGrid.client';
import Link from 'next/link';

export default function GridSection() {
    return (
        <section className="py-12 px-6 lg:px-12 bg-[#050505]">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-10 max-w-[1600px] mx-auto w-full flex justify-between items-end">
                    <div>
                        <span className="text-white uppercase tracking-widest text-xs font-bold mb-2 block">The Collection</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ef4444]">Selected Works</h2>
                    </div>
                    <div className="hidden md:flex items-center gap-2 text-white/40 text-sm">
                        <Link
                            href="/portfolio"
                            className="inline-flex items-center gap-2 text-white text-sm font-medium tracking-wide hover:text-[#ffd700] transition-colors duration-300"
                        >
                            Explore more
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Link>
                    </div>
                </div>
                <SocialGrid />
            </div>
        </section>
    );
}
