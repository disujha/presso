"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Cpu, Wifi, Smartphone, LayoutDashboard, Database } from "lucide-react";
import Image from "next/image";

export default function Product() {
    return (
        <>
            <Navbar />
            <main className="pt-20">
                <section className="py-24 bg-white">
                    <div className="container-wide">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h1 className="text-5xl font-display font-bold text-industrial-900 mb-6">Presso Hardware & Software</h1>
                                <p className="text-xl text-industrial-500 mb-8 leading-relaxed">
                                    Our integrated solution combines industrial-grade IoT nodes with a powerful cloud-based intelligence dashboard.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        { icon: Cpu, title: "Industrial Edge-Processing Nodes", desc: "High-performance IoT controller with built-in Wi-Fi and energy metering." },
                                        { icon: Wifi, title: "Sub-GHz / Wi-Fi Mesh", desc: "Reliable connectivity even in dense metal environments of steel plants." },
                                        { icon: LayoutDashboard, title: "Modern Dashboard", desc: "Next.js 14 web app for real-time visibility and management." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4">
                                            <item.icon className="w-6 h-6 text-presso flex-shrink-0" />
                                            <div>
                                                <h4 className="font-bold">{item.title}</h4>
                                                <p className="text-industrial-500 text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative bg-industrial-100 rounded-3xl aspect-square flex items-center justify-center border border-industrial-200 overflow-hidden shadow-inner">
                                <Image
                                    src="/images/hardware-node.jpg"
                                    alt="Presso Industrial Edge-Processing Node"
                                    fill
                                    className="object-cover p-8"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-industrial-50">
                    <div className="container-wide">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold">The Presso Dashboard</h2>
                            <p className="text-industrial-500 mt-4">Intuitive, fast, and actionable intelligence at your fingertips.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-industrial-200">
                                <Smartphone className="w-10 h-10 text-presso mb-6" />
                                <h3 className="text-xl font-bold mb-4">Mobile Responsive</h3>
                                <p className="text-industrial-500">Monitor factory health from anywhere. Our mobile-first dashboard ensures you&apos;re never disconnected.</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-industrial-200">
                                <Database className="w-10 h-10 text-presso mb-6" />
                                <h3 className="text-xl font-bold mb-4">Historical Analysis</h3>
                                <p className="text-industrial-500">Drill down into months of data to identify seasonal energy peaks and production bottlenecks.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
