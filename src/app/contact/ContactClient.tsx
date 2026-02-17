'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, ChevronDown, Clock, ShieldCheck } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '@/components/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { THEME } from '@/config/theme';

// --- Types ---
type FormInputs = {
    name: string;
    email: string;
    phone: string;
    budget: string;
    message: string;
};

const faqs = [
    {
        question: "What is the typical timeline for a project?",
        answer: "Speed varies by scope. A standard branding or landing page project takes 2-4 weeks. Full-scale custom web development typically requires 8-12 weeks to ensure rigorous testing and optimization."
    },
    {
        question: "Do you work with international clients?",
        answer: "Absolutely. While HQ is in Salem, 60% of our client base is international (USA, UK, UAE). We align our communication hours to your timezone for seamless collaboration."
    },
    {
        question: "Do you offer post-launch maintenance?",
        answer: "We don't leave you hanging. We offer flexible AMC (Annual Maintenance Contracts) that cover security updates, content changes, and server monitoring to keep your digital asset secure."
    },
    {
        question: "What are your payment terms?",
        answer: "We operate on a milestone basis: 50% advance to book the schedule, and 50% upon successful project completion and sign-off, prior to final deployment."
    }
];

const ContactClient: React.FC = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormInputs>();
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log(data);
        alert("Request received. We will be in touch shortly.");
    };

    return (
        <main className="min-h-screen overflow-hidden relative" style={{ backgroundColor: THEME.colors.background, fontFamily: THEME.fonts.primary }}>

            {/* Background Gradients */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div
                    className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-60"
                    style={{ backgroundColor: `${THEME.colors.primary}1A` }} // 10% opacity
                />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] opacity-40" />
            </div>

            <div className="mx-auto px-6 lg:px-12 pt-32 pb-24" style={{ maxWidth: THEME.layout.containerWidth }}>

                {/* --- Section 1: Hero & Form --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-32">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 flex flex-col justify-center"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border w-fit mb-6" style={{ borderColor: 'rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.05)' }}>
                            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: THEME.colors.primary }}></span>
                            <span className="font-bold text-xs uppercase tracking-[0.2em]" style={{ color: THEME.colors.primary }}>Accepting New Projects</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 uppercase italic leading-none" style={{ fontFamily: THEME.fonts.secondary, color: THEME.colors.foreground }}>
                            Let's Build <br />
                            <span className="text-transparent bg-clip-text animate-shine bg-[length:200%_auto]" style={{ backgroundImage: `linear-gradient(to right, ${THEME.colors.primary}, #ffffff, ${THEME.colors.primary})` }}>
                                Something Iconic.
                            </span>
                        </h2>

                        <p className="text-xl mb-10 max-w-xl leading-relaxed border-l-4 pl-6" style={{ color: THEME.colors.muted, borderColor: THEME.colors.primary }}>
                            Ready to dominate your market? Our strategy team is ready to analyze your needs.
                            Fill out the form for a consultation within 24 hours.
                        </p>

                        {/* Trust Signals */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                            <div>
                                <h3 className="text-4xl font-black italic mb-1" style={{ fontFamily: THEME.fonts.secondary, color: THEME.colors.foreground }}>500+</h3>
                                <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: THEME.colors.muted }}>Projects Delivered</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-black italic mb-1" style={{ fontFamily: THEME.fonts.secondary, color: THEME.colors.foreground }}>24h</h3>
                                <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: THEME.colors.muted }}>Response Time</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-black italic mb-1" style={{ fontFamily: THEME.fonts.secondary, color: THEME.colors.foreground }}>100%</h3>
                                <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: THEME.colors.muted }}>Client Satisfaction</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: The Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-5"
                    >
                        <div className="relative backdrop-blur-xl p-8 md:p-10 border rounded-3xl shadow-2xl" style={{ backgroundColor: 'rgba(22, 24, 29, 0.9)', borderColor: 'rgba(255,255,255,0.1)' }}>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="space-y-5">
                                    <div className="group">
                                        <label className="block text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: THEME.colors.primary }}>Name</label>
                                        <input
                                            {...register("name", { required: true })}
                                            className="w-full border rounded-none px-4 py-4 focus:ring-1 outline-none transition-all placeholder:text-slate-600 text-lg"
                                            style={{
                                                backgroundColor: THEME.colors.background,
                                                borderColor: 'rgba(255,255,255,0.1)',
                                                color: THEME.colors.foreground,
                                                // focus styles handled via CSS classes or could be inline style focused state logic which is harder in inline styles, keeping standard focus classes but overriding colors if needed
                                            }}
                                            placeholder="John Doe"
                                        />
                                        {errors.name && <span className="text-red-500 text-xs mt-1">Name is required</span>}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: THEME.colors.primary }}>Email</label>
                                            <input
                                                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                                className="w-full border rounded-none px-4 py-4 outline-none transition-all placeholder:text-slate-600"
                                                style={{
                                                    backgroundColor: THEME.colors.background,
                                                    borderColor: 'rgba(255,255,255,0.1)',
                                                    color: THEME.colors.foreground
                                                }}
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: THEME.colors.primary }}>Phone</label>
                                            <input
                                                {...register("phone")}
                                                className="w-full border rounded-none px-4 py-4 outline-none transition-all placeholder:text-slate-600"
                                                style={{
                                                    backgroundColor: THEME.colors.background,
                                                    borderColor: 'rgba(255,255,255,0.1)',
                                                    color: THEME.colors.foreground
                                                }}
                                                placeholder="+91..."
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: THEME.colors.primary }}>Project Budget</label>
                                        <select
                                            {...register("budget", { required: true })}
                                            className="w-full border rounded-none px-4 py-4 outline-none transition-all appearance-none cursor-pointer"
                                            style={{
                                                backgroundColor: THEME.colors.background,
                                                borderColor: 'rgba(255,255,255,0.1)',
                                                color: THEME.colors.foreground
                                            }}
                                        >
                                            <option value="" className="text-slate-500">Select Investment Range...</option>
                                            <option value="10-25k">₹50k - ₹1 Lakh</option>
                                            <option value="25-50k">₹1 Lakh - ₹3 Lakhs</option>
                                            <option value="50-100k">₹3 Lakhs - ₹5 Lakhs</option>
                                            <option value="100k+">₹5 Lakhs+</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: THEME.colors.primary }}>Message</label>
                                        <textarea
                                            {...register("message", { required: true })}
                                            rows={4}
                                            className="w-full border rounded-none px-4 py-4 outline-none transition-all placeholder:text-slate-600 resize-none"
                                            style={{
                                                backgroundColor: THEME.colors.background,
                                                borderColor: 'rgba(255,255,255,0.1)',
                                                color: THEME.colors.foreground
                                            }}
                                            placeholder="Tell us about your project goals..."
                                        ></textarea>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full text-white py-5 rounded-none font-bold uppercase tracking-[0.2em] text-sm transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(var(--brand-primary-rgb),0.3)]"
                                    style={{ backgroundColor: THEME.colors.primary }}
                                >
                                    {isSubmitting ? 'Sending...' : 'Start Conversation'}
                                    {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                </div>

                {/* --- Section 2: Contact Info Grid --- */}
                <section className="mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ContactCard
                            icon={<Mail className="w-6 h-6" />}
                            title="Email Us"
                            content={<a href="mailto:creativepluzsalem@gmail.com" className="hover:text-brand-primary transition-colors">creativepluzsalem@gmail.com</a>}
                        />
                        <ContactCard
                            icon={<Phone className="w-6 h-6" />}
                            title="Call Us"
                            content={
                                <>
                                    <a href="tel:+919363024021" className="hover:text-brand-primary transition-colors block">+91 93630 24021</a>
                                    <a href="tel:+919363027021" className="hover:text-brand-primary transition-colors block mt-1">+91 93630 27021</a>
                                </>
                            }
                        />
                        <ContactCard
                            icon={<MapPin className="w-6 h-6" />}
                            title="Visit HQ"
                            content={
                                <address className="not-italic leading-relaxed">
                                    #7/2, 1st Floor, S.S. Plaza,<br />
                                    Advaitha Ashram Rd,<br />
                                    Salem - 636016, TN.
                                </address>
                            }
                        />
                        <ContactCard
                            icon={<Clock className="w-6 h-6" />}
                            title="Working Hours"
                            content={
                                <>
                                    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                                    <p className="mt-1">Sat: 9:00 AM - 1:00 PM</p>
                                </>
                            }
                        />
                    </div>
                </section>

                {/* --- Section 3: FAQ & Map Split --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* FAQ for AEO */}
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-black uppercase italic mb-8 leading-none" style={{ fontFamily: THEME.fonts.secondary, color: THEME.colors.foreground }}>
                            Common <span style={{ color: THEME.colors.primary }}>Questions</span>
                        </h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border-b pb-4 last:border-0" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                                    <button
                                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                        className="w-full flex items-center justify-between text-left py-4 focus:outline-none group hover:bg-white/5 px-4 rounded-lg transition-colors"
                                    >
                                        <span
                                            className="font-bold text-lg pr-8 transition-colors"
                                            style={{
                                                fontFamily: THEME.fonts.secondary,
                                                color: activeIndex === index ? THEME.colors.primary : THEME.colors.foreground
                                            }}
                                        >
                                            {faq.question}
                                        </span>
                                        <div
                                            className="w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300"
                                            style={{
                                                borderColor: activeIndex === index ? THEME.colors.primary : 'rgba(255,255,255,0.2)',
                                                backgroundColor: activeIndex === index ? `${THEME.colors.primary}1A` : 'rgba(255,255,255,0.05)',
                                                transform: activeIndex === index ? 'rotate(180deg)' : 'none'
                                            }}
                                        >
                                            <ChevronDown className="w-4 h-4" style={{ color: activeIndex === index ? THEME.colors.primary : THEME.colors.muted }} />
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-4 pb-4">
                                                    <p className="leading-relaxed text-base border-l-2 pl-4" style={{ color: THEME.colors.muted, borderColor: `${THEME.colors.primary}4D` }}>
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 p-6 border rounded-2xl flex items-start gap-4" style={{ backgroundColor: `${THEME.colors.primary}0D`, borderColor: `${THEME.colors.primary}33` }}>
                            <ShieldCheck className="w-8 h-8 flex-shrink-0" style={{ color: THEME.colors.primary }} />
                            <div>
                                <h4 className="font-bold uppercase italic text-lg" style={{ fontFamily: THEME.fonts.secondary, color: THEME.colors.foreground }}>Secure & Confidential</h4>
                                <p className="text-sm mt-1" style={{ color: THEME.colors.muted }}>We sign a Non-Disclosure Agreement (NDA) for every project to ensure your idea remains yours.</p>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Map */}
                    <div className="max-h-[600px] min-h-[400px] w-full m-auto rounded-2xl overflow-hidden border transition-all duration-500 relative group"
                        style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                    >
                        <iframe
                            src="https://www.google.com/maps?q=11.6751572,78.1420617&z=17&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0"
                            title="Creative Pluz Office Location"
                        />
                        <div className="absolute inset-0 pointer-events-none group-hover:bg-transparent transition-colors" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }} />
                    </div>


                </div>

            </div>
        </main>
    );
};

// Helper Component for Cards
const ContactCard = ({ icon, title, content }: { icon: React.ReactNode, title: string, content: React.ReactNode }) => (
    <div className="border p-8 rounded-2xl transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl"
        style={{
            backgroundColor: 'rgba(22, 24, 29, 1)',
            borderColor: 'rgba(255,255,255,0.05)'
        }}
    >
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:text-white"
            style={{
                backgroundColor: `${THEME.colors.primary}1A`, // 10% opacity
                color: THEME.colors.primary,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = THEME.colors.primary }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = `${THEME.colors.primary}1A` }}
        >
            {icon}
        </div>
        <h3 className="font-black italic text-xl mb-3" style={{ fontFamily: THEME.fonts.secondary, color: THEME.colors.foreground }}>{title}</h3>
        <div className="text-sm" style={{ color: THEME.colors.muted }}>{content}</div>
    </div>
);

export default ContactClient;