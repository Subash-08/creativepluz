import React from 'react';
import { LogoMarquee } from './LogoMarquee.client';
import { LogoItem } from './types';

// Static Data within Server Component
const logoNames = [
    "Partner Brand", "Valued Client", "Creative Partner", "Brand Collab",
    "Industry Leader", "Strategic Partner", "Retail Partner", "Corporate Client",
    "Innovative Startup", "Tech Partner", "Growth Brand", "Global Client",
    "Enterprise Customer", "Trusted Brand", "Long-term Partner", "Service Client",
    "Regional Leader", "Market Player", "Business Partner", "Collaborator"
];

const clientLogos: LogoItem[] = logoNames.map((name) => ({
    // Using placeholder service as requested
    src: `https://placehold.co/400x200/ffffff/000000/png?text=${encodeURIComponent(name)}`,
    name: name
}));

const LogoLedger = () => {
    return (
        <section className="py-24 bg-black overflow-hidden border-t border-white/5 font-sans">
            <div className="max-w-[1920px] mx-auto px-6 md:px-12 mb-16 md:mb-24">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-px bg-white/20"></div>
                    <span className="text-[#ffd700] font-bold uppercase tracking-[0.4em] opacity-80 text-sm">
                        The Ledger
                    </span>
                </div>
                <h2 className="text-4xl md:text-7xl lg:text-8xl font-sans font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ef4444] uppercase leading-[0.9] italic tracking-tighter">
                    Verified <br /> <span className="text-zinc-600">Identities.</span>
                </h2>
            </div>

            <div className="space-y-6">
                {/* Forward Marquee */}
                <LogoMarquee logos={clientLogos.slice(0, 10)} speed={45} />

                {/* Reverse Marquee */}
                <LogoMarquee logos={clientLogos.slice(10)} speed={45} reverse={true} />
            </div>
        </section>
    );
};

export default LogoLedger;
