import { Link } from "react-router-dom";
import Section from "../../ui/Section";
import Container from "../../ui/Container";
import Button from "../../ui/Button";

export default function CTA() {
    return (
        <Section id="cta">
            <Container>

                <div
                    className="
                    rounded-3xl
                    border
                    border-violet-500/20
                    bg-gradient-to-r
                    from-violet-600/10
                    via-transparent
                    to-violet-600/10
                    px-8
                    py-20
                    text-center
                "
                >

                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-violet-500">
                        Ready?
                    </p>

                    <h2 className="mx-auto max-w-3xl text-4xl font-bold">
                        Become a Better Backend Engineer Today.
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
                        Practice real-world backend challenges, receive AI
                        feedback, and build projects that improve your skills.
                    </p>

                    <div className="mt-10 flex justify-center gap-4">


                        <Link to="/workspace">
                            <Button>
                                Start Practicing
                            </Button>
                        </Link>

                        <Button
                            onClick={() =>
                                window.open(
                                    "https://github.com/davidkhasbiya/GITGUD",
                                    "_blank"
                                )
                            }
                        >
                            GitHub Repository
                        </Button>

                    </div>

                </div>

            </Container>
        </Section>
    );
}