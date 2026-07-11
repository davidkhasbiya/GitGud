import {
    ProfileHero,
    ProfileStats,
    SkillOverview,
    AchievementGrid,
    ActivityTimeline,
    ProfileActions,
} from "../../components/profile";

export default function ProfilePage() {

    /*
        TODO:
        Replace with backend response.
    */

    const profile = {

        id: "",

        username: "",

        fullName: "",

        email: "",

        bio: "",

        avatar: "",

        joinedAt: "",

        level: 0,

        xp: 0,

        streak: 0,

        totalPractices: 0,

        averageScore: 0,

        skills: [],

        achievements: [],

        activities: [],

    };

    return (

        <div className="space-y-8">

            <ProfileHero
                profile={profile}
            />

            <ProfileStats
                profile={profile}
            />

            <SkillOverview
                skills={profile.skills}
            />

            <AchievementGrid
                achievements={profile.achievements}
            />

            <ActivityTimeline
                activities={profile.activities}
            />

            <ProfileActions />

        </div>

    );

}