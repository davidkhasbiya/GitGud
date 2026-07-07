import ChallengeCard from "./ChallengeCard";

const challenges = [
    {
        title: "JWT Authentication",
        difficulty: "Intermediate",
        tech: "Go Fiber • JWT • PostgreSQL",
        xp: 120,
        duration: "45 min",
        progress: 70,
    },
    {
        title: "Docker Basics",
        difficulty: "Beginner",
        tech: "Docker",
        xp: 60,
        duration: "30 min",
    },
    {
        title: "Redis Cache",
        difficulty: "Advanced",
        tech: "Redis • Go Fiber",
        xp: 200,
        duration: "90 min",
        locked: true,
    },
];

export default function RecommendedChallenges() {
    return (
        <section className="mt-8">

            <div className="mb-6">

                <h2 className="text-2xl font-bold">
                    Recommended For You
                </h2>

                <p className="mt-2 text-zinc-400">
                    Continue your backend learning journey.
                </p>

            </div>

            <div className="grid gap-6 lg:grid-cols-3">

                {challenges.map((challenge) => (

                    <ChallengeCard
                        key={challenge.title}
                        {...challenge}
                    />

                ))}

            </div>

        </section>
    );
}