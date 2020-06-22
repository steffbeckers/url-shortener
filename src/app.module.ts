import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UrlsModule } from './urls/urls.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/url-shortener'),
    UrlsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
