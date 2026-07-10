import {
    ProgressHero,
    ProgressStats,
    WeeklyActivity,
    SkillProgress,
    PracticeHistory,
    AIInsight,
} from "../../components/progress";

export default function ProgressPage() {

    /*
        TODO:
        Replace all placeholder values below
        with data fetched from backend.
    */

    const progress = {

        stats: {

            totalPractice: 0,

            averageScore: 0,

            xp: 0,

            streak: 0,

        },

        weeklyActivity: {

            values: [],

        },

        skills: [],

        history: [],

        aiInsight: {

            strength: "-",

            weakness: "-",

            recommendation: "-",

        },

    };

    return (

        <div className="space-y-8">

            <ProgressHero />

            <ProgressStats
                stats={progress.stats}
            />

            <WeeklyActivity
                values={progress.weeklyActivity.values}
            />

            <SkillProgress
                skills={progress.skills}
            />

            <PracticeHistory
                history={progress.history}
            />

            <AIInsight
                insight={progress.aiInsight}
            />

        </div>

    );

}