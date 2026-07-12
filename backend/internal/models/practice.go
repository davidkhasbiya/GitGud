package models

import (
	"time"

	"github.com/google/uuid"
)

type Practice struct {
	ID uuid.UUID `gorm:"type:uuid;default:gen_random_uuid();primaryKey"`

	TrackID uuid.UUID `gorm:"type:uuid;not null"`

	Track Track `gorm:"foreignKey:TrackID"`

	Title string `gorm:"size:255;not null"`

	Slug string `gorm:"size:255;uniqueIndex;not null"`

	Description string `gorm:"type:text"`

	Difficulty string `gorm:"size:30"`

	EstimatedMinutes int

	XPReward int

	Questions []PracticeQuestion `gorm:"foreignKey:PracticeID"`

	CreatedAt time.Time
}