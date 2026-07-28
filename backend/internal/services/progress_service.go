package services

import (
	"github.com/ahmaddavid/gitgud/internal/dto"
	"github.com/ahmaddavid/gitgud/internal/models"
	"github.com/ahmaddavid/gitgud/internal/repositories"
	"github.com/google/uuid"
)

type ProgressService struct {
	repo *repositories.ProgressRepository
}

func NewProgressService(
	repo *repositories.ProgressRepository,
) *ProgressService {

	return &ProgressService{
		repo: repo,
	}
}

func (s *ProgressService) Get(
	userID uuid.UUID,
) (*dto.ProgressResponse, error) {

	progress, err := s.repo.GetProgress(userID)
	if err != nil {
		return nil, err
	}

	submissions, err := s.repo.GetSubmissions(userID)
	if err != nil {
		return nil, err
	}

	totalScore := 0
	totalCorrect := 0
	totalWrong := 0

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
		totalCorrect += item.Correct
		totalWrong += item.Wrong

		if len(recent) < 5 {

			recent = append(recent, dto.RecentPractice{

				Title: item.Practice.Title,

				Score: item.Score,

				XPEarned: item.XPEarned,

				CreatedAt: item.CreatedAt.Format("02 Jan 2006"),
			})

		}

		day := item.CreatedAt.Weekday().String()[:3]

		weekMap[day]++

	}

	average := 0.0

	if len(submissions) > 0 {

		average = float64(totalScore) / float64(len(submissions))

	}

	weekly := []dto.WeeklyActivity{

		{
			Day: "Mon",
			Count: weekMap["Mon"],
		},

		{
			Day: "Tue",
			Count: weekMap["Tue"],
		},

		{
			Day: "Wed",
			Count: weekMap["Wed"],
		},

		{
			Day: "Thu",
			Count: weekMap["Thu"],
		},

		{
			Day: "Fri",
			Count: weekMap["Fri"],
		},

		{
			Day: "Sat",
			Count: weekMap["Sat"],
		},

		{
			Day: "Sun",
			Count: weekMap["Sun"],
		},
	}

	skills := []dto.SkillProgress{

		{
			Name: "Accuracy",
			Progress: int(progress.Accuracy),
		},

		{
			Name: "Problem Solving",
			Progress: min(totalCorrect*5, 100),
		},

		{
			Name: "Consistency",
			Progress: min(calculateStreak(submissions)*10, 100),
		},
	}

	var insight dto.AIInsight

	switch {

	case progress.Accuracy >= 85:

		insight = dto.AIInsight{

			Strength: "Excellent problem solving and concept understanding.",

			Weakness: "Try solving more advanced coding challenges.",

			Recommendation: "Generate Hard difficulty practice.",

		}

	case progress.Accuracy >= 70:

		insight = dto.AIInsight{

			Strength: "Good understanding of most concepts.",

			Weakness: "Review incorrect answers more carefully.",

			Recommendation: "Practice Medium coding challenges.",

		}

	default:

		insight = dto.AIInsight{

			Strength: "Learning consistency is improving.",

			Weakness: "Fundamental concepts still need reinforcement.",

			Recommendation: "Repeat Easy practice before moving forward.",

		}

	}

	return &dto.ProgressResponse{

		Level: progress.Level,

		XP: progress.XP,

		NextLevelXP: progress.Level * 100,

		CompletedPractice: progress.CompletedPractice,

		Accuracy: progress.Accuracy,

		AverageScore: average,

		TotalCorrect: totalCorrect,

		TotalWrong: totalWrong,

		Streak: calculateStreak(submissions),

		WeeklyActivity: weekly,

		Skills: skills,

		Recent: recent,

		Insight: insight,
	}, nil

}

func calculateStreak(
	submissions []models.Submission,
) int {

	if len(submissions) == 0 {
		return 0
	}

	streak := 1

	last := submissions[0].CreatedAt

	for i := 1; i < len(submissions); i++ {

		diff := last.Sub(
			submissions[i].CreatedAt,
		).Hours()

		if diff <= 48 {

			streak++

		} else {

			break

		}

		last = submissions[i].CreatedAt

	}

	return streak

}

func min(a, b int) int {

	if a < b {

		return a

	}

	return b

}