package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type PracticeQuestion struct {
	ID uuid.UUID `gorm:"type:uuid;default:gen_random_uuid();primaryKey"`

	PracticeID uuid.UUID `gorm:"type:uuid;not null;index"`

	Practice Practice `gorm:"foreignKey:PracticeID;constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`

	// Question Type
	// multiple | coding
	Type string `gorm:"size:20;not null"`

	// Difficulty
	// Easy | Medium | Hard
	Difficulty string `gorm:"size:20;default:'Easy'"`

	Question string `gorm:"type:text;not null"`

	// Multiple Choice
	OptionA string `gorm:"type:text"`
	OptionB string `gorm:"type:text"`
	OptionC string `gorm:"type:text"`
	OptionD string `gorm:"type:text"`

	// Correct Answer
	// Multiple : A/B/C/D
	// Coding   : Expected solution / reference answer
	CorrectAnswer string `gorm:"type:text;not null"`

	// Only for Coding Question
	StarterCode string `gorm:"type:text"`

	// Explanation shown after submit
	Explanation string `gorm:"type:text"`

	// Display order inside practice
	OrderNumber int `gorm:"default:1"`

	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt `gorm:"index"`
}