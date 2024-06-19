import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin:'http://localhost:5173',
    credentials: true,
    allowedHeaders:[
      'Accept',
      'Authorization',
      'Content-Type',
      'X-Requested-With',
      'apollo-require-preflight',
    ],
    methods:['POST', 'PUT', 'DELETE','GET','OPTIONS'],
  });
  await app.listen(3000);
}
bootstrap();
