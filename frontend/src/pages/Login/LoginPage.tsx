import AuthLayout from "../../layouts/AuthLayout";
import LoginForm from "./LoginForm";
import LoginHero from "./LoginHero";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
    const isLoggedIn =
        localStorage.getItem("isLoggedIn");

    if (isLoggedIn) {
        return <Navigate to="/dashboard" replace />;
    }
    
    return (
        <AuthLayout>
            <LoginHero />
            <LoginForm />
        </AuthLayout>
    );
}