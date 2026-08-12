package services

import (
	"encoding/json"
	"fmt"
	"strconv"
	"strings"

	"github.com/ahmaddavid/gitgud/internal/ai"
	"github.com/ahmaddavid/gitgud/internal/dto"
	"github.com/ahmaddavid/gitgud/internal/models"
	"github.com/ahmaddavid/gitgud/internal/repositories"
	"github.com/ahmaddavid/gitgud/pkg/database"
	"github.com/google/uuid"
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

// ============================================================
// GENERATE PRACTICE
// ============================================================

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
	"title": "Docker Practice",
	"description": "Practice about Docker.",
	"questions": [
		{
			"type": "multiple",
			"difficulty": "Easy",
			"question": "",
			"optionA": "",
			"optionB": "",
			"optionC": "",
			"optionD": "",
			"correctAnswer": "A",
			"explanation": ""
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

	raw = cleanJSON(raw)

	var response dto.GeneratePracticeResponse

	if err := json.Unmarshal(
		[]byte(raw),
		&response,
	); err != nil {
		return nil, fmt.Errorf(
			"failed to parse generated practice: %w",
			err,
		)
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

		if err := database.DB.
			Create(&track).
			Error; err != nil {

			return nil, err
		}
	}

	return s.repo.SavePractice(
		track,
		&response,
		req.Difficulty,
	)
}

// ============================================================
// AI RECOMMENDATION
// ============================================================

func (s *AIService) GetRecommendation(
	userID uuid.UUID,
) (*dto.AIRecommendationResponse, error) {

	submissions, err := s.repo.GetRecentSubmissions(
		userID,
		10,
	)

	if err != nil {
		return nil, err
	}

	// ------------------------------------------------------------
	// BELUM ADA HISTORY
	// ------------------------------------------------------------

	if len(submissions) == 0 {

		return &dto.AIRecommendationResponse{
			Title: "Go Basics",

			Reason: "Start with fundamental programming concepts to build a strong foundation.",

			Difficulty: "Easy",

			EstimatedMinutes: 15,

			Focus: "Programming fundamentals",
		}, nil
	}

	// ------------------------------------------------------------
	// BUILD HISTORY
	// ------------------------------------------------------------

	var history strings.Builder

	for _, item := range submissions {

		history.WriteString(
			"Practice: " +
				item.Practice.Title +
				"\n",
		)

		history.WriteString(
			"Track: " +
				item.Practice.Track.Name +
				"\n",
		)

		history.WriteString(
			"Difficulty: " +
				item.Practice.Difficulty +
				"\n",
		)

		history.WriteString(
			"Score: " +
				strconv.Itoa(item.Score) +
				"\n",
		)

		history.WriteString(
			"Correct: " +
				strconv.Itoa(item.Correct) +
				"\n",
		)

		history.WriteString(
			"Wrong: " +
				strconv.Itoa(item.Wrong) +
				"\n\n",
		)
	}

	// ------------------------------------------------------------
	// GEMINI RECOMMENDATION
	// ------------------------------------------------------------

	prompt := `
You are GitGud AI Mentor.

Analyze the user's recent programming practice history.

Your job is to recommend the SINGLE most useful next topic.

Recent practice history:

` + history.String() + `

Return ONLY valid JSON.

Use exactly this structure:

{
	"title": "REST API Error Handling",
	"reason": "The user needs more practice with API error handling based on recent results.",
	"difficulty": "Medium",
	"estimatedMinutes": 20,
	"focus": "HTTP errors and middleware"
}

Rules:

- Do not recommend a topic randomly.
- Analyze weak areas.
- Consider recent scores.
- Consider repeated mistakes.
- Difficulty should be Easy, Medium, or Hard.
- Estimated minutes should be between 10 and 60.
- Keep the recommendation practical.
- Return ONLY JSON.
`

	raw, err := s.gemini.Generate(prompt)

	if err != nil {
		return nil, err
	}

	raw = cleanJSON(raw)

	var response dto.AIRecommendationResponse

	if err := json.Unmarshal(
		[]byte(raw),
		&response,
	); err != nil {

		return nil, fmt.Errorf(
			"failed to parse AI recommendation: %w",
			err,
		)
	}

	return &response, nil
}

// ============================================================
// AI FEEDBACK
// ============================================================

func (s *AIService) GenerateFeedback(
	req dto.AIFeedbackRequest,
) (*dto.AIFeedbackResponse, error) {

	// ------------------------------------------------------------
	// CONVERT PRACTICE ID STRING -> UUID
	// ------------------------------------------------------------

	practiceID, err := uuid.Parse(req.PracticeID)

	if err != nil {
		return nil, fmt.Errorf(
			"invalid practice id: %w",
			err,
		)
	}

	// ------------------------------------------------------------
	// GET PRACTICE
	// ------------------------------------------------------------

	practice, err := s.repo.GetPractice(
		practiceID,
	)

	if err != nil {
		return nil, err
	}

	// ------------------------------------------------------------
	// BUILD QUESTIONS
	// ------------------------------------------------------------

	var questions strings.Builder

	for _, q := range practice.Questions {

		questions.WriteString(
			"Question: " +
				q.Question +
				"\n",
		)

		questions.WriteString(
			"Correct Answer: " +
				q.CorrectAnswer +
				"\n",
		)

		questions.WriteString(
			"Explanation: " +
				q.Explanation +
				"\n\n",
		)
	}

	// ------------------------------------------------------------
	// GEMINI FEEDBACK PROMPT
	// ------------------------------------------------------------

	prompt := `
You are GitGud AI Mentor.

Analyze a user's completed programming practice.

Practice:
` + practice.Title + `

Difficulty:
` + practice.Difficulty + `

Score:
` + strconv.Itoa(req.Score) + `

Correct answers:
` + strconv.Itoa(req.Correct) + `

Wrong answers:
` + strconv.Itoa(req.Wrong) + `

Practice questions:

` + questions.String() + `

User answer:
` + req.UserAnswer + `

Generate constructive educational feedback.

Return ONLY valid JSON.

Use exactly this structure:

{
	"summary": "You understand the basic concept but need more practice.",
	"strengths": [
		"Good understanding of the main concept"
	],
	"weaknesses": [
		"Some concepts need improvement"
	],
	"suggestions": [
		"Review the relevant concepts",
		"Practice similar problems"
	],
	"nextStep": "Practice the recommended topic",
	"encouragement": "Keep practicing. Your understanding is improving."
}

Rules:

- Be specific.
- Do not insult the user.
- Do not invent facts.
- Suggestions must be actionable.
- Keep feedback concise.
- Return ONLY JSON.
`

	raw, err := s.gemini.Generate(prompt)

	if err != nil {
		return nil, err
	}

	raw = cleanJSON(raw)

	var response dto.AIFeedbackResponse

	if err := json.Unmarshal(
		[]byte(raw),
		&response,
	); err != nil {

		return nil, fmt.Errorf(
			"failed to parse AI feedback: %w",
			err,
		)
	}

	return &response, nil
}

// ============================================================
// CLEAN GEMINI JSON
// ============================================================

func cleanJSON(raw string) string {

	raw = strings.TrimSpace(raw)

	raw = strings.TrimPrefix(
		raw,
		"```json",
	)

	raw = strings.TrimPrefix(
		raw,
		"```",
	)

	raw = strings.TrimSuffix(
		raw,
		"```",
	)

	return strings.TrimSpace(raw)
}
