import { Metadata } from 'next';
import CallToAction from '@/components/home/CallToAction';
import HeroSection from './HeroSection';
import ImpactSection from './ImpactSection';
import ServicesSection from './ServicesSection';
import GallerySection from './GallerySection';
import MaterialsSection from './MaterialsSection';
import ProcessSection from './ProcessSection';

export const metadata: Metadata = {
    title: 'Packaging Design | Creative Pluz',
    description: 'Packaging is the silent salesman. We craft tactile, structural, and visual experiences that trigger the impulse to touch, hold, and buy.',
};

export default function PackagingPage() {
    return (
        <main className="bg-black min-h-screen text-white font-sans selection:bg-[#ffd700] selection:text-black">
            <HeroSection />
            <ImpactSection />
            <ServicesSection />
            <GallerySection />
            <MaterialsSection />
            <ProcessSection />
            <CallToAction />
        </main>
    );
}
