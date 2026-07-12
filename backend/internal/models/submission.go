package models

import (
	"time"

	"github.com/google/uuid"
)

type Submission struct {
	ID uuid.UUID `gorm:"type:uuid;default:gen_random_uuid();primaryKey"`

	UserID uuid.UUID `gorm:"type:uuid;not null"`

	PracticeID uuid.UUID `gorm:"type:uuid;not null"`

	User User `gorm:"foreignKey:UserID"`

	Practice Practice `gorm:"foreignKey:PracticeID"`

	Score int

	Correct int

	Wrong int

	XPEarned int

	Duration int

	CreatedAt time.Time
}