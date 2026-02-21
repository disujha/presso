"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Users, Target, Rocket, Award } from "lucide-react";

export default function About() {
    return (
        <>
            <Navbar />
            <main className="pt-20">
                <section className="py-24 bg-white">
                    <div className="container-wide">
                        <div className="max-w-3xl">
                            <h1 className="text-5xl font-display font-bold text-industrial-900 mb-8">Our Mission</h1>
                            <p className="text-2xl text-presso font-medium mb-12 leading-tight">
                                To accelerate the decarbonization of industrial MSMEs by providing the world&apos;s most accessible energy intelligence platform.
                            </p>
                            <div className="prose prose-industrial prose-lg text-industrial-500 leading-relaxed space-y-6">
                                <p>
                                    Presso started with a simple observation: while large industrial corporations have the resources to implement complex energy management systems, the thousands of MSMEs (Micro, Small, and Medium Enterprises) that form the backbone of the manufacturing sector are often left in the dark.
                                </p>
                                <p>
                                    Legacy machines, lack of real-time monitoring, and rising energy costs create a bottleneck for growth and sustainability. We believe that efficiency should not be a luxury.
                                </p>
                                <p>
                                    Our retrofit technology allows any factory, regardless of its age or infrastructure, to become a &quot;smart&quot; factory overnight. By focusing on the MSME segment in steel plants and fabrication units, we aim to make a massive dent in global industrial carbon emissions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-industrial-50">
                    <div className="container-wide">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: Target, title: "Our Vision", desc: "Digitalized factories everywhere." },
                                { icon: Users, title: "For MSMEs", desc: "Empowering the small-scale backbone." },
                                { icon: Rocket, title: "Our Journey", desc: "From lab prototype to industrial deployments." },
                                { icon: Award, title: "Our Commitment", desc: "Uncompromising data accuracy & reliability." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-8 rounded-2xl border border-industrial-200">
                                    <item.icon className="w-10 h-10 text-presso mb-6" />
                                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                    <p className="text-industrial-500 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-white">
                    <div className="container-wide">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-6">Founder&apos;s Story</h2>
                            <p className="text-industrial-500 leading-relaxed italic">
                                &quot;We built Presso because we saw machines idly burning energy while factory owners struggled with rising electricity bills. There was no simple way to see the waste. Presso is that window into your factory&apos;s pulse.&quot;
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
