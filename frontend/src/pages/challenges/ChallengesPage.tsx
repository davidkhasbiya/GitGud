import ChallengesHero from "../../components/challenges/ChallengesHero";

import ContinueLearningCard from "../../components/challenges/ContinueLearningCard";

import ChallengeGrid from "../../components/challenges/ChallengeGrid";

import { challenges } from "../../data/challenges";
import { useState } from "react";
import ChallengeFilters from "../../components/challenges/ChallengeFilter";
import { useSearchParams } from "react-router-dom";
import ChallengeCategories from "../../components/challenges/ChallengeCategories";

export default function ChallengesPage() {

    const continueChallenge =
        challenges.find(
            c => c.progress > 0 && c.progress < 100
        );


    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("q") ?? "";

    const category =
        searchParams.get("category") ?? "All";

    const difficulty =
        searchParams.get("difficulty") ?? "";

    const sort =
        searchParams.get("sort") ?? "recommended";

    const filteredChallenges = challenges
        .filter((challenge) =>
            challenge.title
                .toLowerCase()
                .includes(search.toLowerCase())
        )
        .filter((challenge) =>
            difficulty
                ? challenge.difficulty === difficulty
                : true
        )
        .filter((challenge) =>
            category === "All"
                ? true
                : challenge.category === category

        )

    const sortedChallenges = [...filteredChallenges];

    switch (sort) {

        case "xp":

            sortedChallenges.sort(
                (a, b) => b.xp - a.xp
            );

            break;

        case "duration":

            sortedChallenges.sort(
                (a, b) =>
                    a.estimatedMinutes -
                    b.estimatedMinutes
            );

            break;

        case "progress":

            sortedChallenges.sort(
                (a, b) =>
                    b.progress -
                    a.progress
            );

            break;

    }

    const updateParam = (
        key: string,
        value: string
    ) => {
        const params = new URLSearchParams(searchParams);

        if (!value || value === "All") {
            params.delete(key);
        } else {
            params.set(key, value);
        }

        setSearchParams(params);
    };

    return (

        <div className="space-y-10">

            <ChallengesHero />

            {continueChallenge && (

                <ContinueLearningCard
                    challenge={continueChallenge}
                />
            )}
            

            <ChallengeCategories
                value={category}
                onChange={(value) =>
                    updateParam(
                        "category",
                        value
                    )
                }
            />

            <ChallengeFilters
                difficulty={difficulty}
                sort={sort}
                onDifficulty={(value) =>
                    updateParam(
                        "difficulty",
                        value
                    )
                }
                onSort={(value) =>
                    updateParam(
                        "sort",
                        value
                    )
                }
                
            />

            <ChallengeGrid
                challenges={sortedChallenges}
            />

        </div>

    );

}