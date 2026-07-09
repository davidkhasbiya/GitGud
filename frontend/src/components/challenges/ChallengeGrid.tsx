import ChallengeCard from "./ChallengeCard";

import type { Challenge } from "../../types/challenge";

interface Props {
    challenges: Challenge[];
}

export default function ChallengeGrid({
    challenges,
}: Props) {

    return (

        <section>

            <h2 className="mb-6 text-2xl font-bold">
                Recommended Challenges
            </h2>

            <div className="grid gap-6 lg:grid-cols-3">

                {challenges.map((challenge) => (

                    <ChallengeCard
                        key={challenge.id}
                        challenge={challenge}
                    />

                ))}

            </div>

        </section>

    );

}