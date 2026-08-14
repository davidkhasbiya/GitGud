export interface UpdateProfileRequest {
    name: string;
}

export interface ChangePasswordRequest {
    userId: string;
    oldPassword: string;
    newPassword: string;
}