import { LucideIcon } from 'lucide-react';

export interface PlatformTab {
    name: string;
    icon: LucideIcon;
    color: string;
    features: string[];
    desc: string;
}
