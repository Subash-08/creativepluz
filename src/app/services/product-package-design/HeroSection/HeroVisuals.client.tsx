'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function HeroVisuals() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <div className="relative h-[600px] lg:h-[800px] flex items-center justify-center">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ffd700]/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Main Pack */}
            <motion.div
                style={{ y: y1 }}
                className="relative z-20 w-[60%] aspect-[4/5] bg-zinc-900 rounded-3xl shadow-2xl border border-white/5 overflow-hidden rotate-[-6deg]"
            >
                <Image
                    src="/assets/images/service/PACKAGINGDESIGN/package-design-service.jpg"
                    alt="Main Package"
                    fill
                    className="object-cover opacity-90"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>

            {/* Floating Element */}
            <motion.div
                style={{ y: y2 }}
                className="absolute z-30 w-[40%] aspect-square right-0 bottom-20 bg-zinc-800 rounded-full shadow-2xl border border-white/10 overflow-hidden"
            >
                <Image
                    src="/assets/images/service/PACKAGINGDESIGN/package-design-service-2.jpg"
                    alt="Detail"
                    fill
                    className="object-cover opacity-80"
                    sizes="(max-width: 768px) 50vw, 25vw"
                />
            </motion.div>
        </div>
    );
}
