import {
    Award,
    Crown,
    Medal,
    Trophy,
} from "lucide-react";

import type { Achievement } from "../../../types/dashboard";

interface Props {
    achievement: Achievement;
}

const rarityIcon = {
    Common: Award,
    Rare: Medal,
    Epic: Trophy,
    Legendary: Crown,
};

const rarityStyle = {
    Common:
        "border-zinc-700 bg-zinc-800/40 text-zinc-300",

    Rare:
        "border-sky-500/20 bg-sky-500/10 text-sky-400",

    Epic:
        "border-violet-500/20 bg-violet-500/10 text-violet-400",

    Legendary:
        "border-yellow-500/20 bg-yellow-500/10 text-yellow-300",
};

export default function AchievementCard({
    achievement,
}: Props) {

    const Icon = rarityIcon[achievement.rarity];

    return (

        <div
            className={`
                rounded-2xl
                border
                p-6
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:shadow-xl
                animate-badge-pop
                animate-badge-glow
                ${rarityStyle[achievement.rarity]}
            `}
        >

            <div className="flex items-start justify-between">

                <div
                    className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-black/20
                    "
                >

                    <Icon size={30} />

                </div>

                <span
                    className="
                        rounded-full
                        bg-black/20
                        px-3
                        py-1
                        text-xs
                        font-semibold
                    "
                >
                    {achievement.rarity}
                </span>

            </div>

            <h3 className="mt-6 text-xl font-bold">
                {achievement.title}
            </h3>

            <p className="mt-2 text-sm opacity-80">
                {achievement.description}
            </p>

            <div className="mt-6 flex items-center gap-2">

                <Trophy
                    size={18}
                    className="text-yellow-400"
                />

                <span className="font-semibold">
                    +{achievement.xp} XP
                </span>

            </div>

            <p className="mt-5 text-sm opacity-70">
                Earned {achievement.earnedAt}
            </p>

        </div>

    );
}