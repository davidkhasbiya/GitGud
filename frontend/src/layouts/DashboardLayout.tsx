import { Outlet } from "react-router-dom";

import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

import { DashboardProvider, useDashboard } from "../contexts/DashboardContext";
import { cn } from "../lib/cn";

function DashboardContent() {
    const { collapsed } = useDashboard();

    return (
        <main className="min-h-screen bg-zinc-950 text-white">

            <Sidebar />

            <div
                className={cn(
                    "transition-all duration-300",

                    collapsed
                        ? "lg:ml-24"
                        : "lg:ml-72"
                )}
            >
                <Topbar />

                <main className="p-8">
                    <Outlet />
                </main>

            </div>

        </main>
    );
}

export default function DashboardLayout() {
    return (
        <DashboardProvider>
            <DashboardContent />
        </DashboardProvider>
    );
}