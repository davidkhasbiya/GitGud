interface Props {
    difficulty: string;
    sort: string;

    onDifficulty: (value: string) => void;
    onSort: (value: string) => void;
}

export default function ChallengeFilters({
    difficulty,
    sort,
    onDifficulty,
    onSort,
}: Props) {
    return (
        <div className="grid gap-4 md:grid-cols-2">

            <select
                value={difficulty}
                onChange={(e) => onDifficulty(e.target.value)}
                className="rounded-xl border border-zinc-800 bg-zinc-900 p-3"
            >
                <option value="">
                    All Difficulty
                </option>

                <option value="Beginner">
                    Beginner
                </option>

                <option value="Intermediate">
                    Intermediate
                </option>

                <option value="Advanced">
                    Advanced
                </option>
            </select>

            <select
                value={sort}
                onChange={(e) => onSort(e.target.value)}
                className="rounded-xl border border-zinc-800 bg-zinc-900 p-3"
            >
                <option value="recommended">
                    Recommended
                </option>

                <option value="xp">
                    Highest XP
                </option>

                <option value="duration">
                    Shortest Time
                </option>

                <option value="progress">
                    In Progress
                </option>
            </select>

        </div>
    );
}