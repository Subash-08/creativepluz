import React, { Suspense } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getLatestProjects } from '@/lib/data/project.queries';
import { ProjectCard } from './ProjectCard.client';
import { WorkSkeleton } from './WorkSkeleton';

// Internal Async Component to handling Data Fetching
const ProjectList = async () => {
    const projects = await getLatestProjects();

    // If no projects, render nothing or a fallback (optional)
    if (!projects || projects.length === 0) {
        return (
            <div className="col-span-1 md:col-span-2 text-center py-20 text-white/40">
                <p>No projects fetched. Please check back later.</p>
            </div>
        );
    }

    // Cast projects strictly if needed, but 'lean()' usually returns adequate objects
    // We pass them to Client Component
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {projects.map((project: any, index: number) => (
                <ProjectCard key={project._id} project={project} index={index} />
            ))}
        </div>
    );
};

// Main Component
const WorkSection = () => {
    return (
        <section className="bg-black text-white w-full py-12 px-6 lg:px-12 max-w-[1600px] mx-auto font-sans border-t border-white/5 relative overflow-hidden">

            {/* Background Ambience */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ffd700]/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Header */}
            <div className="text-center mb-20 max-w-3xl mx-auto relative z-10">
                <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-8 h-[1px] bg-white/60"></div>
                    <span className="text-xs font-medium tracking-[0.2em] text-[#ffd700] uppercase">
                        Our Work
                    </span>
                    <div className="w-8 h-[1px] bg-white/60"></div>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 leading-[1.1]">
                    Selected Work That <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ef4444]">Speaks for Itself</span>
                </h2>
                <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
                    A look at the brands, websites, and visuals we've brought to life — combining strategy, creativity, and craft.
                </p>
            </div>

            {/* Projects Grid with Suspense */}
            <Suspense fallback={<WorkSkeleton />}>
                <ProjectList />
            </Suspense>

            {/* Footer / View All */}
            <div className="mt-20 flex justify-center">
                <Link
                    href="/works"
                    className="group inline-flex items-center gap-2 border-b border-whitepb-1 hover:text-[#ffd700] transition-colors duration-300"
                >
                    <span className="text-sm font-medium tracking-widest uppercase">View All Projects</span>
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
            </div>

        </section>
    );
};

export default WorkSection;
