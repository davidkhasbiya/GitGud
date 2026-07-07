import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    icon?: ReactNode;
    error?: string;
}

export default function Input({
    label,
    icon,
    error,
    className,
    ...props
}: InputProps) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium">
                {label}
            </label>

            <div className="relative">
                {icon && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
                        {icon}
                    </div>
                )}

                <input
                    {...props}
                    className={cn(
                        "w-full rounded-xl border py-3 pr-4 outline-none transition",
                        "border-zinc-700 bg-zinc-900 text-white",
                        "placeholder:text-zinc-500",
                        "focus:border-violet-500",
                        icon ? "pl-11" : "px-4",
                        error
                            ? "border-red-500 focus:border-red-500"
                            : "",
                        className
                    )}
                />
            </div>

            {error && (
                <p className="text-sm text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}