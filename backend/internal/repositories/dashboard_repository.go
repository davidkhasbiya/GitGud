package repositories

import (
	"github.com/ahmaddavid/gitgud/internal/models"
	"github.com/ahmaddavid/gitgud/pkg/database"
	"github.com/google/uuid"
)

type DashboardRepository struct{}

func NewDashboardRepository() *DashboardRepository {
	return &DashboardRepository{}
}

func (r *DashboardRepository) GetUser(
	userID uuid.UUID,
) (*models.User, error) {

	var user models.User

	err := database.DB.
		Where("id = ?", userID).
		First(&user).Error

	if err != nil {
		return nil, err
	}

	return &user, nil
}

func (r *DashboardRepository) GetProgress(
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

func (r *DashboardRepository) GetSubmissions(
	userID uuid.UUID,
) ([]models.Submission, error) {

	var submissions []models.Submission

	err := database.DB.

		Preload("Practice").

		Where("user_id = ?", userID).

		Order("created_at DESC").

		Find(&submissions).Error

	return submissions, err
}