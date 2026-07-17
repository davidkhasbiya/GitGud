package dto

type GeneratePracticeResponse struct {
	Title       string               `json:"title"`
	Description string               `json:"description"`
	Questions   []AIPracticeQuestion `json:"questions"`
}

type AIPracticeQuestion struct {
	Type          string `json:"type"`
	Difficulty    string `json:"difficulty"`
	Question      string `json:"question"`
	OptionA       string `json:"optionA"`
	OptionB       string `json:"optionB"`
	OptionC       string `json:"optionC"`
	OptionD       string `json:"optionD"`
	CorrectAnswer string `json:"correctAnswer"`
	StarterCode   string `json:"starterCode,omitempty"`
	Explanation   string `json:"explanation"`
}