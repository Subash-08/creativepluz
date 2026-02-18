import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import HeroSection from '@/components/home/HeroSection';
import Container from '@/components/layout/Container';
import WorkGrid from '@/components/works/WorkGrid';
import { getFeaturedProjects } from '@/lib/data/project.queries';
import { THEME } from '@/config/theme';
import TrustedBySection from '@/components/home/TrustedBySection';
import ServiceSection from '@/components/home/ServiceSection';
import AboutSection from '@/components/home/AboutSection';
import WorkSection from '@/components/home/WorkSection';
import StackedCaseStudies from '@/components/home/StackedCaseStudies';
import LogoLedger from '@/components/home/LogoLedger';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';

export const revalidate = 60; // ISR

export default async function HomePage() {
    console.log('[HomePage] Rendering...');
    const featuredProjects = await getFeaturedProjects();
    console.log('[HomePage] Projects fetched:', featuredProjects?.length);

    return (
        <main style={{ backgroundColor: THEME.colors.background, color: THEME.colors.foreground, minHeight: '100vh' }}>
            {/* Hero Section */}
            <HeroSection />
            <TrustedBySection />
            <AboutSection />
            <ServiceSection />
            <WorkSection />
            <StackedCaseStudies />
            {/* <LogoLedger /> */}
            <CallToAction />
            <Testimonials />

        </main>
    );
}
