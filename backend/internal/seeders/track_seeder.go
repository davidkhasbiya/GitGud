package seeders

import (
	"github.com/ahmaddavid/gitgud/internal/models"
	"gorm.io/gorm"
)

func SeedTracks(db *gorm.DB) {

	var count int64

	db.Model(&models.Track{}).Count(&count)

	if count > 0 {
		return
	}

	tracks := []models.Track{
		{Name: "Go", Slug: "go"},
		{Name: "Docker", Slug: "docker"},
		{Name: "Redis", Slug: "redis"},
		{Name: "JWT", Slug: "jwt"},
		{Name: "SQL", Slug: "sql"},
		{Name: "PostgreSQL", Slug: "postgresql"},
		{Name: "REST API", Slug: "rest-api"},
		{Name: "GORM", Slug: "gorm"},
		{Name: "Gin", Slug: "gin"},
		{Name: "Authentication", Slug: "authentication"},
	}

	db.Create(&tracks)
}