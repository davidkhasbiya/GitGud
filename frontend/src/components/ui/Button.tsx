import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import Spinner from "./Spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "ghost";
    loading?: boolean;
}

export default function Button({
    children,
    variant = "primary",
    className,
    loading = false,
    disabled,
    ...props
}: ButtonProps) {
    return (
        <button
            disabled={loading || disabled}
            className={cn(
                "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200",
                "disabled:cursor-not-allowed disabled:opacity-70",

                variant === "primary" &&
                "bg-violet-600 text-white hover:bg-violet-700 disabled:opacity-50",

                variant === "secondary" &&
                "border border-zinc-300 bg-white hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800",

                variant === "ghost" &&
                "hover:bg-zinc-100 dark:hover:bg-zinc-800",

                className
            )}
            {...props}
        >
            <div className="flex items-center gap-2">
                {loading && <Spinner />}
                <span>{children}</span>
            </div>
        </button>
    );
}