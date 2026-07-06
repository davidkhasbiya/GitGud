import Container from "../../ui/Container";
import Logo from "../../layout/Navbar/Logo";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-800">
            <Container>
                <div className="py-20 text-center">
                    <div className="flex justify-center">
                        <Logo />
                    </div>
                    <h2 className="mt-8 text-3xl font-bold">
                        Practice. Build. Improve.
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl leading-7 text-zinc-400">
                        AI-powered developer workspace for mastering backend
                        engineering through practical coding challenges,
                        intelligent feedback, and continuous progress tracking.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-8">
                        <a
                            href="https://github.com/davidkhasbiya/GITGUD"
                            target="_blank"
                            rel="noreferrer"
                            className="transition hover:text-violet-400"

                        >
                            GitHub
                        </a>
                        <a
                            href="https://github.com/davidkhasbiya/GITGUD"
                            target="_blank"
                            rel="noreferrer"
                            className="transition hover:text-violet-400"
                        >
                            Documentation
                        </a>
                        <a
                            href="https://github.com/davidkhasbiya/GITGUD"
                            target="_blank"
                            rel="noreferrer"
                            className="transition hover:text-violet-400"
                        >
                            License
                        </a>
                    </div>
                </div>
                <div className="border-t border-zinc-800 py-8">
                    <div className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 lg:flex-row">
                        <p>
                            © 2026 GITGUD. All rights reserved.
                        </p>
                        <p>
                            Built with React • Go • PostgreSQL • Gemini AI
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}