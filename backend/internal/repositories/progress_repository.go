package repositories

import (
	"github.com/ahmaddavid/gitgud/internal/models"
	"github.com/ahmaddavid/gitgud/pkg/database"
	"github.com/google/uuid"
)

type ProgressRepository struct{}

func NewProgressRepository() *ProgressRepository {
	return &ProgressRepository{}
}

func (r *ProgressRepository) GetProgress(
	userID uuid.UUID,
) (*models.Progress, error) {

	var progress models.Progress

	err := database.DB.
		Where("user_id = ?", userID).
		First(&progress).Error

	if err != nil {
		return nil, err
	}

	return &progress, nil
}

func (r *ProgressRepository) GetSubmissions(
	userID uuid.UUID,
) ([]models.Submission, error) {

	var submissions []models.Submission

	err := database.DB.
		Preload("Practice").
		Where("user_id = ?", userID).
		Order("created_at desc").
		Find(&submissions).Error

	return submissions, err
}

func (r *ProgressRepository) FindRecentSubmissions(
	userID uuid.UUID,
) ([]models.Submission, error) {

	var submissions []models.Submission

	err := database.DB.

		Preload("Practice").

		Where("user_id = ?", userID).

		Order("created_at desc").

		Limit(5).

		Find(&submissions).Error

	return submissions, err
}

func (r *ProgressRepository) FindWeeklySubmissions(
	userID uuid.UUID,
) ([]models.Submission, error) {

	var submissions []models.Submission

	err := database.DB.

		Where("user_id = ?", userID).

		Order("created_at asc").

		Find(&submissions).Error

	return submissions, err
}