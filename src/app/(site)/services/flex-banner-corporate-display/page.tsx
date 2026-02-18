import { Metadata } from 'next';
import CallToAction from '@/components/home/CallToAction';
import HeroSection from './HeroSection';
import FormatSection from './FormatSection';
import GallerySection from './GallerySection';
import ImpactSection from './ImpactSection';
import ProcessSection from './ProcessSection';

export const metadata: Metadata = {
    title: 'Banner & Corporate Display | Creative Pluz',
    description: 'From 970px web headers to 50ft billboards. We design high-impact visuals that command attention in a crowded digital and physical world.',
};

export default function BannerPage() {
    return (
        <main className="bg-black min-h-screen text-white font-sans selection:bg-[#ffd700] selection:text-black">
            <HeroSection />
            <FormatSection />
            <GallerySection />
            <ImpactSection />
            <ProcessSection />
            <CallToAction />
        </main>
    );
}
