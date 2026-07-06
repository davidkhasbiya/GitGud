import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> { }

export default function Card({
    children,
    className,
    ...props
}: CardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}