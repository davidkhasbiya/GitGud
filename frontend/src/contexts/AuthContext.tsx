import {
    createContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

import * as authApi from "../api/auth";

interface User {

    id: string;

    name: string;

    email: string;

}

interface LoginPayload {

    email: string;

    password: string;

}

interface RegisterPayload {

    name: string;

    email: string;

    password: string;

}

interface AuthContextType {

    user: User | null;

    token: string | null;

    loading: boolean;

    login: (payload: LoginPayload) => Promise<void>;

    register: (payload: RegisterPayload) => Promise<void>;

    logout: () => void;

    refreshUser: () => Promise<void>;

}

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({

    children,

}: {

    children: ReactNode;

}) {

    const [user, setUser] = useState<User | null>(null);

    const [token, setToken] = useState<string | null>(
        localStorage.getItem("token"),
    );

    const [loading, setLoading] = useState(true);

    async function login(payload: LoginPayload) {

        const data = await authApi.login(payload);

        localStorage.setItem(

            "token",

            data.token,

        );

        setToken(data.token);

        await refreshUser();

    }

    async function register(payload: RegisterPayload) {

        const data = await authApi.register(payload);

        localStorage.setItem(
            "token",
            data.token,
        );

        setToken(data.token);

        await refreshUser();

    }

    async function refreshUser() {

        try {

            const data = await authApi.me();

            setUser(data);

        } catch {

            localStorage.removeItem("token");

            setToken(null);

            setUser(null);

        } finally {

            setLoading(false);

        }

    }

    function logout() {

        localStorage.removeItem("token");

        setToken(null);

        setUser(null);
        window.location.href = "/";

    }

    useEffect(() => {

        if (token) {

            refreshUser();

        } else {

            setLoading(false);

        }

    }, [token]);

    return (

        <AuthContext.Provider

            value={{

                user,

                token,

                loading,

                login,

                register,

                logout,

                refreshUser,

            }}

        >

            {children}

        </AuthContext.Provider>

    );

}