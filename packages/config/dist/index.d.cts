declare const config: {
    NODE_ENV: "development" | "test" | "production";
    DATABASE_URL: string;
    JWT_ACCESS_SECRET: string;
    JWT_REFRESH_SECRET: string;
    PORT: number;
    REDIS_URL?: string | undefined;
};
type AppConfig = typeof config;

export { type AppConfig, config };
