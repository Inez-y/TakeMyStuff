import { z } from 'zod';

/**
 * @acme/shared (DTOs + Zod)
 * This package should contain types you share across backend + frontend (DTOs, API payloads, Zod schemas).
 */

/** Auth DTOs */
declare const RegisterDtoSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
type RegisterDto = z.infer<typeof RegisterDtoSchema>;
declare const LoginDtoSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
type LoginDto = z.infer<typeof LoginDtoSchema>;
/** Product DTOs */
declare const CreateProductDtoSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    status: z.ZodDefault<z.ZodEnum<["DRAFT", "ACTIVE"]>>;
}, "strip", z.ZodTypeAny, {
    status: "DRAFT" | "ACTIVE";
    title: string;
    description?: string | undefined;
}, {
    title: string;
    status?: "DRAFT" | "ACTIVE" | undefined;
    description?: string | undefined;
}>;
type CreateProductDto = z.infer<typeof CreateProductDtoSchema>;
/** Shared API response shapes */
type ApiError = {
    message: string;
    code?: string;
    details?: unknown;
};

export { type ApiError, type CreateProductDto, CreateProductDtoSchema, type LoginDto, LoginDtoSchema, type RegisterDto, RegisterDtoSchema };
