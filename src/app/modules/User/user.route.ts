import express from "express";
import { UserControllers } from "./user.controller";
import { auth } from "../../middlewares/auth";
import { USER_ROLE } from "./user.constant";
import { validateRequest } from "../../middlewares/validateRequest";
import { loginValidationSchema, userValidationSchema } from "./user.validation";

const router = express.Router();

router.post("/register", validateRequest(userValidationSchema.registerUserValidationSchema), UserControllers.registerUser)

router.post("/login", validateRequest(loginValidationSchema), UserControllers.loginUser)

router.patch("/users/:userId/block", auth(USER_ROLE.admin), validateRequest(userValidationSchema.updateRegisterUserValidationSchema), UserControllers.blockUser)

router.delete("/blogs/:id", auth(USER_ROLE.admin), UserControllers.deleteBlog)

export const UserRoutes = router;