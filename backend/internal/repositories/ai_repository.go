package repositories

import (
	"strings"

	"github.com/google/uuid"

	"github.com/ahmaddavid/gitgud/internal/dto"
	"github.com/ahmaddavid/gitgud/internal/models"
	"github.com/ahmaddavid/gitgud/pkg/database"
)

type AIRepository struct{}

func NewAIRepository() *AIRepository {
	return &AIRepository{}
}

func (r *AIRepository) SavePractice(
	track models.Track,
	data *dto.GeneratePracticeResponse,
	difficulty string,
) (*models.Practice, error) {

	practice := models.Practice{
		TrackID: track.ID,
		Title: data.Title,
		Slug: uuid.New().String(),
		Description: data.Description,
		Difficulty: difficulty,
		EstimatedMinutes: 20,
		XPReward: 50,
	}

	if err := database.DB.Create(&practice).Error; err != nil {
		return nil, err
	}

	for i, q := range data.Questions {

		question := models.PracticeQuestion{
			PracticeID: practice.ID,
			Type: strings.ToLower(q.Type),
			Difficulty: q.Difficulty,
			Question: q.Question,
			OptionA: q.OptionA,
			OptionB: q.OptionB,
			OptionC: q.OptionC,
			OptionD: q.OptionD,
			CorrectAnswer: q.CorrectAnswer,
			StarterCode: q.StarterCode,
			Explanation: q.Explanation,
			OrderNumber: i + 1,
		}

		if err := database.DB.Create(&question).Error; err != nil {
			return nil, err
		}
	}

	return &practice, nil
}