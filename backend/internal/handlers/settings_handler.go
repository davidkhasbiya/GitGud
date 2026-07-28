package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"

	"github.com/ahmaddavid/gitgud/internal/dto"
	"github.com/ahmaddavid/gitgud/internal/services"
)

type SettingsHandler struct {
	service *services.SettingsService
}

func NewSettingsHandler(
	service *services.SettingsService,
) *SettingsHandler {

	return &SettingsHandler{
		service: service,
	}

}

func (h *SettingsHandler) UpdateProfile(
	c *gin.Context,
) {

	var req dto.UpdateProfileRequest

	if err := c.ShouldBindJSON(&req); err != nil {

		c.JSON(
			http.StatusBadRequest,
			gin.H{
				"error": err.Error(),
			},
		)

		return
	}

	id, _ := uuid.Parse(
		c.Param("userId"),
	)

	err := h.service.UpdateProfile(
		id,
		req,
	)

	if err != nil {

		c.JSON(
			http.StatusBadRequest,
			gin.H{
				"error": err.Error(),
			},
		)

		return

	}

	c.JSON(
		http.StatusOK,
		gin.H{
			"message": "Profile updated",
		},
	)

}

func (h *SettingsHandler) ChangePassword(
	c *gin.Context,
) {

	var req dto.ChangePasswordRequest

	if err := c.ShouldBindJSON(&req); err != nil {

		c.JSON(
			http.StatusBadRequest,
			gin.H{
				"error": err.Error(),
			},
		)

		return

	}

	if err := h.service.ChangePassword(req); err != nil {

		c.JSON(
			http.StatusBadRequest,
			gin.H{
				"error": err.Error(),
			},
		)

		return

	}

	c.JSON(
		http.StatusOK,
		gin.H{
			"message": "Password updated",
		},
	)

}