package services

import (
	"github.com/ahmaddavid/gitgud/internal/models"
	"github.com/ahmaddavid/gitgud/internal/repositories"
)

type TrackService struct {
	repo *repositories.TrackRepository
}

func NewTrackService(
	repo *repositories.TrackRepository,
) *TrackService {

	return &TrackService{
		repo: repo,
	}
}

func (s *TrackService) GetAll() ([]models.Track, error) {

	return s.repo.FindAll()

}