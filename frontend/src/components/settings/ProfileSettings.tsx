import Button from "../ui/Button";

import type {

    ProfileSettings as ProfileSettingsType,

} from "../../types/settings";

interface Props {

    profile: ProfileSettingsType;

}

export default function ProfileSettings({

    profile,

}: Props) {

    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="text-2xl font-bold">

                Profile

            </h2>

            <div className="mt-8 grid gap-5">

                <input
                    defaultValue={profile.fullName}
                    placeholder="Full Name"
                    className="rounded-xl bg-zinc-950 p-4"
                />

                <input
                    defaultValue={profile.username}
                    placeholder="Username"
                    className="rounded-xl bg-zinc-950 p-4"
                />

                <input
                    defaultValue={profile.email}
                    placeholder="Email"
                    className="rounded-xl bg-zinc-950 p-4"
                />

                <textarea
                    defaultValue={profile.bio}
                    placeholder="Bio"
                    className="h-32 rounded-xl bg-zinc-950 p-4"
                />

                <Button>

                    Save Changes

                </Button>

            </div>

        </section>

    );

}