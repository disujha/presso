"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles } from "lucide-react";
import { db } from "@/lib/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target as HTMLFormElement);
        const data = {
            name: formData.get('name'),
            company: formData.get('company'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message'),
            createdAt: serverTimestamp(),
        };

        try {
            await addDoc(collection(db, "enquiries"), data);
            setSubmitted(true);
        } catch (error) {
            console.error("Error submitting inquiry:", error);
            alert("Failed to send message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-[#FF6A00] selection:text-[#050505] overflow-x-hidden flex flex-col justify-between">
            <Navbar />
            <main className="pt-32 pb-24 flex-grow relative">
                {/* Subtle Radial Glow */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-radial-glow pointer-events-none opacity-40" />

                <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                        
                        {/* Left Side: Contact Information Cards */}
                        <div className="lg:col-span-5 space-y-8">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-[#FF6A00]/40 text-[11px] font-mono text-[#FF6A00] uppercase tracking-[0.14em]">
                                    <Sparkles className="w-3.5 h-3.5" /> Get in Touch
                                </div>
                                <h1 className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
                                    Let&apos;s build your next activation.
                                </h1>
                                <p className="text-base text-[#B8B8B8] font-light leading-relaxed">
                                    Ready to turn your product demos into live, competitive event experiences? Ask a technical question, request device pricing, or request a custom quote.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {/* Email Block */}
                                <div className="p-6 rounded-3xl bg-[#111111] border border-white/10 flex gap-5 hover:border-[#FF6A00]/30 transition-all duration-300">
                                    <div className="w-12 h-12 bg-[#050505] rounded-xl border border-white/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5 text-[#FF6A00]" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-bold text-white text-[15px]">Email Communications</h4>
                                        <div className="space-y-1">
                                            <p className="text-[11px] font-mono text-[#888888] uppercase tracking-wider">Sales & Tech Queries</p>
                                            <p className="text-[#FF6A00] font-mono text-sm">sales@presso.live</p>
                                        </div>
                                        <div className="space-y-1 pt-1.5 border-t border-white/5">
                                            <p className="text-[11px] font-mono text-[#888888] uppercase tracking-wider">Post-Sales & Operations</p>
                                            <p className="text-[#FF6A00] font-mono text-sm">hello@presso.live</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Phone Block */}
                                <div className="p-6 rounded-3xl bg-[#111111] border border-white/10 flex gap-5 hover:border-[#FF6A00]/30 transition-all duration-300">
                                    <div className="w-12 h-12 bg-[#050505] rounded-xl border border-white/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-[#FF6A00]" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold text-white text-[15px]">Call Us</h4>
                                        <p className="text-[11px] font-mono text-[#888888] uppercase tracking-wider">Direct Line</p>
                                        <p className="text-[#B8B8B8] font-mono text-sm">+91 (80) 2345 6789</p>
                                    </div>
                                </div>

                                {/* Address Block */}
                                <div className="p-6 rounded-3xl bg-[#111111] border border-white/10 flex gap-5 hover:border-[#FF6A00]/30 transition-all duration-300">
                                    <div className="w-12 h-12 bg-[#050505] rounded-xl border border-white/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-[#FF6A00]" />
                                    </div>
                                    <div className="space-y-4 flex-grow">
                                        <h4 className="font-bold text-white text-[15px]">Locations</h4>
                                        <div>
                                            <p className="text-[10px] font-mono text-[#FFC107] uppercase tracking-wider mb-1">Corporate Office</p>
                                            <p className="text-sm text-[#B8B8B8] leading-relaxed font-light">
                                                reThela Technology Pvt Ltd<br />
                                                WeWork NESCO IT Park, Building 4, North Wing<br />
                                                Western Express Hwy, Goregaon, Mumbai 400063
                                            </p>
                                        </div>
                                        <div className="pt-3 border-t border-white/5">
                                            <p className="text-[10px] font-mono text-[#FFC107] uppercase tracking-wider mb-1">Registered Office</p>
                                            <p className="text-sm text-[#B8B8B8] leading-relaxed font-light">
                                                reThela Technology Pvt Ltd<br />
                                                301, Shreeshyam Apartment, 1/16 Mirpara Road,<br />
                                                Liluah, Howrah 711203
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form Card */}
                        <div className="lg:col-span-7">
                            <div className="bg-[#111111] p-8 md:p-12 rounded-3xl border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.85)] relative overflow-hidden">
                                {/* Ambient grid background details */}
                                <div className="absolute inset-0 bg-radial-glow opacity-20 pointer-events-none" />

                                {submitted ? (
                                    <div className="py-16 text-center space-y-6 relative z-10">
                                        <div className="w-20 h-20 bg-[#FF6A00]/10 rounded-full flex items-center justify-center mx-auto border border-[#FF6A00]/30 shadow-[0_0_30px_rgba(255,106,0,0.15)]">
                                            <CheckCircle2 className="w-10 h-10 text-[#FF6A00]" />
                                        </div>
                                        <div className="space-y-2">
                                            <h2 className="text-2xl font-bold text-white">Inquiry Received</h2>
                                            <p className="text-[#B8B8B8] font-light max-w-sm mx-auto">
                                                Thank you for reaching out. We&apos;ve logged your campaign inquiry and will contact you within 24 hours.
                                            </p>
                                        </div>
                                        <button 
                                            onClick={() => setSubmitted(false)} 
                                            className="btn-secondary mt-8"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-mono uppercase tracking-wider text-[#A0A0A0]">Your Name</label>
                                                <input 
                                                    name="name" 
                                                    required 
                                                    type="text" 
                                                    className="w-full px-4 py-3 bg-[#161616] border border-white/10 rounded-xl focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/20 text-white placeholder-white/20 transition-all outline-none text-sm" 
                                                    placeholder="John Doe" 
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-mono uppercase tracking-wider text-[#A0A0A0]">Brand or Agency</label>
                                                <input 
                                                    name="company" 
                                                    required 
                                                    type="text" 
                                                    className="w-full px-4 py-3 bg-[#161616] border border-white/10 rounded-xl focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/20 text-white placeholder-white/20 transition-all outline-none text-sm" 
                                                    placeholder="e.g. Experiential Agency X" 
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-mono uppercase tracking-wider text-[#A0A0A0]">Work Email</label>
                                                <input 
                                                    name="email" 
                                                    required 
                                                    type="email" 
                                                    className="w-full px-4 py-3 bg-[#161616] border border-white/10 rounded-xl focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/20 text-white placeholder-white/20 transition-all outline-none text-sm" 
                                                    placeholder="you@company.com" 
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-mono uppercase tracking-wider text-[#A0A0A0]">Phone Number</label>
                                                <input 
                                                    name="phone" 
                                                    required 
                                                    type="tel" 
                                                    className="w-full px-4 py-3 bg-[#161616] border border-white/10 rounded-xl focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/20 text-white placeholder-white/20 transition-all outline-none text-sm" 
                                                    placeholder="+91 98765 43210" 
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-mono uppercase tracking-wider text-[#A0A0A0]">Campaign Details or Requirements</label>
                                            <textarea 
                                                name="message" 
                                                required 
                                                className="w-full px-4 py-3 bg-[#161616] border border-white/10 rounded-xl focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/20 text-white placeholder-white/20 transition-all outline-none h-32 resize-none text-sm" 
                                                placeholder="Tell us about your upcoming activation, estimated dates, or custom hardware requirements..."
                                            ></textarea>
                                        </div>

                                        <button 
                                            type="submit" 
                                            disabled={loading} 
                                            className="btn-primary w-full py-4 text-center justify-center font-bold"
                                        >
                                            {loading ? "Sending..." : "Submit Inquiry"}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
