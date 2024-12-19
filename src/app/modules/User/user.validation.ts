import { z } from "zod";

const createUserValidationSchema = z.object({
    body: z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
        role: z.enum(["admin", "user"]).default("user"),
        isBlocked: z.boolean().default(false),
    })
})

const updateUserValidationSchema = z.object({
    body: z.object({
        name: z.string().optional(),
        email: z.string().optional(),
        password: z.string().optional(),
        role: z.enum(["admin", "user"]).default("user").optional(),
        isBlocked: z.boolean().default(false).optional(),
    })
})

export const userValidationSchema = {
    createUserValidationSchema,
    updateUserValidationSchema,
}