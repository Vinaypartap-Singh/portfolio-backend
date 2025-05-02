import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateHeaderDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  contactBtnText: string;

  @IsUrl()
  @IsNotEmpty()
  contactBtnUrl: string;
}
