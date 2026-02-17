'use client';

import React from 'react';
import { Code } from 'lucide-react';

const technologies = [
    "React.js", "Next.js", "TypeScript", "Tailwind CSS", "WebGL", "Three.js", "GSAP", "Framer Motion", "Node.js", "Sanity CMS", "Shopify Plus"
];

export default function Marquee() {
    return (
        <div className="flex gap-16 animate-marquee whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity">
            {technologies.map((tech, i) => (
                <span key={i} className="text-2xl font-mono font-bold text-white/80 flex items-center gap-4">
                    <Code size={20} className="text-[#ffd700]" /> {tech}
                </span>
            ))}
            {technologies.map((tech, i) => (
                <span key={`dup-${i}`} className="text-2xl font-mono font-bold text-white/80 flex items-center gap-4">
                    <Code size={20} className="text-[#ffd700]" /> {tech}
                </span>
            ))}
            <style jsx>{`
                .animate-marquee { animation: marquee 30s linear infinite; }
                @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
            `}</style>
        </div>
    );
}
