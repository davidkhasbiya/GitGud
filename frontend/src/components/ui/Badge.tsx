import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

interface BadgeProps {
    children: ReactNode;
    className?: string;
}

export default function Badge({
    children,
    className,
}: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
                className
            )}
        >
            {children}
        </span>
    );
}