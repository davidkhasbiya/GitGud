package services

import (
	"math"
	"strings"

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

	answerMap := map[string]string{}

	for _, a := range req.Answers {
		answerMap[a.QuestionID.String()] = a.Answer
	}

	correct := 0
	total := 0

	for _, q := range questions {

    // Coding belum dinilai
    if q.Type == "coding" {
        continue
    }

    total++

    if strings.EqualFold(
        answerMap[q.ID.String()],
        q.CorrectAnswer,
    ) {
        correct++
    }
	}

	wrong := total - correct

	score := 0

	if total > 0 {
		score = correct * 100 / total
	}
	xp := correct * 10

	// ==========================
	// SAVE SUBMISSION
	// ==========================

	submission := models.Submission{
		UserID:     req.UserID,
		PracticeID: req.PracticeID,
		Score:      score,
		Correct:    correct,
		Wrong:      wrong,
		XPEarned:   xp,
		Duration:   0,
	}

	if err := s.repo.CreateSubmission(&submission); err != nil {
		return nil, err
	}

	// ==========================
	// UPDATE PROGRESS
	// ==========================

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

		// LEVEL
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

	}, nil
}