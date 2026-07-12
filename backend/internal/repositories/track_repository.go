package repositories

import (
	"github.com/ahmaddavid/gitgud/internal/models"
	"github.com/ahmaddavid/gitgud/pkg/database"
)

type TrackRepository struct{}

func NewTrackRepository() *TrackRepository {
	return &TrackRepository{}
}

func (r *TrackRepository) FindAll() ([]models.Track, error) {

	var tracks []models.Track

	err := database.DB.
		Order("name ASC").
		Find(&tracks).Error

	if err != nil {
		return nil, err
	}

	return tracks, nil
}

func (r *TrackRepository) FindBySlug(slug string) (*models.Track, error) {

	var track models.Track

	err := database.DB.
		Where("slug = ?", slug).
		First(&track).Error

	if err != nil {
		return nil, err
	}

	return &track, nil
}