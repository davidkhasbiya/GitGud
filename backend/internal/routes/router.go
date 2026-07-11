package routes

import (
	"net/http"

	 "github.com/ahmaddavid/gitgud/internal/middleware"
    "github.com/ahmaddavid/gitgud/pkg/response"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {

	router := gin.New()

	router.Use(
		middleware.Logger(),
		gin.Recovery(),
		cors.New(
			middleware.CORSMiddleware(),
		),
	)

	router.GET("/health", func(c *gin.Context) {

		response.Success(

			c,

			http.StatusOK,

			"GitGud API is running",

			nil,
		)
	})

	return router
}