'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import WorkCard from './WorkCard';
import { IProject } from '@/models/Project';
import { Loader2, Search } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { getProjectsByCategory } from '@/actions/portfolio-public.actions';
import { motion, AnimatePresence } from 'framer-motion';

interface PortfolioContainerProps {
    categories: any[];
}

export default function PortfolioContainer({ categories }: PortfolioContainerProps) {

    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState('');

    const [layoutProjects, setLayoutProjects] = useState<any[]>([]);
    const [loadingLayout, setLoadingLayout] = useState(false);

    const [categoryProjects, setCategoryProjects] = useState<IProject[]>([]);
    const [loadingProjects, setLoadingProjects] = useState(false);

    useEffect(() => {
        if (activeCategory === 'all') {
            fetchLayout();
        } else {
            fetchCategoryProjects(activeCategory);
        }
    }, [activeCategory]);

    async function fetchLayout() {
        try {
            setLoadingLayout(true);

            const res = await fetch('/api/portfolio-layout');
            const data = await res.json();

            if (!res.ok) throw new Error(data.error);

            const validProjects = data.boxes
                .filter((b: any) => b.project !== null)
                .map((b: any) => ({
                    _id: b.project.id,
                    title: b.project.title,
                    thumbnail: { url: b.project.thumbnail },
                    slug: b.project.slug || '#',
                    category: b.project.category || { name: 'Work' }
                }));

            setLayoutProjects(validProjects);

        } catch (error) {
            console.error(error);
            toast.error('Failed to load portfolio layout');
        }
        finally {
            setLoadingLayout(false);
        }
    }

    async function fetchCategoryProjects(categoryId: string) {
        try {

            setLoadingProjects(true);

            const data = await getProjectsByCategory(categoryId);

            setCategoryProjects(data);

        } catch (error) {

            console.error(error);

            toast.error("Failed to load category projects");

        } finally {

            setLoadingProjects(false);

        }
    }

    const isLoading =
        activeCategory === 'all'
            ? loadingLayout
            : loadingProjects;

    const rawProjects =
        activeCategory === 'all'
            ? layoutProjects
            : categoryProjects;


    const filteredProjects = useMemo(() => {

        if (!searchQuery.trim()) return rawProjects;

        return rawProjects.filter(project =>
            project.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.category?.name?.toLowerCase().includes(searchQuery.toLowerCase())
        );

    }, [rawProjects, searchQuery]);


    return (

        <div className="bg-[#050505] min-h-screen text-white pt-32 pb-24 font-sans selection:bg-[#ffd700] selection:text-black">


            {/* HERO */}
            <section className="max-w-[1800px] mx-auto px-6 lg:px-12 mb-24 relative">

                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-[#ffd700]/10 to-transparent rounded-full blur-[120px]" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[0.9] mb-8 uppercase">

                        Selected <br />

                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ff6b4a]">

                            Work

                        </span>

                    </h1>


                    <p className="text-xl md:text-2xl text-white/60 max-w-2xl">

                        A curated collection of digital products, brand identities,
                        and immersive experiences.

                    </p>

                </motion.div>

            </section>



            {/* FILTER BAR */}
            <section className="sticky top-24 z-40 max-w-[1800px] mx-auto px-6 lg:px-12 mb-16">

                <div className="inline-flex flex-col md:flex-row gap-6 p-2 rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10">

                    <div className="flex gap-2 flex-wrap">

                        <button
                            onClick={() => setActiveCategory('all')}
                            className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition
                            ${activeCategory === 'all'
                                    ? 'bg-[#ffd700] text-black'
                                    : 'text-white/60 hover:text-white'
                                }`}
                        >
                            All
                        </button>

                        {categories.map(cat => (

                            <button
                                key={cat._id}
                                onClick={() => setActiveCategory(cat._id)}
                                className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition
                                ${activeCategory === cat._id
                                        ? 'bg-[#ffd700] text-black'
                                        : 'text-white/60 hover:text-white'
                                    }`}
                            >
                                {cat.name}
                            </button>

                        ))}

                    </div>


                    <div className="relative">

                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />

                        <input
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            placeholder="Search projects..."
                            className="bg-transparent pl-9 pr-4 py-2 outline-none text-sm"
                        />

                    </div>

                </div>

            </section>



            {/* GRID */}
            <section className="max-w-[1800px] mx-auto px-6 lg:px-12 min-h-[500px]">

                {isLoading && (

                    <div className="flex justify-center py-40">

                        <Loader2 className="animate-spin w-10 h-10 text-yellow-500" />

                    </div>

                )}


                {!isLoading && (

                    <motion.div
                        layout
                        className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-2
                        gap-10
                        justify-items-center
                        "
                    >

                        <AnimatePresence>

                            {filteredProjects.map((project, index) => (

                                <motion.div
                                    key={project._id}
                                    layout
                                    initial={{ opacity: 0, y: 60 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="
                                    w-full
                                    max-w-[420px]
                                    md:max-w-[480px]
                                    lg:max-w-[520px]
                                    "
                                >

                                    <WorkCard project={project} />

                                </motion.div>

                            ))}

                        </AnimatePresence>

                    </motion.div>

                )}

            </section>



            {/* CTA */}
            <section className="mt-32 text-center">

                <h2 className="text-4xl md:text-7xl font-bold mb-10">

                    Have a challenge for us?

                </h2>

                <Link
                    href="/contact/start-project"
                    className="
                    inline-block
                    px-12 py-5
                    border border-white/20
                    hover:bg-[#ffd700]
                    hover:text-black
                    transition
                    "
                >

                    Start Project

                </Link>

            </section>


        </div>

    );

}
