'use client';

import { motion } from 'framer-motion';

export const FadeInUp = ({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
        className={className}
    >
        {children}
    </motion.div>
);

export const FadeIn = ({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) => (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
        className={className}
    >
        {children}
    </motion.div>
);

export const ScaleIn = ({ children, delay = 0, className, initialScale = 0.95 }: { children: React.ReactNode, delay?: number, className?: string, initialScale?: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: initialScale }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
        className={className}
    >
        {children}
    </motion.div>
);

export const TextReveal = ({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
        className={className}
    >
        {children}
    </motion.div>
);

export const FadeInRight = ({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
        className={className}
    >
        {children}
    </motion.div>
);
