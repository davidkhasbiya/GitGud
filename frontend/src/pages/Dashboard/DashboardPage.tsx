import DashboardHero from "../../components/dashboard/hero/DashboardHero";
import RecentPractice from "../../components/dashboard/recent/RecentPractice";
import AIRecommendation from "../../components/dashboard/recommendation/AIRecommendation";
import DashboardStats from "../../components/dashboard/stats/DashboardStats";
import PracticeGeneratorCard from "../../components/practice/PracticeGeneratorCard";

export default function DashboardPage() {
    return (
        <div className="space-y-8">

            <DashboardHero />

            <PracticeGeneratorCard />

            <RecentPractice />

            <AIRecommendation />

            <DashboardStats />

        </div>
    );
}