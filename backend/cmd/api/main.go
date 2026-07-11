package main

import (
	"log"

	"github.com/ahmaddavid/gitgud/configs"
	"github.com/ahmaddavid/gitgud/internal/routes"
	"github.com/ahmaddavid/gitgud/pkg/database"
)

func main() {

	configs.LoadEnv()

	cfg := configs.LoadConfig()

	database.Connect(cfg)

	database.Migrate()

	router := routes.SetupRouter()

	log.Println("Server running on :" + cfg.AppPort)

	if err := router.Run(":" + cfg.AppPort); err != nil {
		log.Fatal(err)
	}
}