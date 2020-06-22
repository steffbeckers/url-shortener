import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Url extends Document {
  @Prop({ required: true, unique: true })
  slug: string;

  @Prop({ required: true })
  link: string;
}
export const UrlSchema = SchemaFactory.createForClass(Url);
