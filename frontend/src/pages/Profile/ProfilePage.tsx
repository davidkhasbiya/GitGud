import { useEffect, useState } from "react";

import {
    ProfileHero,
    ProfileStats,
    AchievementList,
    RecentActivity,
    AccountInformation,
} from "../../components/profile";

import { getProfile } from "../../services/profileService";

import type { Profile } from "../../types/profile";

export default function ProfilePage() {

    const user = JSON.parse(
        localStorage.getItem("user") || "{}"
    );

    const [profile, setProfile] =
        useState<Profile | null>(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        if (!user.id) return;

        getProfile(user.id)
            .then(setProfile)
            .catch(console.error)
            .finally(() => setLoading(false));

    }, []);

    if (loading) {

        return <div className="p-8">Loading...</div>;

    }

    if (!profile) {

        return <div className="p-8">Failed to load profile.</div>;

    }

    return (

        <div className="space-y-8">

            <ProfileHero
                profile={profile}
            />

            <ProfileStats
                profile={profile}
            />

            <AchievementList
                profile={profile}
            />

            <RecentActivity
                history={profile.recent}
            />

            <AccountInformation
                profile={profile}
            />

        </div>

    );

}