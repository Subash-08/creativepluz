import React from 'react';
import Link from 'next/link';
import { Zap, CheckCircle2, Clock, Award, ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
    return (
        <section className="py-12 bg-gradient-to-br from-[#ffd700] to-[#ff9900] text-black text-center relative overflow-hidden font-sans">

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Pre-header */}
                <span className="inline-block border border-black/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8 bg-white/10 backdrop-blur-sm">
                    Ready to elevate your brand?
                </span>

                {/* Main Heading */}
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] mb-10 tracking-tighter">
                    Design That <br />
                    <span className="text-white drop-shadow-sm">Ignites</span> Growth
                </h2>

                {/* Subtext */}
                <p className="text-xl md:text-2xl font-medium text-black/80 mb-6 max-w-3xl mx-auto leading-relaxed">
                    Stop blending in with the noise. We craft high-impact brands and digital experiences that turn visitors into loyal customers.
                </p>

                {/* Buttons - Converted to Links for navigation */}
                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-10">
                    <Link
                        href="/contact"
                        className="bg-black text-white px-10 py-5 text-lg rounded-full hover:-translate-y-1 transition-transform shadow-lg font-bold uppercase tracking-widest flex items-center gap-2 group"
                    >
                        Start Your Project
                        <Zap className="w-5 h-5 fill-current text-[#ffd700] group-hover:text-white transition-colors" />
                    </Link>
                    <Link
                        href="/contact"
                        className="group flex items-center gap-2 border-2 border-black text-black px-10 py-5 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
                    >
                        Book a Call
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Trust Signals / Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-black/10 pt-6 max-w-5xl mx-auto">
                    <div className="flex flex-col items-center">
                        <Clock className="w-10 h-10 mb-4 text-black" />
                        <h4 className="font-bold uppercase tracking-wide text-base mb-1">Fast Turnaround</h4>
                        <p className="text-base text-black/70">Efficient workflows, timely delivery</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Award className="w-10 h-10 mb-4 text-black" />
                        <h4 className="font-bold uppercase tracking-wide text-base mb-1">Award-Winning Quality</h4>
                        <p className="text-base text-black/70">World-class aesthetics & strategy</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <CheckCircle2 className="w-10 h-10 mb-4 text-black" />
                        <h4 className="font-bold uppercase tracking-wide text-base mb-1">Results Driven</h4>
                        <p className="text-base text-black/70">Built for conversion & growth</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
