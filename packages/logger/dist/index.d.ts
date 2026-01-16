import pino from 'pino';

type LogLevel = "fatal" | "error" | "warn" | "info" | "debug" | "trace";
declare function createLogger(opts?: {
    service?: string;
    level?: LogLevel;
}): pino.Logger<never, boolean>;

export { type LogLevel, createLogger };
