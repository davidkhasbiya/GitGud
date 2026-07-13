package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type PracticeQuestion struct {
	ID uuid.UUID `gorm:"type:uuid;default:gen_random_uuid();primaryKey" json:"id"`

	PracticeID uuid.UUID `gorm:"type:uuid;not null;index" json:"practiceId"`

	Practice Practice `gorm:"foreignKey:PracticeID;constraint:OnUpdate:CASCADE,OnDelete:CASCADE;" json:"practice"`

	// Question Type
	// multiple | coding
	Type string `gorm:"size:20;not null" json:"type"`

	// Difficulty
	// Easy | Medium | Hard
	Difficulty string `gorm:"size:20;default:'Easy'" json:"difficulty"`

	Question string `gorm:"type:text;not null" json:"question"`

	// Multiple Choice
	OptionA string `gorm:"type:text" json:"optionA"`
	OptionB string `gorm:"type:text" json:"optionB"`
	OptionC string `gorm:"type:text" json:"optionC"`
	OptionD string `gorm:"type:text" json:"optionD"`

	// Correct Answer
	// Multiple : A/B/C/D
	// Coding   : Expected solution / reference answer
	CorrectAnswer string `gorm:"type:text;not null" json:"correctAnswer"`

	// Only for Coding Question
	StarterCode string `gorm:"type:text" json:"starterCode"`

	// Explanation shown after submit
	Explanation string `gorm:"type:text" json:"explanation"`

	// Display order inside practice
	OrderNumber int `gorm:"default:1" json:"orderNumber"`

	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
	DeletedAt gorm.DeletedAt `gorm:"index" json:"-"`
}