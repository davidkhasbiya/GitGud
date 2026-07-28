import { useState } from "react";
import { toast } from "sonner";

import Button from "../ui/Button";

import {
    updateProfile,
} from "../../services/settingsService";

export default function AccountSettings() {

    const user = JSON.parse(
        localStorage.getItem("user") || "{}"
    );

    const [name, setName] =
        useState(user.name);

    const save = async () => {

        try {

            await updateProfile(
                user.id,
                {
                    name,
                }
            );

            localStorage.setItem(
                "user",
                JSON.stringify({
                    ...user,
                    name,
                })
            );

            toast.success(
                "Profile updated successfully."
            );

        } catch {

            toast.error(
                "Failed to update profile."
            );

        }

    };

    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="text-2xl font-bold">

                Account

            </h2>

            <div className="mt-8 space-y-6">

                <div>

                    <label className="text-sm text-zinc-400">

                        Name

                    </label>

                    <input
                        value={name}
                        onChange={(e)=>
                            setName(e.target.value)
                        }
                        className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3"
                    />

                </div>

                <div>

                    <label className="text-sm text-zinc-400">

                        Email

                    </label>

                    <input
                        value={user.email}
                        disabled
                        className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 opacity-60"
                    />

                </div>

                <Button onClick={save}>

                    Save Changes

                </Button>

            </div>

        </section>

    );

}