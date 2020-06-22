import { IsNotEmpty } from 'class-validator';

export class CreateUrlDto {
  @IsNotEmpty()
  slug: string;

  @IsNotEmpty()
  link: string;
}
