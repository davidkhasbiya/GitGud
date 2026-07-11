import {

    SettingsHero,

    ProfileSettings,

    SecuritySettings,

    AppearanceSettings,

    NotificationSettings,

    AccountSettings,

} from "../../components/settings";

export default function SettingsPage() {

    /*
        TODO:
        Replace with backend response.
    */

    const settings = {

        profile: {

            fullName: "",

            username: "",

            email: "",

            bio: "",

            avatar: "",

        },

        security: {

            twoFactorEnabled: false,

        },

        appearance: {

            theme: "dark" as const,

        },

        notification: {

            emailNotification: false,

            practiceReminder: false,

            achievementNotification: false,

        },

    };

    return (

        <div className="space-y-8">

            <SettingsHero />

            <ProfileSettings
                profile={settings.profile}
            />

            <SecuritySettings
                security={settings.security}
            />

            <AppearanceSettings
                appearance={settings.appearance}
            />

            <NotificationSettings
                notification={settings.notification}
            />

            <AccountSettings />

        </div>

    );

}