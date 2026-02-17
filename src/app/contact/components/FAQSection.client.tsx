'use client';

import { useState } from 'react';
import { THEME } from '@/config/theme';

interface FAQ {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20" style={{ backgroundColor: THEME.colors.background }}>
            <div className="mx-auto px-6 lg:px-12" style={{ maxWidth: THEME.layout.containerWidth }}>
                <h2 className="text-center text-4xl md:text-5xl font-bold uppercase mb-4" style={{ color: THEME.colors.foreground, fontFamily: THEME.fonts.secondary }}>
                    Frequently Asked Questions
                </h2>

                <p className="text-center max-w-2xl mx-auto mb-12" style={{ color: THEME.colors.muted }}>
                    Common questions about working with Creative Pluz
                </p>

                <div className="max-w-3xl mx-auto divide-y rounded-2xl overflow-hidden animate-on-scroll" style={{ borderColor: THEME.colors.border, borderWidth: '1px', divideColor: THEME.colors.border }}>
                    {faqs.map((faq, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div
                                key={index}
                                itemScope
                                itemType="https://schema.org/Question"
                                style={{ backgroundColor: THEME.colors.background }}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center text-left px-6 py-5 font-semibold text-lg transition duration-300"
                                    style={{
                                        color: THEME.colors.foreground,
                                        backgroundColor: isOpen ? 'rgba(255,255,255,0.05)' : 'transparent',
                                    }}
                                    onMouseEnter={(e) => { !isOpen && (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)') }}
                                    onMouseLeave={(e) => { !isOpen && (e.currentTarget.style.backgroundColor = 'transparent') }}
                                    aria-expanded={isOpen}
                                >
                                    <span itemProp="name">{faq.question}</span>
                                    <span className="text-2xl" style={{ color: THEME.colors.primary }}>
                                        {isOpen ? '−' : '+'}
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                    itemScope
                                    itemType="https://schema.org/Answer"
                                    itemProp="acceptedAnswer"
                                >
                                    <div
                                        className="px-6 pb-6"
                                        style={{ color: THEME.colors.muted }}
                                        itemProp="text"
                                    >
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center mt-12">
                    <p className="mb-6" style={{ color: THEME.colors.muted }}>
                        Have more questions?
                    </p>
                    <a
                        href="tel:+919363024021"
                        className="inline-block border font-bold px-8 py-3 rounded-full transition duration-300"
                        style={{
                            borderColor: THEME.colors.primary,
                            color: THEME.colors.primary,
                            // Hover effect logic
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = THEME.colors.primary;
                            e.currentTarget.style.color = THEME.colors.background;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = THEME.colors.primary;
                        }}
                    >
                        Call Our Experts
                    </a>
                </div>
            </div>
        </section>
    );
}
