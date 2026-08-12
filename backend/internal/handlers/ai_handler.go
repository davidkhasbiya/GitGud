package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"

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

// ============================================================
// GENERATE PRACTICE
// ============================================================

func (h *AIHandler) GeneratePractice(
	c *gin.Context,
) {

	var req dto.GeneratePracticeRequest

	if err := c.ShouldBindJSON(&req); err != nil {

		c.JSON(
			http.StatusBadRequest,
			gin.H{
				"error": "invalid request",
			},
		)

		return
	}

	result, err := h.service.GeneratePractice(req)

	if err != nil {

		c.JSON(
			http.StatusInternalServerError,
			gin.H{
				"error": err.Error(),
			},
		)

		return
	}

	c.JSON(
		http.StatusOK,
		result,
	)
}

// ============================================================
// AI RECOMMENDATION
// ============================================================

func (h *AIHandler) Recommendation(
	c *gin.Context,
) {

	id := c.Param("userId")

	userID, err := uuid.Parse(id)

	if err != nil {

		c.JSON(
			http.StatusBadRequest,
			gin.H{
				"error": "invalid user id",
			},
		)

		return
	}

	result, err := h.service.GetRecommendation(
		userID,
	)

	if err != nil {

		c.JSON(
			http.StatusInternalServerError,
			gin.H{
				"error": err.Error(),
			},
		)

		return
	}

	c.JSON(
		http.StatusOK,
		result,
	)
}

// ============================================================
// AI FEEDBACK
// ============================================================

func (h *AIHandler) Feedback(
	c *gin.Context,
) {

	var req dto.AIFeedbackRequest

	if err := c.ShouldBindJSON(&req); err != nil {

		c.JSON(
			http.StatusBadRequest,
			gin.H{
				"error": "invalid request",
			},
		)

		return
	}

	result, err := h.service.GenerateFeedback(
		req,
	)

	if err != nil {

		c.JSON(
			http.StatusInternalServerError,
			gin.H{
				"error": err.Error(),
			},
		)

		return
	}

	c.JSON(
		http.StatusOK,
		result,
	)
}