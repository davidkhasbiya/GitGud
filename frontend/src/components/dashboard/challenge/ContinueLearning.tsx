import { ArrowRight, Clock3 } from "lucide-react";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
export default function ContinueLearning() {
    const progress = 62;
    const navigate = useNavigate();
    return (
        <section
            className="
                mt-10
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900
                p-8
            "
        >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                {/* Left */}

                <div className="flex-1">

                    <p className="text-sm font-medium uppercase tracking-widest text-violet-400">
                        Continue Learning
                    </p>

                    <h2 className="mt-3 text-3xl font-bold">
                        REST API Authentication
                    </h2>

                    <p className="mt-2 text-zinc-400">
                        Intermediate • Go Fiber
                    </p>

                    {/* Progress */}

                    <div className="mt-8">

                        <div className="mb-3 flex items-center justify-between text-sm">

                            <span>
                                Progress
                            </span>

                            <span className="font-semibold">
                                {progress}%
                            </span>

                        </div>

                        <div className="h-3 overflow-hidden rounded-full bg-zinc-800">

                            <div
                                style={{
                                    width: `${progress}%`,
                                }}
                                className="
                                    h-full
                                    rounded-full
                                    bg-gradient-to-r
                                    from-violet-500
                                    to-fuchsia-500
                                    transition-all
                                "
                            />

                        </div>

                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-6 text-sm text-zinc-400">

                        <span>
                            12 / 20 Tasks Completed
                        </span>

                        <span className="flex items-center gap-2">

                            <Clock3 size={16} />

                            ~35 mins remaining

                        </span>

                    </div>

                </div>

                {/* Right */}

                <div>

                    <Button
                        className="
                            w-full
                        " onClick={() => navigate("/challenges")}
                    >
                        Continue


                        <ArrowRight size={18} />

                    </Button>

                </div>

            </div>

        </section>
    );
}