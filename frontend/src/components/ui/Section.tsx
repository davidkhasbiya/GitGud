import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

interface SectionProps extends HTMLAttributes<HTMLElement> { }

export default function Section({
    children,
    className,
    ...props
}: SectionProps) {
    return (
        <section
            className={cn(
                "py-24 lg:py-32",
                className
            )}
            {...props}
        >
            {children}
        </section>
    );
}