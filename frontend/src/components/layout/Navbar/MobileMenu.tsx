import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
    {
        label: "Features",
        href: "#features",
    },
    {
        label: "Technology",
        href: "#technology",
    },
    {
        label: "Workflow",
        href: "#workflow",
    },
    {
        label: "Docs",
        href: "#",
    },
];

export default function MobileMenu() {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative lg:hidden">

            {/* Menu Button */}
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="
                    rounded-lg
                    border
                    border-zinc-300
                    p-2
                    transition
                    hover:bg-zinc-100
                    dark:border-zinc-700
                    dark:hover:bg-zinc-800
                "
                aria-label={
                    open
                        ? "Close menu"
                        : "Open menu"
                }
                aria-expanded={open}
            >
                {open ? (
                    <X
                        size={20}
                        className="text-zinc-700 dark:text-zinc-200"
                    />
                ) : (
                    <Menu
                        size={20}
                        className="text-zinc-700 dark:text-zinc-200"
                    />
                )}
            </button>

            {/* Mobile Navigation */}
            {open && (
                <div
                    className="
                        absolute
                        right-0
                        top-12
                        z-50
                        w-56
                        rounded-xl
                        border
                        border-zinc-200
                        bg-white
                        p-2
                        shadow-xl
                        dark:border-zinc-800
                        dark:bg-zinc-950
                    "
                >
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="
                                block
                                rounded-lg
                                px-4
                                py-3
                                text-sm
                                font-medium
                                text-zinc-600
                                transition
                                hover:bg-zinc-100
                                hover:text-zinc-900
                                dark:text-zinc-300
                                dark:hover:bg-zinc-800
                                dark:hover:text-white
                            "
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}

        </div>
    );
}