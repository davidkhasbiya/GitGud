import { Eye, EyeOff, LockKeyhole } from "lucide-react";
import { useState, type InputHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

interface PasswordInputProps
    extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export default function PasswordInput({
    label = "Password",
    error,
    className,
    ...props
}: PasswordInputProps) {
    const [show, setShow] = useState(false);

    return (
        <div className="space-y-2">
            <label className="text-sm font-medium">
                {label}
            </label>

            <div className="relative">

                <LockKeyhole
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                />

                <input
                    {...props}
                    type={show ? "text" : "password"}
                    placeholder="••••••••"
                    className={cn(
                        "w-full rounded-xl border bg-white py-3 pl-11 pr-12 outline-none transition dark:bg-zinc-900",
                        error
                            ? "border-red-500 focus:border-red-500"
                            : "border-zinc-300 focus:border-violet-500 dark:border-zinc-700",
                        className
                    )}
                />

                <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-violet-500"
                >
                    {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>

            </div>

            {error && (
                <p className="text-sm text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}