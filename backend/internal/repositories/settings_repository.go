package repositories

import (
	"github.com/ahmaddavid/gitgud/internal/models"
	"github.com/ahmaddavid/gitgud/pkg/database"
	"github.com/google/uuid"
)

type SettingsRepository struct{}

func NewSettingsRepository() *SettingsRepository {
	return &SettingsRepository{}
}

func (r *SettingsRepository) FindUser(
	id uuid.UUID,
) (*models.User, error) {

	var user models.User

	err := database.DB.
		First(&user, "id = ?", id).
		Error

	if err != nil {
		return nil, err
	}

	return &user, nil

}

func (r *SettingsRepository) Save(
	user *models.User,
) error {

	return database.DB.Save(user).Error

}