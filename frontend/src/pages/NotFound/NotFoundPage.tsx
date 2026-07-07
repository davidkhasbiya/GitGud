import AuthLayout from "../../layouts/AuthLayout";
import LoginHero from "../Login/LoginHero";
import NotFoundContent from "./NotFoundContent";

export default function NotFoundPage() {
    return (
        <AuthLayout>
            <LoginHero />
            <NotFoundContent />
        </AuthLayout>
    );
}