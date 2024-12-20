import express from 'express';
import { BlogControllers } from './blog.controller';
import { auth } from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';

const router = express.Router();

router.post('/', auth(USER_ROLE.user), BlogControllers.createBlog);
router.get("/", BlogControllers.getAllBlogs);
router.patch("/:id", BlogControllers.updateBlog);
router.delete("/:id", BlogControllers.deleteBlog)

export const BlogRoutes = router;
