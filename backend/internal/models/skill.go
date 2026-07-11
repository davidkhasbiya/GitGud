package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Skill struct {
	ID uuid.UUID `gorm:"type:uuid;default:gen_random_uuid();primaryKey"`

	Name string `gorm:"size:100;not null"`

	Slug string `gorm:"size:100;uniqueIndex;not null"`

	Description string `gorm:"type:text"`

	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt `gorm:"index"`
}