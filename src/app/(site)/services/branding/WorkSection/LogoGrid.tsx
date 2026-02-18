import React from 'react';
import { LogoGridProps } from './types';
import { ScaleIn } from '../ui/Animation.client';
import Image from 'next/image';

export default function LogoGrid({ name, industry, icon: Icon, image, delay }: LogoGridProps) {
    return (
        <ScaleIn delay={delay} initialScale={0.9} className="h-full">
            <div className="aspect-square border-r border-b border-white/10 flex flex-col items-center justify-center group relative overflow-hidden bg-black hover:bg-[#111] transition-colors duration-500 cursor-pointer h-full p-4">
                {/* Icon Mark or Image */}
                <div className={`text-white group-hover:text-[#ffd700] transition-all duration-500 relative flex items-center justify-center w-full h-full`}>
                    {image ? (
                        <div className="relative w-full h-full group-hover:opacity-30 transition-opacity duration-500">
                            <Image
                                src={image}
                                alt={name}
                                fill
                                className="object-contain transition-all duration-500"
                            />
                        </div>
                    ) : (
                        <Icon size={48} strokeWidth={1} />
                    )}
                </div>

                {/* Name */}
                <div className="absolute bottom-8 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                    <span className="text-lg font-bold tracking-tight text-white shadow-sm">{name}</span>
                    <span className="text-[10px] uppercase tracking-widest text-[#ffd700] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100 shadow-sm">{industry}</span>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#ffd700] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_#ffd700] z-20" />
            </div>
        </ScaleIn>
    );
}
