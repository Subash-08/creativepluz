import React from 'react';
import { Zap, Search, Globe } from 'lucide-react';
import ScoreGrid from './ScoreGrid';

export default function PerformanceSection() {
    return (
        <section className="py-32 px-6 lg:px-12 bg-[#050505]">
            <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">
                        Speed is a <br />
                        <span className="text-[#ffd700]">Feature.</span>
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-10">
                        A one-second delay in mobile load times can impact conversion rates by up to 20%. We engineer sites that load instantly, rank higher, and keep users engaged.
                    </p>

                    <div className="space-y-6">
                        {[
                            { label: "Core Web Vitals Optimized", icon: Zap },
                            { label: "SEO-First Architecture", icon: Search },
                            { label: "Accessibility (WCAG 2.1) Compliant", icon: Globe }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                                <item.icon className="text-[#ffd700]" />
                                <span className="font-bold">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <ScoreGrid />
            </div>
        </section>
    );
}
