import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
    icon: LucideIcon;
    title: string;
    desc: string;
}

export interface ServiceCardProps extends ServiceItem {
    delay?: number;
}
