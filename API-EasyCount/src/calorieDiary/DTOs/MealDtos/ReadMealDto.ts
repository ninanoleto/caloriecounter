import { MacrosDto } from "../DayPresetDtos/ReadDayPresetDto";
import { ReadFoodPortionSummaryDto } from "../FoodPortionDtos/ReadFoodPortionDto";

export type ReadMealSummaryDto = {
  id: number;
  name: string;
  date: Date;
  foodPortions: ReadFoodPortionSummaryDto[];
  macros: MacrosDto;
};

export type ReadMealDto = {
  id: number;
  name: string;
  date: Date;
};
