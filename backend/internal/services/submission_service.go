package services

import (
	"math"
	"strings"
	"fmt"
	"github.com/ahmaddavid/gitgud/internal/dto"
	"github.com/ahmaddavid/gitgud/internal/models"
	"github.com/ahmaddavid/gitgud/internal/repositories"
	"gorm.io/gorm"
)

type SubmissionService struct {
	repo *repositories.SubmissionRepository
}

func NewSubmissionService(
	repo *repositories.SubmissionRepository,
) *SubmissionService {

	return &SubmissionService{
		repo: repo,
	}
}

func (s *SubmissionService) Submit(
	req dto.SubmissionRequest,
) (map[string]any, error) {

	questions, err := s.repo.FindQuestions(req.PracticeID)
	if err != nil {
		return nil, err
	}

	fmt.Println("========== SUBMISSION ==========")
	fmt.Println("PracticeID:", req.PracticeID)
	fmt.Println("Question Count:", len(questions))

	answerMap := map[string]string{}

	for _, a := range req.Answers {
		answerMap[a.QuestionID.String()] = a.Answer
	}

	correct := 0
	total := 0

	for _, q := range questions {

		userAnswer := answerMap[q.ID.String()]

		switch q.Type {

		case "multiple":

			total++

			if strings.EqualFold(
				strings.TrimSpace(userAnswer),
				strings.TrimSpace(q.CorrectAnswer),
			) {
				correct++
			}

		case "coding":

			total++

			expected := normalizeCode(q.CorrectAnswer)

			actual := normalizeCode(userAnswer)

			if expected == actual {
				correct++
			}
		}
	}

	wrong := total - correct

	score := 0

	if total > 0 {
		score = correct * 100 / total
	}

	xp := correct * 10

	submission := models.Submission{
		UserID: req.UserID,
		PracticeID: req.PracticeID,
		Score: score,
		Correct: correct,
		Wrong: wrong,
		XPEarned: xp,
		Duration: req.Duration,
	}

	if err := s.repo.CreateSubmission(&submission); err != nil {
		return nil, err
	}

	progress, err := s.repo.FindProgress(req.UserID)

	if err != nil {

		if err == gorm.ErrRecordNotFound {

			progress = &models.Progress{
				UserID: req.UserID,
				Level: 1,
				XP: xp,
				CompletedPractice: 1,
				Accuracy: math.Round(float64(score)*100) / 100,
			}

			if err := s.repo.CreateProgress(progress); err != nil {
				return nil, err
			}

		} else {

			return nil, err

		}

	} else {

		progress.XP += xp

		progress.CompletedPractice++

		progress.Accuracy = math.Round(
			((progress.Accuracy*float64(progress.CompletedPractice-1))+float64(score))/
				float64(progress.CompletedPractice)*100,
		) / 100

		progress.Level = (progress.XP / 100) + 1

		if err := s.repo.SaveProgress(progress); err != nil {
			return nil, err
		}
	}

	return map[string]any{

		"score": score,

		"correct": correct,

		"wrong": wrong,

		"xpEarned": xp,

		"level": progress.Level,

		"totalXP": progress.XP,

		"duration": req.Duration,
	}, nil
}

func normalizeCode(code string) string {

    code = strings.ToLower(code)

    code = strings.ReplaceAll(code, "\r", "")

    code = strings.ReplaceAll(code, "\n", "")

    code = strings.ReplaceAll(code, "\t", "")

    code = strings.ReplaceAll(code, " ", "")

    return strings.TrimSpace(code)

}