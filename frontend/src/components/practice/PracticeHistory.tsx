import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import type { Practice } from "../../services/practiceService";

interface Props {

    practices: Practice[];

    loading: boolean;

}

export default function PracticeHistory({

    practices,

    loading,

}: Props) {

    const navigate = useNavigate();

    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="text-2xl font-bold">

                Available Practices

            </h2>

            {loading ? (

                <p className="mt-6 text-zinc-400">

                    Loading...

                </p>

            ) : (

                <div className="mt-6 space-y-4">

                    {practices.map((practice) => (

                        <div

                            key={practice.id}

                            className="rounded-xl bg-zinc-950 p-5"

                        >

                            <div className="flex items-center justify-between">

                                <div>

                                    <h3 className="font-semibold">

                                        {practice.title}

                                    </h3>

                                    <p className="mt-1 text-sm text-zinc-400">

                                        {practice.track.name} • {practice.difficulty}

                                    </p>

                                    <p className="mt-1 text-sm text-violet-400">

                                        {practice.xpReward} XP · {practice.estimatedMinutes} min

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

                        </div>

                    ))}

                </div>

            )}

        </section>

    );

}