import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../../../lib/cn";

interface SidebarItemProps {
    to: string;
    icon: ReactNode;
    children: ReactNode;
    collapsed: boolean;
}

export default function SidebarItem({
    to,
    icon,
    children,
    collapsed = false,
}: SidebarItemProps) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                cn(
                    "flex items-center rounded-xl px-4 py-3 transition-all duration-200",
                    collapsed
                        ? "justify-center"
                        : "gap-3",
                    isActive
                        ? "bg-violet-600 text-white"
                        : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                )
            }
        >
            {icon}

            {!collapsed && (
                <span
                    className={cn(
                        "transition-all duration-300",
                        collapsed
                        && "hidden"

                    )}
                >
                    {children}
                </span>
            )}
        </NavLink>
    );
}