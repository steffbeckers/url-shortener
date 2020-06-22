import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Url } from './schemas/url.schema';
import { CreateUrlDto } from './dto/create-url.dto';

@Injectable()
export class UrlsService {
  constructor(@InjectModel(Url.name) private urlModel: Model<Url>) {}

  async create(createUrlDto: CreateUrlDto): Promise<Url> {
    const createdUrl = new this.urlModel(createUrlDto);
    return createdUrl.save();
  }

  async findAll(): Promise<Url[]> {
    return this.urlModel.find().exec();
  }

  async findBySlug(slug: string): Promise<Url> {
    return this.urlModel.findOne({ slug: slug }).exec();
  }
}
