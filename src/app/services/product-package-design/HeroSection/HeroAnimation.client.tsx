'use client';

import { motion } from 'framer-motion';

export const FadeInRight = ({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay }}
        className={className}
    >
        {children}
    </motion.div>
);
