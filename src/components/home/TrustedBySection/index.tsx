import React from 'react';
import { brands } from './BrandIcons';
import { Marquee } from './Marquee.client';

/**
 * TrustedBySection - Server Component
 * 
 * Contains:
 * - Semantic HTML tags (section, h3)
 * - Static text content
 * - Layout structure and gradients
 * - Static data fetching/import (brands)
 */
const TrustedBySection = () => {
    return (
        <section
            className="bg-black text-white w-full py-12 m-auto max-w-[1200px] border-b border-white/5 overflow-hidden relative"
            aria-label="Trusted by Brands"
        >
            {/* Semantic Heading for SEO */}
            <div className="text-center mb-10 px-4">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-wide">
                    Trusted by Forward-Thinking Brands
                </h3>
            </div>

            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks - Pure CSS/Static Elements */}
                <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                {/* Client Component for Animation Only */}
                <Marquee speed={30} className="py-4">
                    {brands.map((brand, i) => (
                        <div key={`${brand.name}-${i}`} className="inline-block">
                            {brand.logo}
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default TrustedBySection;
