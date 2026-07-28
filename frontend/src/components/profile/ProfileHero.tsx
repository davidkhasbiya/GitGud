import { UserCircle2 } from "lucide-react";

interface Props {
    profile: any;
}

export default function ProfileHero({
    profile,
}: Props) {

    return (

        <section className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-10">

            <div className="flex items-center gap-6">

                <UserCircle2
                    size={90}
                    className="text-violet-400"
                />

                <div>

                    <h1 className="text-4xl font-bold">

                        {profile.name}

                    </h1>

                    <p className="mt-2 text-zinc-400">

                        {profile.email}

                    </p>

                    <p className="mt-2 text-zinc-500">

                        Joined {profile.joinedAt}

                    </p>

                </div>

            </div>

        </section>

    );

}