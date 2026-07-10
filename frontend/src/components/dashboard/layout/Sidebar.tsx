import {
    LayoutDashboard,
    Code2,
    Bot,
    BarChart3,
    User,
    Settings,
    LogOut,
    BookOpen,
} from "lucide-react";

import Logo from "../../layout/Navbar/Logo";
import SidebarItem from "../layout/SidebarItem";
import { useDashboard } from "../../../contexts/DashboardContext";
import { cn } from "../../../lib/cn";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
    const {
        collapsed,
        mobileOpen,
        setMobileOpen,
        setCollapsed
    } = useDashboard();

    const menuItems = [
        {
            label: "Dashboard",
            to: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            label: "Practice",
            to: "/practice",
            icon: BookOpen,
        },
        {
            label: "AI Mentor",
            to: "/ai",
            icon: Bot,
        },
        {
            label: "Progress",
            to: "/progress",
            icon: BarChart3,
        },
        {
            label: "Profile",
            to: "/profile",
            icon: User,
        },
        {
            label: "Settings",
            to: "/settings",
            icon: Settings,
        },
    ];

    const navigate = useNavigate();

    const logout = () => {
        const confirmed = window.confirm(
            "Are you sure you want to logout?"
        );

        if (!confirmed) return;

        localStorage.removeItem("isLoggedIn");
        navigate("/login");
    };

    return (
        <>
            <aside
                className={cn(
                    "fixed left-0 top-0 z-50 h-screen border-r border-zinc-800 bg-zinc-950 transition-all duration-300",

                    collapsed
                        ? "w-24"
                        : "w-72",

                    mobileOpen
                        ? "translate-x-0"
                        : "-translate-x-full",

                    "lg:translate-x-0"

                )}
            >
                <div
                    className={cn(
                        "group relative flex items-center border-b border-zinc-800 p-6",
                        collapsed && "justify-center"
                    )}
                >

                    <div
                        className="
                        transition-opacity
                        duration-200
                        group-hover:opacity-0
                        "
                    >
                        <Logo collapsed={collapsed} />
                    </div>

                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="
                        absolute
                        inset-0
                        hidden
                        items-center
                        justify-center
                        opacity-0
                        transition-all
                        duration-200
                        group-hover:opacity-100
                        hover:bg-zinc-900
                        lg:flex
                        "
                    >

                        {
                            collapsed
                                ?
                                <PanelLeftOpen size={22} />
                                :
                                <PanelLeftClose size={22} />
                        }

                    </button>

                </div>
                <nav className="flex-1 space-y-2 p-5">
                    {menuItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <SidebarItem
                                key={item.to}
                                to={item.to}
                                icon={<Icon size={20} />}
                                collapsed={collapsed}
                            >
                                {item.label}
                            </SidebarItem>
                        );
                    })}
                </nav>

                <div className="border-t border-zinc-800 p-5">
                    <button
                        onClick={logout}
                        className={cn(
                            "flex w-full items-center gap-3 rounded-xl px-4 py-3 text-zinc-400 transition hover:bg-red-500/10 hover:text-red-400",
                            collapsed && "justify-center px-0"
                        )}
                    >
                        <LogOut size={20} />

                        {!collapsed && <span>Logout</span>}
                    </button>
                </div>
            </aside>
            {mobileOpen && (
                <div
                    onClick={() => setMobileOpen(false)}
                    className="
                        fixed
                        inset-0
                        z-40
                        bg-black/60
                        lg:hidden
                        "
                />
            )}
        </>
    );
}
