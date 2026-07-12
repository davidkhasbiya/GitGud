package models

import (
	"time"

	"github.com/google/uuid"
)

type Track struct {
	ID uuid.UUID `gorm:"type:uuid;default:gen_random_uuid();primaryKey"`

	Name string `gorm:"size:100;not null"`

	Slug string `gorm:"size:100;uniqueIndex;not null"`

	Practices []Practice `gorm:"foreignKey:TrackID"`

	CreatedAt time.Time
}