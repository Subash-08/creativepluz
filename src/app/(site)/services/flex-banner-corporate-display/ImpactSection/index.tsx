import React from 'react';
import { MousePointer2, Eye, Target } from 'lucide-react';
import StatCard from './StatCard.client';

export default function ImpactSection() {
    return (
        <section className="py-16 px-6 lg:px-12 bg-black border-t border-white/5">
            <div className="max-w-[1600px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-20 items-center mb-20">
                    <div className="lg:w-1/2">
                        <h2 className="text-5xl lg:text-7xl font-bold mb-6">Designed for <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ef4444]">Conversion.</span></h2>
                    </div>
                    <div className="lg:w-1/2">
                        <p className="text-white/60 text-xl leading-relaxed">
                            Pretty pictures don't pay the bills. We combine psychological triggers, clear hierarchy, and compelling motion to drive action.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    <StatCard icon={<MousePointer2 size={40} />} value="3.5x" label="Higher CTR" />
                    <StatCard icon={<Eye size={40} />} value="+200%" label="Brand Recall" />
                    <StatCard icon={<Target size={40} />} value="40%" label="Lower CPA" />
                </div>
            </div>
        </section>
    );
}
