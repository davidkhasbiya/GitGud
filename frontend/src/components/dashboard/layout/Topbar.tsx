import {
    Bell,
    Moon,
    Search,
    Menu,
} from "lucide-react";
import {
    Flame,
    Trophy,
    Gem,
    ShieldCheck,
    Bot,
} from "lucide-react";
import { useDashboard } from "../../../contexts/DashboardContext";
import { useState } from "react";
import UserMenu from "./UserMenu";
import GlobalSearch from "../../layout/globalSearch/GlobalSearch";

export default function Topbar() {
    const {
        setMobileOpen,
    } = useDashboard();

const [openUserMenu, setOpenUserMenu] = useState(false);
    
    return (
        <header className="flex h-20 items-center justify-between border-b border-zinc-800 bg-zinc-950 px-8">

            <div className="flex items-center">

                <button
                    onClick={() => setMobileOpen(true)}
                    className="mr-4 lg:hidden"
                >
                    <Menu size={22} />
                </button>

                <GlobalSearch />   
            </div>

            <div className="flex items-center gap-6">

                <div className="hidden xl:flex items-center gap-5">

                    <div className="flex items-center gap-2">
                        <Flame
                            size={18}
                            className="text-orange-400"
                        />
                        <span>15</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Trophy
                            size={18}
                            className="text-yellow-400"
                        />
                        <span>18.2k</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Gem
                            size={18}
                            className="text-cyan-400"
                        />
                        <span>42</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <ShieldCheck
                            size={18}
                            className="text-emerald-400"
                        />
                        <span>x2</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Bot
                            size={18}
                            className="text-violet-400"
                        />
                        <span className="text-emerald-400">
                            Online
                        </span>
                    </div>

                </div>

                <button className="text-zinc-400 hover:text-violet-500">
                    <Moon size={20} />
                </button>

                <button className="text-zinc-400 hover:text-violet-500">
                    <Bell size={20} />
                </button>

                <div className="relative">

                    <button
                        onClick={() => setOpenUserMenu(!openUserMenu)}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 font-semibold"
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