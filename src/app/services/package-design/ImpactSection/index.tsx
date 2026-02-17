import React from 'react';
import Image from 'next/image';

export default function ImpactSection() {
    return (
        <section className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#111] to-black opacity-50 -z-10" />

            <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Visual Side */}
                    <div className="relative group">
                        <div className="relative aspect-square w-full max-w-lg mx-auto lg:mx-0 rounded-3xl overflow-hidden border border-white/10">
                            <Image
                                src="/assets/images/service/PACKAGINGDESIGN/C_PLUS 1000 X 1000_07.png"
                                alt="High Impact Packaging"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                        {/* Decor elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#ffd700]/30 rounded-tr-3xl hidden md:block" />
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#ef4444]/30 rounded-bl-3xl hidden md:block" />
                    </div>

                    {/* Content Side */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Designed to Stop the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ef4444]">Endless Scroll.</span>
                            </h2>
                            <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                                In a crowded marketplace, your packaging is your silent salesman. We create structural and graphic designs that cut through the noise, telling your brand's story in a split second.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                            <div className="border-l border-white/10 pl-6">
                                <h3 className="text-5xl font-black text-white mb-2">03s</h3>
                                <p className="text-[#ffd700] uppercase tracking-widest text-xs font-bold">To Make an Impression</p>
                            </div>
                            <div className="border-l border-white/10 pl-6">
                                <h3 className="text-5xl font-black text-white mb-2">72%</h3>
                                <p className="text-[#ffd700] uppercase tracking-widest text-xs font-bold">Buy Based on Design</p>
                            </div>
                            <div className="border-l border-white/10 pl-6">
                                <h3 className="text-5xl font-black text-white mb-2">100%</h3>
                                <p className="text-[#ffd700] uppercase tracking-widest text-xs font-bold">Custom Form Factors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
