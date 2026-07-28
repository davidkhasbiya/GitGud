package repositories

import (
	"github.com/ahmaddavid/gitgud/internal/models"
	"github.com/ahmaddavid/gitgud/pkg/database"
	"github.com/google/uuid"
)

type ProfileRepository struct{}

func NewProfileRepository() *ProfileRepository {
	return &ProfileRepository{}
}

func (r *ProfileRepository) GetUser(
	userID uuid.UUID,
) (*models.User, error) {

	var user models.User

	err := database.DB.
		First(&user, "id = ?", userID).
		Error

	if err != nil {
		return nil, err
	}

	return &user, nil
}

func (r *ProfileRepository) GetProgress(
	userID uuid.UUID,
) (*models.Progress, error) {

	var progress models.Progress

	err := database.DB.
		Where("user_id = ?", userID).
		First(&progress).
		Error

	if err != nil {
		return nil, err
	}

	return &progress, nil
}

func (r *ProfileRepository) GetRecentSubmissions(
	userID uuid.UUID,
) ([]models.Submission, error) {

	var submissions []models.Submission

	err := database.DB.
		Preload("Practice").
		Where("user_id = ?", userID).
		Order("created_at desc").
		Limit(5).
		Find(&submissions).
		Error

	return submissions, err
}