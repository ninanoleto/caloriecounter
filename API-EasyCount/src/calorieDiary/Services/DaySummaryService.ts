import { FoodPortionService } from "./FoodPortionService";
import { FoodService } from "./FoodService";
import { MealService } from "./MealService";
import { PresetService } from "./PresetService";
import { Meal } from "../Domain/Meal";

import { DateUtils } from "../../utils/DateUtils";
import {
  MacrosDto,
  MacrosPctDto,
} from "../DTOs/DayPresetDtos/ReadDayPresetDto";
import { ReadMealDto, ReadMealSummaryDto } from "../DTOs/MealDtos/ReadMealDto";
import {
  ReadFoodPortionDto,
  ReadFoodPortionSummaryDto,
} from "../DTOs/FoodPortionDtos/ReadFoodPortionDto";

export class DaySummaryService {
  presetService = new PresetService();
  mealService = new MealService();
  foodPortionService = new FoodPortionService();
  foodService = new FoodService();

  async getLastPresetId(): Promise<number> {
    const allPreset = await this.presetService.getAll();
    return allPreset[allPreset.length - 1].id;
  }

  async getFirstPresetId(): Promise<number> {
    const allPreset = await this.presetService.getAll();
    return allPreset[0].id;
  }

  async getMealsOrCreateDefault(date: Date): Promise<ReadMealSummaryDto[]> {
    const dateStr = DateUtils.dateToStr(date);
    let allMeals = await this.mealService.getByDate(date);

    if (allMeals.length === 0) {
      await this.mealService.create({ date: dateStr, name: "Breakfast" });
      await this.mealService.create({ date: dateStr, name: "Lunch" });
      await this.mealService.create({ date: dateStr, name: "Dinner" });

      allMeals = await this.mealService.getByDate(date);
    }

    const allMealsSummary: ReadMealSummaryDto[] = await this.getMealSummary(
      allMeals
    );

    return allMealsSummary;
  }

  async getMealSummary(allMeals: ReadMealDto[]): Promise<ReadMealSummaryDto[]> {
    const dayMeals: ReadMealSummaryDto[] = [];

    for (const meal of allMeals) {
      const foodPortions = await this.getFoodPortionOfMealSummary(meal.id);
      const macros = Meal.getMacros(
        foodPortions.map((foodPortion) => foodPortion.macros)
      );

      const readMeal: ReadMealSummaryDto = {
        ...meal,
        foodPortions,
        macros,
      };

      dayMeals.push(readMeal);
    }

    return dayMeals;
  }

  async getFoodPortionOfMealSummary(
    mealId: number
  ): Promise<ReadFoodPortionSummaryDto[]> {
    const mealFoodPortion = await this.foodPortionService.getByMealId(mealId);

    const mealFoodPortionSummary: ReadFoodPortionSummaryDto[] = [];
    for (const foodPortion of mealFoodPortion) {
      const { mealId, foodId, quantityInGrams } = foodPortion;

      const foodOfFoodPortion = await this.foodService.getById(foodId);
      const macros = await this.foodService.getFoodPortionMacros(
        foodId,
        quantityInGrams
      );

      const foodPortionSummary = ReadFoodPortionDto.fromDomain(
        mealId,
        foodPortion,
        foodOfFoodPortion,
        macros
      );

      mealFoodPortionSummary.push(foodPortionSummary);
    }

    return mealFoodPortionSummary;
  }

  async getTotalMacros(date: Date): Promise<MacrosDto> {
    const allMeals = await this.mealService.getByDate(date);
    const mealsSummary = await this.getMealSummary(allMeals);

    const allMealsMacros = mealsSummary.map((meal) => meal.macros);

    return Meal.getMacros(allMealsMacros);
  }

  async getMacrosLeft(date: Date, presetId: number): Promise<MacrosDto> {
    const preset = await this.presetService.getById(presetId);
    const totalMacros = await this.getTotalMacros(date);
    const { kcal, protein, fat, carbs } = totalMacros;

    return {
      kcal: preset.kcal - kcal,
      carbs: preset.carbs - carbs,
      fat: preset.fat - fat,
      protein: preset.protein - protein,
    };
  }

  async getMacrosPercent(date: Date): Promise<MacrosPctDto> {
    const macrosOfDay = await this.getTotalMacros(date);
    const { kcal, protein, fat, carbs } = macrosOfDay;

    const proteinInKcal = protein * 4;
    const fatInKcal = fat * 9;
    const carbsInKcal = carbs * 4;

    const macrosKcalPct: MacrosPctDto = {
      protein: this.kcalPercentages(proteinInKcal, kcal),
      fat: this.kcalPercentages(fatInKcal, kcal),
      carbs: this.kcalPercentages(carbsInKcal, kcal),
    };

    return macrosKcalPct;
  }

  private kcalPercentages(macroInKcal: number, kcal: number) {
    const num = (macroInKcal * 100) / kcal;

    return Math.round((num + Number.EPSILON) * 100) / 100 || 0;
  }
}
