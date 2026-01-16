"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@acme/config");
const logger_1 = require("@acme/logger");
async function bootstrap() {
    const log = (0, logger_1.createLogger)({ service: 'api' });
    log.info({ port: config_1.config.PORT, nodeEnv: config_1.config.NODE_ENV }, 'config loaded');
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { logger: false });
    await app.listen(config_1.config.PORT);
    log.info(`API listening on http://localhost:${config_1.config.PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map