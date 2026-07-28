import { useEffect, useState } from "react";

import {
    DashboardHero,
    DashboardStats,
    WeeklyActivity,
    RecentPractice,
    DashboardRecommendation,
} from "../../components/dashboard";

import { getDashboard } from "../../services/dashboardService";

import type {
    DashboardData,
} from "../../types/dashboard";

export default function DashboardPage() {

    const user = JSON.parse(

        localStorage.getItem("user") || "{}"

    );

    const [dashboard, setDashboard] =

        useState<DashboardData | null>(null);

    const [loading, setLoading] =

        useState(true);

    useEffect(() => {

        if (!user.id) return;

        async function fetchDashboard() {

            try {

                const data = await getDashboard(
                    user.id
                );

                setDashboard(data);

            } catch (err) {

                console.error(err);

            } finally {

                setLoading(false);

            }

        }

        fetchDashboard();

    }, []);

    if (loading) {

        return (

            <div className="p-8">

                Loading...

            </div>

        );

    }

    if (!dashboard) {

        return (

            <div className="p-8">

                Failed to load dashboard.

            </div>

        );

    }

    return (

        <div className="space-y-8">

            <DashboardHero

                name={dashboard.name}

                level={dashboard.level}

                xp={dashboard.xp}

                nextLevelXp={dashboard.nextLevelXp}

            />

            <DashboardStats

                completedPractice={
                    dashboard.completedPractice
                }

                averageScore={
                    Math.round(
                        dashboard.averageScore
                    )
                }

                xp={dashboard.xp}

                streak={dashboard.streak}

            />

            <WeeklyActivity

                values={
                    dashboard.weeklyActivity
                }

            />

            <RecentPractice

                history={
                    dashboard.recent
                }

            />

            <DashboardRecommendation

                recommendation={
                    dashboard.recommendation
                }

            />

        </div>

    );

}