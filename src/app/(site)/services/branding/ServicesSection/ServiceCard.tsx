import React from 'react';
import { ServiceCardProps } from './types';
import { FadeInUp } from '../ui/Animation.client';

export default function ServiceCard({ icon: Icon, title, desc, delay }: ServiceCardProps) {
    return (
        <FadeInUp delay={delay} className="h-full">
            <div className="group p-8 rounded-2xl bg-[#111] border border-white/5 hover:border-[#ffd700]/50 transition-all duration-300 hover:bg-white/[0.02] h-full">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#ffd700] group-hover:text-black transition-colors duration-300">
                    <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
            </div>
        </FadeInUp>
    );
}
