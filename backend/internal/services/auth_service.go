package services

import (
	"errors"
	"strconv"
	"time"

	"github.com/google/uuid"

	"github.com/ahmaddavid/gitgud/configs"
	"github.com/ahmaddavid/gitgud/internal/dto"
	"github.com/ahmaddavid/gitgud/internal/models"
	"github.com/ahmaddavid/gitgud/internal/repositories"
	"github.com/ahmaddavid/gitgud/internal/utils"
)

type AuthService struct {
	repo *repositories.UserRepository
	cfg  *configs.Config
}

func NewAuthService(
	repo *repositories.UserRepository,
	cfg *configs.Config,
) *AuthService {

	return &AuthService{
		repo: repo,
		cfg:  cfg,
	}
}

func (s *AuthService) Register(
	req dto.RegisterRequest,
) (*dto.AuthResponse, error) {

	_, err := s.repo.FindByEmail(req.Email)

	if err == nil {
		return nil, errors.New("email already registered")
	}

	hash, err := utils.HashPassword(req.Password)

	if err != nil {
		return nil, err
	}

	user := models.User{
		ID:           uuid.New(),
		Name:         req.Name,
		Email:        req.Email,
		PasswordHash: hash,
	}

	if err := s.repo.Create(&user); err != nil {
		return nil, err
	}

	expire, _ := strconv.Atoi(s.cfg.JWTExpire)

	token, err := utils.GenerateJWT(
		user.ID.String(),
		user.Email,
		s.cfg.JWTSecret,
		time.Duration(expire),
	)

	if err != nil {
		return nil, err
	}

	return &dto.AuthResponse{

		Token: token,

		User: dto.UserResponse{

			ID: user.ID.String(),

			Name: user.Name,

			Email: user.Email,
		},
	}, nil
}

func (s *AuthService) Login(
	req dto.LoginRequest,
) (*dto.AuthResponse, error) {

	user, err := s.repo.FindByEmail(req.Email)

	if err != nil {
		return nil, errors.New("invalid credentials")
	}

	if !utils.CheckPassword(
		req.Password,
		user.PasswordHash,
	) {
		return nil, errors.New("invalid credentials")
	}

	expire, _ := strconv.Atoi(s.cfg.JWTExpire)

	token, err := utils.GenerateJWT(
		user.ID.String(),
		user.Email,
		s.cfg.JWTSecret,
		time.Duration(expire),
	)

	if err != nil {
		return nil, err
	}

	return &dto.AuthResponse{

		Token: token,

		User: dto.UserResponse{

			ID: user.ID.String(),

			Name: user.Name,

			Email: user.Email,
		},
	}, nil
}

func (s *AuthService) Me(userID string) (*models.User, error) {

	return s.userRepository.FindByID(userID)

}