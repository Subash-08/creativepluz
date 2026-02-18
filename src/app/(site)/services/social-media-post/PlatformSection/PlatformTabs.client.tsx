'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Linkedin, PlayCircle, ArrowUpRight } from 'lucide-react';
import { PlatformTab } from './types';

const tabs: PlatformTab[] = [
    {
        name: "Instagram",
        icon: Instagram,
        color: "#E1306C",
        features: ["Aesthetic Grids", "Reels Production", "Story Highlights", "Influencer Collabs"],
        desc: "Visual storytelling that builds desire. We curate feeds that look like art galleries and perform like sales funnels."
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        color: "#0077B5",
        features: ["Thought Leadership", "Company Updates", "Carousel Decks", "Recruitment Marketing"],
        desc: "Corporate doesn't have to mean boring. We turn executives into industry voices and brands into market leaders."
    },
    {
        name: "TikTok / Reels",
        icon: PlayCircle,
        color: "#00f2ea",
        features: ["Trend Adaptation", "Short-form Video", "UGC Strategy", "Sound Design"],
        desc: "Raw, authentic, and algorithmic. We capture the 'now' with content that feels native to the platform."
    }
];

export default function PlatformTabs() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-20">

            {/* Left: Menu */}
            <div className="lg:w-1/3">
                <h2 className="text-5xl font-bold mb-8">Platform
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ef4444]">Specific.</span></h2>
                <div className="flex flex-col gap-4">
                    {tabs.map((tab, i) => (
                        <button
                            key={i}
                            onMouseEnter={() => setActiveTab(i)}
                            className={`flex items-center gap-4 p-6 rounded-2xl border transition-all duration-300 text-left group ${activeTab === i ? 'bg-white/10 border-[#ffd700]' : 'bg-[#111] border-white/5 hover:bg-white/5'}`}
                        >
                            <tab.icon className={`${activeTab === i ? 'text-[#ffd700]' : 'text-white/40'}`} />
                            <div>
                                <h3 className={`text-lg font-bold ${activeTab === i ? 'text-white' : 'text-white/60'}`}>{tab.name}</h3>
                            </div>
                            {activeTab === i && <ArrowUpRight className="ml-auto text-[#ffd700]" size={16} />}
                        </button>
                    ))}
                </div>
            </div>

            {/* Right: Content */}
            <div className="lg:w-2/3">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="bg-[#111] border border-white/5 rounded-[32px] p-10 h-full relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-[100px]" />

                        <div className="relative z-10">
                            <h3 className="text-4xl font-bold mb-6">{tabs[activeTab].name} Strategy</h3>
                            <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
                                {tabs[activeTab].desc}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {tabs[activeTab].features.map((feat, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-black/40 rounded-xl border border-white/5">
                                        <div className="w-2 h-2 rounded-full bg-[#ffd700]" />
                                        <span className="font-medium text-white/90">{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
