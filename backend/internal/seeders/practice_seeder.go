package seeders

import (
	"github.com/ahmaddavid/gitgud/internal/models"
	"gorm.io/gorm"
)

func SeedPractices(db *gorm.DB) {

	var count int64

	db.Model(&models.Practice{}).Count(&count)

	if count > 0 {
		return
	}

	// cari Track Go
	var goTrack models.Track
	db.Where("slug = ?", "go").First(&goTrack)

	// cari Track Docker
	var dockerTrack models.Track
	db.Where("slug = ?", "docker").First(&dockerTrack)

	// cari Track JWT
	var jwtTrack models.Track
	db.Where("slug = ?", "jwt").First(&jwtTrack)

	practices := []models.Practice{

		{
			TrackID:            goTrack.ID,
			Title:              "Go Variables",
			Slug:               "go-variables",
			Description:        "Learn variables in Go.",
			Difficulty:         "Easy",
			EstimatedMinutes:   10,
			XPReward:           20,
		},

		{
			TrackID:            goTrack.ID,
			Title:              "Go Functions",
			Slug:               "go-functions",
			Description:        "Practice Go functions.",
			Difficulty:         "Easy",
			EstimatedMinutes:   15,
			XPReward:           25,
		},

		{
			TrackID:            goTrack.ID,
			Title:              "Go Pointer",
			Slug:               "go-pointer",
			Description:        "Understand pointers.",
			Difficulty:         "Medium",
			EstimatedMinutes:   20,
			XPReward:           40,
		},

		{
			TrackID:            dockerTrack.ID,
			Title:              "Docker Basics",
			Slug:               "docker-basics",
			Description:        "Introduction to Docker.",
			Difficulty:         "Easy",
			EstimatedMinutes:   15,
			XPReward:           25,
		},

		{
			TrackID:            dockerTrack.ID,
			Title:              "Docker Compose",
			Slug:               "docker-compose",
			Description:        "Run multiple containers.",
			Difficulty:         "Medium",
			EstimatedMinutes:   25,
			XPReward:           45,
		},

		{
			TrackID:            jwtTrack.ID,
			Title:              "JWT Authentication",
			Slug:               "jwt-authentication",
			Description:        "Protect API using JWT.",
			Difficulty:         "Medium",
			EstimatedMinutes:   25,
			XPReward:           50,
		},
	}

	db.Create(&practices)
}