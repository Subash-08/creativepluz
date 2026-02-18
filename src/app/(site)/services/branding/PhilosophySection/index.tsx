import React from 'react';
import PhilosophyImage from './PhilosophyImage';
import PhilosophyContent from './PhilosophyContent';

export default function PhilosophySection() {
    return (
        <section className="py-32 px-6 lg:px-12 bg-[#050505] border-t border-white/5">
            <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
                <PhilosophyImage />
                <PhilosophyContent />
            </div>
        </section>
    )
}
