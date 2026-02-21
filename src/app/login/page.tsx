"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { LogIn, Mail, Lock, ShieldCheck } from "lucide-react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/config";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/dashboard");
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : "Failed to login. Please check your credentials.");
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
                        <h1 className="text-2xl font-bold font-display tracking-tight">Access Dashboard</h1>
                        <p className="text-industrial-400 text-sm mt-2">Enter your industrial credentials</p>
                    </div>

                    <div className="p-8">
                        {error && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg flex items-start gap-3">
                                <span className="font-bold">Error:</span> {error}
                            </div>
                        )}

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-industrial-700 block">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-industrial-400" />
                                    <input
                                        required
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 bg-industrial-50 border border-industrial-200 rounded-lg focus:ring-2 focus:ring-presso focus:border-transparent transition-all outline-none text-industrial-900"
                                        placeholder="admin@factory.com"
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

                            <Button type="submit" fullWidth disabled={loading} icon={LogIn}>
                                {loading ? "Authenticating..." : "Login to Portal"}
                            </Button>
                        </form>

                        <div className="mt-8 pt-8 border-t border-industrial-100 text-center space-y-4">
                            <p className="text-sm text-industrial-500">
                                Don&apos;t have an account? <Link href="/signup" className="text-presso font-bold hover:underline">Create one</Link>
                            </p>
                            <p className="text-xs text-industrial-500 pt-2 border-t border-industrial-50">
                                Secured by Firebase Auth. Only authorized personnel can access factory telemetry.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
