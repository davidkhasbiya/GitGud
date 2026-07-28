package handlers

import (
	"net/http"

	"github.com/ahmaddavid/gitgud/internal/services"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type ProgressHandler struct {
	service *services.ProgressService
}

func NewProgressHandler(
	service *services.ProgressService,
) *ProgressHandler {

	return &ProgressHandler{
		service: service,
	}
}

func (h *ProgressHandler) Get(
	c *gin.Context,
) {

	id := c.Param("userId")

	userID, _ := uuid.Parse(id)

	data, err := h.service.Get(userID)

	if err != nil {

		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
		})

		return
	}

	c.JSON(http.StatusOK, data)
}