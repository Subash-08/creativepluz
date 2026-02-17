import React from 'react'; // Server component
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem } from './types';

export default function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
    return (
        <div className="sticky top-24 min-h-[80vh] flex items-center justify-center">
            <div className="w-full h-[70vh] rounded-[32px] overflow-hidden relative border border-white/10 shadow-2xl bg-[#0a0a0a] group">
                {/* Browser Header */}
                <div className="absolute top-0 left-0 w-full h-12 bg-black/80 backdrop-blur-md border-b border-white/5 z-20 flex items-center px-6 gap-3">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="ml-auto text-xs font-mono text-white/40">{project.client}.com</div>
                </div>

                {/* Content */}
                <img src={project.img} alt={project.client} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <div className="flex justify-between items-end">
                        <div>
                            <span className="px-3 py-1 bg-[#ffd700] text-black text-xs font-bold uppercase rounded mb-4 inline-block">
                                {project.type}
                            </span>
                            <h3 className="text-5xl font-bold text-white">{project.client}</h3>
                        </div>
                        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all cursor-pointer">
                            <ArrowUpRight size={24} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
