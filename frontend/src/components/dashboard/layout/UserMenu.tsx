import {
    Bot,
    Flame,
    Gem,
    ShieldCheck,
    Trophy,
    User,
    LogOut,
    Settings,
} from "lucide-react";

export default function ProfileMenu() {
    return (
        <div className="
                absolute
                right-0
                top-14
                w-72
                origin-top-right
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900
                p-5
                shadow-xl
                transition-all
                duration-200
                animate-in
                fade-in
                zoom-in-95
                ">

            <div className="border-b border-zinc-800 pb-4">

                <p className="font-semibold">
                    Ahmad
                </p>

                <p className="text-sm text-zinc-500">
                    Backend Engineer
                </p>

            </div>

            <div className="mt-5 space-y-3">

                <div className="flex justify-between">
                    <span className="flex items-center gap-2">
                        <Flame size={16} />
                        Streak
                    </span>

                    <span>15</span>
                </div>

                <div className="flex justify-between">
                    <span className="flex items-center gap-2">
                        <Trophy size={16} />
                        XP
                    </span>

                    <span>18,250</span>
                </div>

                <div className="flex justify-between">
                    <span className="flex items-center gap-2">
                        <Gem size={16} />
                        Gems
                    </span>

                    <span>42</span>
                </div>

                <div className="flex justify-between">
                    <span className="flex items-center gap-2">
                        <ShieldCheck size={16} />
                        Shield
                    </span>

                    <span>x2</span>
                </div>

                <div className="flex justify-between">
                    <span className="flex items-center gap-2">
                        <Bot size={16} />
                        AI
                    </span>

                    <span className="text-emerald-400">
                        Online
                    </span>
                </div>

            </div>

            <div className="mt-6 border-t border-zinc-800 pt-4 space-y-2">

                <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 hover:bg-zinc-800">
                    <User size={18} />
                    Profile
                </button>

                <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 hover:bg-zinc-800">
                    <Settings size={18} />
                    Settings
                </button>

                <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-red-400 hover:bg-red-500/10">
                    <LogOut size={18} />
                    Logout
                </button>

            </div>

        </div>
    );
}