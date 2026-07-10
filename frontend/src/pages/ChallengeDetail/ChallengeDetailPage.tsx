import { useParams } from "react-router-dom";

import { challenges } from "../../data/challenges";

import ChallengeHeader from "../../components/challengeDetail/ChallengeHeader";
import ChallengeObjectives
    from "../../components/challengeDetail/ChallengeObjectives";
import ChallengeOverview
    from "../../components/challengeDetail/ChallengeOverview";

export default function ChallengeDetailPage() {
    const { slug } = useParams();

    const challenge = challenges.find(
        c => c.slug === slug
    );

    if (!challenge) {

        return (
            <div className="p-10">

                Challenge not found.

            </div>
        );

    }

    return (

        <div className="mx-auto max-w-7xl space-y-8 p-8">

            <ChallengeHeader
                challenge={challenge}
            />

            <ChallengeOverview
                challenge={challenge}
            />

            <ChallengeObjectives
                challenge={challenge}
            />

        </div>

    );

}