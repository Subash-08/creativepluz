'use client';

import { motion, Variants } from 'framer-motion';
import { MarqueeProps } from './types';
import { useMemo } from 'react';

/**
 * Marquee Component
 * 
 * Handles the infinite scrolling animation of brand logos.
 * This is a Client Component because it uses:
 * - framer-motion (interactive animation)
 * - browser APIs (rendering loop)
 */
export function Marquee({ children, speed = 30, className = "" }: MarqueeProps) {
    // Use strings for consistent animation values
    const animationVariants: Variants = {
        animate: {
            x: ["0%", "-50%"],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop" as const, // Explicitly cast as const
                    duration: speed,
                    ease: "linear",
                },
            },
        },
    };

    return (
        <div className={`flex overflow-hidden relative w-full ${className}`}>
            <motion.div
                className="flex items-center min-w-max will-change-transform"
                variants={animationVariants}
                animate="animate"
            >
                {/* 
          Render children in wrappers to ensure seamless loop.
          We use 2 sets to create the seamless effect with -50% translation.
          (0% shows first half, -50% shows second half which matches first half position)
        */}
                {[...Array(2)].map((_, i) => (
                    <div key={`marquee-chunk-${i}`} className="flex items-center gap-24 pr-24 shrink-0">
                        {children}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
