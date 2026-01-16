import pino, { type LoggerOptions } from "pino";

export type LogLevel = "fatal" | "error" | "warn" | "info" | "debug" | "trace";

export function createLogger(opts?: { service?: string; level?: LogLevel }) {
  const isProd = process.env.NODE_ENV === "production";

  const options: LoggerOptions = {
    level: opts?.level ?? (isProd ? "info" : "debug"),
    base: opts?.service ? { service: opts.service } : undefined,
  };

  if (isProd) {
    return pino(options);
  }
  
  const transport = pino.transport({
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: "SYS:standard",
      ignore: "pid,hostname",
    },
  });

  return pino(options, transport);
}
