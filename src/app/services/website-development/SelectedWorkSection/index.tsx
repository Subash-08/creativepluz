import React from 'react';
import ProjectCard from './ProjectCard';
import { ProjectItem } from './types';

const projects: ProjectItem[] = [
    {
        id: 1,
        client: "Velocity Motors",
        type: "E-Commerce / 3D",
        color: "#1a1a1a",
        img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1600"
    },
    {
        id: 2,
        client: "Krona Arch",
        type: "Portfolio / Minimal",
        color: "#111",
        img: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=1600"
    },
    {
        id: 3,
        client: "Apex Fin",
        type: "SaaS / Dashboard",
        color: "#0a0a0a",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600"
    },
];

export default function SelectedWorkSection() {
    return (
        <section className="py-32 px-6 lg:px-12 bg-black">
            <div className="max-w-[1400px] mx-auto mb-20">
                <h2 className="text-5xl font-bold mb-6">Selected Deployments</h2>
                <p className="text-white/60">Case studies in digital excellence.</p>
            </div>

            <div className="max-w-[1400px] mx-auto flex flex-col gap-32">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}
