package dto

type WeeklyActivity struct {
	Day   string `json:"day"`
	Count int    `json:"count"`
}

type SkillProgress struct {
	Name     string `json:"name"`
	Progress int    `json:"progress"`
}

type RecentPractice struct {
	Title     string `json:"title"`
	Score     int    `json:"score"`
	XPEarned  int    `json:"xpEarned"`
	CreatedAt string `json:"createdAt"`
}

type AIInsight struct {
	Strength      string `json:"strength"`
	Weakness      string `json:"weakness"`
	Recommendation string `json:"recommendation"`
}

type ProgressResponse struct {
	Level              int                `json:"level"`
	XP                 int                `json:"xp"`
	NextLevelXP        int                `json:"nextLevelXp"`
	CompletedPractice  int                `json:"completedPractice"`
	Accuracy           float64            `json:"accuracy"`
	AverageScore       float64            `json:"averageScore"`
	TotalCorrect       int                `json:"totalCorrect"`
	TotalWrong         int                `json:"totalWrong"`
	Streak             int                `json:"streak"`
	WeeklyActivity     []WeeklyActivity   `json:"weeklyActivity"`
	Skills             []SkillProgress    `json:"skills"`
	Recent             []RecentPractice   `json:"recent"`
	Insight            AIInsight          `json:"insight"`
}