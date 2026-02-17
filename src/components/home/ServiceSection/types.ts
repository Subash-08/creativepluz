import { ReactNode } from 'react';

export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    image: string;
    span?: string; // Tailwind class for grid span (e.g., 'md:col-span-2')
}

export interface AnimatedCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}
