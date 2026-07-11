package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Submission struct {
	ID uuid.UUID `gorm:"type:uuid;default:gen_random_uuid();primaryKey"`

	UserID uuid.UUID `gorm:"type:uuid;not null"`

	PracticeID uuid.UUID `gorm:"type:uuid;not null"`

	Score int `gorm:"default:0"`

	Feedback string `gorm:"type:text"`

	XPEarned int `gorm:"default:0"`

	SubmittedAt time.Time

	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt `gorm:"index"`
}