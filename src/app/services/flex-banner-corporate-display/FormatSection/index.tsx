import React from 'react';
import FormatGrid from './FormatGrid.client';

export default function FormatSection() {
    return (
        <section className="py-32 px-6 lg:px-12 bg-black z-20 relative">
            <div className="max-w-[1600px] mx-auto">
                <div className="mb-20">
                    <h2 className="text-4xl font-bold mb-6">The Formats</h2>
                    <p className="text-white/50 max-w-2xl">We don't just resize. We adapt the creative concept to fit the medium perfectly.</p>
                </div>

                <FormatGrid />
            </div>
        </section>
    );
}
