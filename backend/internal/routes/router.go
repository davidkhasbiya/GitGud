package routes

import (
    "net/http"

    "github.com/gin-gonic/gin"

    "github.com/ahmaddavid/gitgud/configs"
    "github.com/ahmaddavid/gitgud/internal/handlers"
    "github.com/ahmaddavid/gitgud/internal/middleware"
    "github.com/ahmaddavid/gitgud/internal/repositories"
    "github.com/ahmaddavid/gitgud/internal/services"
	"github.com/ahmaddavid/gitgud/internal/ai"
)

func SetupRouter() *gin.Engine {

	cfg := configs.LoadConfig()

	router := gin.New()

	router.Use(gin.Recovery())
	router.Use(middleware.LoggerMiddleware())
	router.Use(middleware.CORSMiddleware())

	router.GET("/health", func(c *gin.Context) {

		c.JSON(http.StatusOK, gin.H{
			"status": "ok",
		})

	})

	api := router.Group("/api/v1")

	RegisterAuthRoutes(api, cfg)

	RegisterPracticeRoutes(api)

	submissionRepo := repositories.NewSubmissionRepository()

	submissionService := services.NewSubmissionService(
		submissionRepo,
	)

	submissionHandler := handlers.NewSubmissionHandler(
		submissionService,
	)

	api.POST(
		"/submissions",
		submissionHandler.Submit,
	)

	geminiClient, err := ai.NewGeminiClient(
	cfg.GeminiAPIKey,
	)

	if err != nil {
		panic(err)
	}

	aiRepo := repositories.NewAIRepository()

	aiService := services.NewAIService(
		geminiClient,
		aiRepo,
	)

	aiHandler := handlers.NewAIHandler(
		aiService,
	)

	api.POST(
		"/practices/generate",
		aiHandler.GeneratePractice,
	)
	
	return router
}