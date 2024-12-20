import express from 'express';
import { BlogControllers } from './blog.controller';
import { auth } from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';
import { validateRequest } from '../../middlewares/validateRequest';
import { blogValidationSchema } from './blog.validation';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.user),
  validateRequest(blogValidationSchema.createBlogValidationSchema),
  BlogControllers.createBlog,
);

router.get('/', BlogControllers.getAllBlogs);

router.patch(
  '/:id',
  auth(USER_ROLE.user),
  validateRequest(blogValidationSchema.updateBlogValidationSchema),
  BlogControllers.updateBlog,
);

router.delete('/:id', auth(USER_ROLE.user), BlogControllers.deleteBlog);

export const BlogRoutes = router;
