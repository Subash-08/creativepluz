import React from 'react';

export const WorkSkeleton = () => {
    return (
        <section className="bg-black text-white w-full py-24 px-6 lg:px-12 max-w-[1600px] mx-auto font-sans">
            {/* Header Skeleton */}
            <div className="text-center mb-20 max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-24 h-4 bg-zinc-800 rounded animate-pulse"></div>
                </div>
                <div className="h-12 w-3/4 bg-zinc-800 rounded animate-pulse mx-auto mb-4"></div>
                <div className="h-12 w-1/2 bg-zinc-800 rounded animate-pulse mx-auto mb-6"></div>
                <div className="h-4 w-full max-w-lg bg-zinc-900 rounded animate-pulse mx-auto mb-2"></div>
                <div className="h-4 w-2/3 max-w-lg bg-zinc-900 rounded animate-pulse mx-auto"></div>
            </div>

            {/* Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="relative w-full h-[450px] md:h-[500px] bg-zinc-900 rounded-[2rem] overflow-hidden border border-zinc-800 animate-pulse">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-50" />
                        <div className="absolute bottom-8 left-8 w-3/4 space-y-3">
                            <div className="h-4 w-24 bg-zinc-800 rounded mb-2"></div>
                            <div className="h-8 w-full bg-zinc-800 rounded"></div>
                            <div className="h-8 w-2/3 bg-zinc-800 rounded"></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
