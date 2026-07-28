package dto

type UpdateProfileRequest struct {
	Name string `json:"name" binding:"required"`
}

type ChangePasswordRequest struct {
	UserID      string `json:"userId"`
	OldPassword string `json:"oldPassword"`
	NewPassword string `json:"newPassword"`
}