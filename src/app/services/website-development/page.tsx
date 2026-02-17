import { Metadata } from 'next';
import CallToAction from '@/components/home/CallToAction';
import HeroSection from './HeroSection';
import TechStackSection from './TechStackSection';
import PerformanceSection from './PerformanceSection';
import SelectedWorkSection from './SelectedWorkSection';
import ServicesSection from './ServicesSection';
import PopularServices from './project-section';
import WebDevelopmentProcess from './process/WebDevelopmentProcess';

export const metadata: Metadata = {
    title: 'Website Development | Creative Pluz',
    description: 'Your website is your 24/7 headquarters. We build pixel-perfect, lightning-fast digital experiences that convert traffic into revenue.',
};

export default function WebDevelopmentPage() {
    return (
        <main className="bg-black min-h-screen text-white font-sans selection:bg-[#ffd700] selection:text-black">
            <HeroSection />
            <TechStackSection />
            <PerformanceSection />
            <PopularServices />
            <WebDevelopmentProcess />
            {/* <SelectedWorkSection /> */}
            <ServicesSection />
            <CallToAction />
        </main>
    );
}
