import {
    Trophy,
    Gem,
    Lock,
} from "lucide-react";

import type {
    Challenge,
} from "../../types/challenge";

interface Props {
    challenge: Challenge;
}

export default function ChallengeOverview({
    challenge,
}: Props) {

    return (

        <section className="grid gap-6 lg:grid-cols-2">

            {/* Progress */}

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

                <h2 className="text-xl font-bold">
                    Progress
                </h2>

                <div className="mt-6">

                    <div className="mb-2 flex justify-between">

                        <span className="text-zinc-400">
                            Completion
                        </span>

                        <span>

                            {challenge.progress}%

                        </span>

                    </div>

                    <div className="h-2 rounded-full bg-zinc-800">

                        <div
                            className="h-full rounded-full bg-violet-500"
                            style={{
                                width: `${challenge.progress}%`,
                            }}
                        />

                    </div>

                </div>

                <div className="mt-8 space-y-5">

                    <div>

                        <p className="text-sm text-zinc-500">
                            Current Lesson
                        </p>

                        <p className="mt-1 font-semibold">

                            Refresh Token

                        </p>

                    </div>

                    <div>

                        <p className="text-sm text-zinc-500">
                            Estimated Time Left
                        </p>

                        <p className="mt-1 font-semibold">

                            18 Minutes

                        </p>

                    </div>

                </div>

            </div>
            {/* Rewards */}

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

                <h2 className="text-xl font-bold">

                    Rewards

                </h2>

                <div className="mt-6 space-y-5">

                    <div className="flex items-center justify-between">

                        <div className="flex items-center gap-2">

                            <Trophy
                                className="text-yellow-400"
                                size={20}
                            />

                            XP

                        </div>

                        <span>

                            +{challenge.xp}

                        </span>

                    </div>

                    <div className="flex items-center justify-between">

                        <div className="flex items-center gap-2">

                            <Gem
                                className="text-cyan-400"
                                size={20}
                            />

                            Gems

                        </div>

                        <span>

                            +{challenge.gems}

                        </span>

                    </div>

                </div>

                <h3 className="mt-8 font-semibold">

                    Prerequisites

                </h3>

                <div className="mt-4 space-y-3">

                    {challenge.prerequisites.length === 0 ? (

                        <p className="text-zinc-500">

                            No prerequisites

                        </p>

                    ) : (

                        challenge.prerequisites.map((item) => (

                            <div
                                key={item}
                                className="flex items-center gap-2"
                            >

                                <Lock
                                    size={16}
                                    className="text-zinc-500"
                                />

                                {item}

                            </div>

                        ))

                    )}

                </div>

            </div>

        </section>

    );

}