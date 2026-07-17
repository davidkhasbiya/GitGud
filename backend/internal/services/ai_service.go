package services

import (
	"encoding/json"
	"fmt"
	"strconv"

	"github.com/ahmaddavid/gitgud/internal/ai"
	"github.com/ahmaddavid/gitgud/internal/dto"
	"github.com/ahmaddavid/gitgud/internal/models"
	"github.com/ahmaddavid/gitgud/internal/repositories"
	"github.com/ahmaddavid/gitgud/pkg/database"
)

type AIService struct {
	gemini *ai.GeminiClient
	repo   *repositories.AIRepository
}

func NewAIService(
	gemini *ai.GeminiClient,
	repo *repositories.AIRepository,
) *AIService {

	return &AIService{
		gemini: gemini,
		repo:   repo,
	}
}

func (s *AIService) GeneratePractice(
	req dto.GeneratePracticeRequest,
) (*models.Practice, error) {

	prompt := `
You are an expert programming instructor.

Generate a programming practice.

Track: ` + req.Track + `
Difficulty: ` + req.Difficulty + `
Topic: ` + req.Topic + `
Question Count: ` + strconv.Itoa(req.QuestionCount) + `

Return ONLY valid JSON.

The JSON MUST have this exact structure:

{
  "title":"Docker Practice",
  "description":"Practice about Docker.",
  "questions":[
    {
      "type":"multiple",
      "difficulty":"Easy",
      "question":"",
      "optionA":"",
      "optionB":"",
      "optionC":"",
      "optionD":"",
      "correctAnswer":"A",
      "explanation":""
    },
    {
      "type":"coding",
      "difficulty":"Easy",
      "question":"",
      "starterCode":"",
      "correctAnswer":"",
      "explanation":""
    }
  ]
}

DO NOT wrap the JSON inside markdown.

DO NOT explain anything.

ONLY output JSON.
`

	raw, err := s.gemini.GeneratePractice(prompt)
	if err != nil {
		return nil, err
	}

	fmt.Println(raw)

	var response dto.GeneratePracticeResponse

	err = json.Unmarshal([]byte(raw), &response)
	if err != nil {
		return nil, err
	}

	var track models.Track

	err = database.DB.
		Where("slug = ?", req.Track).
		First(&track).
		Error

	if err != nil {

		track = models.Track{
			Name: req.Track,
			Slug: req.Track,
		}

		if err := database.DB.Create(&track).Error; err != nil {
			return nil, err
		}
	}

	return s.repo.SavePractice(
		track,
		&response,
		req.Difficulty,
	)
}