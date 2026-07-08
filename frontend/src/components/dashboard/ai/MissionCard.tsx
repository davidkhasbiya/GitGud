import { Clock3, Flame, Trophy } from "lucide-react";

import Button from "../../ui/Button";
import type { DailyMission } from "../../../types/dashboard";


interface MissionCardProps {
    mission: DailyMission;
}

export default function MissionCard({
    mission,
}: MissionCardProps) {
    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

            <p className="text-sm text-zinc-400">
                Today's Mission
            </p>

            <h3 className="mt-2 text-2xl font-bold">
                {mission.title}
            </h3>

            <span className="mt-2 inline-flex rounded-full bg-violet-500/10 px-3 py-1 text-sm text-violet-400">
                {mission.difficulty}
            </span>

            <div className="mt-6 space-y-4">

                <div className="flex items-center gap-3">

                    <Clock3
                        size={18}
                        className="text-zinc-400"
                    />

                    <span>{mission.estimatedMinutes} Minutes</span>

                </div>

                <div className="flex items-center gap-3">

                    <Trophy
                        size={18}
                        className="text-yellow-400"
                    />

                    <span>
                        +{mission.xp} XP
                    </span>

                </div>

                <div className="flex items-center gap-3">

                    <Flame
                        size={18}
                        className="text-orange-400"
                    />

                    <span>
                        +{mission.streakBonus} Streak Bonus
                    </span>

                </div>

            </div>

            <Button
                className="mt-8 w-full"
            >
                Start Mission
            </Button>

        </div>
    );
}