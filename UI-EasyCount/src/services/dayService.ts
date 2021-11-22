import axios from "axios";
import { DateUtils } from "../components/shared/DateUtils.shared";
import { API_URL } from "../variables";
import { PresetDto } from "./presetService";

const getSummary = async (date: Date): Promise<DaySummaryDto> => {
  const dateStr = DateUtils.parseDate(date);

  const res = await axios.get(`${API_URL}/foodDiary?date=${dateStr}`);

  return res.data as DaySummaryDto;
};

export const dayService = {
  getSummary,
};

export type MacrosDto = {
  kcal: number;
  protein: number;
  carbs: number;
  fat: number;
};

export type MacrosPresetDto = {
  carbs: number;
  fat: number;
  protein: number;
};

export type DaySummaryDto = {
  date: Date;
  meals: MealSummaryDto[];
  preset: PresetDto;
  totalMacros: MacrosDto;
  macrosLeft: MacrosDto;
};

export type MealSummaryDto = {
  id: number;
  name: string;
  date: Date;
  foodPortions: FoodPortionSummaryDto[];
  macros: MacrosDto;
};

export type FoodPortionSummaryDto = {
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
