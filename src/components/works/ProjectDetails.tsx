'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Check, Zap, Layers, Code, Award } from 'lucide-react';

// Define interface based on your console.log structure
interface ProjectProps {
    _id: string;
    title: string;
    slug: string;
    description: string;
    shortSummary?: string;
    clientCompany?: string;
    clientIndustry?: string;
    clientWebsite?: string;
    clientLocation?: string;
    clientLogo?: { url: string; alt?: string; width?: number; height?: number };
    projectYear?: string;
    projectDuration?: string;
    projectUrl?: string;
    createdAt?: string;

    categoryId?: { name: string } | string;
    category?: { name: string };
    displayCategoryOverride?: string;

    coverImage?: { url: string; alt?: string; width?: number; height?: number };
    heroImageOverlayColor?: string;
    heroImageOverlayOpacity?: number;

    problemStatement?: string;
    objectives?: string;
    challenges?: string[];
    solution?: string[] | string;

    processSteps?: Array<{ title: string; description: string; _id?: string }>;
    galleryImages?: Array<{ url: string; alt?: string; _id?: string }>;
    techStack?: Array<{ name: string; _id: string }>;
    metrics?: Array<{ value: string; label: string }>;
    testimonial?: { quote: string; author: string; role?: string; image?: string };

    targetAudience?: string;
    tags?: string[];
    status?: 'published' | 'draft' | 'archived';
}

const ProjectDetails = ({ project, relatedProjects }: { project: ProjectProps, relatedProjects?: any[] }) => {
    if (!project) return null;
    console.log(project);

    // Safe Fallbacks & Data Mapping
    const categoryName = project.displayCategoryOverride || (typeof project.categoryId === 'object' ? project.categoryId?.name : '') || (typeof project.category === 'object' ? project.category?.name : '') || "Case Study";
    const imageUrl = project.coverImage?.url || "/placeholder.jpg";
    const imageAlt = project.coverImage?.alt || project.title;

    // Use specific fields or fallbacks
    const problemText = project.problemStatement || (project.challenges?.[0] || null);

    // Handle solution text: if array join, else string
    let solutionText = project.objectives || "";
    if (Array.isArray(project.solution) && project.solution.length > 0) {
        solutionText = project.solution.map(s => typeof s === 'string' ? s : (s as any).value || (s as any).name).join(" ");
    } else if (typeof project.solution === 'string') {
        solutionText = project.solution;
    }

    const year = project.projectYear || (project.createdAt ? new Date(project.createdAt).getFullYear().toString() : new Date().getFullYear().toString());

    // Custom Overlay Styles
    const overlayStyle = project.heroImageOverlayColor ? {
        background: `linear-gradient(to top, ${project.heroImageOverlayColor} 0%, ${project.heroImageOverlayColor}40 100%)`,
        opacity: project.heroImageOverlayOpacity || 0.6
    } : {};

    // Determine Project Link (prioritize projectUrl, fallback to clientWebsite)
    const liveLink = project.projectUrl || project.clientWebsite;

    return (
        <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-[#ffd700] selection:text-black">

            {/* ----------------- HERO SECTION (16:9 Aspect Ratio) ----------------- */}
            <section className="relative w-full max-h-screen aspect-video md:aspect-[16/9] overflow-hidden bg-zinc-900 border-b border-white/5">
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    fill
                    className="object-cover opacity-60"
                    priority
                    sizes="100vw"
                />

                {/* Default Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

                {/* Custom User Overlay (if provided) */}
                {project.heroImageOverlayColor && (
                    <div className="absolute inset-0 mix-blend-multiply" style={{ backgroundColor: project.heroImageOverlayColor, opacity: project.heroImageOverlayOpacity || 0.5 }} />
                )}

                <div className="absolute bottom-0 left-0 w-full p-6 lg:p-12 pb-12 z-10 max-w-[1800px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Link href="/portfolio" className="inline-flex items-center gap-2 text-white/60 hover:text-[#ffd700] transition-colors mb-8 text-sm uppercase tracking-widest font-bold group">
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
                        </Link>

                        <div className="flex flex-wrap gap-3 mb-6">
                            <span className="px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-wider">
                                {categoryName}
                            </span>
                            {project.status === 'published' && (
                                <span className="px-3 py-1.5 rounded-full bg-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-wider border border-green-500/20">
                                    Live
                                </span>
                            )}
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8 text-white">
                            {project.title}
                        </h1>

                        <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-sm md:text-base border-t border-white/10 pt-8 w-full max-w-5xl">
                            <div>
                                <span className="block text-white/40 uppercase tracking-widest text-xs font-bold mb-1">Client</span>
                                <div className="flex items-center gap-3">
                                    {project.clientLogo && (
                                        <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white/10 p-1">
                                            <Image src={project.clientLogo.url} alt={project.clientCompany || "Client"} fill className="object-contain" />
                                        </div>
                                    )}
                                    <span className="font-medium">{project.clientCompany || project.title}</span>
                                </div>
                            </div>
                            <div>
                                <span className="block text-white/40 uppercase tracking-widest text-xs font-bold mb-1">Year</span>
                                <span className="font-medium">{year}</span>
                            </div>
                            {project.projectDuration && (
                                <div>
                                    <span className="block text-white/40 uppercase tracking-widest text-xs font-bold mb-1">Duration</span>
                                    <span className="font-medium">{project.projectDuration}</span>
                                </div>
                            )}
                            <div>
                                <span className="block text-white/40 uppercase tracking-widest text-xs font-bold mb-1">Industry</span>
                                <span className="font-medium">{project.clientIndustry || 'Technology'}</span>
                            </div>
                            <div>
                                <span className="block text-white/40 uppercase tracking-widest text-xs font-bold mb-1">Location</span>
                                <span className="font-medium">{project.clientLocation || 'Global'}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">

                {/* ----------------- OVERVIEW ----------------- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
                    <div className="lg:col-span-7">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                            Redefining the standard for {project.clientIndustry || 'digital'} experiences through strategic design.
                        </h2>
                        <div className="text-white/60 text-lg md:text-xl leading-relaxed space-y-6">
                            <p>{project.description || project.shortSummary}</p>

                            {/* Tags Section */}
                            {project.tags && project.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 pt-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs text-white/40 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="bg-[#111] border border-white/5 p-8 rounded-3xl sticky top-24">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Zap className="text-[#ffd700]" size={20} /> Project Highlights
                            </h3>

                            <ul className="space-y-4">
                                {project.targetAudience && (
                                    <li className="flex items-start justify-between border-b border-white/5 pb-4">
                                        <span className="text-white/50 text-sm font-medium">Target Audience</span>
                                        <span className="text-white text-right font-medium text-sm max-w-[60%]">{project.targetAudience}</span>
                                    </li>
                                )}

                                {project.metrics && project.metrics.length > 0 ? (
                                    project.metrics.map((res, i) => (
                                        <li key={i} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0">
                                            <span className="text-white/50 text-sm font-medium">{res.label}</span>
                                            <span className="text-[#ffd700] font-mono font-bold text-lg">{res.value}</span>
                                        </li>
                                    ))
                                ) : (
                                    null
                                )}
                            </ul>

                            {(!project.metrics || project.metrics.length === 0) && !project.targetAudience && (
                                <p className="text-white/40 italic text-sm">Key performance highlights are loading or confidential.</p>
                            )}

                            {liveLink && (
                                <div className="mt-8 pt-6 border-t border-white/5">
                                    <Link
                                        href={liveLink}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 text-white font-bold hover:text-[#ffd700] transition-colors w-full justify-center bg-white/5 py-4 rounded-xl border border-white/10 hover:bg-white/10"
                                    >
                                        Visit Live Site <ArrowUpRight size={18} />
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {project.galleryImages && project.galleryImages.length > 0 && (
                    <section className="mb-20 sm:mb-24 lg:mb-32">

                        <div
                            className="
        columns-1
        sm:columns-2
        lg:columns-3
        gap-4
        sm:gap-6
        lg:gap-8
        space-y-4
        sm:space-y-6
        lg:space-y-8
      "
                        >

                            {project.galleryImages.map((img, i) => {

                                const aspect =
                                    img.width && img.height
                                        ? img.width / img.height
                                        : 1;

                                return (

                                    <motion.div
                                        key={img._id || i}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: i * 0.08 }}
                                        viewport={{ once: true }}
                                        className="
              break-inside-avoid
              w-full
              rounded-2xl
              sm:rounded-3xl
              bg-zinc-900
              border border-white/5
              overflow-hidden
              group
            "
                                    >

                                        <div
                                            className="w-full flex items-center justify-center p-4"
                                            style={{
                                                aspectRatio: img.aspectRatio || `${img.width}/${img.height}` || "4/5"
                                            }}
                                        >

                                            <Image
                                                src={img.url}
                                                alt={img.alt || ""}
                                                width={img.width || 1200}
                                                height={img.height || 1500}
                                                className="
                  max-w-full
                  max-h-[700px]
                  h-auto
                  object-contain
                  transition-transform
                  duration-700
                  group-hover:scale-[1.03]
                "
                                                sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 1024px) 50vw,
                  33vw
                "
                                            />

                                        </div>

                                    </motion.div>

                                );

                            })}

                        </div>

                    </section>
                )}





                {/* ----------------- PROBLEM & SOLUTION ----------------- */}
                {(problemText || solutionText) && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-32 border-t border-white/10 pt-24">
                        {problemText && (
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-8 h-[1px] bg-[#ef4444]"></div>
                                    <span className="text-[#ef4444] font-bold uppercase tracking-widest text-xs">The Challenge</span>
                                </div>
                                <h3 className="text-3xl font-bold mb-6">Identifying the core friction points.</h3>
                                <p className="text-white/60 text-lg leading-relaxed">
                                    {problemText}
                                </p>
                            </div>
                        )}
                        {solutionText && (
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-8 h-[1px] bg-[#ffd700]"></div>
                                    <span className="text-[#ffd700] font-bold uppercase tracking-widest text-xs">The Solution</span>
                                </div>
                                <h3 className="text-3xl font-bold mb-6">A design-led strategic overhaul.</h3>
                                <p className="text-white/60 text-lg leading-relaxed">
                                    {solutionText}
                                </p>
                            </div>
                        )}
                    </div>
                )}

                {/* ----------------- PROCESS ----------------- */}
                {project.processSteps && project.processSteps.length > 0 && (
                    <div className="mb-32">
                        <h3 className="text-4xl md:text-5xl font-bold mb-16 text-center">Our Process</h3>
                        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0 space-y-12">
                            {project.processSteps.map((step, i) => (
                                <motion.div
                                    key={step._id || i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative pl-12 md:pl-24 group"
                                >
                                    {/* Dot */}
                                    <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-white rounded-full group-hover:bg-[#ffd700] group-hover:scale-150 transition-all duration-300 ring-4 ring-[#050505]" />

                                    <span className="text-white/20 text-6xl md:text-8xl font-black absolute -top-8 left-10 md:left-20 -z-10 opacity-20 select-none">
                                        0{i + 1}
                                    </span>

                                    <h4 className="text-2xl md:text-3xl font-bold mb-3">{step.title}</h4>
                                    <p className="text-white/60 max-w-xl text-lg">{step.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ----------------- TECH STACK ----------------- */}
                {project.techStack && project.techStack.length > 0 && (
                    <div className="bg-[#111] rounded-[3rem] p-10 md:p-20 text-center mb-32 border border-white/5">
                        <h3 className="text-2xl font-bold mb-10 flex items-center justify-center gap-3">
                            <Code className="text-[#ffd700]" /> Technologies Used
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {project.techStack.map((tech) => (
                                <div key={tech._id} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/80 font-medium text-sm hover:bg-white hover:text-black transition-all cursor-default">
                                    {tech.name}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ----------------- TESTIMONIAL ----------------- */}
                {project.testimonial && project.testimonial.quote && (
                    <div className="max-w-4xl mx-auto text-center mb-32">
                        <div className="mb-8 flex justify-center text-[#ffd700]">
                            <Award size={48} />
                        </div>
                        <blockquote className="text-3xl md:text-5xl font-medium leading-tight mb-10 text-white">
                            "{project.testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center justify-center gap-4">
                            {(() => {
                                const tImage = project.testimonial.image;
                                const tImageUrl = typeof tImage === 'string' ? tImage : (tImage as any)?.url;
                                const hasImage = tImageUrl && tImageUrl.trim().length > 0;

                                return (
                                    <>
                                        {hasImage ? (
                                            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20">
                                                <Image src={tImageUrl} alt={project.testimonial.author} fill className="object-cover" />
                                            </div>
                                        ) : (
                                            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-[#ffd700] font-bold text-lg border border-white/20">
                                                {project.testimonial.author.charAt(0)}
                                            </div>
                                        )}
                                    </>
                                );
                            })()}
                            <div className="text-left">
                                <div className="font-bold text-lg text-white">{project.testimonial.author}</div>
                                {project.testimonial.role && (
                                    <div className="text-[#ffd700] text-sm font-bold uppercase tracking-wide">{project.testimonial.role}</div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* ----------------- NEXT PROJECT FOOTER ----------------- */}
            <div className="border-t border-white/10 bg-[#0a0a0a] py-32 text-center group relative overflow-hidden">
                <div className="relative z-10">
                    <p className="text-white/40 uppercase tracking-widest text-sm font-bold mb-6">Next Project</p>
                    <Link href="/portfolio" className="inline-block">
                        <h2 className="text-5xl md:text-8xl font-black uppercase text-white group-hover:text-[#ffd700] transition-colors duration-300">
                            View All Work
                        </h2>
                    </Link>
                </div>
                {/* Optional BG Hover Effect */}
                <div className="absolute inset-0 bg-[#ffd700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

        </div>
    );
};

export default ProjectDetails;
