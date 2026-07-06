import { Menu } from "lucide-react";

export default function MobileMenu() {
    return (
        <button
            className="
        rounded-lg
        border
        border-zinc-300
        p-2
        transition
        hover:bg-zinc-100
        dark:border-zinc-700
        dark:hover:bg-zinc-800
        lg:hidden
      "
            aria-label="Open menu"
        >
            <Menu
                size={20}
                className="text-zinc-700 dark:text-zinc-200"
            />
        </button>
    );
}