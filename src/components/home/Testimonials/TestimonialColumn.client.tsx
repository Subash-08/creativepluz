'use client';

import React from 'react';
import Image from 'next/image'; // Use next/image
import { TestimonialsColumnProps } from './types';

export const TestimonialsColumn: React.FC<TestimonialsColumnProps> = ({
    testimonials,
    duration = 10,
    className,
}) => {
    return (
        <div className={className}>
            <style jsx>{`
                @keyframes marquee {
                    from { transform: translateY(0); }
                    to { transform: translateY(-50%); }
                }
                .animate-marquee {
                    animation: marquee var(--marquee-duration) linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>

            {/* 
               We need to duplicate the list to create a seamless loop.
               The animation translates Y by -50%, so we need 2 full sets visible effectively,
               or simpler: render enough copies to cover the scroll.
               The user's code tripled the array.
            */}
            <div
                className="flex flex-col gap-6 pb-6 animate-marquee will-change-transform"
                style={{
                    '--marquee-duration': `${duration}s`
                } as React.CSSProperties}
            >
                {[...new Array(3)].fill(0).map((_, groupIndex) => (
                    <React.Fragment key={groupIndex}>
                        {testimonials.map(({ text, image, name, role }, i) => (
                            <div
                                key={`${groupIndex}-${i}`}
                                className="p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-[#ffd700]/30 hover:bg-white/10 transition-all duration-300 w-full shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
                            >
                                <p className="text-white/70 leading-relaxed text-sm font-medium tracking-wide">
                                    "{text}"
                                </p>
                                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/5">
                                    <div className="relative h-10 w-10 shrink-0 rounded-full overflow-hidden border border-white/10">
                                        <Image
                                            src={image}
                                            alt={name}
                                            fill
                                            className="object-cover transition-all duration-300"
                                            sizes="40px"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="font-sans font-bold text-white text-sm tracking-wide">
                                            {name}
                                        </div>
                                        <div className="text-[10px] text-[#ffd700] tracking-widest uppercase font-bold">
                                            {role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};
