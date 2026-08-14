import {
    User,
    Settings,
    LogOut,
    Sparkles,
    ArrowRight,
} from "lucide-react";

import {
    Link,
    useNavigate,
} from "react-router-dom";

import {
    useEffect,
    useState,
} from "react";

import Button from "../../ui/Button";

import useAuth from "../../../hooks/useAuth";

import { getProfile } from "../../../services/profileService";

import { getDashboard } from "../../../services/dashboardService";

import type { Profile } from "../../../types/profile";

import type { DashboardData } from "../../../types/dashboard";

export default function UserMenu() {

    const navigate = useNavigate();

    const {
        user,
        logout,
    } = useAuth();

    const [profile, setProfile] =
        useState<Profile | null>(null);

    const [dashboard, setDashboard] =
        useState<DashboardData | null>(null);

    useEffect(() => {
        if (!user?.id) return;
        const userId: string = user.id;
        const loadUserData = async () => {
            try {
                const [
                    profileData,
                    dashboardData,
                ] = await Promise.all([
                    getProfile(userId),
                    getDashboard(userId),
                ]);
                setProfile(profileData);
                setDashboard(dashboardData);
            } catch (err) {
                console.error(
                    "Failed to load user menu data:",
                    err,
                );
            }
        };
        loadUserData();
    }, [user?.id]);

    const handleLogout = () => {

        logout();

        navigate("/login");

    };

    const recommendation =
        dashboard?.recommendation ?? null;

    return (

        <div
            className="
                absolute
                right-0
                top-14
                z-50
                w-80
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900
                p-5
                shadow-2xl
            "
        >

            {/* USER */}

            <div className="border-b border-zinc-800 pb-4">

                <h3 className="font-semibold">

                    {
                        profile?.name ??
                        user?.name ??
                        "User"
                    }

                </h3>

                <p className="text-sm text-zinc-400">

                    {
                        profile?.email ??
                        user?.email ??
                        ""
                    }

                </p>

            </div>


            {/* AI RECOMMENDATION */}

            <div className="py-5">

                <div
                    className="
                        flex
                        items-center
                        gap-2
                        text-violet-400
                    "
                >

                    <Sparkles size={18} />

                    <span className="font-semibold">

                        AI Recommendation

                    </span>

                </div>


                {recommendation ? (

                    <div
                        className="
                            mt-4
                            rounded-xl
                            border
                            border-violet-500/20
                            bg-violet-500/5
                            p-4
                        "
                    >

                        <p className="text-sm text-zinc-400">

                            Continue learning

                        </p>

                        <h4 className="mt-1 text-lg font-bold">

                            {recommendation.title}

                        </h4>

                        <p className="mt-2 text-sm text-zinc-500">

                            {recommendation.reason}

                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">

                            <span
                                className="
                                    rounded-md
                                    bg-zinc-800
                                    px-2
                                    py-1
                                    text-xs
                                "
                            >

                                {recommendation.difficulty}

                            </span>

                            <span
                                className="
                                    rounded-md
                                    bg-zinc-800
                                    px-2
                                    py-1
                                    text-xs
                                "
                            >

                                {recommendation.estimatedMinutes} min

                            </span>

                            <span
                                className="
                                    rounded-md
                                    bg-violet-500/10
                                    px-2
                                    py-1
                                    text-xs
                                    text-violet-400
                                "
                            >

                                Focus: {recommendation.focus}

                            </span>

                        </div>

                        <Button
                            className="
                                mt-4
                                w-full
                                justify-center
                            "
                            onClick={() =>
                                navigate("/practice")
                            }
                        >

                            Continue Practice

                            <ArrowRight size={18} />

                        </Button>

                    </div>

                ) : (

                    <div
                        className="
                            mt-4
                            rounded-xl
                            border
                            border-zinc-800
                            bg-zinc-800/50
                            p-4
                        "
                    >

                        <p className="text-sm text-zinc-500">

                            Complete a practice to receive
                            an AI recommendation.

                        </p>

                    </div>

                )}

            </div>


            {/* NAVIGATION */}

            <div
                className="
                    space-y-2
                    border-t
                    border-zinc-800
                    pt-4
                "
            >

                <Link
                    to="/profile"
                    className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        px-3
                        py-3
                        transition
                        hover:bg-zinc-800
                    "
                >

                    <User size={18} />

                    Profile

                </Link>


                <Link
                    to="/settings"
                    className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        px-3
                        py-3
                        transition
                        hover:bg-zinc-800
                    "
                >

                    <Settings size={18} />

                    Settings

                </Link>

            </div>


            {/* LOGOUT */}

            <div
                className="
                    mt-4
                    border-t
                    border-zinc-800
                    pt-4
                "
            >

                <button
                    onClick={handleLogout}
                    className="
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-xl
                        px-3
                        py-3
                        text-red-400
                        transition
                        hover:bg-red-500/10
                    "
                >

                    <LogOut size={18} />

                    Logout

                </button>

            </div>

        </div>
    );
}