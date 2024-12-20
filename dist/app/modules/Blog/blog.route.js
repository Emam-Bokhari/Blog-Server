"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const blog_controller_1 = require("./blog.controller");
const auth_1 = require("../../middlewares/auth");
const user_constant_1 = require("../User/user.constant");
const validateRequest_1 = require("../../middlewares/validateRequest");
const blog_validation_1 = require("./blog.validation");
const router = express_1.default.Router();
router.post('/', (0, auth_1.auth)(user_constant_1.USER_ROLE.user), (0, validateRequest_1.validateRequest)(blog_validation_1.blogValidationSchema.createBlogValidationSchema), blog_controller_1.BlogControllers.createBlog);
router.get('/', blog_controller_1.BlogControllers.getAllBlogs);
router.patch('/:id', (0, auth_1.auth)(user_constant_1.USER_ROLE.user), (0, validateRequest_1.validateRequest)(blog_validation_1.blogValidationSchema.updateBlogValidationSchema), blog_controller_1.BlogControllers.updateBlog);
router.delete('/:id', (0, auth_1.auth)(user_constant_1.USER_ROLE.user), blog_controller_1.BlogControllers.deleteBlog);
exports.BlogRoutes = router;
