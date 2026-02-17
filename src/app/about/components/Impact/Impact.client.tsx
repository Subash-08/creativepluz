'use client';

import React, { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ImpactProps } from './types';

gsap.registerPlugin(ScrollTrigger);

export default function ImpactClient({ data }: ImpactProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    // Image Refs for Desktop
    const img1Ref = useRef<HTMLDivElement>(null);
    const img2Ref = useRef<HTMLDivElement>(null);
    const img3Ref = useRef<HTMLDivElement>(null);
    const img4Ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            // --- DESKTOP ANIMATION (>= 1024px) ---
            mm.add("(min-width: 1024px)", () => {
                const images = [img1Ref.current, img2Ref.current, img3Ref.current, img4Ref.current];

                // Initial setup for desktop: Absolute center
                // Updated dimensions: Reduced height to 300px (square)
                gsap.set(images, {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    xPercent: -50,
                    yPercent: -50,
                    width: '300px',
                    height: '300px',
                    zIndex: 10
                });

                // Content setup: Absolute center, hidden
                gsap.set(contentRef.current, {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    xPercent: -50,
                    yPercent: -50,
                    opacity: 0,
                    scale: 0.2,
                    filter: "blur(10px)",
                    zIndex: 20
                });

                // Timeline
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "+=2000",
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
                    }
                });

                // Split Animation with slight rotation for style
                // Adjusted Y slightly since images are smaller
                tl.to(img1Ref.current, { x: "-35vw", y: "-25vh", rotation: -5, ease: "power1.inOut" }, 0);
                tl.to(img2Ref.current, { x: "35vw", y: "-25vh", rotation: 5, ease: "power1.inOut" }, 0);
                tl.to(img3Ref.current, { x: "-35vw", y: "25vh", rotation: -5, ease: "power1.inOut" }, 0);
                tl.to(img4Ref.current, { x: "35vw", y: "25vh", rotation: 5, ease: "power1.inOut" }, 0);

                // Reveal Content
                tl.to(contentRef.current, {
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    ease: "power2.out"
                }, 0);
            });

            // Mobile does not use GSAP ScrollTrigger, relies on CSS position: sticky
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full bg-[#050505] text-white">

            {/* --- DESKTOP HEADER (Overlay on pinned section) --- */}
            <div className="hidden lg:flex absolute top-0 left-0 w-full z-30 flex-col items-center pt-20 pointer-events-none">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-[1px] bg-white/40"></div>
                    <span className="text-white/60 font-bold uppercase tracking-[0.2em] text-xs">Our Impact</span>
                    <div className="w-8 h-[1px] bg-white/40"></div>
                </div>
                <h2 className="text-5xl font-medium tracking-tight text-white">By The Numbers</h2>
            </div>

            {/* --- MOBILE LAYOUT (< 1024px) --- */}
            <div className="lg:hidden flex flex-col w-full pb-20">

                {/* Mobile Header */}
                <div className="pt-20 pb-10 px-6 text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-white/40"></div>
                        <span className="text-white/60 font-bold uppercase tracking-[0.2em] text-xs">Our Impact</span>
                        <div className="w-8 h-[1px] bg-white/40"></div>
                    </div>
                    <h2 className="text-4xl font-medium tracking-tight text-white">By The Numbers</h2>
                </div>

                {data.map((item, index) => (
                    <div
                        key={item.id}
                        className="sticky top-0 h-screen w-full bg-[#050505] flex flex-col justify-center items-center px-6 border-t border-white/5"
                        style={{ zIndex: index + 1 }}
                    >
                        {/* Background Texture for Mobile Card */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none">
                            <Image
                                src="https://cdn.prod.website-files.com/690377929e578438b80ba47a/6904e477a38abde24e333726_about-bg.avif"
                                fill
                                className="object-cover"
                                alt="Background texture"
                            />
                        </div>

                        {/* Content Container */}
                        <div className="relative z-10 w-full max-w-md flex flex-col gap-8 items-center">

                            {/* Image (Moved to Top) - Reduced Height (aspect-video 16:9) */}
                            <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative">
                                <Image
                                    src={item.src}
                                    alt={item.label}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Stats (Moved Below Image) */}
                            <div className="flex flex-col gap-2 text-center">
                                <span className="text-white/60 text-base font-medium leading-snug uppercase tracking-widest">
                                    {item.label}
                                </span>
                                <span className="text-6xl font-semibold tracking-tighter text-white">
                                    {item.value}
                                </span>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            {/* --- DESKTOP LAYOUT (>= 1024px) --- */}
            <div
                ref={containerRef}
                className="hidden lg:block relative w-full lg:h-screen lg:overflow-hidden"
            >
                <div className="w-full h-full relative">

                    {/* Background Grid - Desktop Only */}
                    <div className="absolute inset-0 pointer-events-none z-0 opacity-100">
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10"></div>
                        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/10"></div>
                    </div>

                    {/* --- Stats Content --- */}
                    <div
                        ref={contentRef}
                        className="
                    relative z-20 w-full
                    lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:max-w-[700px]
                "
                    >
                        <div className="relative w-full rounded-[40px] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm p-14">
                            {/* Background Texture Overlay */}
                            <div className="absolute inset-0 z-0 opacity-40">
                                <Image
                                    src="https://cdn.prod.website-files.com/690377929e578438b80ba47a/6904e477a38abde24e333726_about-bg.avif"
                                    alt="Background texture"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Stats Grid - Tighter layout */}
                            <div className="relative z-10 grid grid-cols-2 gap-y-12 gap-x-8 justify-items-center">
                                {data.map((item, i) => (
                                    <div key={i} className="flex flex-col gap-2 items-center text-center">
                                        <span className="text-white/70 text-lg font-medium leading-snug">
                                            {item.label}
                                        </span>
                                        <span className="text-7xl font-semibold tracking-tighter">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* --- Images --- */}
                    {/* Reduced height to 300px */}
                    <div ref={img1Ref} className="absolute w-[300px] h-[300px] rounded-2xl overflow-hidden z-10 shadow-2xl" id="img1">
                        <div className="relative w-full h-full">
                            <Image src={data[0].src} fill className="object-cover" alt="About 1" />
                        </div>
                    </div>
                    <div ref={img2Ref} className="absolute w-[300px] h-[300px] rounded-2xl overflow-hidden z-10 shadow-2xl" id="img2">
                        <div className="relative w-full h-full">
                            <Image src={data[1].src} fill className="object-cover" alt="About 2" />
                        </div>
                    </div>
                    <div ref={img3Ref} className="absolute w-[300px] h-[300px] rounded-2xl overflow-hidden z-10 shadow-2xl" id="img3">
                        <div className="relative w-full h-full">
                            <Image src={data[2].src} fill className="object-cover" alt="About 3" />
                        </div>
                    </div>
                    <div ref={img4Ref} className="absolute w-[300px] h-[300px] rounded-2xl overflow-hidden z-10 shadow-2xl" id="img4">
                        <div className="relative w-full h-full">
                            <Image src={data[3].src} fill className="object-cover" alt="About 4" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
