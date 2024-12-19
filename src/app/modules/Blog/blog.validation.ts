import { z } from 'zod';

const createBlogValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required!' }),
    content: z.string({ required_error: 'Content is required!' }),
    author: z.string({ required_error: 'Author ID is required!' }),
  }),
});

const updateBlogValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required!' }).optional(),
    content: z.string({ required_error: 'Content is required!' }).optional(),
    author: z.string({ required_error: 'Author ID is required!' }).optional(),
  }),
});

export const blogValidationSchema = {
  createBlogValidationSchema,
  updateBlogValidationSchema,
};
