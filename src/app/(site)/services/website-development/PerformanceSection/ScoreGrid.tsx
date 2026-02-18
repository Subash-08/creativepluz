import React from 'react';
import { ScoreItem } from './types';

const scores: ScoreItem[] = [
    { val: "99", label: "Performance" },
    { val: "100", label: "Accessibility" },
    { val: "100", label: "Best Practices" },
    { val: "98", label: "SEO" }
];

export default function ScoreGrid() {
    return (
        <div className="grid grid-cols-2 gap-4">
            {scores.map((score, i) => (
                <div key={i} className="aspect-square rounded-2xl bg-[#111] border border-white/10 flex flex-col items-center justify-center relative group hover:border-[#ffd700]/50 transition-colors">
                    <svg className="w-32 h-32 transform -rotate-90">
                        <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/10" />
                        <circle
                            cx="64"
                            cy="64"
                            r="56"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="transparent"
                            strokeDasharray={351}
                            strokeDashoffset={351 - (351 * parseInt(score.val) / 100)}
                            className="text-green-500"
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-3xl font-mono font-bold text-white">{score.val}</span>
                    </div>
                    <span className="absolute bottom-6 text-xs font-bold uppercase tracking-widest text-white/50">{score.label}</span>
                </div>
            ))}
        </div>
    );
}
