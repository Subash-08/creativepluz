'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle } from 'lucide-react';
import { PostItem } from './types';
import Image from 'next/image';

const posts: PostItem[] = [
    { id: 1, type: "Carousel", client: "Apex", img: "/assets/images/service/SocialMedia/C_PLUS 1000 x 1000 SM_001.png" },
    { id: 2, type: "Reel Cover", client: "Liva", img: "/assets/images/service/SocialMedia/C_PLUS 1000 x 1000 SM_002.png" },
    { id: 3, type: "Static", client: "Krona", img: "/assets/images/service/SocialMedia/C_PLUS 1000 x 1000 SM_003.png" },
    { id: 4, type: "Carousel", client: "Velto", img: "/assets/images/service/SocialMedia/C_PLUS 1000 x 1000 SM_004.png" },
    { id: 5, type: "Quote", client: "Echo", img: "/assets/images/service/SocialMedia/C_PLUS 1000 x 1000 SM_005.png" },
    { id: 6, type: "Static", client: "Flux", img: "/assets/images/service/SocialMedia/C_PLUS 1000 x 1000 SM_006.png" },
    { id: 7, type: "Reel Cover", client: "Neon", img: "/assets/images/service/SocialMedia/C_PLUS 1000 x 1000 SM_007.png" },
    { id: 8, type: "Static", client: "Core", img: "/assets/images/service/SocialMedia/C_PLUS 1000 x 1000 SM_008.png" },
    { id: 9, type: "Carousel", client: "Zen", img: "/assets/images/service/SocialMedia/C_PLUS 1000 x 1000 SM_009.png" },
];

export default function SocialGrid() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4">
            {posts.map((post, i) => (
                <motion.div
                    key={post.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group relative aspect-square overflow-hidden cursor-pointer"
                >
                    <Image
                        src={post.img}
                        alt={post.client}
                        fill
                        className="object-cover transition-transform duration-700 "
                        sizes="(max-width: 768px) 50vw, 33vw"
                    />

                    {/* Glass Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4">

                        <div className="absolute bottom-6 text-center">
                            <p className="text-[#ffd700] text-[10px] font-bold uppercase tracking-widest">{post.type}</p>
                            <p className="text-white font-bold text-lg">{post.client}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
