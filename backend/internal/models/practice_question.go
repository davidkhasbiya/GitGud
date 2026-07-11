package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/datatypes"
	"gorm.io/gorm"
)

type PracticeQuestion struct {
	ID uuid.UUID `gorm:"type:uuid;default:gen_random_uuid();primaryKey"`

	PracticeID uuid.UUID `gorm:"type:uuid;not null"`

	Type string `gorm:"size:30;not null"`
	// multiple_choice
	// coding

	Question string `gorm:"type:text;not null"`

	Choices datatypes.JSON `gorm:"type:jsonb"`

	CorrectAnswer string `gorm:"type:text"`

	StarterCode string `gorm:"type:text"`

	Order int

	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt `gorm:"index"`
}