package handlers

import (
	"net/http"

	"github.com/ahmaddavid/gitgud/internal/dto"
	"github.com/ahmaddavid/gitgud/internal/services"
	"github.com/gin-gonic/gin"
)

type SubmissionHandler struct {
	service *services.SubmissionService
}

func NewSubmissionHandler(
	service *services.SubmissionService,
) *SubmissionHandler {

	return &SubmissionHandler{
		service: service,
	}
}

func (h *SubmissionHandler) Submit(c *gin.Context) {

	var req dto.SubmissionRequest

	if err := c.ShouldBindJSON(&req); err != nil {

		c.JSON(http.StatusBadRequest, gin.H{
			"message": err.Error(),
		})

		return

	}

	result, err := h.service.Submit(req)

	if err != nil {

		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
		})

		return

	}

	c.JSON(http.StatusOK, result)

}