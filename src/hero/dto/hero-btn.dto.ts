import { IsString, IsUrl } from 'class-validator';

export class HeroBtnDto {
  @IsString()
  contactBtnText: string;

  @IsUrl()
  contactBtnUrl: string;

  @IsString()
  cvBtn: string;

  @IsUrl()
  cvBtnUrl: string;

  @IsString()
  githubText: string;

  @IsUrl()
  githubUrl: string;

  @IsString()
  linkedInText: string;

  @IsUrl()
  linkedInUrl: string;
}
