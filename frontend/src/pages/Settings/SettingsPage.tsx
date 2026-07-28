import {

    AccountSettings,

    NotificationSettings,

    SecuritySettings,

    ChangePassword,

} from "../../components/settings";

export default function SettingsPage() {

    return (

        <div className="space-y-8">

            <AccountSettings />

            <ChangePassword />

            <NotificationSettings />

            <SecuritySettings />

        </div>

    );

}