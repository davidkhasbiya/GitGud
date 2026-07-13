package database

import (
	"log"

	"github.com/ahmaddavid/gitgud/internal/models"
	"github.com/ahmaddavid/gitgud/internal/seeders"
)

func Migrate() {

	err := DB.AutoMigrate(
		&models.User{},
		&models.Track{},
		&models.Practice{},
		&models.PracticeQuestion{},
		&models.Submission{},
		&models.Progress{},
	)

	seeders.SeedTracks(DB)

	seeders.SeedPractices(DB)

	seeders.SeedPracticeQuestions(DB)

	if err != nil {
		log.Fatal(err)
	}

	log.Println("Database migrated successfully.")
}