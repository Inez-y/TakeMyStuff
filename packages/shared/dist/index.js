// src/index.ts
import { z } from "zod";
var RegisterDtoSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(72)
});
var LoginDtoSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(72)
});
var CreateProductDtoSchema = z.object({
  title: z.string().min(2).max(120),
  description: z.string().max(4e3).optional(),
  status: z.enum(["DRAFT", "ACTIVE"]).default("DRAFT")
});
export {
  CreateProductDtoSchema,
  LoginDtoSchema,
  RegisterDtoSchema
};
