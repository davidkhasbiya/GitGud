import {
    DashboardHero,
    ContinueLearning,
    DailyStreak,
    WeeklyActivity,
    RecommendedChallenges,
} from "../../components/dashboard";

export default function DashboardPage() {
    return (
        <>
            <DashboardHero />
            <ContinueLearning />
            <DailyStreak />
            <WeeklyActivity />
            <RecommendedChallenges />
        </>
    );
}