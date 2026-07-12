package models

import (
    "time"

    "github.com/google/uuid"
    "gorm.io/gorm"
)

type Progress struct {
    ID uuid.UUID `gorm:"type:uuid;default:gen_random_uuid();primaryKey"`

    UserID uuid.UUID `gorm:"type:uuid;uniqueIndex;not null"`

    User *User `gorm:"foreignKey:UserID"`

    Level int `gorm:"default:1"`

    XP int `gorm:"default:0"`

    Streak int `gorm:"default:0"`

    CompletedPractice int `gorm:"default:0"`

    Accuracy float64 `gorm:"default:0"`

    CreatedAt time.Time
    UpdatedAt time.Time
    DeletedAt gorm.DeletedAt `gorm:"index"`
}