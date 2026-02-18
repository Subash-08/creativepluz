import { Metadata } from 'next';
import CallToAction from '@/components/home/CallToAction';
import HeroSection from './HeroSection';
import MetricsSection from './MetricsSection';
import FormulaSection from './FormulaSection';
import GridSection from './GridSection';
import PlatformSection from './PlatformSection';

export const metadata: Metadata = {
    title: 'Social Media Marketing | Creative Pluz',
    description: 'We engineer social-first strategies that hack the algorithm and turn passive scrollers into cult-like communities.',
};

export default function SocialMediaPage() {
    return (
        <main className="bg-black min-h-screen text-white font-sans selection:bg-[#ffd700] selection:text-black">
            <HeroSection />
            <MetricsSection />
            <FormulaSection />
            <GridSection />
            <PlatformSection />
            <CallToAction />
        </main>
    );
}
