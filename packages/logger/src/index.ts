import pino, { type LoggerOptions } from "pino";

export type LogLevel = "fatal" | "error" | "warn" | "info" | "debug" | "trace";

export type Logger = ReturnType<typeof createLogger>;

export function createLogger(opts?: {
  service?: string;
  level?: LogLevel;
}) {
  const isProd = process.env.NODE_ENV === "production";

  const options: LoggerOptions = {
    level: opts?.level ?? (isProd ? "info" : "debug"),
    base: opts?.service ? { service: opts.service } : undefined
  };

  // Pretty logs locally; JSON in prod
  const transport = isProd
    ? undefined
    : {
        target: "pino-pretty",
        options: {
          colorize: true,
          translateTime: "SYS:standard",
          ignore: "pid,hostname"
        }
      };

  return pino(options, transport as any);
}
