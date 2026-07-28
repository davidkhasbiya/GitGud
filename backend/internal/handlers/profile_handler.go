package handlers

import (
	"net/http"

	"github.com/ahmaddavid/gitgud/internal/services"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type ProfileHandler struct {
	service *services.ProfileService
}

func NewProfileHandler(
	service *services.ProfileService,
) *ProfileHandler {

	return &ProfileHandler{
		service: service,
	}
}

func (h *ProfileHandler) Get(
	c *gin.Context,
) {

	userID, err := uuid.Parse(
		c.Param("userId"),
	)

	if err != nil {

		c.JSON(http.StatusBadRequest, gin.H{
			"message": "invalid user id",
		})

		return
	}

	result, err := h.service.Get(userID)

	if err != nil {

		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
		})

		return
	}

	c.JSON(http.StatusOK, result)

}