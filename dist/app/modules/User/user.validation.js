"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidationSchema = exports.userValidationSchema = void 0;
const zod_1 = require("zod");
const registerUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        email: zod_1.z.string(),
        password: zod_1.z.string(),
        role: zod_1.z.enum(['admin', 'user']).default('user'),
        isBlocked: zod_1.z.boolean().default(false),
    }),
});
const updateRegisterUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().optional(),
        password: zod_1.z.string().optional(),
        role: zod_1.z.enum(['admin', 'user']).default('user').optional(),
        isBlocked: zod_1.z.boolean().default(false).optional(),
    }),
});
exports.userValidationSchema = {
    registerUserValidationSchema,
    updateRegisterUserValidationSchema,
};
exports.loginValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string(),
        password: zod_1.z.string(),
    }),
});
