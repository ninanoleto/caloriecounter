import { IsNumber, IsString } from "class-validator";

export class CreateFoodDto {
  @IsString()
  name!: string;

  @IsNumber()
  portion!: number;

  @IsNumber()
  protein!: number;

  @IsNumber()
  carbs!: number;

  @IsNumber()
  fat!: number;

  @IsNumber()
  kcal!: number;
}
