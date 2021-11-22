import { Type } from "class-transformer";
import { IsArray, IsInt, ValidateNested } from "class-validator";

export class CreateFoodPortionDto {
  @IsInt()
  quantityInGrams!: number;

  @IsInt()
  mealId!: number;

  @IsInt()
  foodId!: number;
}

export class CreateManyFoodPortionDto {
  @IsArray()
  @ValidateNested()
  @Type(() => CreateFoodPortionDto)
  foodPortions!: CreateFoodPortionDto[];
}
