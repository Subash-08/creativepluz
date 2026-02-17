import React from 'react';
import { FadeInUp } from '../ui/Animation.client';

export default function PhilosophyContent() {
    return (
        <div>
            <FadeInUp>
                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white">
                    We Don&apos;t Decorate. <br />
                    <span className="text-[#ffd700]">We Distill.</span>
                </h2>
            </FadeInUp>
            <div className="space-y-8 text-white/60 text-lg leading-relaxed">
                <p>
                    Too many agencies focus on the &quot;what&quot; (the logo). We focus on the &quot;why&quot; and the &quot;how&quot;. Your brand is your reputation. It&apos;s what people say about you when you&apos;re not in the room.
                </p>
                <p>
                    Our process digs deep into your business DNA to extract a visual language that is authentically yours and impossible to ignore. We bridge the gap between business strategy and creative expression.
                </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
                {[
                    "Market Positioning", "Visual Psychology",
                    "Competitive Audit", "Scalable Systems"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#ffd700] rounded-full shadow-[0_0_8px_#ffd700]" />
                        <span className="text-white font-medium">{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
