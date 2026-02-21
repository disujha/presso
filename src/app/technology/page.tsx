"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Shield, Server, Globe, Cpu, Code } from "lucide-react";

export default function Technology() {
    return (
        <>
            <Navbar />
            <main className="pt-20">
                <section className="py-24 bg-industrial-900 text-white">
                    <div className="container-wide">
                        <div className="max-w-3xl">
                            <h1 className="text-5xl font-display font-bold mb-6">Built on a Modern Stack</h1>
                            <p className="text-xl text-industrial-400 leading-relaxed">
                                We use industry-standard technologies to ensure high reliability, massive scale, and real-time performance.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-white">
                    <div className="container-wide">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="space-y-6">
                                <div className="w-14 h-14 bg-industrial-50 rounded-xl flex items-center justify-center">
                                    <Cpu className="w-8 h-8 text-presso" />
                                </div>
                                <h3 className="text-2xl font-bold">Retrofit IoT Nodes</h3>
                                <p className="text-industrial-500 text-sm leading-relaxed">
                                    Based on our High-Precision Edge-Computing Architecture, our hardware nodes handle complex DSP tasks locally to calculate true RMS power and power factor, sending only condensed telemetry to the cloud.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="w-14 h-14 bg-industrial-50 rounded-xl flex items-center justify-center">
                                    <Server className="w-8 h-8 text-presso" />
                                </div>
                                <h3 className="text-2xl font-bold">Firebase Real-time</h3>
                                <p className="text-industrial-500 text-sm leading-relaxed">
                                    Data is synced instantly using Firestore and Firebase Realtime Database. This architecture allows multiple users to see machine state changes with sub-second latency.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="w-14 h-14 bg-industrial-50 rounded-xl flex items-center justify-center">
                                    <Globe className="w-8 h-8 text-presso" />
                                </div>
                                <h3 className="text-2xl font-bold">Next.js Edge</h3>
                                <p className="text-industrial-500 text-sm leading-relaxed">
                                    The dashboard is built using Next.js 14 and deployed on Vercel&apos;s global edge network, ensuring instant loading times regardless of factory location.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-industrial-50 border-y border-industrial-200">
                    <div className="container-wide">
                        <div className="bg-white p-12 rounded-3xl border border-industrial-200">
                            <div className="flex flex-col lg:flex-row gap-16 items-center">
                                <div className="flex-1">
                                    <h2 className="text-3xl font-bold mb-6">Scalable IoT Infrastructure</h2>
                                    <ul className="space-y-4">
                                        {[
                                            "OTA (Over-the-Air) firmware updates",
                                            "End-to-end TLS encryption",
                                            "Role-based access control (RBAC)",
                                            "Automated anomaly detection",
                                            "RESTful and WebSocket APIs for integration"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-industrial-600">
                                                <Shield className="w-5 h-5 text-presso" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex-1 bg-industrial-900 p-6 rounded-2xl overflow-hidden shadow-xl">
                                    <div className="flex items-center gap-2 mb-4 border-b border-industrial-800 pb-2">
                                        <Code className="w-4 h-4 text-industrial-500" />
                                        <span className="text-xs font-mono text-industrial-500 uppercase tracking-widest">telemetry.json</span>
                                    </div>
                                    <pre className="text-presso-light font-mono text-[10px] md:text-sm">
                                        {`{
  "device_id": "PR-STEEL-01",
  "status": "active",
  "energy": {
    "voltage": 232.1,
    "current": 4.52,
    "power": 1.05,
    "unit": "kW"
  },
  "utilization": 88.5,
  "timestamp": "2024-03-21T10:30:00Z"
}`}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
