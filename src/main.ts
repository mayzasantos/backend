import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 5000

  app.enableCors({
    origin: 'http://localhost:3000', // Permita apenas essa origem
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    credentials: true, // Se precisar enviar cookies ou credenciais
  });
  await app.listen(port);
}
bootstrap();
