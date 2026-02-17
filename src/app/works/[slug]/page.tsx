import { getProjectBySlug, getRelatedProjects } from '@/lib/data/project.queries';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectDetails from '@/components/works/ProjectDetails';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export const revalidate = 60; // ISR

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);
    if (!project) return { title: 'Project Not Found' };

    return {
        title: project.seoTitle || project.title,
        description: project.seoDescription || project.shortSummary,
        openGraph: {
            images: [project.ogImage?.url || project.coverImage?.url || ''],
        },
    };
}

export default async function CaseStudyPage({ params }: PageProps) {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    // Pass related projects if we want to show them in future, currently just project
    // But the new design has a specific footer handling which ProjectDetails can do if it receives related data,
    // or just a link to portfolio as per snippet.
    // I will pass relatedProjects just in case.
    const relatedProjects = await getRelatedProjects(project._id as string, typeof project.categoryId === 'string' ? project.categoryId : (project.categoryId as any)?._id);

    return (
        <main className="bg-[#050505] min-h-screen">
            <ProjectDetails project={project as any} relatedProjects={relatedProjects as any[]} />
        </main>
    );
}
