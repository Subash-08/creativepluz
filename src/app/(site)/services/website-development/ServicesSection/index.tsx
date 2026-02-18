import React from 'react';
import ServiceGrid from './ServiceGrid.client';

export default function ServicesSection() {
    return (
        <section className="py-32 px-6 lg:px-12 bg-[#0a0a0a] border-t border-white/5">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-20">
                    <div>
                        <h2 className="text-5xl font-bold mb-8">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ef4444]">Stack.</span></h2>
                        <p className="text-white/60 text-lg">We choose the right tools for the job, favoring modern, scalable technologies over bloated legacy systems.</p>
                    </div>

                    <ServiceGrid />
                </div>
            </div>
        </section>
    );
}
