import type { Challenge } from "../types/practice";

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
        lessons: [
            {
                id: "1",
                title: "HTTP Methods",
                description: "Learn GET POST PUT DELETE",
                duration: 5,
                status: "completed",
            },
            {
                id: "2",
                title: "Routing",
                description: "Fiber Router",
                duration: 7,
                status: "completed",
            },
            {
                id: "3",
                title: "CRUD API",
                description: "Create CRUD endpoint",
                duration: 15,
                status: "completed",
            },
        ]
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
        lessons: [
            {
                id: "1",
                title: "JWT Introduction",
                description: "Understand JWT structure",
                duration: 5,
                status: "completed",
            },
            {
                id: "2",
                title: "Access Token",
                description: "Generate access token",
                duration: 8,
                status: "completed",
            },
            {
                id: "3",
                title: "Refresh Token",
                description: "Implement refresh token",
                duration: 10,
                status: "current",
            },
            {
                id: "4",
                title: "Middleware",
                description: "Protect API endpoints",
                duration: 12,
                status: "locked",
            },
            {
                id: "5",
                title: "Authorization",
                description: "Role based access",
                duration: 10,
                status: "locked",
            },
            {
                id: "6",
                title: "Final Challenge",
                description: "Build complete auth system",
                duration: 15,
                status: "locked",
            },
        ]
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
        lessons: [
            {
                id: "1",
                title: "JWT Introduction",
                description: "Understand JWT structure",
                duration: 5,
                status: "completed",
            },
            {
                id: "2",
                title: "Access Token",
                description: "Generate access token",
                duration: 8,
                status: "completed",
            },
            {
                id: "3",
                title: "Refresh Token",
                description: "Implement refresh token",
                duration: 10,
                status: "current",
            },
            {
                id: "4",
                title: "Middleware",
                description: "Protect API endpoints",
                duration: 12,
                status: "locked",
            },
            {
                id: "5",
                title: "Authorization",
                description: "Role based access",
                duration: 10,
                status: "locked",
            },
            {
                id: "6",
                title: "Final Challenge",
                description: "Build complete auth system",
                duration: 15,
                status: "locked",
            },
        ]
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

