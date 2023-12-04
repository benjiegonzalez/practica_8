import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
const configService=app.get(ConfigService)
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Servicio API Rest Sistema Documental CBM')
    .setDescription('API REST')
    .setVersion('1.0')
    .addTag('user')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  //TODO Pipe de validacion
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

   // Configura el middleware de validación global
   app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Convierte automáticamente los datos de entrada en objetos DTO
      whitelist: true, // Elimina campos desconocidos en el objeto DTO
      forbidNonWhitelisted: true, // Lanza un error si se encuentran campos no permitidos
    }),
  );

  await app.listen(configService.get('PORT')||3000);
}
bootstrap();
