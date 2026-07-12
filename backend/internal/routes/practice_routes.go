package routes

import (
	"github.com/ahmaddavid/gitgud/internal/handlers"
	"github.com/ahmaddavid/gitgud/internal/repositories"
	"github.com/ahmaddavid/gitgud/internal/services"

	"github.com/gin-gonic/gin"
)

func RegisterPracticeRoutes(
	api *gin.RouterGroup,
) {

	trackRepo := repositories.NewTrackRepository()
	practiceRepo := repositories.NewPracticeRepository()

	trackService := services.NewTrackService(trackRepo)
	practiceService := services.NewPracticeService(practiceRepo)

	trackHandler := handlers.NewTrackHandler(trackService)
	practiceHandler := handlers.NewPracticeHandler(practiceService)

	api.GET("/tracks", trackHandler.GetAll)

	api.GET("/practices", practiceHandler.GetAll)

	api.GET("/practices/:slug", practiceHandler.GetBySlug)

}