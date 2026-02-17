import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CaseStudySectionProps } from './types';

export const CaseStudySection = ({
    project,
    index,
    total,
}: CaseStudySectionProps) => {

    // Safe accessor for category
    const categoryName =
        typeof project.categoryId === 'object' && project.categoryId !== null
            ? (project.categoryId as any).name
            : 'Project';


    // Image URL fallback
    const imageUrl =
        project.coverImage?.url ||
        project.thumbnail?.url ||
        '/images/placeholder-project.jpg';


    // Challenge / Solution fallback
    const challengeText =
        project.problemStatement ||
        (project.challenges && project.challenges.length > 0
            ? project.challenges[0]
            : null);

    const solutionText =
        project.objectives ||
        (project.solution && project.solution.length > 0
            ? project.solution[0]
            : null);


    // Stacking order
    const zIndex = index + 10;


    return (

        <section
            className="
                sticky
                top-[110px]
                md:top-[170px]
                min-h-[450px]
                md:min-h-[540px]
                w-full
                flex
                items-center
                bg-[#050505]
                isolate
                py-8
                md:py-6
                border-b border-[#ffd700]/10
            "
            style={{ zIndex }}
        >

            {/* subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />



            <div className="relative max-w-[1400px] mx-auto w-full px-4 md:px-6 lg:px-12">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

                    {/* LEFT — CONTENT */}
                    <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-none">

                        {/* Category + index */}
                        <div className="flex items-center gap-4 mb-4 md:mb-6">

                            <span className="
                                px-3 py-1
                                text-xs
                                font-medium
                                text-[#ffd700]
                                border border-[#ffd700]/30
                                rounded-full
                                uppercase
                                tracking-wider
                            ">
                                {categoryName}
                            </span>

                            <span className="text-xs text-white/40 font-mono">
                                {String(index + 1).padStart(2, '0')} /
                                {String(total).padStart(2, '0')}
                            </span>

                        </div>


                        {/* Title */}
                        <h3 className="
                            text-2xl
                            md:text-4xl
                            lg:text-5xl
                            font-medium
                            text-white
                            leading-tight
                            tracking-tight
                            mb-4
                            md:mb-6
                        ">

                            <Link
                                href={`/works/${project.slug}`}
                                className="hover:text-[#ffd700] transition-colors duration-300"
                            >
                                {project.title}
                            </Link>

                        </h3>


                        {/* Description */}
                        {(project.description || project.shortSummary) && (
                            <p className="
                                text-white/60
                                text-base
                                md:text-lg
                                leading-relaxed
                                mb-8
                                max-w-lg
                            ">
                                {project.description || project.shortSummary}
                            </p>
                        )}



                        {/* Challenge / Solution */}
                        {(challengeText || solutionText) && (

                            <div className="space-y-5 mb-8">

                                {challengeText && (
                                    <div>

                                        <div className="
                                            text-xs
                                            uppercase
                                            tracking-widest
                                            text-white/40
                                            mb-1
                                        ">
                                            Challenge
                                        </div>

                                        <div className="
                                            text-sm
                                            text-white/60
                                            leading-relaxed
                                        ">
                                            {challengeText}
                                        </div>

                                    </div>
                                )}


                                {solutionText && (
                                    <div>

                                        <div className="
                                            text-xs
                                            uppercase
                                            tracking-widest
                                            text-white/40
                                            mb-1
                                        ">
                                            Solution
                                        </div>

                                        <div className="
                                            text-sm
                                            text-white/60
                                            leading-relaxed
                                        ">
                                            {solutionText}
                                        </div>

                                    </div>
                                )}

                            </div>

                        )}



                        {/* Metrics */}
                        {project.metrics && project.metrics.length > 0 && (

                            <div className="flex gap-6 md:gap-10 mb-6 md:mb-8">

                                {project.metrics.slice(0, 3).map((metric, idx) => (

                                    <div key={idx}>

                                        <div className="
                                            text-2xl
                                            md:text-3xl
                                            font-semibold
                                            text-white
                                            tracking-tight
                                        ">
                                            {metric.value}
                                        </div>

                                        <div className="
                                            text-xs
                                            text-white/40
                                            uppercase
                                            tracking-wider
                                        ">
                                            {metric.label}
                                        </div>

                                    </div>

                                ))}

                            </div>

                        )}



                        {/* CTA */}
                        <Link
                            href={`/works/${project.slug}`}
                            className="
                                inline-flex
                                items-center
                                gap-3
                                text-white
                                hover:text-[#ffd700]
                                transition-colors
                                duration-300
                                group
                            "
                        >

                            <span className="font-medium">
                                View Case Study
                            </span>

                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="
                                    transform
                                    group-hover:translate-x-1
                                    transition-transform
                                "
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>

                        </Link>

                    </div>



                    {/* RIGHT — IMAGE */}
                    <div className="lg:col-span-7 relative group order-first lg:order-none mb-2 lg:mb-0">

                        <Link href={`/works/${project.slug}`}>

                            <div className="
                                relative
                                w-full
                                aspect-[16/10]
                                rounded-2xl
                                overflow-hidden
                                border border-white/10
                                bg-neutral-900
                                shadow-[0_20px_60px_rgba(0,0,0,0.6)]
                            ">

                                <Image
                                    src={imageUrl}
                                    alt={project.coverImage?.alt || project.title}
                                    fill
                                    className="
                                        object-cover
                                        transition-transform
                                        duration-700
                                        group-hover:scale-105
                                    "
                                    sizes="(max-width:1024px) 100vw, 60vw"
                                    priority={index === 0}
                                />

                                {/* subtle overlay */}
                                <div className="
                                    absolute inset-0
                                    bg-gradient-to-t
                                    from-black/30
                                    via-transparent
                                    to-transparent
                                    opacity-60
                                " />

                            </div>

                        </Link>

                    </div>


                </div>

            </div>

        </section>

    );

};
