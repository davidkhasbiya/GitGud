export interface GlobalSearchItem {

    id: string;

    type:
    | "challenge"
    | "learning"
    | "workspace"
    | "ai";

    title: string;

    description: string;

    url: string;

}

export const globalSearch: GlobalSearchItem[] = [

    {
        id: "1",
        type: "challenge",
        title: "JWT Authentication",
        description: "Secure API using JWT.",
        url: "/challenge/jwt-authentication",
    },

    {
        id: "2",
        type: "challenge",
        title: "REST API",
        description: "CRUD API using Fiber.",
        url: "/challenge/rest-api",
    },

    {
        id: "3",
        type: "learning",
        title: "Authentication Path",
        description: "Backend Learning Path",
        url: "/learning/authentication",
    },

    {
        id: "4",
        type: "workspace",
        title: "JWT Playground",
        description: "Experiment JWT Token",
        url: "/workspace/jwt",
    },

    {
        id: "5",
        type: "ai",
        title: "Ask AI about JWT",
        description: "Open AI Mentor",
        url: "/ai",
    },

];