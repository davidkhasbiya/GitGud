package services

import (
	"errors"

	"github.com/google/uuid"

	"github.com/ahmaddavid/gitgud/internal/dto"
	"github.com/ahmaddavid/gitgud/internal/repositories"
	"github.com/ahmaddavid/gitgud/internal/utils"
)

type SettingsService struct {
	repo *repositories.SettingsRepository
}

func NewSettingsService(
	repo *repositories.SettingsRepository,
) *SettingsService {

	return &SettingsService{
		repo: repo,
	}

}

func (s *SettingsService) UpdateProfile(
	userID uuid.UUID,
	req dto.UpdateProfileRequest,
) error {

	user, err := s.repo.FindUser(userID)

	if err != nil {
		return err
	}

	user.Name = req.Name

	return s.repo.Save(user)

}

func (s *SettingsService) ChangePassword(
	req dto.ChangePasswordRequest,
) error {

	id, _ := uuid.Parse(req.UserID)

	user, err := s.repo.FindUser(id)

	if err != nil {
		return err
	}

	if !utils.CheckPassword(
		req.OldPassword,
		user.PasswordHash,
	) {

		return errors.New("old password incorrect")

	}

	hash, err := utils.HashPassword(
		req.NewPassword,
	)

	if err != nil {
		return err
	}

	user.PasswordHash = hash

	return s.repo.Save(user)

}