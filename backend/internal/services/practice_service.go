package services

import (
	"github.com/ahmaddavid/gitgud/internal/models"
	"github.com/ahmaddavid/gitgud/internal/repositories"
)

type PracticeService struct {
	repo *repositories.PracticeRepository
}

func NewPracticeService(
	repo *repositories.PracticeRepository,
) *PracticeService {

	return &PracticeService{
		repo: repo,
	}
}

func (s *PracticeService) GetAll() ([]models.Practice, error) {

	return s.repo.FindAll()

}

func (s *PracticeService) GetBySlug(
	slug string,
) (*models.Practice, error) {

	return s.repo.FindBySlug(slug)

}