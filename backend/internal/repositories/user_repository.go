package repositories

import (
	"github.com/ahmaddavid/gitgud/internal/models"
	"github.com/ahmaddavid/gitgud/pkg/database"
)

type UserRepository struct{}

func NewUserRepository() *UserRepository {
	return &UserRepository{}
}

func (r *UserRepository) Create(user *models.User) error {
	return database.DB.Create(user).Error
}

func (r *UserRepository) FindByEmail(email string) (*models.User, error) {

	var user models.User

	err := database.DB.
		Where("email = ?", email).
		First(&user).Error

	if err != nil {
		return nil, err
	}

	return &user, nil
}

func (r *UserRepository) FindByID(id string) (*models.User, error) {

	var user models.User

	err := database.DB.
		Where("id = ?", id).
		First(&user).Error

	if err != nil {
		return nil, err
	}

	return &user, nil
}

func (r *UserRepository) FindByID(id string) (*models.User, error) {

	var user models.User

	err := database.DB.
		First(&user, "id = ?", id).
		Error

	if err != nil {
		return nil, err
	}

	return &user, nil
}