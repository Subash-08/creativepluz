import React from 'react';

const steps = [
    "Audit", "Concept", "Dieline", "Visuals", "Print Prep", "Proofing"
];

export default function ProcessSection() {
    return (
        <section className="py-20 bg-black overflow-x-hidden">
            <div className="max-w-[1800px] mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between border-y border-white/10 py-10">
                    {steps.map((step, i) => (
                        <div key={i} className="flex items-center gap-4 group">
                            <div className="flex items-center gap-2">
                                <span className="text-[#ffd700] font-mono text-xs">0{i + 1}</span>
                                <span className="text-xl md:text-2xl font-bold text-white/40 group-hover:text-white transition-colors cursor-default uppercase">{step}</span>
                            </div>
                            {i !== steps.length - 1 && (
                                <div className="hidden md:block w-12 h-px bg-white/10" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
