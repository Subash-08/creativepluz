'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2, TrendingUp, Zap, Instagram, Linkedin, PlayCircle } from 'lucide-react';
import Image from 'next/image';
import { PhoneFrameProps, FloatingReactionProps } from './types';

const PhoneFrame = ({ src, x = "0px", y = "0px", scale = 1, rotate = 0, delay = 0, type, className = "" }: PhoneFrameProps) => {
    return (
        <motion.div
            className={`absolute top-1/2 left-1/2 ${className}`}
            style={{
                marginLeft: -140, // Half of width (280)
                marginTop: -290, // Half of height (580)
                zIndex: scale === 1 ? 20 : 10
            }}
            initial={{ opacity: 0, x, y: 100 }} // Start slightly lower for entrance
            animate={{ opacity: 1, x, y }}       // Move to intended grid position
            transition={{ duration: 1, delay, ease: "circOut" }}
        >
            <motion.div
                animate={{
                    y: [-15, 15, -15],
                    rotate: [rotate - 2, rotate + 2, rotate - 2]
                }}
                transition={{
                    y: { duration: 5 + Math.random(), repeat: Infinity, ease: "easeInOut", delay: delay * 2 },
                    rotate: { duration: 7 + Math.random(), repeat: Infinity, ease: "easeInOut", delay: delay }
                }}
                style={{ scale }} // Apply scale here
                className="w-[280px] h-[580px] rounded-[45px] border-[8px] border-[#1a1a1a] bg-black overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] relative"
            >
                {/* Screen Content */}
                <div className="relative w-full h-full">
                    <Image src={src} alt="Feed" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80 pointer-events-none" />

                {/* Dynamic Island / Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20 flex items-center justify-center gap-3">
                    <div className="w-10 h-1 bg-[#222] rounded-full" />
                    <div className="w-1.5 h-1.5 bg-[#111] rounded-full" />
                </div>

                {/* App UI Hints */}
                <div className="absolute bottom-8 left-6 right-6 flex justify-between items-end z-20">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
                                {type === 'tiktok' ? <PlayCircle size={14} className="text-white fill-white" /> :
                                    type === 'linkedin' ? <Linkedin size={14} className="text-white" /> :
                                        <Instagram size={14} className="text-white" />}
                            </div>
                            <span className="text-xs font-bold text-white drop-shadow-lg tracking-wide">@creativepluz</span>
                        </div>
                        <div className="w-32 h-2 bg-white/20 rounded-full backdrop-blur-sm" />
                        <div className="w-20 h-2 bg-white/20 rounded-full backdrop-blur-sm" />
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <Heart size={24} className="text-white drop-shadow-md hover:fill-red-500 hover:text-red-500 transition-colors cursor-pointer" />
                        <MessageCircle size={24} className="text-white drop-shadow-md" />
                        <Share2 size={24} className="text-white drop-shadow-md" />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const FloatingReaction = ({ icon: Icon, color, x, y, delay }: FloatingReactionProps) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
            opacity: [0, 1, 1, 0],
            y: [y, y - 150],
            x: [x, x + (Math.random() * 40 - 20)],
            scale: [0.5, 1, 1, 0.5]
        }}
        transition={{
            duration: 3,
            repeat: Infinity,
            delay: delay,
            ease: "easeOut",
            times: [0, 0.2, 0.8, 1]
        }}
        className={`absolute z-30 p-4 rounded-full bg-white shadow-xl ${color} flex items-center justify-center`}
        style={{ left: '50%', top: '50%', marginLeft: x, marginTop: y }}
    >
        <Icon size={24} className={color.replace('text-', 'fill-').replace('fill-white', 'fill-current')} />
    </motion.div>
);

export default function HeroVisuals() {
    return (
        <div className="relative h-[800px] w-full flex items-center justify-center perspective-[1000px] hidden md:flex">
            {/* Background Glow behind phones */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/20 to-orange-500/20 rounded-full blur-[100px] animate-pulse" />

            {/* Left Phone (Back - Insta) */}
            <PhoneFrame
                src="/assets/images/service/SocialMedia/C_PLUS 1000 x 1000 SM_010.png"
                x="-180px" y="60px" scale={0.85} rotate={-12} delay={0.2} type="insta"
                className="opacity-60 hover:opacity-100 hover:z-30 transition-all duration-500 filter hover:brightness-110"
            />

            {/* Right Phone (Back - LinkedIn) */}
            <PhoneFrame
                src="/assets/images/service/SocialMedia/C_PLUS 1000 x 1000 SM_011.png"
                x="180px" y="-60px" scale={0.85} rotate={12} delay={0.4} type="linkedin"
                className="opacity-60 hover:opacity-100 hover:z-30 transition-all duration-500 filter hover:brightness-110"
            />

            {/* Center Phone (Front - TikTok - Hero) */}
            <PhoneFrame
                src="/assets/images/service/SocialMedia/C_PLUS 1000 x 1000 SM_009.png"
                x="0px" y="0px" scale={1} rotate={0} delay={0} type="tiktok"
                className="z-20 shadow-[0_0_50px_rgba(255,215,0,0.1)] border-[#222]"
            />

            {/* Floating Reactions */}
            <FloatingReaction icon={Heart} color="text-red-500" x={140} y={-120} delay={1} />
            <FloatingReaction icon={Zap} color="text-[#ffd700]" x={-140} y={120} delay={1.5} />
            <FloatingReaction icon={MessageCircle} color="text-blue-400" x={180} y={160} delay={2} />
            <FloatingReaction icon={TrendingUp} color="text-green-400" x={-160} y={-140} delay={2.5} />
        </div>
    );
}
