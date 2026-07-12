package handlers

import (
	"net/http"

	"github.com/ahmaddavid/gitgud/internal/services"
	"github.com/gin-gonic/gin"
)

type TrackHandler struct {
	service *services.TrackService
}

func NewTrackHandler(
	service *services.TrackService,
) *TrackHandler {

	return &TrackHandler{
		service: service,
	}
}

func (h *TrackHandler) GetAll(c *gin.Context) {

	tracks, err := h.service.GetAll()

	if err != nil {

		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
		})

		return
	}

	c.JSON(http.StatusOK, tracks)

}