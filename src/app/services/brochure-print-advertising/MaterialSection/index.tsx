import React from 'react';
import MaterialGrid from './MaterialGrid.client';

export default function MaterialSection() {
    return (
        <section className="py-16 px-6 lg:px-12 bg-black border-t border-white/5">
            <div className="max-w-[1600px] mx-auto text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Materiality <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ef4444]">Matters</span></h2>
                <p className="text-white/60 text-lg max-w-2xl mx-auto">
                    A digital file is infinite, but print is finite and precious.
                    We obsess over paper weight, texture, and finish.
                </p>
            </div>

            <MaterialGrid />
        </section>
    );
}
