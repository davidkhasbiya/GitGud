package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Practice struct {
	ID uuid.UUID `gorm:"type:uuid;default:gen_random_uuid();primaryKey"`

	SkillID uuid.UUID `gorm:"type:uuid;not null"`

	Title string `gorm:"size:255;not null"`

	Description string `gorm:"type:text"`

	Difficulty string `gorm:"size:20;not null"`

	XPReward int `gorm:"default:0"`

	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt `gorm:"index"`
}