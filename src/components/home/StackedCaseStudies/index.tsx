import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getLatestProjects } from '@/lib/data/project.queries';

const SingleCaseStudySection = async () => {

    const projects = await getLatestProjects();
    if (!projects || projects.length === 0) return null;

    const project = projects[0];

    const imageUrl =
        project.coverImage?.url ||
        project.thumbnail?.url ||
        '/images/placeholder-project.jpg';

    const category =
        project.displayCategoryOverride ||
        project.categoryId?.name ||
        'Case Study';

    return (

        <section className="bg-[#050505] py-12 md:py-16">

            <div className="max-w-7xl mx-auto px-6 lg:px-12">


                {/* HEADER */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">

                    <div>

                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-[1px] bg-white/40" />
                            <span className="text-xs tracking-[0.25em] text-[#ffd700] uppercase">
                                Case Studies
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-tight">
                            Featured Work
                        </h2>

                    </div>


                    <Link
                        href="/portfolio"
                        className="border border-white/20 px-6 py-3 rounded-full text-sm text-white hover:border-[#ffd700] hover:text-[#ffd700] transition"
                    >
                        View All →
                    </Link>

                </div>



                {/* CASE STUDY */}
                <div className="grid lg:grid-cols-2 gap-14 items-center">


                    {/* IMAGE */}
                    <Link
                        href={`/works/${project.slug}`}
                        className="group block"
                    >

                        <div className="relative aspect-[16/11] rounded-3xl overflow-hidden border border-white/10">

                            <Image
                                src={imageUrl}
                                alt={project.title}
                                fill
                                className="object-cover transition duration-700 group-hover:scale-105"
                            />

                        </div>

                    </Link>



                    {/* CONTENT */}
                    <div>

                        {/* category */}
                        <div className="text-xs uppercase tracking-[0.25em] text-[#ffd700] mb-4">
                            {category}
                        </div>


                        {/* title */}
                        <h3 className="text-3xl md:text-4xl lg:text-5xl text-white font-medium mb-6 leading-tight">
                            {project.title}
                        </h3>


                        {/* short summary */}
                        <p className="text-white/60 text-lg mb-8 leading-relaxed max-w-lg">
                            {project.shortSummary || project.description}
                        </p>


                        {/* optional client info */}
                        {(project.clientCompany || project.clientIndustry) && (
                            <div className="text-sm text-white/40 mb-8">

                                {project.clientCompany && (
                                    <span>{project.clientCompany}</span>
                                )}

                                {project.clientCompany && project.clientIndustry && (
                                    <span> • </span>
                                )}

                                {project.clientIndustry && (
                                    <span>{project.clientIndustry}</span>
                                )}

                            </div>
                        )}


                        {/* CTA */}
                        <Link
                            href={`/works/${project.slug}`}
                            className="inline-flex items-center gap-3 text-white hover:text-[#ffd700] transition text-lg group"
                        >

                            <span>View Case Study</span>

                            <span className="group-hover:translate-x-1 transition">
                                →
                            </span>

                        </Link>


                    </div>

                </div>

            </div>

        </section>

    );

};

export default SingleCaseStudySection;
