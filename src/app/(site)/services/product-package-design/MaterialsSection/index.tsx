import React from 'react';
import MaterialGrid from './MaterialGrid.client';

export default function MaterialsSection() {
    return (
        <section className="py-32 px-6 lg:px-12 bg-[#050505] border-t border-white/5">
            <div className="max-w-[1600px] mx-auto text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Finishing Touches</h2>
                <p className="text-white/60 text-lg max-w-2xl mx-auto">
                    The difference between good and premium often lies in the finish.
                    We guide you through the tactile selection process.
                </p>
            </div>

            <MaterialGrid />
        </section>
    );
}
