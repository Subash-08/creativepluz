import React from 'react';
import FormulaCards from './FormulaCards.client';

export default function FormulaSection() {
    return (
        <section className="py-32 px-6 lg:px-12 bg-black relative">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">The Viral Formula</h2>
                    <p className="text-white/50 max-w-2xl mx-auto">It's not luck. It's a science. Every piece of content we create is engineered with three layers.</p>
                </div>
                <FormulaCards />
            </div>
        </section>
    );
}
