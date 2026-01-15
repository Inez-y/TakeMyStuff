/**
 * @acme/shared (DTOs + Zod)
 * This package should contain types you share across backend + frontend (DTOs, API payloads, Zod schemas).
 */
import { z } from "zod";

/** Auth DTOs */
export const RegisterDtoSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(72),
});
export type RegisterDto = z.infer<typeof RegisterDtoSchema>;

export const LoginDtoSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(72),
});
export type LoginDto = z.infer<typeof LoginDtoSchema>;

/** Product DTOs */
export const CreateProductDtoSchema = z.object({
  title: z.string().min(2).max(120),
  description: z.string().max(4000).optional(),
  status: z.enum(["DRAFT", "ACTIVE"]).default("DRAFT"),
});
export type CreateProductDto = z.infer<typeof CreateProductDtoSchema>;

/** Shared API response shapes */
export type ApiError = {
  message: string;
  code?: string;
  details?: unknown;
};
