"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
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
            await addDoc(collection(db, "inquiries"), data);
            setSubmitted(true);
        } catch (error) {
            console.error("Error submitting inquiry:", error);
            alert("Failed to send message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <main className="pt-20">
                <section className="py-24 bg-industrial-50">
                    <div className="container-wide">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            <div>
                                <h1 className="text-5xl font-display font-bold text-industrial-900 mb-6">Get in Touch</h1>
                                <p className="text-xl text-industrial-500 mb-12">
                                    Ready to optimize your factory? Request a pilot or ask a technical question. Our team will get back to you within 24 hours.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-industrial-200 flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-6 h-6 text-presso" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-bold">Sales & Technical Queries</h4>
                                            <p className="text-industrial-500 font-mono text-sm">sales@presso.live</p>
                                            <h4 className="font-bold pt-2">Device & Post-Sales Support</h4>
                                            <p className="text-industrial-500 font-mono text-sm">hello@presso.live</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-industrial-200 flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-6 h-6 text-presso" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Call Us</h4>
                                            <p className="text-industrial-500">+91 (80) 2345 6789</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-industrial-200 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-presso" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Visit Our Regd. Office</h4>
                                            <p className="text-industrial-500 text-sm leading-relaxed">
                                                reThela Technology Pvt Ltd<br />
                                                301, Shreeshyam Apartment, 1/16 Mirpara Road,<br />
                                                Liluah, Howrah 711203
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-industrial-200">
                                {submitted ? (
                                    <div className="py-12 text-center">
                                        <div className="w-20 h-20 bg-presso/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle2 className="w-10 h-10 text-presso" />
                                        </div>
                                        <h2 className="text-2xl font-bold mb-4">Inquiry Received</h2>
                                        <p className="text-industrial-500">Thank you for reaching out. We&apos;ve received your inquiry and will contact you shortly.</p>
                                        <Button onClick={() => setSubmitted(false)} className="mt-8" variant="ghost">Send another message</Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-industrial-700">Name</label>
                                                <input name="name" required type="text" className="w-full px-4 py-3 bg-industrial-50 border border-industrial-200 rounded-lg focus:ring-2 focus:ring-presso focus:border-transparent transition-all outline-none" placeholder="John Doe" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-industrial-700">Company</label>
                                                <input name="company" required type="text" className="w-full px-4 py-3 bg-industrial-50 border border-industrial-200 rounded-lg focus:ring-2 focus:ring-presso focus:border-transparent transition-all outline-none" placeholder="Steel Works Ltd" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-industrial-700">Email</label>
                                                <input name="email" required type="email" className="w-full px-4 py-3 bg-industrial-50 border border-industrial-200 rounded-lg focus:ring-2 focus:ring-presso focus:border-transparent transition-all outline-none" placeholder="john@company.com" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-industrial-700">Phone</label>
                                                <input name="phone" required type="tel" className="w-full px-4 py-3 bg-industrial-50 border border-industrial-200 rounded-lg focus:ring-2 focus:ring-presso focus:border-transparent transition-all outline-none" placeholder="+91 98765 43210" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-industrial-700">Message</label>
                                            <textarea name="message" required className="w-full px-4 py-3 bg-industrial-50 border border-industrial-200 rounded-lg focus:ring-2 focus:ring-presso focus:border-transparent transition-all outline-none h-32 resize-none" placeholder="Tell us about your factory and machines..."></textarea>
                                        </div>

                                        <Button type="submit" fullWidth disabled={loading} icon={Send}>
                                            {loading ? "Sending..." : "Submit Inquiry"}
                                        </Button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
