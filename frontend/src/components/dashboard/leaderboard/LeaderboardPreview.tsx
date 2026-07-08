import { Crown } from "lucide-react";

import type { Leaderboard } from "../../../types/dashboard";

import LeaderboardRow from "./LeaderboardRow";
import LeagueBadge from "./LeagueBadge";

interface Props {
    leaderboard: Leaderboard;
}

export default function LeaderboardPreview({
    leaderboard,
}: Props) {

    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <div className="mb-8 flex items-center justify-between">

                <div className="flex items-center gap-3">

                    <Crown
                        size={26}
                        className="text-yellow-400"
                    />

                    <div>

                        <h2 className="text-2xl font-bold">
                            Weekly Leaderboard
                        </h2>

                        <p className="text-sm text-zinc-400">
                            Compete with other learners.
                        </p>

                    </div>

                </div>

                <LeagueBadge
                    league={leaderboard.league}
                />

            </div>

            <div className="space-y-3">

                {leaderboard.users.map((user) => (

                    <LeaderboardRow
                        key={user.id}
                        user={user}
                    />

                ))}

            </div>

            <div className="mt-8 rounded-xl bg-zinc-800/40 p-5">

                <div className="mb-4 flex justify-between">

                    <span>Your Rank</span>

                    <span>

                        #{leaderboard.currentRank}

                    </span>

                </div>

                <div className="mb-3 flex justify-between text-sm">

                    <span>

                        XP to Rank Up

                    </span>

                    <span>

                        {leaderboard.xpToNextRank} XP

                    </span>

                </div>

                <div className="h-2 rounded-full bg-zinc-700">

                    <div
                        className="h-full rounded-full bg-violet-500"
                        style={{
                            width: "72%",
                        }}
                    />

                </div>

                <p className="mt-5 text-sm text-zinc-500">

                    Season ends in {leaderboard.seasonEnds}

                </p>

            </div>

        </section>

    );

}