import express from "express";
import { UserControllers } from "./user.controller";
import { auth } from "../../middlewares/auth";
import { USER_ROLE } from "./user.constant";
import { validateRequest } from "../../middlewares/validateRequest";
import { userValidationSchema } from "./user.validation";

const router = express.Router();

router.post("/register", validateRequest(userValidationSchema.registerUserValidationSchema), UserControllers.registerUser)
router.post("/login", UserControllers.loginUser)
router.patch("/users/:userId/block", validateRequest(userValidationSchema.updateRegisterUserValidationSchema), auth(USER_ROLE.admin), UserControllers.blockUser)
router.delete("/blogs/:id", auth(USER_ROLE.admin), UserControllers.deleteBlog)

export const UserRoutes = router;