import React from 'react';
import Link from 'next/link';
import ProcessStep from './ProcessStep';
import { StepItem } from './types';

const steps: StepItem[] = [
    { num: "01", title: "Discovery & Audit", desc: "We immerse ourselves in your world. Stakeholder interviews, market research, and competitive analysis to find the 'white space'." },
    { num: "02", title: "Strategic Direction", desc: "We define the brand core: Mission, Vision, Values, and Personality. We present moodboards to align on the visual trajectory." },
    { num: "03", title: "Design Exploration", desc: "Iterative design sprints. We explore multiple concepts, stress-testing them across real-world applications (mockups)." },
    { num: "04", title: "Refinement & System", desc: "We polish the chosen direction and build out the comprehensive design system, ensuring scalability across all mediums." },
];

export default function ProcessSection() {
    return (
        <section className="py-32 px-6 lg:px-12 bg-[#0a0a0a]">
            <div className="max-w-[1600px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/3">
                        <div className="sticky top-32">
                            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[0.9] text-white">
                                How We <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ef4444]">Work.</span>
                            </h2>
                            <p className="text-white/60 text-lg">
                                A proven framework that eliminates guesswork and guarantees impact.
                            </p>
                            <Link href="/contact" className="inline-block mt-10 px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:bg-[#ffd700] transition-colors">
                                Start Project
                            </Link>
                        </div>
                    </div>

                    <div className="lg:w-2/3 space-y-4">
                        {steps.map((step, i) => (
                            <ProcessStep
                                key={i}
                                num={step.num}
                                title={step.title}
                                desc={step.desc}
                                delay={i * 0.1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
