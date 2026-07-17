package ai

import (
	"context"
	"fmt"
	"time"

	"google.golang.org/genai"
)

type GeminiClient struct {
	client *genai.Client
}

func NewGeminiClient(
	apiKey string,
) (*GeminiClient, error) {

	client, err := genai.NewClient(
		context.Background(),
		&genai.ClientConfig{
			APIKey: apiKey,
		},
	)

	if err != nil {
		return nil, err
	}

	return &GeminiClient{
		client: client,
	}, nil
}

func (g *GeminiClient) GeneratePractice(
	prompt string,
) (string, error) {

	var lastErr error

	for i := 0; i < 3; i++ {

		resp, err := g.client.Models.GenerateContent(
			context.Background(),
			"gemini-3.1-flash-lite",
			genai.Text(prompt),
			nil,
		)

		if err == nil {

			if resp.Text() == "" {
				return "", fmt.Errorf("empty response from Gemini")
			}

			return resp.Text(), nil
		}

		lastErr = err

		fmt.Printf(
			"Gemini attempt %d failed: %v\n",
			i+1,
			err,
		)

		time.Sleep(2 * time.Second)
	}

	return "", lastErr
}