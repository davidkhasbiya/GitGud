import { useState } from "react";

export default function NotificationSettings() {

    const [email, setEmail] =
        useState(true);

    const [practice, setPractice] =
        useState(true);

    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="text-2xl font-bold">

                Notifications

            </h2>

            <div className="mt-8 space-y-5">

                <label className="flex items-center justify-between">

                    <span>Email Notification</span>

                    <input
                        type="checkbox"
                        checked={email}
                        onChange={() =>
                            setEmail(!email)
                        }
                    />

                </label>

                <label className="flex items-center justify-between">

                    <span>Practice Reminder</span>

                    <input
                        type="checkbox"
                        checked={practice}
                        onChange={() =>
                            setPractice(!practice)
                        }
                    />

                </label>

            </div>

        </section>

    );

}