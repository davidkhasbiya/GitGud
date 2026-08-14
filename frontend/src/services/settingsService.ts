import api from "../api/axios";

import type {
    UpdateProfileRequest,
    ChangePasswordRequest,
} from "../types/settings";

export async function updateProfile(
    userId: string,
    data: UpdateProfileRequest,
) {

    return api.put(
        `/settings/profile/${userId}`,
        data,
    );
}

export async function changePassword(
    data: ChangePasswordRequest,
) {

    return api.put(
        "/settings/password",
        data,
    );
}