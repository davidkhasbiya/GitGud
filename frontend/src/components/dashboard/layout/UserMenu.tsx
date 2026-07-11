import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
    User,
    Settings,
    LogOut,
    Sparkles,
    ArrowRight,
} from "lucide-react";

import Button from "../../ui/Button";

export default function UserMenu() {
    const navigate = useNavigate();
    return (
        <div
            className="
                absolute
                right-0
                top-14
                w-80
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900
                p-5
                shadow-2xl
                z-50
            "
        >
            {/* User */}

            <div className="border-b border-zinc-800 pb-4">

                <h3 className="text-lg font-semibold">
                    Ahmad
                </h3>

                <p className="text-sm text-zinc-500">
                    Backend Engineer
                </p>

            </div>

            {/* AI Recommendation */}

            <div className="py-5">

                <div className="flex items-center gap-2 text-violet-400">

                    <Sparkles size={18} />

                    <span className="font-semibold">
                        AI Recommendation
                    </span>

                </div>

                <div className="mt-4 rounded-xl border border-violet-500/20 bg-violet-500/5 p-4">

                    <p className="text-sm text-zinc-400">
                        Continue learning
                    </p>

                    <h4 className="mt-1 text-lg font-bold">
                        Redis Caching
                    </h4>

                    <p className="mt-2 text-sm text-zinc-500">
                        Estimated 15 minutes • Intermediate
                    </p>

                    <Button
                        className="mt-4 w-full justify-center"
                        onClick={() => navigate("/practice")}
                    >
                        Continue Practice
                        <ArrowRight size={18} />
                    </Button>

                </div>

            </div>

            {/* Navigation */}

            <div className="border-t border-zinc-800 pt-4 space-y-2">

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

            {/* Logout */}

            <div className="mt-4 border-t border-zinc-800 pt-4">

                <button
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