// src/index.ts
import pino from "pino";
function createLogger(opts) {
  const isProd = process.env.NODE_ENV === "production";
  const options = {
    level: opts?.level ?? (isProd ? "info" : "debug"),
    base: opts?.service ? { service: opts.service } : void 0
  };
  if (isProd) {
    return pino(options);
  }
  const transport = pino.transport({
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: "SYS:standard",
      ignore: "pid,hostname"
    }
  });
  return pino(options, transport);
}
export {
  createLogger
};
