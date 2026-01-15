import { z } from "zod";

export const userIdschema = z.coerce
    .number("Invalid user id")
    .int()
    .positive();

const emailschema = z
    .string()
    .email("Invalid email address")
    .max(255)

const passwordSchema = z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(72, "Password is too long")

const nameSchema = z
    .string()
    .min(1)
    .max(100)


// Base user input (client-safe only)
const userBaseSchema = z.object({
    email: emailschema,
    password: passwordSchema,
    name: nameSchema.optional()
}).strict()

// Create user
export const createUserSchema = z.object({
    body: userBaseSchema,
})

// Update user / Get user
export const updateUserSchema = z.object({
    params: z.object({
        id: userIdschema,
    }),
    body: z
        .object({
            email: emailschema.optional(),
            password: passwordSchema.optional(),
            name: nameSchema.optional(),
        })
        //.strict() // Optional: relax body strictness if needed, but keeping generally good
        .refine(
            data => Object.keys(data).length > 0,
            { message: "At least one field must be provided for update" }
        )
})

// Get / Delete user
export const userByIdSchema = z.object({
    params: z.object({
        id: userIdschema,
    }),
})

// List users 
export const listUserSchema = z.object({
    query: z
        .object({
            page: z.coerce.number().int().min(1).default(1),
            limit: z.coerce.number().int().min(1).max(100).default(20),
            search: z.string().optional(),
        })
        .strict(),
})