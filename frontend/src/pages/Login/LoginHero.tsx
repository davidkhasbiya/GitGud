import Logo from "../../components/layout/Navbar/Logo";

export default function LoginHero() {
    return (
        <section
            className="
                hidden
                flex-col
                justify-between
                border-r
                border-zinc-200
                bg-gradient-to-br
                from-violet-950
                via-zinc-950
                to-zinc-900
                p-16
                text-white
                dark:border-zinc-800
                lg:flex
            "
        >
            <div>
                <Logo />

                <div className="mt-24">

                    <p className="font-mono text-sm uppercase tracking-[0.3em] text-violet-300">
                        Welcome
                    </p>

                    <h1 className="mt-6 text-6xl font-bold leading-tight">
                        Continue
                        <br />
                        Building.
                    </h1>

                    <p className="mt-8 max-w-md text-lg text-zinc-400">
                        Practice backend engineering through AI-powered coding
                        challenges and real-world projects.
                    </p>

                </div>
            </div>

            <p className="text-sm text-zinc-500">
                © 2026 GITGUD
            </p>

        </section>
    );
}