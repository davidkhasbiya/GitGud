package routes

import (
	"github.com/gin-gonic/gin"

	"github.com/ahmaddavid/gitgud/configs"
	"github.com/ahmaddavid/gitgud/internal/handlers"
	"github.com/ahmaddavid/gitgud/internal/repositories"
	"github.com/ahmaddavid/gitgud/internal/services"
	"github.com/ahmaddavid/gitgud/internal/middleware"
)

func RegisterAuthRoutes(
	api *gin.RouterGroup,
	cfg *configs.Config,
) {

	userRepo := repositories.NewUserRepository()

	authService := services.NewAuthService(
		userRepo,
		cfg,
	)

	authHandler := handlers.NewAuthHandler(
		authService,
	)

	auth := api.Group("/auth")

	{

		auth.POST("/register", authHandler.Register)

		auth.POST("/login", authHandler.Login)

		auth.GET(
			"/me",
			middleware.AuthMiddleware(),
			authHandler.Me,
		)

	}
}