package middleware

import "github.com/gin-contrib/cors"

func CORSMiddleware() cors.Config {

	config := cors.DefaultConfig()

	config.AllowOrigins = []string{
		"http://localhost:5173",
	}

	config.AllowMethods = []string{
		"GET",
		"POST",
		"PUT",
		"PATCH",
		"DELETE",
		"OPTIONS",
	}

	config.AllowHeaders = []string{
		"*",
	}

	config.AllowCredentials = true

	return config
}