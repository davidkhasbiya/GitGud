package services

import (
	"github.com/ahmaddavid/gitgud/internal/dto"
	"github.com/ahmaddavid/gitgud/internal/repositories"
)

type SearchService struct {
	repo *repositories.SearchRepository
}

func NewSearchService(
	repo *repositories.SearchRepository,
) *SearchService {

	return &SearchService{
		repo: repo,
	}

}

func (s *SearchService) Search(
	query string,
) ([]dto.SearchItem, error) {

	result, err := s.repo.Search(query)

	if err != nil {
		return nil, err
	}

	pages := []dto.SearchItem{

		{
			ID: "dashboard",
			Title: "Dashboard",
			Description: "Dashboard Page",
			Type: "page",
			URL: "/dashboard",
		},

		{
			ID: "progress",
			Title: "Progress",
			Description: "Progress Page",
			Type: "page",
			URL: "/progress",
		},

		{
			ID: "profile",
			Title: "Profile",
			Description: "Profile Page",
			Type: "page",
			URL: "/profile",
		},

		{
			ID: "settings",
			Title: "Settings",
			Description: "Settings Page",
			Type: "page",
			URL: "/settings",
		},
	}

	result = append(result, pages...)

	return result, nil

}