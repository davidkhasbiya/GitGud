import { Link } from "react-router-dom";
import Button from "../../ui/Button";

export default function HeroContent() {
    return (
        <div>

            <span
                className="
                    inline-flex
                    rounded-full
                    border
                    border-violet-200
                    bg-violet-100
                    px-4
                    py-1
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-violet-700
                    dark:border-violet-900
                    dark:bg-violet-950
                    dark:text-violet-300
                "
            >
                AI Powered Developer Learning
            </span>

            <h1 className="mt-6 text-5xl font-bold tracking-tight lg:text-7xl">
                Practice.
                <br />
                Build.
                <br />
                Improve.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Master programming through practical challenges,
                AI-powered performance analysis, and personalized
                recommendations based on your learning journey.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

                <Link to="/login">
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
    );
}