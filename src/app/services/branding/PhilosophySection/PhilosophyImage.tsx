import React from 'react';
import Image from 'next/image';
import { ScaleIn } from '../ui/Animation.client';

export default function PhilosophyImage() {
    return (
        <ScaleIn className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden">
            <Image
                src="/assets/images/service/OurLogoDesigns/logo-service.jpg"
                alt="Brand Philosophy"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                <p className="text-lg font-medium italic text-white/90">
                    &quot;A brand is the set of expectations, memories, stories and relationships that, taken together, account for a consumer’s decision to choose one product or service over another.&quot;
                </p>
            </div>
        </ScaleIn>
    );
}
