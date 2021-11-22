import { MacrosDto } from "../DTOs/DayPresetDtos/ReadDayPresetDto";

type FoodProps = Readonly<{
  id: number;
  name: string;
  portion: number;
  kcal: number;
  carbs: number;
  fat: number;
  protein: number;
}>;

export class Food {
  constructor(readonly props: FoodProps) {}

  private calcMacro = (
    foodPortionQty: number,
    macro: number,
    portion: number
  ): number => Math.floor((foodPortionQty * macro) / portion);

  public getFoodPortionMacros = async (
    foodPortionQty: number
  ): Promise<MacrosDto> => {
    const { portion, kcal, carbs, fat, protein } = this.props;

    const currentMacros: MacrosDto = {
      kcal: this.calcMacro(foodPortionQty, kcal, portion),
      carbs: this.calcMacro(foodPortionQty, carbs, portion),
      fat: this.calcMacro(foodPortionQty, fat, portion),
      protein: this.calcMacro(foodPortionQty, protein, portion),
    };

    return currentMacros;
  };
}
