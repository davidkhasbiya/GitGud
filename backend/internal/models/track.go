package models

import (
	"time"

	"github.com/google/uuid"
)

type Track struct {
	ID   uuid.UUID `gorm:"type:uuid;default:gen_random_uuid();primaryKey" json:"id"`

	Name string `gorm:"size:100;not null" json:"name"`

	Slug string `gorm:"size:100;uniqueIndex;not null" json:"slug"`

	Practices []Practice `gorm:"foreignKey:TrackID" json:"practices"`

	CreatedAt time.Time `json:"createdAt"`
}