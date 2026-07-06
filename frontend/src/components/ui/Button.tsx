import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "ghost";
}

export default function Button({
    children,
    variant = "primary",
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200",
                variant === "primary" &&
                "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200",
                variant === "secondary" &&
                "border border-zinc-300 bg-white hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800",
                variant === "ghost" &&
                "hover:bg-zinc-100 dark:hover:bg-zinc-800",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}