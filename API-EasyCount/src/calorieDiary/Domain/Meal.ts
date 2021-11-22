import { MacrosDto } from "../DTOs/DayPresetDtos/ReadDayPresetDto";

type MealProps = Readonly<{
  id: number;
  name: string;
  date: Date;
}>;

export class Meal {
  constructor(readonly props: MealProps) {}

  static getMacros(allMacros: MacrosDto[]): MacrosDto {
    const currentMacros: MacrosDto = {
      kcal: 0,
      protein: 0,
      fat: 0,
      carbs: 0,
    };

    allMacros.forEach((macros) => {
      currentMacros.kcal += macros.kcal;
      currentMacros.protein += macros.protein;
      currentMacros.fat += macros.fat;
      currentMacros.carbs += macros.carbs;
    });

    return currentMacros;
  }
}
