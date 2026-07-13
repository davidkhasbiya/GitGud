package models

import (
	"time"

	"github.com/google/uuid"
)

type Practice struct {
	ID uuid.UUID `gorm:"type:uuid;default:gen_random_uuid();primaryKey" json:"id"`

	TrackID uuid.UUID `gorm:"type:uuid;not null" json:"trackId"`

	Track Track `gorm:"foreignKey:TrackID" json:"track"`

	Title string `gorm:"size:255;not null" json:"title"`

	Slug string `gorm:"size:255;uniqueIndex;not null" json:"slug"`

	Description string `gorm:"type:text" json:"description"`

	Difficulty string `gorm:"size:30" json:"difficulty"`

	EstimatedMinutes int `json:"estimatedMinutes"`

	XPReward int `json:"xpReward"`

	Questions []PracticeQuestion `gorm:"foreignKey:PracticeID" json:"questions"`

	CreatedAt time.Time `json:"createdAt"`
}