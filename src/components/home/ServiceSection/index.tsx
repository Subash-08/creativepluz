import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { AnimatedCard } from './AnimatedCard.client';

/**
 * ServiceSection - Server Component
 * 
 * Displays services in a bento-grid layout.
 * Pure Server Component: Renders semantic HTML, images, and text.
 * Uses AnimatedCard (Client) only for visual entrance effects.
 */
const ServiceSection = () => {
    return (
        <section className="bg-black text-white w-full py-12 px-6 lg:px-12 max-w-[1600px] mx-auto font-sans" aria-label="Our Services">

            {/* ------------------- HEADER ------------------- */}
            <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-10">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-[1px] bg-white/60"></div>
                        <span className="text-xs font-medium tracking-[0.2em] text-[#ffd700] uppercase">
                            What We Do
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1]">
                        Creative Services That Build <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ef4444]">Brands, Experiences</span>, and <br className="hidden md:block" />
                        Visual Stories
                    </h2>
                </div>

                <div className="flex flex-col items-start lg:items-end gap-6 max-w-sm">
                    <p className="text-white/60 text-sm leading-relaxed text-left lg:text-right">
                        A creative partner for bold ideas — blending strategy, design, code, and visual storytelling.
                    </p>
                    <Link
                        href="/services"
                        className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#ffd700] text-black hover:bg-[#ffed4a] transition-all duration-300 font-bold text-sm group"
                    >
                        <span>Our Services</span>
                        <div className="bg-black text-[#ffd700] rounded-full p-0.5 group-hover:bg-black/80 transition-colors">
                            <ArrowUpRight size={12} />
                        </div>
                    </Link>
                </div>
            </div>

            {/* ------------------- GRID LAYOUT ------------------- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

                {/* ROW 1 */}

                {/* 1. Logo & Branding */}
                <AnimatedCard delay={0} className="flex flex-col gap-5 group cursor-pointer">
                    <div className="overflow-hidden rounded-2xl aspect-square bg-gray-900 relative">
                        <Image
                            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop"
                            alt="Logo & Branding"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-medium mb-2 text-white group-hover:text-[#ffd700] transition-colors">Logo & Branding</h3>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                            Strategic identities that define your brand's essence and visual language.
                        </p>
                    </div>
                </AnimatedCard>

                {/* 2. Product Package Designing */}
                <AnimatedCard delay={0.1} className="flex flex-col gap-5 group cursor-pointer">
                    <div className="overflow-hidden rounded-2xl aspect-square bg-gray-900 relative">
                        <Image
                            src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1200&auto=format&fit=crop"
                            alt="Product Package Designing"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-medium mb-2 text-white group-hover:text-[#ffd700] transition-colors">Product Package Designing</h3>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                            Premium packaging design that stands out on the shelf and unboxes an experience.
                        </p>
                    </div>
                </AnimatedCard>

                {/* 3. Website Development */}
                <AnimatedCard delay={0.2} className="flex flex-col gap-5 group cursor-pointer">
                    <div className="overflow-hidden rounded-2xl aspect-square bg-gray-900 relative">
                        <Image
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop"
                            alt="Website Development"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-md p-1.5 rounded-lg border border-white/20">
                            <div className="w-3 h-3 bg-[#ffd700] rounded-full"></div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium mb-2 text-white group-hover:text-[#ffd700] transition-colors">Website Development</h3>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                            High-performance, responsive websites built with modern technologies.
                        </p>
                    </div>
                </AnimatedCard>

                {/* ROW 2 */}

                {/* 4. Social Media Post */}
                <AnimatedCard delay={0.3} className="flex flex-col gap-5 group cursor-pointer">
                    <div className="overflow-hidden rounded-2xl aspect-square bg-gray-900 relative">
                        <Image
                            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop"
                            alt="Social Media Post"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-medium mb-2 text-white group-hover:text-[#ffd700] transition-colors">Social Media Post</h3>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                            Engaging visual content strategies to grow your digital presence.
                        </p>
                    </div>
                </AnimatedCard>

                {/* 5. Banner Designs (Wide Span) */}
                <AnimatedCard delay={0.4} className="md:col-span-2 rounded-2xl overflow-hidden min-h-[300px] relative group bg-gray-900">
                    <Image
                        src="https://images.unsplash.com/photo-1558655146-d09347e0b7a9?q=80&w=1600&auto=format&fit=crop"
                        alt="Banner Designs"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 66vw"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-2xl font-medium text-white mb-2">Banner Designs</h3>
                        <p className="text-white/70 text-sm max-w-md">Impactful large-format visuals for web and print campaigns.</p>
                    </div>
                </AnimatedCard>

                {/* ROW 3 */}

                {/* 6. CTA Box (Wide Span) */}
                <AnimatedCard delay={0.5} className="md:col-span-2 rounded-2xl bg-gradient-to-br from-[#ffd700] to-[#ff9900] p-8 md:p-14 flex flex-col justify-between items-start text-black min-h-[380px] relative overflow-hidden">
                    <h3 className="text-2xl md:text-3xl font-medium leading-snug max-w-xl relative z-10">
                        Whether you're starting from scratch or looking to elevate your brand, we're here to create something impactful — together.
                    </h3>

                    <Link
                        href="/contact"
                        className="relative z-10 bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold mt-8 hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-2"
                    >
                        <span>Let's Connect</span>
                    </Link>

                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                </AnimatedCard>

                {/* 7. Brochure & Print */}
                <AnimatedCard delay={0.6} className="rounded-2xl overflow-hidden min-h-[380px] relative group bg-gray-900">
                    <Image
                        src="https://images.unsplash.com/photo-1586717791821-3f44a5638d0f?q=80&w=1200&auto=format&fit=crop"
                        alt="Brochure & Print"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-2xl font-medium text-white mb-2">Brochure & Print</h3>
                        <p className="text-white/70 text-sm">Tactile design materials that leave a lasting impression.</p>
                    </div>
                </AnimatedCard>

            </div>

        </section>
    );
};

export default ServiceSection;
