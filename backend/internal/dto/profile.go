package dto

type ProfileResponse struct {
	ID string `json:"id"`

	Name  string `json:"name"`
	Email string `json:"email"`

	Level int `json:"level"`

	XP int `json:"xp"`

	Accuracy float64 `json:"accuracy"`

	CompletedPractice int `json:"completedPractice"`

	JoinedAt string `json:"joinedAt"`

	Recent []RecentPractice `json:"recent"`
}