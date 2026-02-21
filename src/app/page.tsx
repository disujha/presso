"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle2, Zap, BarChart3, Cloud, Leaf, Factory, Settings2, Cpu } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-white">
          <div className="container-wide relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-presso/10 text-presso text-xs font-bold uppercase tracking-wider mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-presso opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-presso"></span>
                  </span>
                  Industrial Energy Intelligence
                </div>
                <h1 className="text-5xl md:text-7xl font-display font-bold text-industrial-900 leading-[1.1] mb-6">
                  Intelligence for <span className="text-presso text-outline-presso">Steel & Manufacturing</span>
                </h1>
                <p className="text-xl text-industrial-500 leading-relaxed mb-10 max-w-2xl">
                  Deploy retrofit IoT sensors onto your legacy industrial machines in minutes. Get real-time energy monitoring, idle detection, and decarbonization insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="/contact" variant="primary">Request Pilot</Button>
                  <Button href="/dashboard" variant="outline">View Dashboard Demo</Button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-industrial-900 z-0 clip-path-slant hidden lg:block overflow-hidden">
            <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-10"></div>
            <Image
              src="/images/hero-bg.jpg"
              alt="Industrial Background"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-60"
            />
          </div>
        </section>

        {/* How it Works */}
        <section className="py-24 bg-industrial-100">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4">How Presso Works</h2>
              <p className="text-industrial-500">A seamless integration process designed for heavy industrial environments.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: Settings2, title: "Install device", desc: "Clip-on retrofit sensors on any machine in <10 mins." },
                { icon: Zap, title: "Monitor activity", desc: "High-frequency data streaming via Wi-Fi/LTE." },
                { icon: BarChart3, title: "Get insights", desc: "Automated analysis of energy & utilization patterns." },
                { icon: Leaf, title: "Reduce waste", desc: "Cut idle energy by 20% and lower carbon footprint." }
              ].map((step, i) => (
                <div key={i} className="relative group p-8 bg-white rounded-2xl shadow-sm border border-industrial-200 hover:border-presso transition-colors">
                  <div className="w-12 h-12 bg-industrial-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-presso/10 transition-colors">
                    <step.icon className="w-6 h-6 text-industrial-400 group-hover:text-presso" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-industrial-500 text-sm leading-relaxed">{step.desc}</p>
                  {i < 3 && <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-industrial-300 z-10"></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-white">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">Empowering Factories with Real-time Data</h2>
                <div className="space-y-8">
                  {[
                    { icon: Cpu, title: "Plug-and-play Hardware", desc: "Edge-Computational industrial-grade IoT nodes with rugged enclosures." },
                    { icon: BarChart3, title: "Real-time Monitoring", desc: "View every kilowatt consumed as it happens on our cloud dashboard." },
                    { icon: CheckCircle2, title: "Idle Energy Detection", desc: "Identify machines running without load to stop invisible losses." },
                    { icon: Cloud, title: "Firebase Powered", desc: "Low-latency, secure data synchronization for instant visibility." }
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="flex-shrink-0 w-12 h-12 bg-presso/5 rounded-full flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-presso" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-1">{feature.title}</h4>
                        <p className="text-industrial-500 text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-industrial-200 bg-industrial-50 p-2 md:p-4">
                  <div className="relative aspect-video bg-industrial-900 rounded-2xl flex items-center justify-center overflow-hidden border border-industrial-800">
                    <Image
                      src="/images/dashboard-preview.jpg"
                      alt="Presso Intelligence Dashboard"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                {/* Abstract decoration */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-presso/10 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="relative py-24 bg-industrial-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10 grayscale">
            <Image
              src="/images/steel-plant.jpg"
              alt="Steel Plant Background"
              fill
              className="object-cover"
            />
          </div>
          <div className="container-wide relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div className="max-w-xl">
                <h2 className="text-4xl font-bold mb-4">Built for Industry</h2>
                <p className="text-industrial-400">Presso is optimized for the harsh environments of manufacturing hubs and MSMEs.</p>
              </div>
              <Button href="/contact" variant="primary">Start Case Study</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Steel Plants", desc: "Optimize furnace operations and heavy rolling mills energy cycles." },
                { title: "Fabrication Units", desc: "Monitor welding, cutting, and grinding workstations for efficiency." },
                { title: "Manufacturing MSMEs", desc: "Reduce electricity bills by 15%+ with zero-down-time installation." }
              ].map((useCase, i) => (
                <div key={i} className="p-10 bg-industrial-800 rounded-2xl border border-industrial-700 hover:bg-industrial-800/50 transition-colors">
                  <Factory className="w-10 h-10 text-presso mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                  <p className="text-industrial-400 leading-relaxed">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
