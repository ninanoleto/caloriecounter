import { IsInt, IsOptional, IsString } from "class-validator";

export class UpdateFoodDto {
  @IsOptional()
  @IsString()
  name!: string;

  @IsOptional()
  @IsInt()
  portion!: number;

  @IsOptional()
  @IsInt()
  protein!: number;

  @IsOptional()
  @IsInt()
  carbs!: number;

  @IsOptional()
  @IsInt()
  fat!: number;

  @IsOptional()
  @IsInt()
  kcal!: number;
}
