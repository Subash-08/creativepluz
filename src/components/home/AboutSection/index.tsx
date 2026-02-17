import React from "react";
import Image from "next/image";
import { ArrowUpRight, Check, Globe, Trophy, Users } from "lucide-react";
import { AnimatedCard } from './AnimatedCard.client';

const AboutSection = () => {
    return (
        <section className="bg-black text-white w-full py-24 px-6 lg:px-12 max-w-[1800px] mx-auto font-sans">

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between mb-16 gap-10">
                <div className="max-w-4xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-[1px] bg-[#ffd700]"></div>
                        <span className="text-[#ffd700] text-xs font-bold uppercase tracking-[0.3em]">Who We Are</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1]">
                        We Build Brands with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ff6b4a]">Momentum.</span>
                    </h2>
                </div>
                <p className="text-white/60 text-lg max-w-sm leading-relaxed text-right md:text-left">
                    A creative partner for bold ideas — blending strategy, design, code, and visual storytelling to dominate markets.
                </p>
            </div>

            {/* 5-Card Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[380px]">

                {/* Card 1: The Vision (Wide) */}
                <AnimatedCard
                    className="lg:col-span-2 relative group rounded-[2.5rem] overflow-hidden bg-[#111] border border-white/5"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop"
                        alt="Vision"
                        fill
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                    <div className="absolute bottom-10 left-10 max-w-lg z-10">
                        <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 border border-white/20 text-white">
                            <Globe size={24} />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">Global Reach, Local Roots.</h3>
                        <p className="text-white/70 text-lg leading-relaxed">
                            From New York to London, we craft digital experiences that transcend borders. We don't just follow trends; we set the pace for what's next in design.
                        </p>
                    </div>
                </AnimatedCard>

                {/* Card 2: The Experience (Tall/Gradient) */}
                <AnimatedCard
                    delay={0.1}
                    className="md:col-span-1 lg:col-span-1 relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#ffd700] to-[#ff9900] p-10 flex flex-col justify-between group"
                >
                    <div className="flex justify-end">
                        <ArrowUpRight className="text-black w-8 h-8 group-hover:rotate-45 transition-transform duration-300" />
                    </div>
                    <div>
                        <span className="text-8xl font-black text-black tracking-tighter leading-[0.9] block mb-2">10+</span>
                        <span className="text-black/80 font-bold uppercase tracking-widest text-sm">Years of Innovation</span>
                    </div>
                    {/* Decorative Blur */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-[40px] pointer-events-none" />
                </AnimatedCard>

                {/* Card 3: The Results (Dark UI) */}
                <AnimatedCard
                    delay={0.2}
                    className="relative rounded-[2.5rem] bg-[#111] border border-white/5 p-10 flex flex-col justify-between group hover:border-[#ffd700]/30 transition-colors"
                >
                    <div className="w-12 h-12 bg-[#222] rounded-2xl flex items-center justify-center text-[#ffd700] mb-auto">
                        <Trophy size={24} />
                    </div>
                    <div>
                        <h3 className="text-5xl font-bold text-white mb-2 group-hover:text-[#ffd700] transition-colors">85+</h3>
                        <p className="text-white/50 font-medium">Industry Awards Won</p>
                    </div>
                    <p className="text-white/40 text-sm mt-6 leading-relaxed">
                        Recognized by Awwwards, The FWA, and Behance for excellence in digital craft.
                    </p>
                </AnimatedCard>

                {/* Card 4: The Process (White/Light) */}
                <AnimatedCard
                    delay={0.3}
                    className="relative rounded-[2.5rem] bg-white text-black p-10 flex flex-col justify-center"
                >
                    <h3 className="text-2xl font-bold mb-6">The Standard</h3>
                    <div className="space-y-4">
                        {['Strategic Clarity', 'Pixel Perfection', 'Data-Driven UX', 'Future-Proof Tech'].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-[#ffd700] flex items-center justify-center shrink-0">
                                    <Check size={14} strokeWidth={3} className="text-black" />
                                </div>
                                <span className="font-bold text-lg opacity-80">{item}</span>
                            </div>
                        ))}
                    </div>
                </AnimatedCard>

                {/* Card 5: The Culture (Image) */}
                <AnimatedCard
                    delay={0.4}
                    className="md:col-span-2 lg:col-span-1 relative rounded-[2.5rem] overflow-hidden group bg-gray-900"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                        alt="Team"
                        fill
                        className="absolute inset-0 w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
                    <div className="absolute bottom-10 left-10 z-10">
                        <div className="flex -space-x-4 mb-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-300 overflow-hidden relative">
                                    <Image src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&w=100&q=80`} fill alt="" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <h3 className="text-2xl font-bold text-white">Join the Collective</h3>
                    </div>

                    {/* Hover CTA */}
                    <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 z-20">
                        <ArrowUpRight className="text-black" />
                    </div>
                </AnimatedCard>

            </div>
        </section>
    );
};

export default AboutSection;
