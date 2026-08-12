package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/ahmaddavid/gitgud/configs"
	"github.com/ahmaddavid/gitgud/internal/ai"
	"github.com/ahmaddavid/gitgud/internal/handlers"
	"github.com/ahmaddavid/gitgud/internal/middleware"
	"github.com/ahmaddavid/gitgud/internal/repositories"
	"github.com/ahmaddavid/gitgud/internal/services"
)

func SetupRouter() *gin.Engine {

	cfg := configs.LoadConfig()

	router := gin.New()

	router.Use(gin.Recovery())
	router.Use(middleware.LoggerMiddleware())
	router.Use(middleware.CORSMiddleware())

	// =========================================================
	// HEALTH
	// =========================================================

	router.GET("/health", func(c *gin.Context) {

		c.JSON(http.StatusOK, gin.H{
			"status": "ok",
		})

	})

	// =========================================================
	// API
	// =========================================================

	api := router.Group("/api/v1")

	// =========================================================
	// AUTH
	// =========================================================

	RegisterAuthRoutes(api, cfg)

	// =========================================================
	// PRACTICE
	// =========================================================

	RegisterPracticeRoutes(api)

	// =========================================================
	// SUBMISSION
	// =========================================================

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

	// =========================================================
	// GEMINI AI
	// =========================================================

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

	// Generate AI Practice
	api.POST(
		"/practices/generate",
		aiHandler.GeneratePractice,
	)

	// AI Recommendation
	api.GET(
		"/ai/recommendation/:userId",
		aiHandler.Recommendation,
	)

	// AI Feedback
	api.POST(
		"/ai/feedback",
		aiHandler.Feedback,
	)

	// =========================================================
	// PROGRESS
	// =========================================================

	progressRepo := repositories.NewProgressRepository()

	progressService := services.NewProgressService(
		progressRepo,
	)

	progressHandler := handlers.NewProgressHandler(
		progressService,
	)

	progress := api.Group("/progress")
	{
		progress.GET(
			"/:userId",
			progressHandler.Get,
		)
	}

	// =========================================================
	// PROFILE
	// =========================================================

	profileRepo := repositories.NewProfileRepository()

	profileService := services.NewProfileService(
		profileRepo,
	)

	profileHandler := handlers.NewProfileHandler(
		profileService,
	)

	api.GET(
		"/profile/:userId",
		profileHandler.Get,
	)
	
	// =========================================================
	// DASHBOARD
	// =========================================================

	dashboardRepo := repositories.NewDashboardRepository()

	dashboardService := services.NewDashboardService(
		dashboardRepo,
		aiService,
	)

	dashboardHandler := handlers.NewDashboardHandler(
		dashboardService,
	)

	dashboard := api.Group("/dashboard")
	{
		dashboard.GET(
			"/:userId",
			dashboardHandler.Get,
		)
	}

	// =========================================================
	// SETTINGS
	// =========================================================

	settingsRepo := repositories.NewSettingsRepository()

	settingsService := services.NewSettingsService(
		settingsRepo,
	)

	settingsHandler := handlers.NewSettingsHandler(
		settingsService,
	)

	settings := api.Group("/settings")
	{
		settings.PUT(
			"/profile/:userId",
			settingsHandler.UpdateProfile,
		)

		settings.PUT(
			"/password",
			settingsHandler.ChangePassword,
		)
	}

	// =========================================================
	// SEARCH
	// =========================================================

	searchRepo := repositories.NewSearchRepository()

	searchService := services.NewSearchService(
		searchRepo,
	)

	searchHandler := handlers.NewSearchHandler(
		searchService,
	)

	api.GET(
		"/search",
		searchHandler.Search,
	)

	// =========================================================
	// RETURN ROUTER
	// =========================================================

	return router
}
