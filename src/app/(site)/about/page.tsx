import React from 'react';
import type { Metadata } from 'next';
import { COMPANY_DETAILS, LOCATION, GEO_KEYWORDS } from '@/lib/taxonomy';
import { AboutStructuredData } from './structured-data';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Story from './components/Story';
import Impact from './components/Impact';
import Team from './components/Team';
import CTA from './components/CTA';

export const metadata: Metadata = {
    title: 'About Creative Pluz: Salem\'s Trusted Design & Print Partner',
    description: `For over 8 years, ${COMPANY_DETAILS.name} has been helping Salem businesses look professional with integrated graphic design and printing services.`,

    // Additional SEO Keywords
    keywords: [
        'creative agency salem',
        'graphic design company in salem',
        'printing services salem',
        'brochure design salem',
        'branding agency tamil nadu',
        ...GEO_KEYWORDS.slice(0, 5)
    ],

    openGraph: {
        title: 'About Creative Pluz | Designing Salem\'s Success Stories',
        description: 'From start-ups to established brands, we provide integrated design and printing strategies that drive results.',
        type: 'website',
        locale: 'en_IN',
        siteName: COMPANY_DETAILS.name,
    },

    alternates: {
        canonical: 'https://creativepluz.com/about',
    }
};

import { THEME } from '@/config/theme';

export default function AboutPage() {
    return (
        <div className="overflow-x-hidden" style={{ backgroundColor: THEME.colors.background }}>
            {/* AIO: JSON-LD Structured Data */}
            <AboutStructuredData />

            {/* Semantic Header (Hidden/Visually Integrated via Hero) */}
            <h1 className="sr-only">Designing & Printing Salem's Success Stories Since 2015</h1>

            <Hero />

            <Manifesto />

            <Story />

            <Impact />

            <Team />

            <CTA />
        </div>
    );
}
