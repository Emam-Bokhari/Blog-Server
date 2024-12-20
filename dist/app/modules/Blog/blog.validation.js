"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogValidationSchema = void 0;
const zod_1 = require("zod");
const createBlogValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: 'Title is required!' }),
        content: zod_1.z.string({ required_error: 'Content is required!' }),
        author: zod_1.z.string().optional(),
        isPublished: zod_1.z.boolean().default(true),
        isDeleted: zod_1.z.boolean().default(false),
    }),
});
const updateBlogValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: 'Title is required!' }).optional(),
        content: zod_1.z.string({ required_error: 'Content is required!' }).optional(),
        author: zod_1.z.string({ required_error: 'Author ID is required!' }).optional(),
        isPublished: zod_1.z.boolean().default(true).optional(),
        isDeleted: zod_1.z.boolean().default(false).optional(),
    }),
});
exports.blogValidationSchema = {
    createBlogValidationSchema,
    updateBlogValidationSchema,
};
