import { Moon } from "lucide-react";

export default function ThemeToggle() {
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
      "
            aria-label="Toggle theme"
        >
            <Moon
                size={18}
                className="text-zinc-700 dark:text-zinc-200"
            />
        </button>
    );
}