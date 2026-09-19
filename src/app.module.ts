import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { NewsModule } from './news/news.module';
import { SermonsModule } from './sermons/sermons.module';
import { AlumniModule } from './alumni/alumni.module';
import { LeadershipModule } from './leadership/leadership.module';
import { DepartmentsModule } from './departments/departments.module';
import { GalleryModule } from './gallery/gallery.module';
import { SettingsModule } from './settings/settings.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { WebsocketsModule } from './websockets/websockets.module';
import { UploadModule } from './upload/upload.module';
import { StatsModule } from './stats/stats.module';
import { ContactModule } from './contact/contact.module';
import { PatronsModule } from './patrons/patrons.module';
import { DocumentsModule } from './documents/documents.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    WebsocketsModule,
    UploadModule,
    EventsModule,
    NewsModule,
    SermonsModule,
    AlumniModule,
    LeadershipModule,
    DepartmentsModule,
    GalleryModule,
    SettingsModule,
    AuthModule,
    StatsModule,
    ContactModule,
    PatronsModule,
    DocumentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
