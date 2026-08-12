import {
    Menu,
    Flame,
    Trophy,
} from "lucide-react";

import {
    useState,
    useEffect,
} from "react";

import { useDashboard } from "../../../contexts/DashboardContext";

import GlobalSearch from "../../layout/globalSearch/GlobalSearch";

import UserMenu from "./UserMenu";

import useAuth from "../../../hooks/useAuth";

import { getDashboard } from "../../../services/dashboardService";

import type { DashboardData } from "../../../types/dashboard";

export default function Topbar() {

    const { setMobileOpen } = useDashboard();

    const { user } = useAuth();

    const [openUserMenu, setOpenUserMenu] =
        useState(false);

    const [dashboard, setDashboard] =
        useState<DashboardData | null>(null);

    useEffect(() => {

        const userId = user?.id;

        if (!userId) {

            setDashboard(null);

            return;
        }

        async function loadDashboard() {

            try {

                const data =
                    await getDashboard(userId);

                setDashboard(data);

            } catch (error) {

                console.error(
                    "Failed to load dashboard data:",
                    error
                );

                setDashboard(null);
            }
        }

        loadDashboard();

    }, [user?.id]);

    return (

        <header
            className="
                flex
                h-20
                items-center
                justify-between
                border-b
                border-zinc-800
                bg-zinc-950
                px-8
            "
        >

            {/* LEFT */}

            <div className="flex items-center">

                <button
                    onClick={() =>
                        setMobileOpen(true)
                    }
                    className="mr-4 lg:hidden"
                    aria-label="Open navigation menu"
                >

                    <Menu size={22} />

                </button>

                <GlobalSearch />

            </div>


            {/* RIGHT */}

            <div className="flex items-center gap-6">

                {/* DASHBOARD STATS */}

                <div
                    className="
                        hidden
                        items-center
                        gap-6
                        lg:flex
                    "
                >

                    {/* STREAK */}

                    <div className="flex items-center gap-2">

                        <Flame
                            size={18}
                            className="text-orange-400"
                        />

                        <span>
                            {dashboard?.streak ?? 0} Days
                        </span>

                    </div>


                    {/* XP */}

                    <div className="flex items-center gap-2">

                        <Trophy
                            size={18}
                            className="text-yellow-400"
                        />

                        <span>
                            {dashboard?.xp ?? 0} XP
                        </span>

                    </div>


                    {/* LEVEL */}

                    <div
                        className="
                            rounded-full
                            bg-violet-500/10
                            px-3
                            py-1
                            text-sm
                            font-medium
                            text-violet-400
                        "
                    >

                        Lv.{dashboard?.level ?? 1}

                    </div>

                </div>


                {/* USER */}

                <div className="relative">

                    <button
                        onClick={() =>
                            setOpenUserMenu(
                                (previous) =>
                                    !previous
                            )
                        }
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            bg-violet-600
                            font-semibold
                            text-white
                        "
                        aria-label="Open user menu"
                    >

                        {
                            user?.name
                                ?.charAt(0)
                                .toUpperCase() ?? "U"
                        }

                    </button>


                    {openUserMenu && (

                        <UserMenu />

                    )}

                </div>

            </div>

        </header>

    );
}