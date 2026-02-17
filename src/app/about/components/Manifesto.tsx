'use client';

import { THEME } from '@/config/theme';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Zap, Flame, ShieldCheck, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
    const manifestoRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 4. MANIFESTO REVEAL (Sequential)
            const manifestoItems = gsap.utils.toArray<HTMLElement>('.manifesto-item');
            gsap.to(manifestoItems, {
                opacity: 1,
                y: 0,
                stagger: 0.5,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top 70%",
                    end: "bottom 20%",
                    scrub: 1,
                }
            });

            // 5. GHOST TEXT DRIFT
            gsap.to(".ghost-text", {
                xPercent: -30,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    scrub: 2,
                }
            });
        }, manifestoRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={manifestoRef} className="py-10 relative overflow-hidden" style={{ backgroundColor: THEME.colors.background }}>
            {/* Kinetic Background Text */}
            <div className="absolute top-1/4 left-0 whitespace-nowrap opacity-[0.03] pointer-events-none select-none z-0">
                <span className="ghost-text text-[35vw] font-display font-black uppercase italic leading-none inline-block mr-40" style={{ color: THEME.colors.foreground }}>OBSESSION</span>
                <span className="ghost-text text-[35vw] font-display font-black uppercase italic leading-none inline-block" style={{ color: THEME.colors.foreground }}>IMPACT</span>
            </div>

            <div ref={triggerRef} className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col gap-60">

                    {/* 01. MISSION */}
                    <div className="manifesto-item opacity-0 translate-y-32 flex flex-col md:flex-row gap-12 md:gap-12 items-start">
                        <div className="md:w-1/3 group">
                            <span className="font-black text-7xl md:text-9xl font-display leading-none group-hover:italic transition-all duration-500 inline-block" style={{ color: THEME.colors.primary }}>01</span>
                            <h3 className="text-3xl font-display font-bold uppercase mt-6 tracking-tighter flex items-center gap-3" style={{ color: THEME.colors.foreground }}>
                                <Target size={24} style={{ color: THEME.colors.primary }} /> The Mission.
                            </h3>
                        </div>
                        <div className="md:w-2/3 border-l pl-8 md:pl-24 py-4 relative" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                            <div className="absolute top-0 left-0 w-1 h-20" style={{ backgroundColor: THEME.colors.primary }}></div>
                            <h4 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-[1.1]" style={{ color: THEME.colors.foreground }}>
                                We don’t build <span className="italic" style={{ color: THEME.colors.primary }}>Websites.</span> We build <br /> Market Dominance <span className="underline decoration-4 underline-offset-8" style={{ textDecorationColor: THEME.colors.primary }}>Engines.</span>
                            </h4>
                            <p className="text-lg md:text-2xl leading-relaxed max-w-3xl font-medium" style={{ color: THEME.colors.muted }}>
                                Our singular goal is to transform brands into industry benchmarks. We blend raw creative instinct with tactical data to ensure your brand isn't just "seen"—it's impossible to ignore.
                            </p>
                            <div className="mt-12 flex flex-wrap gap-8">
                                <div className="flex items-center gap-3 font-black uppercase text-xs tracking-[0.2em]" style={{ color: THEME.colors.primary }}><ShieldCheck size={20} /> Unrivaled Scalability</div>
                                <div className="flex items-center gap-3 font-black uppercase text-xs tracking-[0.2em]" style={{ color: THEME.colors.primary }}><Cpu size={20} /> Tech-First Architecture</div>
                            </div>
                        </div>
                    </div>

                    {/* 02. STRATEGY */}
                    <div className="manifesto-item opacity-0 translate-y-5 flex flex-col mt-[-12rem] md:flex-row gap-12 md:gap-32 items-start ">
                        <div className="md:w-1/3 group">
                            <span className="font-black text-7xl md:text-9xl font-display leading-none group-hover:italic transition-all duration-500 inline-block" style={{ color: THEME.colors.primary }}>02</span>
                            <h3 className="text-3xl font-display font-bold uppercase mt-6 tracking-tighter flex items-center gap-3" style={{ color: THEME.colors.foreground }}>
                                <Zap size={24} style={{ color: THEME.colors.primary }} /> The Strategy.
                            </h3>
                        </div>
                        <div className="md:w-2/3 border-l pl-8 md:pl-24 py-4 relative" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                            <div className="absolute top-0 left-0 w-1 h-20" style={{ backgroundColor: THEME.colors.primary }}></div>
                            <h4 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-[1.1] uppercase italic" style={{ color: THEME.colors.foreground }}>
                                Precision Over <span className="underline decoration-2 underline-offset-4" style={{ color: THEME.colors.primary, textDecorationColor: THEME.colors.primary }}>Padding.</span>
                            </h4>
                            <p className="text-lg md:text-2xl leading-relaxed max-w-3xl font-medium" style={{ color: THEME.colors.muted }}>
                                Agility is our weapon. We eliminate corporate bloat to deliver results at high velocity. Every pixel, every line of code, and every campaign strategy is audited for one thing: ROI.
                            </p>
                            <div className="mt-12 flex flex-wrap gap-4">
                                {['Data-Led Strategy', 'Rapid Prototyping', 'User-Centric Architecture', 'Behavioral Psychology'].map(item => (
                                    <span key={item} className="px-6 py-3 border bg-white/5 text-[10px] font-black uppercase tracking-[0.3em] transition-colors cursor-default hover:text-black" style={{ borderColor: 'rgba(255,255,255,0.1)', color: '#cbd5e1' /* slate-300 */ }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = THEME.colors.primary; e.currentTarget.style.color = '#000000'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#cbd5e1'; }}>{item}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 03. ETHOS */}
                    <div className="manifesto-item opacity-0 translate-y-5 flex flex-col mt-[-12rem]  md:flex-row gap-12 md:gap-32 items-start">
                        <div className="md:w-1/3 group">
                            <span className="font-black text-7xl md:text-9xl font-display leading-none group-hover:italic transition-all duration-500 inline-block" style={{ color: THEME.colors.primary }}>03</span>
                            <h3 className="text-3xl font-display font-bold uppercase mt-6 tracking-tighter flex items-center gap-3" style={{ color: THEME.colors.foreground }}>
                                <Flame size={24} style={{ color: THEME.colors.primary }} /> The Ethos.
                            </h3>
                        </div>
                        <div className="md:w-2/3 border-l pl-8 md:pl-24 py-4 relative" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                            <div className="absolute top-0 left-0 w-1 h-20" style={{ backgroundColor: THEME.colors.primary }}></div>
                            <h4 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-[1.1]" style={{ color: THEME.colors.foreground }}>
                                Obsessive <span className="italic" style={{ color: THEME.colors.primary }}>Craft.</span> <br /> No Room For <span className="text-black px-4 py-1 rotate-[-2deg] inline-block" style={{ backgroundColor: THEME.colors.primary }}>Average.</span>
                            </h4>
                            <p className="text-lg md:text-2xl leading-relaxed max-w-3xl font-medium" style={{ color: THEME.colors.muted }}>
                                We are a collective of specialists, not generalists. We believe that 'good enough' is the enemy of excellence. Our team is driven by a shared obsession for perfection and aesthetic purity.
                            </p>
                            <div className="mt-12 flex items-center gap-10">
                                <div className="w-20 h-20 rounded-full border flex items-center justify-center relative" style={{ borderColor: `${THEME.colors.primary}33` }}>
                                    <Flame size={40} style={{ color: THEME.colors.primary }} />
                                    <div className="absolute inset-0 border rounded-full animate-ping opacity-20" style={{ borderColor: THEME.colors.primary }}></div>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-2">Agency Standard</p>
                                    <p className="text-xl font-display font-bold italic" style={{ color: THEME.colors.foreground }}>"Visceral Excellence Only."</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
