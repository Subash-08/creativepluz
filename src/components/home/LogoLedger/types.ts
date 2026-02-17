export interface LogoItem {
    src: string;
    name: string;
}

export interface LogoMarqueeProps {
    logos: LogoItem[];
    speed?: number;
    reverse?: boolean;
}
