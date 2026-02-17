import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export interface Brand {
    name: string;
    logo: ReactNode;
}

export interface TrustedBySectionProps {
    className?: string;
}

export interface MarqueeProps {
    children: ReactNode;
    direction?: 'left' | 'right';
    speed?: number; // Duration in seconds
    className?: string;
}
