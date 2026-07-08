import {
    ArrowDown,
    ArrowUp,
    Minus,
} from "lucide-react";

import type {
    LeaderboardUser,
} from "../../../types/dashboard";

interface Props {
    user: LeaderboardUser;
}

export default function LeaderboardRow({
    user,
}: Props) {

    const medal =
        user.rank === 1
            ? "🥇"

            : user.rank === 2
                ? "🥈"

                : user.rank === 3
                    ? "🥉"

                    : user.rank;

    return (

        <div
            className={`
                flex
                items-center
                justify-between
                rounded-xl
                p-4
                transition
                hover:bg-zinc-800

                ${user.isCurrentUser
                    ? "border border-violet-500 bg-violet-500/10"
                    : ""
                }
            `}
        >

            <div className="flex items-center gap-4">

                <div className="w-8 text-center">

                    {medal}

                </div>

                <div
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-violet-600
                        font-bold
                    "
                >
                    {user.avatar}
                </div>

                <div>

                    <p className="font-semibold">

                        {user.name}

                        {user.isCurrentUser && " (You)"}

                    </p>

                    <p className="text-sm text-zinc-500">

                        {user.xp.toLocaleString()} XP

                    </p>

                </div>

            </div>

            <div>

                {user.movement === "up" && (

                    <ArrowUp
                        className="text-green-400"
                        size={18}
                    />

                )}

                {user.movement === "down" && (

                    <ArrowDown
                        className="text-red-400"
                        size={18}
                    />

                )}

                {user.movement === "same" && (

                    <Minus
                        className="text-zinc-500"
                        size={18}
                    />

                )}

            </div>

        </div>

    );

}