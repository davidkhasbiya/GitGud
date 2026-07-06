import { Code2 } from "lucide-react";

export default function Logo() {
    return (
        <a
            href="/"
            className="flex items-center gap-2 text-lg font-bold tracking-tight"
        >
            <Code2 className="h-6 w-6 text-violet-600" />
            <span>GITGUD</span>
        </a>
    );
}