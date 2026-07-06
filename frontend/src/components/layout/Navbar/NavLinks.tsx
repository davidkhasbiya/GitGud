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

export default function NavLinks() {
    return (
        <>
            {links.map((link) => (
                <a
                    key={link.label}
                    href={link.href}
                    className="
            text-sm
            font-medium
            text-zinc-600
            transition-colors
            hover:text-zinc-900
            dark:text-zinc-300
            dark:hover:text-white
          "
                >
                    {link.label}
                </a>
            ))}
        </>
    );
}