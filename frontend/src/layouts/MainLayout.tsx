import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function MainLayout({ children }: Props) {
    return (
        <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white">
            {children}
        </div>
    );
}