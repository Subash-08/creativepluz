import React from 'react';
import { cn } from '@/lib/utils';
import { THEME } from '@/config/theme';

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: 'sm' | 'md' | 'lg';
}

export default function Loader({ size = 'md', className, ...props }: LoaderProps) {
    return (
        <div
            className={cn("flex items-center justify-center", className)}
            {...props}
        >
            <div className="relative">
                <div className="h-12 w-12 rounded-full border-t-2 border-b-2 border-primary animate-spin"></div>
                <div className="absolute top-0 left-0 h-12 w-12 rounded-full border-t-2 border-b-2 border-secondary animate-ping opacity-20"></div>
            </div>
        </div>
    );
}
