import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import type { Practice } from "../../types/practice";

interface Props {
    practices: Practice[];
    loading: boolean;
}

export default function PracticeList({
    practices,
    loading,
}: Props) {

    const navigate = useNavigate();

    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <div className="mb-8">

                <h2 className="text-2xl font-bold">

                    Available Practices

                </h2>

                <p className="mt-2 text-zinc-400">

                    Browse and continue your AI generated coding practices.

                </p>

            </div>

            {loading ? (

                <p className="text-zinc-400">

                    Loading...

                </p>

            ) : practices.length === 0 ? (

                <p className="text-zinc-500">

                    No practice available.

                </p>

            ) : (

                <div className="space-y-4">

                    {practices.map((practice) => (

                        <div
                            key={practice.id}
                            className="flex items-center justify-between rounded-xl bg-zinc-950 p-5"
                        >

                            <div>

                                <h3 className="font-semibold">

                                    {practice.title}

                                </h3>

                                <p className="mt-1 text-sm text-zinc-500">

                                    {practice.track.name} • {practice.difficulty}

                                </p>

                                <p className="mt-1 text-sm text-violet-400">

                                    {practice.xpReward} XP • {practice.estimatedMinutes} min

                                </p>

                            </div>

                            <Button
                                onClick={() =>
                                    navigate(`/practice/${practice.slug}`)
                                }
                            >

                                Start

                                <ArrowRight size={18} />

                            </Button>

                        </div>

                    ))}

                </div>

            )}

        </section>

    );

}