package handlers

import (
	"net/http"
	"fmt"

	"github.com/gin-gonic/gin"

	"github.com/ahmaddavid/gitgud/internal/dto"
	"github.com/ahmaddavid/gitgud/internal/services"
)

type AIHandler struct {
	service *services.AIService
}

func NewAIHandler(
	service *services.AIService,
) *AIHandler {

	return &AIHandler{
		service: service,
	}
}

func (h *AIHandler) GeneratePractice(
	c *gin.Context,
) {

	var req dto.GeneratePracticeRequest

	if err := c.ShouldBindJSON(&req); err != nil {

		c.JSON(
			http.StatusBadRequest,
			gin.H{
				"message": err.Error(),
			},
		)

		return
	}

	practice, err := h.service.GeneratePractice(req)

	if err != nil {

    fmt.Println("AI ERROR:", err)

    c.JSON(
        http.StatusInternalServerError,
        gin.H{
            "message": err.Error(),
        },
    )

    return
}

	c.JSON(
		http.StatusOK,
		gin.H{
			"id": practice.ID,
			"slug": practice.Slug,
			"title": practice.Title,
		},
	)
}