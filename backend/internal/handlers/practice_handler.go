package handlers

import (
	"net/http"

	"github.com/ahmaddavid/gitgud/internal/services"
	"github.com/gin-gonic/gin"
)

type PracticeHandler struct {
	service *services.PracticeService
}

func NewPracticeHandler(
	service *services.PracticeService,
) *PracticeHandler {

	return &PracticeHandler{
		service: service,
	}
}

func (h *PracticeHandler) GetAll(c *gin.Context) {

	practices, err := h.service.GetAll()

	if err != nil {

		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
		})

		return
	}

	c.JSON(http.StatusOK, practices)

}

func (h *PracticeHandler) GetBySlug(c *gin.Context) {

	slug := c.Param("slug")

	practice, err := h.service.GetBySlug(slug)

	if err != nil {

		c.JSON(http.StatusNotFound, gin.H{
			"message": "practice not found",
		})

		return
	}

	c.JSON(http.StatusOK, practice)

}