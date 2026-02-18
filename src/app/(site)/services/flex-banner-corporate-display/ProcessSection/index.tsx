import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ProcessSection() {
    const steps = [
        { num: "01", title: "Objective & Placement", desc: "We start by understanding where the ad will live. A billboard on a highway needs different rules than a sidebar ad on a news site." },
        { num: "02", title: "The 3-Second Rule", desc: "We design for speed. The message must be understood instantly. Bold typography, high contrast, singular focus." },
        { num: "03", title: "Motion & Animation", desc: "For digital formats, we add subtle, non-intrusive motion that catches the eye without annoying the user." },
        { num: "04", title: "Production & Handoff", desc: "We deliver pixel-perfect assets in every required size and format, optimized for fast loading speeds." },
    ];

    return (
        <section className="py-16 px-6 lg:px-12 bg-[#0a0a0a]">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-bold">The
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ef4444]"> Approach</span></h2>
                </div>

                <div className="space-y-4">
                    {steps.map((step, i) => (
                        <div key={i} className="group border-b border-white/10 pb-8 pt-4 hover:bg-white/5 transition-colors rounded-xl px-4">
                            <div className="flex flex-col md:flex-row md:items-start gap-6">
                                <span className="text-[#ffd700] font-mono text-xl">/{step.num}</span>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#ffd700] transition-colors">{step.title}</h3>
                                    <p className="text-white/50 max-w-2xl leading-relaxed">{step.desc}</p>
                                </div>
                                <div className="hidden md:block">
                                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#ffd700] group-hover:border-[#ffd700] group-hover:text-black transition-all">
                                        <ArrowUpRight size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
