import "dotenv/config";
import { z } from "zod";

const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),

  // Database
  DATABASE_URL: z.string().min(1),

  // Redis (optional early, required later)
  REDIS_URL: z.string().min(1).optional(),

  // Auth
  JWT_ACCESS_SECRET: z.string().min(16),
  JWT_REFRESH_SECRET: z.string().min(16),

  // Optional app port
  PORT: z.coerce.number().int().positive().default(3000)
});

const parsed = EnvSchema.safeParse(process.env);

if (!parsed.success) {
  // throw a readable error at startup
  console.error("Invalid environment variables:", parsed.error.flatten().fieldErrors);
  throw new Error("Invalid environment variables");
}

export const config = parsed.data;
export type AppConfig = typeof config;
