"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const auth_1 = require("../../middlewares/auth");
const user_constant_1 = require("./user.constant");
const validateRequest_1 = require("../../middlewares/validateRequest");
const user_validation_1 = require("./user.validation");
const router = express_1.default.Router();
router.post('/register', (0, validateRequest_1.validateRequest)(user_validation_1.userValidationSchema.registerUserValidationSchema), user_controller_1.UserControllers.registerUser);
router.post('/login', (0, validateRequest_1.validateRequest)(user_validation_1.loginValidationSchema), user_controller_1.UserControllers.loginUser);
router.patch('/users/:userId/block', (0, auth_1.auth)(user_constant_1.USER_ROLE.admin), (0, validateRequest_1.validateRequest)(user_validation_1.userValidationSchema.updateRegisterUserValidationSchema), user_controller_1.UserControllers.blockUser);
router.delete('/blogs/:id', (0, auth_1.auth)(user_constant_1.USER_ROLE.admin), user_controller_1.UserControllers.deleteBlog);
exports.UserRoutes = router;
