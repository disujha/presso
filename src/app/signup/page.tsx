"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { UserPlus, Mail, Lock, ShieldCheck } from "lucide-react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/config";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            router.push("/dashboard");
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : "Failed to create account. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20 bg-industrial-50 flex items-center justify-center p-6">
                <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-industrial-200 overflow-hidden">
                    <div className="bg-industrial-900 p-8 text-white text-center">
                        <div className="w-16 h-16 bg-presso rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-presso/20">
                            <ShieldCheck className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold font-display tracking-tight">Create Console Account</h1>
                        <p className="text-industrial-400 text-sm mt-2">Join the Presso intelligence network</p>
                    </div>

                    <div className="p-8">
                        {error && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg flex items-start gap-3">
                                <span className="font-bold">Error:</span> {error}
                            </div>
                        )}

                        <form onSubmit={handleSignup} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-industrial-700 block">Work Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-industrial-400" />
                                    <input
                                        required
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 bg-industrial-50 border border-industrial-200 rounded-lg focus:ring-2 focus:ring-presso focus:border-transparent transition-all outline-none text-industrial-900"
                                        placeholder="user@rethela.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-industrial-700 block">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-industrial-400" />
                                    <input
                                        required
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 bg-industrial-50 border border-industrial-200 rounded-lg focus:ring-2 focus:ring-presso focus:border-transparent transition-all outline-none text-industrial-900"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-industrial-700 block">Confirm Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-industrial-400" />
                                    <input
                                        required
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 bg-industrial-50 border border-industrial-200 rounded-lg focus:ring-2 focus:ring-presso focus:border-transparent transition-all outline-none text-industrial-900"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            <Button type="submit" fullWidth disabled={loading} icon={UserPlus}>
                                {loading ? "Creating Account..." : "Register Account"}
                            </Button>
                        </form>

                        <div className="mt-8 pt-8 border-t border-industrial-100 text-center">
                            <p className="text-sm text-industrial-500">
                                Already have an account? <Link href="/login" className="text-presso font-bold hover:underline">Login here</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
