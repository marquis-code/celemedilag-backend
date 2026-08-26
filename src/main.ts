import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { HttpCacheInterceptor } from './common/interceptors/http-cache.interceptor';
import mongoose from 'mongoose';
import compression from 'compression';
import { json, urlencoded } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: (origin, callback) => {
      callback(null, true);
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  app.setGlobalPrefix('api');
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  app.use(compression());
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));

  app.useGlobalInterceptors(
    new HttpCacheInterceptor(),
    new TransformInterceptor(),
  );

  mongoose.connection.on('connected', () => {
    Logger.log('🍃 Successfully connected to MongoDB database', 'Mongoose');
  });
  
  // If it connected before this listener was attached (which it does in NestJS), log it immediately:
  if (mongoose.connection.readyState === 1) {
    Logger.log('🍃 Successfully connected to MongoDB database', 'Mongoose');
  }
  
  mongoose.connection.on('error', (err) => {
    Logger.error(`❌ MongoDB connection error: ${err}`, 'Mongoose');
  });

  const port = process.env.PORT ?? 3001;
  await app.listen(port);
  
  Logger.log(`🚀 Application is running on: http://localhost:${port}/api`, 'Bootstrap');
}
bootstrap();
