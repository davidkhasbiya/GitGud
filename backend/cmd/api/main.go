package main

import (
	"log"
	"os"

	"github.com/ahmaddavid/gitgud/configs"
	"github.com/ahmaddavid/gitgud/internal/routes"
	"github.com/ahmaddavid/gitgud/pkg/database"
)

func main() {

	// Load .env when running locally.
	// In production, Render will provide environment variables directly.
	configs.LoadEnv()

	cfg := configs.LoadConfig()

	// Connect database
	database.Connect(cfg)

	// Run database migrations
	database.Migrate()

	// Setup API routes
	router := routes.SetupRouter()

	// Render provides PORT automatically.
	port := os.Getenv("PORT")

	// Local development fallback
	if port == "" {
		port = cfg.AppPort
	}

	log.Println("Server running on :" + port)

	if err := router.Run(":" + port); err != nil {
		log.Fatal(err)
	}
}