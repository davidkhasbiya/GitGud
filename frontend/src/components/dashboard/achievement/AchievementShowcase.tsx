import { Award, ArrowRight } from "lucide-react";

import Button from "../../ui/Button";

import AchievementCard from "./AchievementCard";

import type { Achievement } from "../../../types/dashboard";

interface Props {
    achievements: Achievement[];
}

export default function AchievementShowcase({
    achievements,
}: Props) {
    const TOTAL_ACHIEVEMENTS = 20;
    const LOCKED_COUNT = TOTAL_ACHIEVEMENTS - achievements.length;
    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <div className="mb-8 flex items-center justify-between">

                <div className="flex items-center gap-3">

                    <Award
                        size={26}
                        className="text-yellow-400"
                    />

                    <div>

                        <h2 className="text-2xl font-bold">
                            Achievement Showcase
                        </h2>

                        <p className="text-sm text-zinc-400">
                            Your newest unlocked achievements.
                        </p>

                    </div>

                </div>

                <Button variant="ghost">

                    View Collection

                    <ArrowRight size={18} />

                </Button>

            </div>
            {/* Collection Progress */}

            <div className="mb-8">
                <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-zinc-500">
                        Collection Progress
                    </span>
                    <span className="font-medium">
                        {achievements.length} / {TOTAL_ACHIEVEMENTS} Unlocked
                    </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                    <div
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                        style={{
                            width: `${(achievements.length / TOTAL_ACHIEVEMENTS) * 100}%`
                        }}
                    />
                </div>
            </div>

            <div
                className="
                    flex
                    gap-5
                    overflow-x-auto
                    pb-3
                    scrollbar-thin
                    scrollbar-thumb-zinc-700
                    scrollbar-track-transparent
                "
            >
                {/* Achievement yang sudah didapat */}

                {achievements.map((achievement) => (

                    <div
                        key={achievement.id}
                        className="min-w-[310px] flex-shrink-0"
                    >
                        <AchievementCard
                            achievement={achievement}
                        />
                    </div>

                ))}

                {/* Locked Achievement */}

                {Array.from({ length: LOCKED_COUNT }).map((_, index) => (

                    <div
                        key={`locked-${index}`}
                        className="
                min-w-[310px]
                flex-shrink-0
                rounded-2xl
                border
                border-dashed
                border-zinc-700
                bg-zinc-950
                p-6
                opacity-60
                transition
                hover:opacity-80
            "
                    >

                        <div
                            className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-zinc-800
                    text-3xl
                "
                        >
                            🔒
                        </div>

                        <h3 className="mt-6 text-xl font-bold">
                            Locked Achievement
                        </h3>

                        <p className="mt-2 text-sm text-zinc-500">
                            Complete more challenges to unlock.
                        </p>

                    </div>

                ))}

            </div>
        </section >
    );
}