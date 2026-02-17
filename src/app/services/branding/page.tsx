import { Metadata } from 'next';
import HeroSection from './HeroSection';
import PhilosophySection from './PhilosophySection';
import ServicesSection from './ServicesSection';
import ProcessSection from './ProcessSection';
import WorkSection from './WorkSection';
import ShowcaseSection from './ShowcaseSection';
import CallToAction from '@/components/home/CallToAction';

export const metadata: Metadata = {
    title: 'Branding | Creative Pluz',
    description: 'We engineer brands that bypass the brain and aim straight for the gut. A strategic blend of visual psychology, market positioning, and immaculate craft.',
};

export default function BrandingPage() {
    return (
        <main className="bg-black min-h-screen text-white font-sans selection:bg-[#ffd700] selection:text-black">
            <HeroSection />
            <PhilosophySection />
            <ServicesSection />
            <ProcessSection />
            <WorkSection />
            <ShowcaseSection />
            <CallToAction />
        </main>
    );
}
