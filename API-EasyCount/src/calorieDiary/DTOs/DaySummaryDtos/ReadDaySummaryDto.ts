import { ReadMealSummaryDto } from "../MealDtos/ReadMealDto";

type PresetDto = {
  id: number;
  name: string;
  kcal: number;
  protein: number;
  carbs: number;
  fat: number;
};

type MacrosDto = {
  kcal: number;
  protein: number;
  carbs: number;
  fat: number;
};

export type ReadDaySummaryDto = {
  date: Date;
  preset: PresetDto;
  totalMacros: MacrosDto;
  macrosLeft: MacrosDto;
  meals: ReadMealSummaryDto[];
};
