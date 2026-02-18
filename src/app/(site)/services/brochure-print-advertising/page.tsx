import { Metadata } from 'next';
import CallToAction from '@/components/home/CallToAction';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import GallerySection from './GallerySection';
import MaterialSection from './MaterialSection';
import GridSystemSection from './GridSystemSection';

export const metadata: Metadata = {
    title: 'Brochure & Print Advertising | Creative Pluz',
    description: 'In a digital world, physical media signals authority. We design editorial-grade brochures, catalogs, and print ads that people actually want to keep.',
};

export default function BrochurePage() {
    return (
        <main className="bg-black min-h-screen text-white font-sans selection:bg-[#ffd700] selection:text-black overflow-x-hidden">
            <HeroSection />
            <ServicesSection />
            <GallerySection />
            <MaterialSection />
            <GridSystemSection />
            <CallToAction />
        </main>
    );
}
