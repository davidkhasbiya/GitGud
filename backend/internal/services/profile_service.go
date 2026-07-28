package services

import (
	"time"

	"github.com/ahmaddavid/gitgud/internal/dto"
	"github.com/ahmaddavid/gitgud/internal/repositories"
	"github.com/google/uuid"
)

type ProfileService struct {
	repo *repositories.ProfileRepository
}

func NewProfileService(
	repo *repositories.ProfileRepository,
) *ProfileService {

	return &ProfileService{
		repo: repo,
	}
}

func (s *ProfileService) Get(
	userID uuid.UUID,
) (*dto.ProfileResponse, error) {

	user, err := s.repo.GetUser(userID)
	if err != nil {
		return nil, err
	}

	progress, err := s.repo.GetProgress(userID)
	if err != nil {
		return nil, err
	}

	submissions, err := s.repo.GetRecentSubmissions(userID)
	if err != nil {
		return nil, err
	}

	var recent []dto.RecentPractice

	for _, item := range submissions {

		recent = append(recent, dto.RecentPractice{

			Title: item.Practice.Title,

			Score: item.Score,

			XPEarned: item.XPEarned,

			CreatedAt: item.CreatedAt.Format(time.DateOnly),
		})

	}

	return &dto.ProfileResponse{

		ID: user.ID.String(),

		Name: user.Name,

		Email: user.Email,

		Level: progress.Level,

		XP: progress.XP,

		Accuracy: progress.Accuracy,

		CompletedPractice: progress.CompletedPractice,

		JoinedAt: user.CreatedAt.Format("02 Jan 2006"),

		Recent: recent,

	}, nil

}