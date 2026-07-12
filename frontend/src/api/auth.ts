import api from "./axios";

export interface RegisterPayload {

    name: string;

    email: string;

    password: string;

}

export interface LoginPayload {

    email: string;

    password: string;

}

export const register = async (

    payload: RegisterPayload,

) => {

    const { data } = await api.post(

        "/auth/register",

        payload,

    );

    return data;

};

export const login = async (

    payload: LoginPayload,

) => {

    const { data } = await api.post(

        "/auth/login",

        payload,

    );

    return data;

};

export const me = async () => {

    const { data } = await api.get(

        "/auth/me",

    );

    return data;

};