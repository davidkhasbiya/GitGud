import { useEffect, useState } from "react";

import {
    ProgressHero,
    ProgressStats,
    WeeklyActivity,
    SkillProgress,
    PracticeHistory,
    AIInsight,
} from "../../components/progress";

import { getProgress } from "../../services/progressService";
import type {

    ProgressResponse,

} from "../../types/progress";


export default function ProgressPage() {

    const user = JSON.parse(
        localStorage.getItem("user") || "{}"
    );

    const [progress, setProgress] =

        useState<ProgressResponse | null>(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        if (!user.id) return;

        getProgress(user.id)
            .then((res) => {

                setProgress(res);

            })
            .catch(console.error)
            .finally(() => {

                setLoading(false);

            });

    }, []);

    if (loading) {

        return (

            <div className="p-8">

                Loading...

            </div>

        );

    }

    if (!progress) {

        return (

            <div className="p-8">

                Failed to load progress.

            </div>

        );

    }

    return (

        <div className="space-y-8">

            <ProgressHero
                level={progress.level}
                xp={progress.xp}
                nextLevelXp={progress.nextLevelXp}
            />

            <ProgressStats
                stats={{

                    totalPractice:
                        progress.completedPractice,

                    averageScore:
                        Math.round(progress.averageScore),

                    xp:
                        progress.xp,

                    streak: 0,

                }}
            />

            <WeeklyActivity
                values={progress.weeklyActivity}
            />

            <SkillProgress
                skills={progress.skills}
            />

            <PracticeHistory
                history={progress.recent}
            />


            <AIInsight
                insight={progress.insight}
            />

        </div>

    );

}