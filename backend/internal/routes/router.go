package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/ahmaddavid/gitgud/configs"
	"github.com/ahmaddavid/gitgud/internal/middleware"
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

	return router
}