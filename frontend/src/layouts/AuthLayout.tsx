import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
    return (
        <main className="min-h-screen bg-zinc-950 text-white">
            <div className="grid min-h-screen lg:grid-cols-2">
                {children}
            </div>
        </main>
    );
}