import type {

    NotificationSettings as NotificationSettingsType,

} from "../../types/settings";

interface Props {

    notification: NotificationSettingsType;

}

export default function NotificationSettings({

    notification,

}: Props) {

    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="text-2xl font-bold">

                Notifications

            </h2>

            <div className="mt-8 space-y-5">

                <label className="flex items-center gap-3">

                    <input
                        type="checkbox"
                        defaultChecked={notification.emailNotification}
                    />

                    Email Notification

                </label>

                <label className="flex items-center gap-3">

                    <input
                        type="checkbox"
                        defaultChecked={notification.practiceReminder}
                    />

                    Daily Practice Reminder

                </label>

                <label className="flex items-center gap-3">

                    <input
                        type="checkbox"
                        defaultChecked={notification.achievementNotification}
                    />

                    Achievement Notification

                </label>

            </div>

        </section>

    );

}