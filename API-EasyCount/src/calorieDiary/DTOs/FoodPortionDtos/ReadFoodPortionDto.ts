import { Food } from "../../Domain/Food";
import { FoodPortion } from "../../Domain/FoodPortion";
import { MacrosDto } from "../DayPresetDtos/ReadDayPresetDto";
import { ReadFoodDto } from "../FoodDtos/ReadFoodDto";

export type ReadFoodPortionSummaryDto = {
  id: number;
  quantityInGrams: number;
  mealId: number;
  food: {
    foodId: number;
    foodName: string;
    portionSize: number;
    kcal: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  macros: MacrosDto;
};

export type ReadFoodPortionDto = {
  id: number;
  quantityInGrams: number;
  mealId: number;
  foodId: number;
};

function fromDomain(
  mealId: number,
  foodPortion: ReadFoodPortionDto,
  foodOfFoodPortion: ReadFoodDto,
  macros: MacrosDto
): ReadFoodPortionSummaryDto {
  const { id, foodId, quantityInGrams } = foodPortion;
  const { name, portion, kcal, carbs, fat, protein } = foodOfFoodPortion;

  const foodPortionSummaryDto: ReadFoodPortionSummaryDto = {
    id,
    mealId,
    quantityInGrams,
    food: {
      foodId,
      foodName: name,
      portionSize: portion,
      kcal,
      carbs,
      fat,
      protein,
    },
    macros,
  };

  return foodPortionSummaryDto;
}

export const ReadFoodPortionDto = {
  fromDomain,
};
