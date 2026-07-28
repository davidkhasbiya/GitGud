import axios from "axios";

const API = "http://localhost:8080/api/v1";

export interface UpdateProfileRequest {
    name: string;
}

export interface ChangePasswordRequest {
    userId: string;
    oldPassword: string;
    newPassword: string;
}

export async function updateProfile(
    userId: string,
    data: UpdateProfileRequest
) {

    const token = localStorage.getItem("token");

    return axios.put(
        `${API}/settings/profile/${userId}`,
        data,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

}

export async function changePassword(
    data: ChangePasswordRequest
) {

    const token = localStorage.getItem("token");

    return axios.put(
        `${API}/settings/password`,
        data,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

}