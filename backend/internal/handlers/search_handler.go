package handlers

import (
	"net/http"

	"github.com/ahmaddavid/gitgud/internal/services"
	"github.com/gin-gonic/gin"
)

type SearchHandler struct {
	service *services.SearchService
}

func NewSearchHandler(
	service *services.SearchService,
) *SearchHandler {

	return &SearchHandler{
		service: service,
	}

}

func (h *SearchHandler) Search(
	c *gin.Context,
) {

	query := c.Query("q")

	if query == "" {

		c.JSON(http.StatusOK, []any{})

		return

	}

	result, err := h.service.Search(query)

	if err != nil {

		c.JSON(http.StatusInternalServerError, gin.H{

			"error": err.Error(),

		})

		return

	}

	c.JSON(http.StatusOK, result)

}