package main

import (
	"log"

	"github.com/google/uuid"

	"github.com/ahmaddavid/gitgud/pkg/database"
	"github.com/ahmaddavid/gitgud/internal/models"
)

func main() {

	db := database.Connect()

	//---------------------------------
	// Tracks
	//---------------------------------

	tracks := []models.Track{
		{
			ID: uuid.New(),
			Name: "Go",
			Slug: "go",
		},
		{
			ID: uuid.New(),
			Name: "Docker",
			Slug: "docker",
		},
		{
			ID: uuid.New(),
			Name: "Redis",
			Slug: "redis",
		},
		{
			ID: uuid.New(),
			Name: "JWT",
			Slug: "jwt",
		},
		{
			ID: uuid.New(),
			Name: "SQL",
			Slug: "sql",
		},
	}

	for _, track := range tracks {

		db.FirstOrCreate(
			&track,
			models.Track{
				Slug: track.Slug,
			},
		)
	}

	log.Println("Tracks seeded!")

	//---------------------------------
	// Find Track IDs
	//---------------------------------

	var goTrack models.Track
	db.Where("slug = ?", "go").First(&goTrack)

	var jwtTrack models.Track
	db.Where("slug = ?", "jwt").First(&jwtTrack)

	var redisTrack models.Track
	db.Where("slug = ?", "redis").First(&redisTrack)

	//---------------------------------
	// Practices
	//---------------------------------

	practices := []models.Practice{

		{
			Title: "Go Variables",
			Slug: "go-variables",
			Description: "Learn Go variable declaration.",
			Difficulty: "Easy",
			EstimatedMinutes: 10,
			XPReward: 50,
			TrackID: goTrack.ID,
		},

		{
			Title: "Go Pointer",
			Slug: "go-pointer",
			Description: "Understanding pointers.",
			Difficulty: "Medium",
			EstimatedMinutes: 20,
			XPReward: 100,
			TrackID: goTrack.ID,
		},

		{
			Title: "JWT Authentication",
			Slug: "jwt-authentication",
			Description: "Learn JWT authentication.",
			Difficulty: "Medium",
			EstimatedMinutes: 25,
			XPReward: 120,
			TrackID: jwtTrack.ID,
		},

		{
			Title: "Redis Cache",
			Slug: "redis-cache",
			Description: "Implement Redis caching.",
			Difficulty: "Hard",
			EstimatedMinutes: 30,
			XPReward: 180,
			TrackID: redisTrack.ID,
		},
	}

	for _, practice := range practices {

		db.FirstOrCreate(
			&practice,
			models.Practice{
				Slug: practice.Slug,
			},
		)
	}

	log.Println("Practices seeded!")
}