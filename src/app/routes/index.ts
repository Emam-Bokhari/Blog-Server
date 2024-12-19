import express from "express";
import { BlogRoutes } from "../modules/Blog/blog.route";

export const router = express.Router();

const moduleRoutes = [
    {
        path: "/blogs",
        route: BlogRoutes,
    }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route))