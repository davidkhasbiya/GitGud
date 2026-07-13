package dto

import "github.com/google/uuid"

type SubmissionAnswerRequest struct {
	QuestionID uuid.UUID `json:"questionId"`
	Answer     string    `json:"answer"`
}

type SubmissionRequest struct {
    UserID uuid.UUID `json:"userId"`

    PracticeID uuid.UUID `json:"practiceId"`

    Answers []SubmissionAnswerRequest `json:"answers"`
}