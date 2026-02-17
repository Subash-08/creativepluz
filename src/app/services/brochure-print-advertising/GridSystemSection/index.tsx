import React from 'react';
import { Ruler } from 'lucide-react';

export default function GridSystemSection() {
    return (
        <section className="py-12 bg-[#0a0a0a] overflow-hidden relative">
            <div className="absolute inset-0 flex justify-center gap-[4%] opacity-10 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-px h-full bg-red-500/50" />
                ))}
            </div>

            <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-8">
                        <Ruler className="text-[#ffd700]" size={24} />
                    </div>
                    <h2 className="text-4xl font-bold mb-6">Governed by the Grid.</h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-8">
                        Our print layouts adhere to strict typographic grid systems. This ensures readability, hierarchy, and a sense of calm authority in every page we design.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-[#ffd700] rounded-full" />
                            <span className="text-white/80">Golden Ratio Margins</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-[#ffd700] rounded-full" />
                            <span className="text-white/80">Baseline Alignment</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-[#ffd700] rounded-full" />
                            <span className="text-white/80">Modular Construction</span>
                        </li>
                    </ul>
                </div>

                {/* Visual Representation of a Grid */}
                <div className="bg-white p-4 rotate-3 shadow-2xl rounded-sm">
                    <div className="border border-gray-200 p-8 h-[400px] relative">
                        {/* Fake Content lines */}
                        <div className="flex gap-4 h-full">
                            <div className="w-1/3 space-y-4">
                                <div className="h-40 bg-gray-100" />
                                <div className="h-4 bg-gray-200 w-full" />
                                <div className="h-4 bg-gray-200 w-3/4" />
                                <div className="h-4 bg-gray-200 w-full" />
                            </div>
                            <div className="w-2/3 space-y-4 pt-20">
                                <div className="h-12 bg-black w-full" />
                                <div className="flex gap-4">
                                    <div className="w-1/2 space-y-2">
                                        <div className="h-2 bg-gray-200 w-full" />
                                        <div className="h-2 bg-gray-200 w-full" />
                                        <div className="h-2 bg-gray-200 w-full" />
                                        <div className="h-2 bg-gray-200 w-2/3" />
                                    </div>
                                    <div className="w-1/2 space-y-2">
                                        <div className="h-2 bg-gray-200 w-full" />
                                        <div className="h-2 bg-gray-200 w-full" />
                                        <div className="h-2 bg-gray-200 w-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Overlay Grid */}
                        <div className="absolute inset-0 grid grid-cols-3 gap-4 pointer-events-none p-8">
                            <div className="border-x border-red-500/20 bg-red-500/5 h-full" />
                            <div className="border-x border-red-500/20 bg-red-500/5 h-full" />
                            <div className="border-x border-red-500/20 bg-red-500/5 h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
