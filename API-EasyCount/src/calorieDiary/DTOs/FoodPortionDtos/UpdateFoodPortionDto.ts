import { IsInt } from "class-validator";

export class UpdateFoodPortionDto {
  @IsInt()
  quantityInGrams!: number;
}
