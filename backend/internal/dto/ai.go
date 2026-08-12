package dto

type AIRecommendationResponse struct {
	Title            string `json:"title"`
	Reason           string `json:"reason"`
	Difficulty       string `json:"difficulty"`
	EstimatedMinutes int    `json:"estimatedMinutes"`
	Focus            string `json:"focus"`
}

type AIFeedbackRequest struct {
	UserID     string `json:"userId"`
	PracticeID string `json:"practiceId"`
	Score      int    `json:"score"`
	Correct    int    `json:"correct"`
	Wrong      int    `json:"wrong"`
	UserAnswer string `json:"userAnswer"`
}

type AIFeedbackResponse struct {
	Summary       string   `json:"summary"`
	Strengths     []string `json:"strengths"`
	Weaknesses    []string `json:"weaknesses"`
	Suggestions   []string `json:"suggestions"`
	NextStep      string   `json:"nextStep"`
	Encouragement string   `json:"encouragement"`
}