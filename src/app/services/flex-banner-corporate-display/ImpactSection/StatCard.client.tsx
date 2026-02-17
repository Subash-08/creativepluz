'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

export default function StatCard({ icon, value, label }: { icon: ReactNode, value: string, label: string }) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="flex-1 bg-white text-black p-8 lg:p-12 rounded-[2rem] relative overflow-hidden group"
        >
            <div className="absolute top-0 right-0 p-20 bg-gray-100 rounded-full mix-blend-multiply filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
                <div className="mb-6 opacity-40">
                    {icon}
                </div>
                <h3 className="text-6xl lg:text-7xl font-black mb-2 tracking-tighter">{value}</h3>
                <p className="font-bold uppercase tracking-widest text-sm opacity-60">{label}</p>
            </div>
        </motion.div>
    );
}
