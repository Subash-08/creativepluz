import { LucideIcon } from 'lucide-react';

export interface LogoItem {
    name: string;
    industry: string;
    icon: LucideIcon;
    image?: string;
}

export interface LogoGridProps extends LogoItem {
    delay?: number;
}
