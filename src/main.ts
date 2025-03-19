import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const PORT = 3002;
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 4000,
    },
  });

  await app.startAllMicroservices();
  await app.listen(PORT);
  console.log(`✅ API Gateway is running on port ${PORT}`);
}
bootstrap();
