"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  config: () => config
});
module.exports = __toCommonJS(index_exports);
var import_config = require("dotenv/config");
var import_zod = require("zod");
var EnvSchema = import_zod.z.object({
  NODE_ENV: import_zod.z.enum(["development", "test", "production"]).default("development"),
  // Database
  DATABASE_URL: import_zod.z.string().min(1),
  // Redis (optional early, required later)
  REDIS_URL: import_zod.z.string().min(1).optional(),
  // Auth
  JWT_ACCESS_SECRET: import_zod.z.string().min(16),
  JWT_REFRESH_SECRET: import_zod.z.string().min(16),
  // Optional app port
  PORT: import_zod.z.coerce.number().int().positive().default(3e3)
});
var parsed = EnvSchema.safeParse(process.env);
if (!parsed.success) {
  console.error("Invalid environment variables:", parsed.error.flatten().fieldErrors);
  throw new Error("Invalid environment variables");
}
var config = parsed.data;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  config
});
