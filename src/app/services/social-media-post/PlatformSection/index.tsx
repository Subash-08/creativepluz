import React from 'react';
import PlatformTabs from './PlatformTabs.client';

export default function PlatformSection() {
    return (
        <section className="py-16 px-6 lg:px-12 bg-black border-t border-white/5">
            <PlatformTabs />
        </section>
    );
}
