package configs

type Config struct {
	AppName string
	AppEnv  string
	AppPort string

	DBHost     string
	DBPort     string
	DBUser     string
	DBPassword string
	DBName     string
	DBSSLMode  string

	JWTSecret    string
	GeminiAPIKey string
}

func LoadConfig() *Config {
	return &Config{
		AppName: GetEnv("APP_NAME", "GitGud"),
		AppEnv: GetEnv("APP_ENV", "development"),
		AppPort: GetEnv("APP_PORT", "8080"),

		DBHost: GetEnv("DB_HOST", ""),
		DBPort: GetEnv("DB_PORT", "5432"),
		DBUser: GetEnv("DB_USER", ""),
		DBPassword: GetEnv("DB_PASSWORD", ""),
		DBName: GetEnv("DB_NAME", ""),
		DBSSLMode: GetEnv("DB_SSLMODE", "require"),

		JWTSecret: GetEnv("JWT_SECRET", ""),
		GeminiAPIKey: GetEnv("GEMINI_API_KEY", ""),
	}
}