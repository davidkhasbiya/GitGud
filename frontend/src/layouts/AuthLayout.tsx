import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
    return (
        <main className="
            min-h-screen
            bg-white
            text-zinc-900
            dark:bg-zinc-950
            dark:text-white
        ">
            <div className="
                mx-auto
                grid
                min-h-screen
                max-w-7xl
                lg:grid-cols-2
            ">
                {children}
            </div>
        </main>
    );
}