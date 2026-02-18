import { THEME } from '@/config/theme';
import React from 'react';
import StatsGrid from './StatsGrid';

export default function Stats() {
    return (
        <div style={{ backgroundColor: THEME.colors.background }}>
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="border-y py-10 bg-white/[0.01]" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                    <StatsGrid />
                </div>
            </div>
        </div>
    );
}
