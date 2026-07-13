package repositories

import (
	"github.com/ahmaddavid/gitgud/internal/models"
	"github.com/ahmaddavid/gitgud/pkg/database"
	"github.com/google/uuid"
)

type SubmissionRepository struct{}

func NewSubmissionRepository() *SubmissionRepository {
	return &SubmissionRepository{}
}

func (r *SubmissionRepository) FindQuestions(
	practiceID uuid.UUID,
) ([]models.PracticeQuestion, error) {

	var questions []models.PracticeQuestion

	err := database.DB.
		Where("practice_id = ?", practiceID).
		Find(&questions).Error

	return questions, err
}

func (r *SubmissionRepository) CreateSubmission(
	submission *models.Submission,
) error {

	return database.DB.Create(submission).Error

}

func (r *SubmissionRepository) FindProgress(
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

func (r *SubmissionRepository) CreateProgress(
	progress *models.Progress,
) error {

	return database.DB.Create(progress).Error

}

func (r *SubmissionRepository) SaveProgress(
	progress *models.Progress,
) error {

	return database.DB.Save(progress).Error

}