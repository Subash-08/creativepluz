import React from 'react';
import { HeroStateProvider } from './HeroStateProvider';
import HeroBackground from './HeroBackground';
import HeroLeft from './HeroLeft.client';
import HeroRight from './HeroRight.client';
import { ServiceType } from './types';

// Static Data (Server Side)
const SERVICES: ServiceType[] = [
    {
        id: "branding",
        title: "Logo & Branding",
        description: "Crafting timeless brand identities that communicate your vision and leave a lasting impression.",
        image: "/assets/images/home/2.avif"
    },
    {
        id: "product-package-design",
        title: "Product Package Designing",
        description: "Creating impactful packaging that stands out on the shelf and enhances the unboxing experience.",
        image: "/assets/images/home/7.avif"
    },
    {
        id: "social-media",
        title: "Social Media Post",
        description: "Engaging and trend-driven social media content designed to grow your audience and engagement.",
        image: "/assets/images/home/9.avif"
    },
    {
        id: "banner-design",
        title: "Banner Designs",
        description: "High-quality banner designs for web and print that capture attention and drive conversions.",
        image: "/assets/images/home/6.avif"
    },
    {
        id: "brochure-print",
        title: "Brochure & Print",
        description: "Professional print materials including brochures, flyers, and catalogs that effectively communicate your message.",
        image: "/assets/images/home/1.jpg"
    },
    {
        id: "web-development",
        title: "Website Development",
        description: "Custom, responsive, and performance-optimized websites built to scale your business online.",
        image: "/assets/images/home/3.avif"
    }
];

export default function HeroSection() {
    return (
        <HeroStateProvider services={SERVICES}>
            <section className="relative h-[100svh] w-full overflow-hidden text-white">
                <HeroBackground />

                <div className="relative z-10 h-full max-w-[1800px] mx-auto px-6 lg:px-12 flex flex-col justify-center">
                    {/* Main Grid Layout */}
                    <div className="grid lg:grid-cols-5 gap-10 h-full">
                        <div className="lg:col-span-3 flex flex-col justify-end pb-20">
                            <HeroLeft />
                        </div>
                        <div className="hidden lg:flex lg:col-span-2 flex-col justify-start pt-32">
                            <HeroRight />
                        </div>
                    </div>
                </div>
            </section>
        </HeroStateProvider>
    );
}
