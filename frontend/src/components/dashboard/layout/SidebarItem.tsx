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
    collapsed,
}: SidebarItemProps) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                cn(
                    "flex items-center gap-3 rounded-xl px-4 py-3 transition",
                    isActive
                        ? "bg-violet-600 text-white"
                        : "text-zinc-400 hover:bg-zinc-800",
                    collapsed && "justify-center px-0"
                )
            }
        >
            {icon}

            {!collapsed && (
                <span>{children}</span>
            )}
        </NavLink>
    );
}