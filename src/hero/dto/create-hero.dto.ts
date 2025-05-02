import { Type } from 'class-transformer';
import { IsString, IsUrl, IsUUID, ValidateNested } from 'class-validator';
import { HeroBtnDto } from './hero-btn.dto';

export class CreateHeroDto {
  @IsUrl()
  profileImageUrl: string;

  @IsString()
  headline: string;

  @IsString()
  subHeadline: string;

  @IsUUID()
  heroBtnId: string;

  @ValidateNested()
  @Type(() => HeroBtnDto)
  heroBtn?: HeroBtnDto;
}
