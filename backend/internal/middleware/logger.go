package middleware

import "github.com/gin-gonic/gin"

func LoggerMiddleware() gin.HandlerFunc {
	return gin.Logger()
}