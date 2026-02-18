import React from 'react';
import { ProcessStepProps } from './types';
import { FadeInRight } from '../ui/Animation.client';

export default function ProcessStep({ num, title, desc, delay }: ProcessStepProps) {
    return (
        <FadeInRight delay={delay}>
            <div className="group relative p-10 rounded-3xl bg-[#111] border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-10 font-black text-9xl text-white group-hover:text-[#ffd700] transition-colors duration-500 select-none">
                    {num}
                </div>
                <div className="relative z-10">
                    <span className="text-[#ffd700] font-mono text-sm mb-4 block">Phase {num}</span>
                    <h3 className="text-3xl font-bold mb-4 text-white">{title}</h3>
                    <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                        {desc}
                    </p>
                </div>
            </div>
        </FadeInRight>
    );
}
