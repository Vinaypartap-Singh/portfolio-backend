import { IsNotEmpty, IsString } from 'class-validator';

export class CreateHeaderDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  contactBtnText: string;

  @IsString()
  @IsNotEmpty()
  contactBtnUrl: string;
}
