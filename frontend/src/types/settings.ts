export interface Settings {

    profile: ProfileSettings;

    security: SecuritySettings;

    appearance: AppearanceSettings;

    notification: NotificationSettings;

}

export interface ProfileSettings {

    fullName: string;

    username: string;

    email: string;

    bio: string;

    avatar: string;

}

export interface SecuritySettings {

    twoFactorEnabled: boolean;

}

export interface AppearanceSettings {

    theme: "light" | "dark" | "system";

}

export interface NotificationSettings {

    emailNotification: boolean;

    practiceReminder: boolean;

    achievementNotification: boolean;

}