import { IsOptional, IsString, IsUrl } from 'class-validator';

export class UpdateHeroBtnDto {
  @IsOptional()
  @IsString()
  contactBtnText?: string;

  @IsOptional()
  @IsUrl()
  contactBtnUrl?: string;

  @IsOptional()
  @IsString()
  cvBtn?: string;

  @IsOptional()
  @IsUrl()
  cvBtnUrl?: string;

  @IsOptional()
  @IsString()
  githubText?: string;

  @IsOptional()
  @IsUrl()
  githubUrl?: string;

  @IsOptional()
  @IsString()
  linkedInText?: string;

  @IsOptional()
  @IsUrl()
  linkedInUrl?: string;
}
