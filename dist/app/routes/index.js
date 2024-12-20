"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const blog_route_1 = require("../modules/Blog/blog.route");
const user_route_1 = require("../modules/User/user.route");
exports.router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/blogs',
        route: blog_route_1.BlogRoutes,
    },
    {
        path: '/auth',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/admin',
        route: user_route_1.UserRoutes,
    },
];
moduleRoutes.forEach((route) => exports.router.use(route.path, route.route));
