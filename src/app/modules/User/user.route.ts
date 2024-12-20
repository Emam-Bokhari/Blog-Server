import express from "express";
import { UserControllers } from "./user.controller";
import { auth } from "../../middlewares/auth";
import { USER_ROLE } from "./user.constant";

const router = express.Router();

router.post("/register", UserControllers.registerUser)
router.post("/login", UserControllers.loginUser)
router.patch("/users/:userId/block", auth(USER_ROLE.admin), UserControllers.blockUser)

export const UserRoutes = router;