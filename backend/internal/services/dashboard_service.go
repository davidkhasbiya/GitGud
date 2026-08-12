package services

import (
	"github.com/ahmaddavid/gitgud/internal/dto"
	"github.com/ahmaddavid/gitgud/internal/models"
	"github.com/ahmaddavid/gitgud/internal/repositories"
	"github.com/google/uuid"
)

type DashboardService struct {
	repo *repositories.DashboardRepository
	ai   *AIService
}

func NewDashboardService(
	repo *repositories.DashboardRepository,
	aiService *AIService,
) *DashboardService {

	return &DashboardService{
		repo: repo,
		ai:   aiService,
	}
}

func (s *DashboardService) Get(
	userID uuid.UUID,
) (*dto.DashboardResponse, error) {

	user, err := s.repo.GetUser(userID)

	if err != nil {
		return nil, err
	}

	progress, err := s.repo.GetProgress(userID)

	if err != nil {
		return nil, err
	}

	submissions, err := s.repo.GetSubmissions(userID)

	if err != nil {
		return nil, err
	}

	// ============================================================
	// AI RECOMMENDATION
	// ============================================================

	recommendation, err := s.ai.GetRecommendation(userID)

	if err != nil {
		return nil, err
	}

	// ============================================================
	// DASHBOARD STATISTICS
	// ============================================================

	totalScore := 0

	var recent []dto.RecentPractice

	weekMap := map[string]int{
		"Mon": 0,
		"Tue": 0,
		"Wed": 0,
		"Thu": 0,
		"Fri": 0,
		"Sat": 0,
		"Sun": 0,
	}

	for _, item := range submissions {

		totalScore += item.Score

		if len(recent) < 5 {

			recent = append(
				recent,
				dto.RecentPractice{
					Title: item.Practice.Title,

					Score: item.Score,

					XPEarned: item.XPEarned,

					CreatedAt: item.CreatedAt.Format(
						"02 Jan 2006",
					),
				},
			)
		}

		day := item.CreatedAt.
			Weekday().
			String()[:3]

		weekMap[day]++
	}

	average := 0.0

	if len(submissions) > 0 {

		average =
			float64(totalScore) /
				float64(len(submissions))
	}

	weekly := []dto.WeeklyActivity{

		{
			Day:   "Mon",
			Count: weekMap["Mon"],
		},

		{
			Day:   "Tue",
			Count: weekMap["Tue"],
		},

		{
			Day:   "Wed",
			Count: weekMap["Wed"],
		},

		{
			Day:   "Thu",
			Count: weekMap["Thu"],
		},

		{
			Day:   "Fri",
			Count: weekMap["Fri"],
		},

		{
			Day:   "Sat",
			Count: weekMap["Sat"],
		},

		{
			Day:   "Sun",
			Count: weekMap["Sun"],
		},
	}

	return &dto.DashboardResponse{

		Name: user.Name,

		Level: progress.Level,

		XP: progress.XP,

		NextLevelXP: progress.Level * 100,

		CompletedPractice: progress.CompletedPractice,

		AverageScore: average,

		Accuracy: progress.Accuracy,

		Streak: calculateDashboardStreak(
			submissions,
		),

		WeeklyActivity: weekly,

		Recent: recent,

		Recommendation: recommendation,

	}, nil
}

func calculateDashboardStreak(
	submissions []models.Submission,
) int {

	if len(submissions) == 0 {
		return 0
	}

	streak := 1

	last := submissions[0].CreatedAt

	for i := 1; i < len(submissions); i++ {

		diff := last.
			Sub(
				submissions[i].CreatedAt,
			).
			Hours()

		if diff <= 48 {

			streak++

		} else {

			break
		}

		last = submissions[i].CreatedAt
	}

	return streak
}