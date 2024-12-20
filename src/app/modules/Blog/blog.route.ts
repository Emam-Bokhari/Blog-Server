import express from 'express';
import { BlogControllers } from './blog.controller';
import { auth } from '../../middlewares/auth';

const router = express.Router();

router.post('/', auth(), BlogControllers.createBlog);
router.get("/", BlogControllers.getAllBlogs);
router.patch("/:id", BlogControllers.updateBlog);
router.delete("/:id", BlogControllers.deleteBlog)

export const BlogRoutes = router;
