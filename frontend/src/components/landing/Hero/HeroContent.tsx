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
                AI Powered Learning
            </span>

            <h1 className="mt-6 text-5xl font-bold tracking-tight lg:text-7xl">
                Practice.
                <br />
                Build.
                <br />
                Improve.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Master backend engineering through practical coding challenges,
                AI-powered feedback, and real-world projects.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
                <Button>
                    Start Practicing
                </Button>

                <Button variant="secondary">
                    GitHub Repository
                </Button>
            </div>

        </div>
    );
}