import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { IProject } from '@/models/Project';

interface WorkCardProps {
    project: IProject;
}

export default function WorkCard({ project }: WorkCardProps) {

    const imageUrl =
        project.thumbnail?.url ||
        project.coverImage?.url ||
        '/images/placeholder-project.jpg';

    const categoryName =
        typeof project.categoryId === 'object'
            ? (project.categoryId as any).name
            : 'Work';

    return (

        <Link
            href={`/works/${project.slug}`}
            className="group block w-full"
        >

            <div
                className="
                relative
                w-full

                h-[420px]
                md:h-[460px]
                lg:h-[500px]

                rounded-[2rem]
                overflow-hidden

                bg-zinc-900
                border border-white/10

                transition-all duration-500
                hover:border-white/20
                hover:shadow-[0_20px_80px_rgba(255,215,0,0.15)]
                "
            >

                {/* IMAGE */}
                <Image
                    src={imageUrl}
                    alt={project.title}
                    fill
                    className="
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-105
                    "
                    sizes="(max-width:768px) 100vw, 50vw"
                />

                {/* GRADIENT */}
                <div className="
                absolute inset-0
                bg-gradient-to-t
                from-black/90
                via-black/40
                to-transparent
                "
                />

                {/* ARROW */}
                <div className="
                absolute top-6 right-6
                opacity-0
                translate-y-4
                group-hover:opacity-100
                group-hover:translate-y-0
                transition-all duration-500
                "
                >
                    <div className="
                    w-14 h-14
                    rounded-full
                    bg-white/10
                    backdrop-blur-md
                    flex items-center justify-center
                    border border-white/20
                    "
                    >
                        <ArrowUpRight size={22} />
                    </div>
                </div>

                {/* CONTENT */}
                <div className="
                absolute bottom-0 left-0
                w-full
                p-6 md:p-8
                "
                >

                    <div className="
                    flex items-center gap-3
                    mb-3
                    "
                    >
                        <div className="w-8 h-[1px] bg-[#ffd700]" />

                        <span className="
                        text-xs
                        uppercase
                        tracking-wider
                        text-[#ffd700]
                        font-semibold
                        "
                        >
                            {categoryName}
                        </span>

                    </div>


                    <h3 className="
                    text-2xl md:text-3xl lg:text-4xl
                    font-bold
                    leading-tight
                    "
                    >
                        {project.title}
                    </h3>

                </div>

            </div>

        </Link>

    );

}
