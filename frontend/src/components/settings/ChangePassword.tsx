import { useState } from "react";
import { toast } from "sonner";

import Button from "../ui/Button";

import {
    changePassword,
} from "../../services/settingsService";

export default function ChangePassword() {

    const user = JSON.parse(
        localStorage.getItem("user") || "{}"
    );

    const [oldPassword, setOldPassword] =
        useState("");

    const [newPassword, setNewPassword] =
        useState("");

    const save = async () => {

        try {

            await changePassword({

                userId: user.id,

                oldPassword,

                newPassword,

            });

            toast.success(
                "Password updated successfully."
            );

            setOldPassword("");

            setNewPassword("");

        } catch {

            toast.error(
                "Old password is incorrect."
            );

        }

    };

    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="text-2xl font-bold">

                Change Password

            </h2>

            <div className="mt-8 space-y-6">

                <input
                    type="password"
                    placeholder="Current Password"
                    value={oldPassword}
                    onChange={(e)=>
                        setOldPassword(e.target.value)
                    }
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3"
                />

                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e)=>
                        setNewPassword(e.target.value)
                    }
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3"
                />

                <Button onClick={save}>

                    Update Password

                </Button>

            </div>

        </section>

    );

}