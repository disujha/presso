"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
    BarChart3,
    Activity,
    LogOut,
    Zap,
    AlertTriangle,
    CheckCircle2,
    Clock,
    Cpu
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useAuth } from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const { user, loading, logout } = useAuth();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("overview");

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login");
        }
    }, [user, loading, router]);

    if (loading) return (
        <div className="min-h-screen bg-industrial-50 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-presso"></div>
        </div>
    );

    if (!user) return null;

    return (
        <div className="min-h-screen bg-industrial-100 pb-20">
            <nav className="bg-industrial-900 text-white border-b border-industrial-800">
                <div className="container-wide h-16 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-presso rounded flex items-center justify-center">
                                <span className="text-white font-bold text-xs">P</span>
                            </div>
                            <span className="text-lg font-display font-bold tracking-tighter">Presso Console</span>
                        </div>
                        <div className="hidden md:flex gap-4">
                            {["Overview", "Devices", "Analytics", "Settings"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab.toLowerCase())}
                                    className={`text-sm px-4 py-2 rounded-md transition-colors ${activeTab === tab.toLowerCase() ? 'bg-industrial-800 text-presso' : 'text-industrial-400 hover:text-white'}`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-xs text-industrial-400 hidden sm:inline">{user.email}</span>
                        <button onClick={logout} className="p-2 text-industrial-400 hover:text-white transition-colors">
                            <LogOut className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </nav>

            <main className="container-wide pt-10">
                <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-industrial-900">Factory Overview</h1>
                        <p className="text-industrial-500 mt-1">Real-time status of connected IoT nodes and machines.</p>
                    </div>
                    <div className="flex gap-3">
                        <div className="px-4 py-2 bg-white rounded-lg border border-industrial-200 shadow-sm flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-xs font-bold text-industrial-700 uppercase">Live Connection</span>
                        </div>
                    </div>
                </header>

                {/* Energy Insight Card */}
                <div className="mb-10 p-6 bg-presso rounded-2xl text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
                    <div className="relative z-10">
                        <h3 className="text-presso-light font-bold text-sm uppercase tracking-widest mb-2">Efficiency Insight</h3>
                        <p className="text-2xl font-display font-medium max-w-xl">
                            Main Rolling Mill idle consumption detected for 45 mins. Potential savings: <span className="font-bold underline decoration-presso-light">₹1,240</span>.
                        </p>
                    </div>
                    <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 relative z-10">Generate Report</Button>
                    <div className="absolute top-0 right-0 h-full w-1/3 bg-white/5 -skew-x-12 translate-x-32 translate-y-2 pointer-events-none"></div>
                </div>

                {/* Status Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <StatusCard
                        icon={Cpu}
                        label="Total Devices"
                        value="12"
                        sub="8 active / 4 idle"
                    />
                    <StatusCard
                        icon={Zap}
                        label="Current Load"
                        value="42.5 kW"
                        sub="+12% from avg"
                        trend="up"
                    />
                    <StatusCard
                        icon={BarChart3}
                        label="Utilization"
                        value="78%"
                        sub="Week-to-date"
                    />
                    <StatusCard
                        icon={Activity}
                        label="Health Score"
                        value="94/100"
                        sub="Excellent"
                        color="text-green-600"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <Activity className="w-5 h-5 text-presso" />
                            Live Machine Status
                        </h2>
                        <div className="bg-white rounded-2xl border border-industrial-200 overflow-hidden shadow-sm">
                            <table className="w-full text-left">
                                <thead className="bg-industrial-50 border-b border-industrial-200 text-industrial-500 text-xs uppercase font-bold tracking-widest">
                                    <tr>
                                        <th className="px-6 py-4">Machine Name</th>
                                        <th className="px-6 py-4">Status</th>
                                        <th className="px-6 py-4">Utilization</th>
                                        <th className="px-6 py-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-industrial-100">
                                    <MachineRow name="Main Rolling Mill" status="Active" utilization={88} color="green" />
                                    <MachineRow name="Blast Furnace A" status="Idle" utilization={12} color="yellow" />
                                    <MachineRow name="Fabrication Line 1" status="Active" utilization={92} color="green" />
                                    <MachineRow name="CNC Cutter 04" status="Offline" utilization={0} color="red" />
                                    <MachineRow name="Hydraulic Press" status="Active" utilization={65} color="green" />
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <Clock className="w-5 h-5 text-presso" />
                            Recent Alerts
                        </h2>
                        <div className="space-y-4">
                            <AlertItem
                                type="warning"
                                title="High Power Load"
                                time="10 mins ago"
                                desc="Mill 01 exceeded threshold."
                            />
                            <AlertItem
                                type="info"
                                title="Firmware Update"
                                time="1 hour ago"
                                desc="PR-S3-08 successfully updated."
                            />
                            <AlertItem
                                type="error"
                                title="Device Disconnected"
                                time="3 hours ago"
                                desc="Cutter 04 signal lost."
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

interface StatusCardProps {
    icon: LucideIcon;
    label: string;
    value: string;
    sub: string;
    trend?: string;
    color?: string;
}

function StatusCard({ icon: Icon, label, value, sub, trend, color = "text-industrial-900" }: StatusCardProps) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-industrial-200 shadow-sm flex flex-col">
            <div className="w-10 h-10 bg-industrial-50 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-presso" />
            </div>
            <span className="text-xs font-bold text-industrial-500 uppercase tracking-wider mb-1">{label}</span>
            <div className="flex items-baseline gap-2">
                <span className={`text-2xl font-bold ${color}`}>{value}</span>
                {trend && <span className={`text-xs font-bold ${trend === 'up' ? 'text-red-500' : 'text-green-500'}`}>
                    {trend === 'up' ? '↑' : '↓'}
                </span>}
            </div>
            <span className="text-xs text-industrial-400 mt-1">{sub}</span>
        </div>
    );
}

function MachineRow({ name, status, utilization, color }: { name: string, status: string, utilization: number, color: "green" | "yellow" | "red" }) {
    const statusColors: Record<string, string> = {
        green: "bg-green-100 text-green-700 border-green-200",
        yellow: "bg-yellow-100 text-yellow-700 border-yellow-200",
        red: "bg-red-100 text-red-700 border-red-200",
    };

    return (
        <tr className="hover:bg-industrial-50 transition-colors">
            <td className="px-6 py-4 font-bold text-industrial-800 text-sm">{name}</td>
            <td className="px-6 py-4">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase border ${statusColors[color]}`}>
                    {status}
                </span>
            </td>
            <td className="px-6 py-4">
                <div className="w-full max-w-[100px] h-2 bg-industrial-100 rounded-full overflow-hidden">
                    <div
                        className={`h-full ${status === 'Active' ? 'bg-presso' : status === 'Idle' ? 'bg-yellow-400' : 'bg-industrial-300'}`}
                        style={{ width: `${utilization}%` }}
                    ></div>
                </div>
            </td>
            <td className="px-6 py-4 text-xs font-bold text-presso cursor-pointer hover:underline">View Stats</td>
        </tr>
    );
}

function AlertItem({ type, title, time, desc }: { type: "warning" | "info" | "error", title: string, time: string, desc: string }) {
    const icons: Record<string, React.ReactNode> = {
        warning: <AlertTriangle className="w-5 h-5 text-yellow-600" />,
        info: <CheckCircle2 className="w-5 h-5 text-blue-600" />,
        error: <AlertTriangle className="w-5 h-5 text-red-600" />,
    };

    return (
        <div className="p-4 bg-white rounded-xl border border-industrial-200 shadow-sm flex items-start gap-4">
            <div className="mt-1">{icons[type]}</div>
            <div>
                <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold text-sm text-industrial-800">{title}</h4>
                    <span className="text-[10px] text-industrial-400 uppercase font-bold">{time}</span>
                </div>
                <p className="text-xs text-industrial-500 leading-tight">{desc}</p>
            </div>
        </div>
    );
}
