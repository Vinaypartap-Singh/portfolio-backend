import { PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString, IsUrl, ValidateNested } from 'class-validator';
import { CreateHeroDto } from './create-hero.dto';
import { HeroBtnDto } from './hero-btn.dto';
import { UpdateHeroBtnDto } from './update-hero-btn.dto';

export class UpdateHeroDto extends PartialType(CreateHeroDto) {
  @IsOptional()
  @IsUrl()
  profileImageUrl?: string;

  @IsOptional()
  @IsString()
  headline?: string;

  @IsOptional()
  @IsString()
  subHeadline?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateHeroBtnDto)
  heroBtn?: HeroBtnDto;
}
