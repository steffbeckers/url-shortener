import { Controller, Post, Body, Get, Param, Redirect } from '@nestjs/common';

import { UrlsService } from './urls.service';
import { CreateUrlDto } from './dto/create-url.dto';
import { Url } from './schemas/url.schema';

@Controller()
export class UrlsController {
  constructor(private urlsService: UrlsService) {}

  @Post()
  async create(@Body() createUrlDto: CreateUrlDto): Promise<Url> {
    return await this.urlsService.create(createUrlDto);
  }

  @Get()
  async all(): Promise<Url[]> {
    return await this.urlsService.findAll();
  }

  @Redirect()
  @Get(':slug')
  async slug(@Param() params) {
    const url: Url = await this.urlsService.findBySlug(params.slug);

    return { statusCode: 301, url: url.link };
  }
}
