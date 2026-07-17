package dto

type GeneratePracticeRequest struct {
	Track         string `json:"track" binding:"required"`
	Difficulty    string `json:"difficulty" binding:"required"`
	Topic         string `json:"topic" binding:"required"`
	QuestionCount int    `json:"questionCount" binding:"required"`
}