import React from 'react';
import { fetchProjectBySlug } from '@/actions/project.actions';
import ResponsiveImage from '@/components/shared/ResponsiveImage';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { THEME } from '@/config/theme';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = await fetchProjectBySlug(slug);
    if (!project) return {};

    return {
        title: project.seoTitle || project.title,
        description: project.seoDescription || project.shortSummary,
        openGraph: {
            images: project.ogImage?.url ? [project.ogImage.url] : [],
        },
    };
}

export default async function CaseStudyPage({ params }: Props) {
    const { slug } = await params;
    const project = await fetchProjectBySlug(slug);

    if (!project || project.status !== 'published') {
        notFound();
    }

    return (
        <article style={{ backgroundColor: THEME.colors.background, minHeight: '100vh' }}>
            {/* Hero Section */}
            <div className="w-full h-[60vh] relative">
                <ResponsiveImage
                    src={project.coverImage?.url || '/placeholder.jpg'}
                    alt={project.title}
                    aspectRatio="16:9"
                    className="h-full"
                    priority
                />
                <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
                    <div className="text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: THEME.colors.foreground }}>{project.title}</h1>
                        <p className="text-xl md:text-2xl max-w-2xl mx-auto" style={{ color: THEME.colors.muted }}>{project.shortSummary}</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16" style={{ maxWidth: THEME.layout.containerWidth }}>
                {/* Project Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 border-b pb-12" style={{ borderColor: THEME.colors.border }}>
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: THEME.colors.muted }}>Client</h3>
                        <p className="text-lg font-medium" style={{ color: THEME.colors.foreground }}>{project.clientName}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: THEME.colors.muted }}>Industry</h3>
                        <p className="text-lg font-medium" style={{ color: THEME.colors.foreground }}>{project.clientIndustry}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: THEME.colors.muted }}>Services</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tags?.map((tag: string) => (
                                <span
                                    key={tag}
                                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                                    style={{
                                        backgroundColor: `${THEME.colors.primary}1A`, // 10% opacity
                                        color: THEME.colors.primary
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: THEME.colors.muted }}>Website</h3>
                        {project.clientWebsite ? (
                            <a
                                href={project.clientWebsite}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                                style={{ color: THEME.colors.primary }}
                            >
                                Visit Live Site
                            </a>
                        ) : (
                            <p style={{ color: THEME.colors.muted }}>N/A</p>
                        )}
                    </div>
                </div>

                {/* Content Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8 space-y-12">
                        {project.overview && (
                            <section>
                                <h2 className="text-2xl font-bold mb-4" style={{ color: THEME.colors.foreground }}>Overview</h2>
                                <div className="prose max-w-none whitespace-pre-wrap" style={{ color: THEME.colors.muted }}>{project.overview}</div>
                            </section>
                        )}

                        {project.problemStatement && (
                            <section>
                                <h2 className="text-2xl font-bold mb-4" style={{ color: THEME.colors.foreground }}>The Challenge</h2>
                                <div className="prose max-w-none whitespace-pre-wrap" style={{ color: THEME.colors.muted }}>{project.problemStatement}</div>
                            </section>
                        )}

                        {project.processSteps && project.processSteps.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold mb-4" style={{ color: THEME.colors.foreground }}>Process</h2>
                                <div className="space-y-6">
                                    {project.processSteps.map((step: any, idx: number) => (
                                        <div key={idx} className="flex items-start">
                                            <span
                                                className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center font-bold mr-4 mt-1"
                                                style={{
                                                    backgroundColor: THEME.colors.primary,
                                                    color: THEME.colors.background
                                                }}
                                            >
                                                {idx + 1}
                                            </span>
                                            <div>
                                                <h3 className="font-bold text-lg mb-1" style={{ color: THEME.colors.foreground }}>{step.title}</h3>
                                                <p style={{ color: THEME.colors.muted }}>{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {project.galleryImages && project.galleryImages.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold mb-6" style={{ color: THEME.colors.foreground }}>Gallery</h2>
                                <div className="space-y-8">
                                    {project.galleryImages.map((img: any, idx: number) => (
                                        <ResponsiveImage
                                            key={idx}
                                            src={img.url}
                                            alt={img.alt || `Gallery Image ${idx + 1}`}
                                            aspectRatio="16:10"
                                            className="rounded-lg shadow-lg"
                                        />
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    <div className="lg:col-span-4 space-y-8">
                        {project.challenges && project.challenges.length > 0 && (
                            <div className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                                <h3 className="text-xl font-bold mb-4" style={{ color: THEME.colors.foreground }}>Key Challenges</h3>
                                <ul className="list-disc list-inside space-y-2" style={{ color: THEME.colors.muted }}>
                                    {project.challenges.map((c: string, idx: number) => (
                                        <li key={idx}>{c}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {project.solution && project.solution.length > 0 && (
                            <div className="p-6 rounded-xl" style={{ backgroundColor: `${THEME.colors.primary}0D` }}>
                                <h3 className="text-xl font-bold mb-4" style={{ color: THEME.colors.foreground }}>Our Solution</h3>
                                <ul className="list-disc list-inside space-y-2" style={{ color: THEME.colors.muted }}>
                                    {project.solution.map((s: string, idx: number) => (
                                        <li key={idx}>{s}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {project.metrics && project.metrics.length > 0 && (
                            <div className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                                <h3 className="text-xl font-bold mb-4" style={{ color: THEME.colors.foreground }}>Results</h3>
                                <div className="space-y-4">
                                    {project.metrics.map((m: any, idx: number) => (
                                        <div key={idx} className="border-l-4 pl-4" style={{ borderColor: THEME.colors.primary }}>
                                            <p className="text-sm font-medium uppercase tracking-wider" style={{ color: THEME.colors.muted }}>{m.label}</p>
                                            <p className="text-2xl font-bold" style={{ color: THEME.colors.foreground }}>
                                                {m.value} <span className="text-sm font-normal" style={{ color: THEME.colors.muted }}>{m.unit}</span>
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
}
