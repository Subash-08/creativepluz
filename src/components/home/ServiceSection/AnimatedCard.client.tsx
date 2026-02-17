'use client';

import { motion } from 'framer-motion';
import { AnimatedCardProps } from './types';

/**
 * AnimatedCard - Client Component
 * 
 * Wraps content in a motion.div to provide entrance animations.
 * Keeps strict separation: logic here, content passed as children.
 */
export function AnimatedCard({ children, className = "", delay = 0 }: AnimatedCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
