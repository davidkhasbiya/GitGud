import {
    Bot,
    Sparkles,
    Clock3,
    ArrowRight,
} from "lucide-react";

import Button from "../../ui/Button";

export default function AIMentorWidget() {
    return (
        <section
            className="
                mt-8
                overflow-hidden
                rounded-2xl
                border
                border-violet-500/30
                bg-gradient-to-br
                from-violet-950
                via-zinc-900
                to-zinc-950
                p-8
            "
        >
            <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">

                <div className="max-w-xl">

                    <div className="flex items-center gap-3">

                        <Bot
                            size={30}
                            className="text-violet-400"
                        />

                        <h2 className="text-3xl font-bold">
                            AI Mentor
                        </h2>

                    </div>

                    <p className="mt-5 text-lg text-zinc-300">
                        Good evening Ahmad 👋
                    </p>

                    <p className="mt-3 text-zinc-400">
                        Based on your recent progress, I recommend
                        focusing on authentication and backend security.
                    </p>

                    <div className="mt-8 space-y-4">

                        <div className="flex items-center gap-3">
                            <Sparkles className="text-violet-400" size={18} />
                            JWT Authentication
                        </div>

                        <div className="flex items-center gap-3">
                            <Sparkles className="text-violet-400" size={18} />
                            Fiber Middleware
                        </div>

                        <div className="flex items-center gap-3">
                            <Sparkles className="text-violet-400" size={18} />
                            Refresh Token
                        </div>

                    </div>

                </div>

                <div
                    className="
                        flex
                        flex-col
                        justify-between
                        rounded-2xl
                        border
                        border-zinc-800
                        bg-black/30
                        p-6
                        lg:w-80
                    "
                >

                    <div>

                        <div className="flex items-center gap-2">

                            <Clock3
                                size={18}
                                className="text-violet-400"
                            />

                            Estimated Study Time

                        </div>

                        <p className="mt-2 text-3xl font-bold">
                            1h 40m
                        </p>

                        <div className="mt-8">

                            <p className="text-sm text-zinc-500">
                                Difficulty
                            </p>

                            <span
                                className="
                                    mt-3
                                    inline-block
                                    rounded-full
                                    bg-violet-500/20
                                    px-4
                                    py-2
                                    text-sm
                                    font-semibold
                                    text-violet-300
                                "
                            >
                                Intermediate
                            </span>

                        </div>

                    </div>

                    <Button className="mt-10 w-full">

                        Ask AI Mentor

                        <ArrowRight
                            size={18}
                            className="ml-2"
                        />

                    </Button>

                </div>

            </div>

        </section>
    );
}