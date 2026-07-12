package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/ahmaddavid/gitgud/internal/dto"
	"github.com/ahmaddavid/gitgud/internal/services"
)

type AuthHandler struct {
	service *services.AuthService
}

func NewAuthHandler(
	service *services.AuthService,
) *AuthHandler {

	return &AuthHandler{
		service: service,
	}
}

func (h *AuthHandler) Register(c *gin.Context) {

	var req dto.RegisterRequest

	if err := c.ShouldBindJSON(&req); err != nil {

		c.JSON(http.StatusBadRequest, gin.H{
			"message": err.Error(),
		})

		return
	}

	res, err := h.service.Register(req)

	if err != nil {

		c.JSON(http.StatusBadRequest, gin.H{
			"message": err.Error(),
		})

		return
	}

	c.JSON(http.StatusCreated, res)
}

func (h *AuthHandler) Login(c *gin.Context) {

	var req dto.LoginRequest

	if err := c.ShouldBindJSON(&req); err != nil {

		c.JSON(http.StatusBadRequest, gin.H{
			"message": err.Error(),
		})

		return
	}

	res, err := h.service.Login(req)

	if err != nil {

		c.JSON(http.StatusUnauthorized, gin.H{
			"message": err.Error(),
		})

		return
	}

	c.JSON(http.StatusOK, res)
}

func (h *AuthHandler) Me(c *gin.Context) {

	userID := c.GetString("userID")

	user, err := h.service.Me(userID)
	
	if err != nil {

		c.JSON(http.StatusNotFound, gin.H{
			"message": "user not found",
		})

		return
	}

	c.JSON(http.StatusOK, gin.H{

		"id": user.ID,

		"name": user.Name,

		"email": user.Email,

	})
}