import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from '@acme/config';
import { createLogger } from '@acme/logger';

async function bootstrap() {
  const log = createLogger({ service: 'api' });
  log.info({ port: config.PORT, nodeEnv: config.NODE_ENV }, 'config loaded');

  // Keep Nest's default logger for now; you can bridge to pino later.
  const app = await NestFactory.create(AppModule, { logger: false });

  await app.listen(config.PORT);
  log.info(`API listening on http://localhost:${config.PORT}`);
}

bootstrap();
