import React from 'react';
import Image from 'next/image';
import Marquee from './Marquee.client';
import Link from 'next/link';

export default function ShowcaseSection() {
    return (
        <section className="py-10 overflow-hidden bg-black">
            <div className="mb-12 px-6 lg:px-12 max-w-[1600px] mx-auto flex justify-between items-end">
                <h2 className="text-4xl font-bold text-white">Recent Identities</h2>
                <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 text-white text-sm font-medium tracking-wide hover:text-[#ffd700] transition-colors duration-300"
                >
                    Explore more
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>

            </div>

            {/* Marquee Effect */}
            <Marquee>
                {[
                    '/assets/images/service/OurLogoDesigns/LOGO_9.png',
                    '/assets/images/service/OurLogoDesigns/LOGO_10.png',
                    '/assets/images/service/OurLogoDesigns/LOGO_11.png',
                    '/assets/images/service/OurLogoDesigns/LOGO_12.png',
                    '/assets/images/service/OurLogoDesigns/LOGO_13.png',
                    '/assets/images/service/OurLogoDesigns/LOGO_14.png',
                    '/assets/images/service/OurLogoDesigns/LOGO_15.png',
                    '/assets/images/service/OurLogoDesigns/LOGO_16.png',
                    '/assets/images/service/OurLogoDesigns/LOGO_17.png',
                    '/assets/images/service/OurLogoDesigns/LOGO_18.png',
                    '/assets/images/service/OurLogoDesigns/LOGO_19.png',
                    '/assets/images/service/OurLogoDesigns/LOGO_20.png',
                    '/assets/images/service/OurLogoDesigns/LOGO_21.png',
                    '/assets/images/service/OurLogoDesigns/LOGO_22.png',
                    '/assets/images/service/OurLogoDesigns/LOGO_24.png',
                ].map((src, index) => (
                    <div key={index} className="w-[300px] md:w-[400px] aspect-square rounded-3xl overflow-hidden relative group shrink-0 mx-4">
                        <Image
                            src={src}
                            alt={`Identity ${index + 1}`}
                            width={400}
                            height={400}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    </div>
                ))}
            </Marquee>
        </section>
    );
}
