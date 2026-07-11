import type { Profile } from "../../types/profile";

interface Props {

    profile: Profile;

}

export default function ProfileHero({

    profile,

}: Props) {

    return (

        <section className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-8">

            <div className="flex items-center gap-6">

                <img
                    src={profile.avatar}
                    alt={profile.username}
                    className="h-28 w-28 rounded-full object-cover"
                />

                <div>

                    <h1 className="text-4xl font-bold">

                        {profile.fullName}

                    </h1>

                    <p className="mt-2 text-zinc-400">

                        @{profile.username}

                    </p>

                    <p className="mt-4 max-w-xl text-zinc-400">

                        {profile.bio}

                    </p>

                </div>

            </div>

        </section>

    );

}