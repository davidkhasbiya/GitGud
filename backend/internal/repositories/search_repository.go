package repositories

import (
	"strings"
	"github.com/ahmaddavid/gitgud/pkg/database"
	"github.com/ahmaddavid/gitgud/internal/dto"
	"github.com/ahmaddavid/gitgud/internal/models"
)

type SearchRepository struct{}

func NewSearchRepository() *SearchRepository {
	return &SearchRepository{}
}

func (r *SearchRepository) Search(
	query string,
) ([]dto.SearchItem, error) {

	var practices []models.Practice

	err := database.DB.
		Preload("Track").
		Where(
			"LOWER(title) LIKE ?",
			"%"+strings.ToLower(query)+"%",
		).
		Find(&practices).Error

	if err != nil {
		return nil, err
	}

	var result []dto.SearchItem

	for _, p := range practices {

		result = append(result, dto.SearchItem{

			ID: p.ID.String(),

			Title: p.Title,

			Description: p.Track.Name,

			Type: "practice",

			URL: "/practice/" + p.Slug,
		})

	}

	return result, nil

}