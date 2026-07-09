import type { Challenge } from "../types/challenge";

export const challenges: Challenge[] = [

    {
        id: "1",

        slug: "rest-api",

        title: "REST API",

        description:
            "Learn how to build RESTful APIs using Go Fiber.",

        difficulty: "Beginner",

        category: "Backend",

        technologies: [
            "Go",
            "Fiber",
            "REST",
        ],

        estimatedMinutes: 40,

        xp: 100,

        gems: 3,

        progress: 100,

        completedLessons: 5,

        totalLessons: 5,

        locked: false,

        prerequisites: [],

        objectives: [
            "HTTP Methods",
            "Routing",
            "CRUD",
            "JSON Response",
        ],
    },

    {
        id: "2",

        slug: "jwt-authentication",

        title: "JWT Authentication",

        description:
            "Secure APIs using JWT Access Token and Refresh Token.",

        difficulty: "Intermediate",

        category: "Backend",

        technologies: [
            "Go",
            "Fiber",
            "JWT",
            "PostgreSQL",
        ],

        estimatedMinutes: 50,

        xp: 150,

        gems: 5,

        progress: 67,

        completedLessons: 4,

        totalLessons: 6,

        locked: false,

        prerequisites: [
            "REST API",
        ],

        objectives: [
            "JWT Structure",
            "Access Token",
            "Refresh Token",
            "Middleware",
            "Authorization",
        ],
    },

    {
        id: "3",

        slug: "redis-cache",

        title: "Redis Cache",

        description:
            "Improve application performance using Redis.",

        difficulty: "Advanced",

        category: "Database",

        technologies: [
            "Redis",
            "Go",
        ],

        estimatedMinutes: 75,

        xp: 220,

        gems: 8,

        progress: 0,

        completedLessons: 0,

        totalLessons: 8,

        locked: true,

        prerequisites: [
            "JWT Authentication",
        ],

        objectives: [
            "Redis Basics",
            "Caching",
            "TTL",
            "Session Store",
        ],
    },

];

export const categories = [

    "All",

    "Backend",

    "Database",

    "DevOps",

    "Security",

    "AI",

];

