package handlers

import (
	"net/http"

	"github.com/ahmaddavid/gitgud/internal/services"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type DashboardHandler struct {
	service *services.DashboardService
}

func NewDashboardHandler(
	service *services.DashboardService,
) *DashboardHandler {

	return &DashboardHandler{
		service: service,
	}

}

func (h *DashboardHandler) Get(
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

	result, err := h.service.Get(userID)

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