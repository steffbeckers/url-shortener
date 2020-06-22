import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UrlsController } from './urls.controller';
import { UrlsService } from './urls.service';
import { Url, UrlSchema } from './schemas/url.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Url.name, schema: UrlSchema }])],
  controllers: [UrlsController],
  providers: [UrlsService],
})
export class UrlsModule {}
