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

	router := routes.SetupRouter()

	log.Println("Server running on :" + cfg.AppPort)

	router.Run(":" + cfg.AppPort)
}