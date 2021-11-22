import { IsInt, IsOptional, IsString } from "class-validator";

export class UpdatePresetDto {
  @IsString()
  @IsOptional()
  name!: string;

  @IsInt()
  @IsOptional()
  kcal!: number;

  @IsInt()
  @IsOptional()
  carbs!: number;

  @IsInt()
  @IsOptional()
  fat!: number;

  @IsInt()
  @IsOptional()
  protein!: number;
}
