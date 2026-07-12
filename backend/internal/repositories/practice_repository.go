package repositories

import (
	"github.com/ahmaddavid/gitgud/internal/models"
	"github.com/ahmaddavid/gitgud/pkg/database"
)

type PracticeRepository struct{}

func NewPracticeRepository() *PracticeRepository {
	return &PracticeRepository{}
}

func (r *PracticeRepository) FindAll() ([]models.Practice, error) {

	var practices []models.Practice

	err := database.DB.
		Preload("Track").
		Order("created_at DESC").
		Find(&practices).Error

	if err != nil {
		return nil, err
	}

	return practices, nil
}

func (r *PracticeRepository) FindBySlug(
	slug string,
) (*models.Practice, error) {

	var practice models.Practice

	err := database.DB.
		Preload("Track").
		Preload("Questions").
		Where("slug = ?", slug).
		First(&practice).Error

	if err != nil {
		return nil, err
	}

	return &practice, nil
}