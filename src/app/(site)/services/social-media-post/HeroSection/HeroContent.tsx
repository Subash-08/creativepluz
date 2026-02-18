import React from 'react';
import { ArrowUpRight, Users } from 'lucide-react';
import { FadeInRight } from '@/app/(site)/services/branding/ui/Animation.client';

export default function HeroContent() {
    return (
        <div className="relative z-20 pt-10 lg:pt-0">
            <FadeInRight className="flex items-center gap-3 mb-8">
                <div className="px-4 py-1.5 rounded-full border border-[#ffd700]/30 bg-[#ffd700]/10 text-[#ffd700] text-xs font-bold uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(255,215,0,0.2)]">
                    Social Media Marketing
                </div>
            </FadeInRight>

            <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-black uppercase leading-[0.85] tracking-tighter mb-8 text-white">
                <span className="block">Dominate</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] via-[#ff9900] to-white">The Feed.</span>
            </h1>

            <p className="text-white/60 text-xl max-w-lg leading-relaxed mb-12 font-light border-l border-white/10 pl-6">
                We engineer social-first strategies that hack the algorithm and turn passive scrollers into cult-like communities.
            </p>

            <div className="flex flex-wrap gap-6">
                <button className="px-8 py-4 bg-[#ffd700] text-black font-bold rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center gap-2 group">
                    Start Your Campaign <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white hover:text-black transition-colors flex items-center gap-2 group">
                    View Case Studies <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
            </div>

            <div className="mt-20 flex items-center gap-8 text-xs md:text-sm font-bold uppercase tracking-widest text-white/40">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
                    Accepting New Clients
                </div>
                <div className="w-px h-8 bg-white/10 hidden md:block" />
                <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full bg-[#222] border border-black flex items-center justify-center text-[8px] text-white">
                            <Users size={12} />
                        </div>
                    ))}
                    <span className="pl-4 pt-1">Trusted by 50+ Brands</span>
                </div>
            </div>
        </div>
    );
}
