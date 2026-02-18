import { LucideIcon } from 'lucide-react';

export interface FloatingReactionProps {
    icon: LucideIcon;
    color: string;
    x: number;
    y: number;
    delay: number;
}

export interface PhoneFrameProps {
    src: string;
    x: string;
    y: string;
    scale: number;
    rotate: number;
    delay: number;
    type: 'tiktok' | 'linkedin' | 'insta';
    className?: string;
}
