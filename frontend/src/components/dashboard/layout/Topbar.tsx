import {
    Bell,
    Moon,
    Menu,
    Flame,
    Trophy,
} from "lucide-react";

import { useState } from "react";

import { useDashboard } from "../../../contexts/DashboardContext";

import GlobalSearch from "../../layout/globalSearch/GlobalSearch";

import UserMenu from "./UserMenu";

export default function Topbar() {

    const {
        setMobileOpen,
    } = useDashboard();

    const [
        openUserMenu,
        setOpenUserMenu,
    ] = useState(false);

    return (

        <header className="flex h-20 items-center justify-between border-b border-zinc-800 bg-zinc-950 px-8">

            {/* LEFT */}

            <div className="flex items-center">

                <button
                    onClick={() => setMobileOpen(true)}
                    className="mr-4 lg:hidden"
                >

                    <Menu size={22} />

                </button>

                <GlobalSearch />

            </div>

            {/* RIGHT */}

            <div className="flex items-center gap-6">

                <div className="hidden items-center gap-6 lg:flex">

                    <div className="flex items-center gap-2">

                        <Flame
                            size={18}
                            className="text-orange-400"
                        />

                        <span>

                            15

                        </span>

                    </div>

                    <div className="flex items-center gap-2">

                        <Trophy
                            size={18}
                            className="text-yellow-400"
                        />

                        <span>

                            2450 XP

                        </span>

                    </div>

                    <div className="rounded-full bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-400">

                        Lv.12

                    </div>

                </div>

                <button
                    className="text-zinc-400 transition hover:text-violet-500"
                    title="Coming Soon"
                >

                    <Moon size={20} />

                </button>

                <button
                    className="text-zinc-400 transition hover:text-violet-500"
                >

                    <Bell size={20} />

                </button>

                <div className="relative">

                    <button
                        onClick={() =>
                            setOpenUserMenu(!openUserMenu)
                        }
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 font-semibold text-white"
                    >

                        A

                    </button>

                    {openUserMenu && (

                        <UserMenu />

                    )}

                </div>

            </div>

        </header>

    );

}