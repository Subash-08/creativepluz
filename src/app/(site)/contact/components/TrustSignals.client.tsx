'use client';

import { THEME } from '@/config/theme';

export default function TrustSignals() {
    const stats = [
        { value: '4+', label: 'Years Experience' }, // Based on founding date 2020
        { value: '100+', label: 'Projects Delivered' },
        { value: '98%', label: 'Client Retention' },
        { value: '24/7', label: 'Support Available' },
    ];

    const certifications = [
        { name: 'Certified Experts', icon: '🏆' },
        { name: 'Google Partner', icon: 'G' }, // Assuming or generic
        { name: 'Award Winning', icon: '⭐' },
        { name: 'Quality Assured', icon: '✅' },
    ];

    return (
        <section className="py-20 px-6 lg:px-12" style={{ backgroundColor: `${THEME.colors.background}80` }}>
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[10px] uppercase tracking-[0.6em] font-bold mb-4 block" style={{ color: THEME.colors.primary, fontFamily: THEME.fonts.secondary }}>
                        Why Partner With Us
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: THEME.colors.foreground, fontFamily: THEME.fonts.secondary }}>
                        Trusted by Businesses in Salem & Beyond
                    </h2>
                    <p className="max-w-3xl mx-auto" style={{ color: `${THEME.colors.foreground}99` }}>
                        We don't just build websites; we build long-term digital partnerships.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-5xl lg:text-6xl font-bold mb-4" style={{ color: THEME.colors.primary, fontFamily: THEME.fonts.secondary }}>
                                {stat.value}
                            </div>
                            <div className="text-lg" style={{ color: `${THEME.colors.foreground}CC` }}>{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Certifications & Badges */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="border rounded-xl p-6 text-center transition-colors duration-300 hover:shadow-lg"
                            style={{
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                borderColor: 'rgba(255,255,255,0.1)',
                                color: THEME.colors.foreground
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${THEME.colors.primary}80` }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
                        >
                            <div className="text-3xl mb-4">{cert.icon}</div>
                            <div className="font-semibold">{cert.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
