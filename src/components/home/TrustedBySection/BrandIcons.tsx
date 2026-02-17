import Image from 'next/image';
import { Brand } from './types';

export const brands: Brand[] = [
    {
        name: "krona",
        logo: (
            <div className="flex items-center gap-3 cursor-pointer group">
                <Image
                    src="/assets/images/service/customer-logos/bg/11.png"
                    alt="krona"
                    width={100}
                    height={100}
                    className="h-15 w-auto object-contain duration-300 "
                />
            </div>
        )
    },
    {
        name: "velto",
        logo: (
            <div className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer group">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white group-hover:text-white transition-colors">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                </svg>
                <span className="text-2xl font-medium tracking-tight text-white/90 group-hover:text-white transition-colors">velto</span>
            </div>
        )
    },
    {
        name: "sonar",
        logo: (
            <div className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer group">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-white transition-colors">
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
                <span className="text-3xl font-bold tracking-tighter text-white group-hover:text-white transition-colors">sonar</span>
            </div>
        )
    },
    {
        name: "liva",
        logo: (
            <div className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer group">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-white transition-colors">
                    <path d="M7 3C4.239 3 2 5.239 2 8c0 2.235 1.5 4.5 4 6 2.5-1.5 4-3.765 4-6 0-2.761-2.239-5-5-5z" />
                    <path d="M17 3c-2.761 0-5 2.239-5 5 0 2.235 1.5 4.5 4 6 2.5-1.5 4-3.765 4-6 0-2.761-2.239-5-5-5z" />
                    <path d="M12 10v11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    <path d="M8 21h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
                <span className="text-2xl font-semibold tracking-tight text-white/90 group-hover:text-white transition-colors">liva</span>
            </div>
        )
    },
    {
        name: "krona_repeat",
        logo: (
            <div className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer group">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white group-hover:text-white transition-colors">
                    <path d="M3 21h18M5 21V7l8-4 8 4v14" />
                    <path d="M13 11v10" />
                    <path d="M9 11v10" />
                </svg>
                <span className="text-2xl font-medium tracking-tight text-white/90 group-hover:text-white transition-colors">krona</span>
            </div>
        )
    },
    {
        name: "icon_only",
        logo: (
            <div className="opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer group">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white group-hover:text-white transition-colors">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94" />
                </svg>
            </div>
        )
    }
];
