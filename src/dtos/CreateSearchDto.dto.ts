import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateSearchDto {
  @IsString()
  id_user: string;

  @IsString()
  code: string;

  @IsString()
  name: string;

  @IsInt()
  quantity: number;

  @IsString()
  line: string; // Ajuste conforme necessário

  @IsString()
  license: string;

  @IsString()
  segment?: string; // Ajuste conforme necessário

  @IsString()
  condition: string; // Ajuste conforme necessário

  @IsOptional()
  @IsString()
  observation?: string;
}
