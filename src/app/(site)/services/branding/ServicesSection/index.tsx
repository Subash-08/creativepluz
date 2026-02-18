import React from 'react';
import { Diamond, PenTool, Palette, Type, LayoutTemplate, Layers } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { ServiceItem } from './types';

const items: ServiceItem[] = [
    { icon: Diamond, title: "Brand Strategy", desc: "Positioning, Archetypes, Voice & Tone." },
    { icon: PenTool, title: "Logo Design", desc: "Primary, Secondary, Logomarks & lockups." },
    { icon: Palette, title: "Color System", desc: "Primary, Secondary, Usage ratios & accessibility." },
    { icon: Type, title: "Typography", desc: "Type hierarchy, Pairing & Licensing." },
    { icon: LayoutTemplate, title: "Brand Guidelines", desc: "The rulebook for your brand's consistency." },
    { icon: Layers, title: "Collateral", desc: "Business cards, letterheads, social templates." },
];

export default function ServicesSection() {
    return (
        <section className="py-32 px-6 lg:px-12 bg-black relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="max-w-[1600px] mx-auto relative z-10">
                <div className="mb-20 text-center lg:text-left">
                    <span className="text-[#ffd700] font-bold uppercase tracking-widest text-xs mb-4 block">The Deliverables</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white">The Brand System</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, i) => (
                        <ServiceCard
                            key={i}
                            icon={item.icon}
                            title={item.title}
                            desc={item.desc}
                            delay={i * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
