import { Navigate } from "react-router-dom";

import AuthLayout from "../../layouts/AuthLayout";
import LoginHero from "./LoginHero";
import LoginForm from "./LoginForm";

import useAuth from "../../hooks/useAuth";

export default function LoginPage() {

    const { user, loading } = useAuth();

    if (loading) {
        return null;
    }

    if (user) {
        return <Navigate to="/dashboard" replace />;
    }

    return (
        <AuthLayout>
            <LoginHero />
            <LoginForm />
        </AuthLayout>
    );
}