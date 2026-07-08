import type {
    Skill,
    Conversation,
    DailyMission,
    AIRecommendation,
} from "../types/dashboard";

export const skills: Skill[] = [
    {
        name: "REST API",
        progress: 82,
    },
    {
        name: "Authentication",
        progress: 54,
    },
    {
        name: "Docker",
        progress: 18,
    },
    {
        name: "Redis",
        progress: 0,
    },
];

export const mission: DailyMission = {
    id: "mission-1",

    title: "JWT Authentication",

    description:
        "Complete JWT Authentication module.",

    difficulty: "Intermediate",

    estimatedMinutes: 45,

    xp: 150,

    streakBonus: 25,

    completed: false,
};

export const conversations: Conversation[] = [
    {
        id: "1",
        title: "How JWT Refresh Token works?",
        time: "Yesterday",
    },
    {
        id: "2",
        title: "Fiber Middleware",
        time: "2 days ago",
    },
    {
        id: "3",
        title: "PostgreSQL JOIN",
        time: "Last week",
    },
];

export const recommendation: AIRecommendation = {
    id: "jwt",

    title: "JWT Authentication",

    confidence: 95,

    because: [
        "REST API",
        "CRUD",
        "PostgreSQL",
    ],

    reason:
        "You already mastered REST API, CRUD and PostgreSQL. Learning JWT Authentication now gives the highest XP efficiency before moving to OAuth and Authorization.",

    difficulty: "Intermediate",

    estimatedMinutes: 45,

    xp: 150,

    unlocks: [
        "OAuth Login",
        "Google Authentication",
        "Role-Based Authorization",
        "Refresh Token",
    ],
};