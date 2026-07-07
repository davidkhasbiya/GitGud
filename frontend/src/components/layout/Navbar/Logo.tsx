import { Code2 } from "lucide-react";
import {
    PanelLeftClose,
    PanelLeftOpen
} from "lucide-react";

interface LogoProps {
    collapsed?: boolean;
}

export default function Logo({
    collapsed = false,
}: LogoProps) {
    return (
        <div className="flex items-center gap-3">

            <Code2
                size={24}
                className="text-violet-500"
            />

            {!collapsed && (
                <span className="text-2xl font-bold">
                    GITGUD
                </span>
            )}

        </div>
    );
}