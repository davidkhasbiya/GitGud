import {
    Bell,
    Moon,
    Search,
    Menu,
} from "lucide-react";
import { useDashboard } from "../../contexts/DashboardContext";

export default function Topbar() {
    const {
        setMobileOpen,
    } = useDashboard();
    return (
        <header className="flex h-20 items-center justify-between border-b border-zinc-800 bg-zinc-950 px-8">

            <div className="flex items-center">

                <button
                    onClick={() => setMobileOpen(true)}
                    className="mr-4 lg:hidden"
                >
                    <Menu size={22} />
                </button>

                <div
                    className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-zinc-800
                    bg-zinc-900
                    px-4
                    py-3
                    w-full
                    max-w-xs
                    sm:max-w-sm
                    md:max-w-md
                    "
                >
                    <Search
                        size={18}
                        className="text-zinc-500 shrink-0"
                    />

                    <input
                        type="text"
                        placeholder="Search challenge..."
                        className="
                        flex-1
                        bg-transparent
                        outline-none
                        text-white
                        placeholder:text-zinc-500
                        "
                    />
                </div>
            </div>

            <div className="flex items-center gap-5">

                <button className="text-zinc-400 hover:text-violet-500">
                    <Moon size={20} />
                </button>

                <button className="text-zinc-400 hover:text-violet-500">
                    <Bell size={20} />
                </button>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 font-semibold">
                    A
                </div>

            </div>

        </header>
    );
}