import express from "express";
import { BlogRoutes } from "../modules/Blog/blog.route";
import { UserRoutes } from "../modules/User/user.route";

export const router = express.Router();

const moduleRoutes = [
    {
        path: "/blogs",
        route: BlogRoutes,
    },
    {
        path: "/auth",
        route: UserRoutes,
    }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route))