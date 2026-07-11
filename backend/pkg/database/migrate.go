package database

import (
	"log"

	"github.com/ahmaddavid/gitgud/internal/models"
)

func Migrate() {

	err := DB.AutoMigrate(

		&models.User{},
		&models.Skill{},
		&models.Practice{},
		&models.PracticeQuestion{},
		&models.Submission{},
		&models.Progress{},
	)

	if err != nil {
		log.Fatal(err)
	}

	log.Println("Database migrated successfully.")
}