package middleware

import (
	"net/http"
	"strings"

	"github.com/ahmaddavid/gitgud/configs"
	"github.com/ahmaddavid/gitgud/internal/utils"

	"github.com/gin-gonic/gin"
)

func AuthMiddleware() gin.HandlerFunc {

	cfg := configs.LoadConfig()

	return func(c *gin.Context) {

		header := c.GetHeader("Authorization")

		if header == "" {
			c.JSON(http.StatusUnauthorized, gin.H{
				"message": "missing authorization header",
			})
			c.Abort()
			return
		}

		token := strings.TrimPrefix(header, "Bearer ")

		claims, err := utils.ParseJWT(
			token,
			cfg.JWTSecret,
		)

		if err != nil {
			c.JSON(http.StatusUnauthorized, gin.H{
				"message": "invalid token",
			})
			c.Abort()
			return
		}

		c.Set("userID", claims.UserID)

		c.Next()
	}
}