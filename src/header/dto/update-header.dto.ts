import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString } from 'class-validator';
import { CreateHeaderDto } from './create-header.dto';

export class UpdateHeaderDto extends PartialType(CreateHeaderDto) {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  contactBtnText: string;

  @IsOptional()
  @IsString()
  contactBtnUrl: string;
}
