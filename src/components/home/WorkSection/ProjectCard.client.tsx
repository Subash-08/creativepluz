'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ProjectCardProps } from './types';

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
    // Determine image URL safely
    const imageUrl = project.thumbnail?.url || project.coverImage?.url || '/images/placeholder-project.jpg';
    // Get category name safely
    const categoryName = typeof project.categoryId === 'object' && project.categoryId !== null
        ? (project.categoryId as any).name
        : 'Project';

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="group cursor-pointer relative w-full h-[450px] md:h-[500px] rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl"
        >
            <Link href={`/works/${project.slug}`} className="block w-full h-full relative">
                {/* Image Background */}
                <div className="absolute inset-0 w-full h-full">
                    <div className="absolute inset-0 bg-black/20 z-10 transition-colors duration-500 group-hover:bg-black/40" />
                    <Image
                        src={imageUrl}
                        alt={project.thumbnail?.alt || project.title}
                        fill
                        className="object-cover transition-transform duration-1000 ease-[0.21,0.47,0.32,0.98]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                {/* Gradient Overlay for Text Readability - Always visible at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 transition-all duration-500 z-10" />

                {/* Floating Top Right Arrow */}
                <div className="absolute top-6 right-6 z-20 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md flex items-center justify-center rounded-full border border-white/20 hover:bg-[#ffd700] hover:border-[#ffd700] hover:text-black transition-colors duration-300">
                        <ArrowUpRight size={24} />
                    </div>
                </div>

                {/* Content Container (Bottom) */}
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-2">

                    {/* Category & Title */}
                    <div className="mb-1 transition-all duration-500 group-hover:mb-0">
                        <div className="flex items-center gap-3 mb-3 opacity-80 group-hover:opacity-100 transition-opacity">
                            <div className="w-8 h-[1px] bg-[#ffd700]"></div>
                            <span className="text-xs font-semibold tracking-wider text-[#ffd700] uppercase drop-shadow-md">
                                {categoryName}
                            </span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
                            {project.title}
                        </h3>
                    </div>

                    {/* Hidden/Revealed Content (Description & Tags) */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                        <div className="overflow-hidden">
                            <p className="text-white/80 text-base leading-relaxed mb-5 line-clamp-3 pt-3 border-t border-white/20">
                                {project.shortSummary}
                            </p>

                            {/* Tech Tags */}
                            {project.tags && project.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 pb-2">
                                    {project.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className="px-3 py-1 text-xs text-white/90 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};
