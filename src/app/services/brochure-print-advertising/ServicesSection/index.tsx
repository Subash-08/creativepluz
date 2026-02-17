import React from 'react';
import ServiceCatalog from './ServiceCatalog.client';

export default function ServicesSection() {
    return (
        <section className="py-16 px-6 lg:px-12 bg-[#050505] relative z-20 overflow-hidden">
            <ServiceCatalog />
        </section>
    );
}
