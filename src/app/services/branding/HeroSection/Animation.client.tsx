'use client';

import { motion } from 'framer-motion';
import { THEME } from '@/config/theme';

export const FadeInUp = ({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay }}
        className={className}
    >
        {children}
    </motion.div>
);

export const TextReveal = ({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) => (
    <motion.span
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay, ease: "circOut" }}
        className={`block overflow-hidden ${className}`}
    >
        {children}
    </motion.span>
);

export const ExpandWidth = ({ delay = 0, className }: { delay?: number, className?: string }) => (
    <motion.div
        initial={{ width: 0 }}
        animate={{ width: "auto" }}
        transition={{ delay, duration: 0.8 }}
        className={className}
    />
);
