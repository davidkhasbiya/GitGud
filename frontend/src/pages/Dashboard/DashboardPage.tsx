import {
    DashboardHero,
    ContinueLearning,
    DailyStreak,
    WeeklyActivity,
    RecommendedChallenges,
} from "../../components/dashboard";
import AIChatPreview from "../../components/dashboard/ai/AIChatPreview";
import AIStatus from "../../components/dashboard/ai/AIStatus";
import MissionCard from "../../components/dashboard/ai/MissionCard";
import SkillAnalysis from "../../components/dashboard/ai/SkillAnalysis";
import {
    skills,
    mission,
    conversations,
    achievements,
    leaderboard,
    recommendation,
} from "../../data/dashboard";
import AIRecommendation from "../../components/dashboard/ai/AIRecommendation";
import AchievementShowcase from "../../components/dashboard/achievement/AchievementShowcase";
import LeaderboardPreview from "../../components/dashboard/leaderboard/LeaderboardPreview";

export default function DashboardPage() {
    return (
        <>
            <div className="space-y-8">
                <DashboardHero />
                <ContinueLearning />
                <DailyStreak />
                <WeeklyActivity />
                <RecommendedChallenges />
                <AIStatus status="online" />
                <SkillAnalysis skills={skills} />
                <MissionCard mission={mission} />
                <AIChatPreview
                    conversations={conversations}
                />
                <AIRecommendation
                    recommendation={recommendation}
                />
                <AchievementShowcase
                    achievements={achievements}
                />
                <LeaderboardPreview
                    leaderboard={leaderboard}
                />
            </div>
        </>
    );
}