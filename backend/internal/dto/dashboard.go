package dto

type DashboardResponse struct {

	Name string `json:"name"`

	Level int `json:"level"`

	XP int `json:"xp"`

	NextLevelXP int `json:"nextLevelXp"`

	CompletedPractice int `json:"completedPractice"`

	AverageScore float64 `json:"averageScore"`

	Accuracy float64 `json:"accuracy"`

	Streak int `json:"streak"`

	WeeklyActivity []WeeklyActivity `json:"weeklyActivity"`

	Recent []RecentPractice `json:"recent"`

	Recommendation string `json:"recommendation"`

}