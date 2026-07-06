import Container from "../../ui/Container";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-200 py-10 dark:border-zinc-800">
            <Container>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-sm text-zinc-500">
                        © 2026 GITGUD. All rights reserved.
                    </p>

                    <div className="flex gap-6 text-sm text-zinc-500">
                        <a href="#">GitHub</a>
                        <a href="#">License</a>
                        <a href="#">Docs</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}