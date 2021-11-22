type FoodPortionProps = Readonly<{
  id: number;
  quantityInGrams: number;
  mealId: number;
  foodId: number;
}>;

export class FoodPortion {
  constructor(readonly props: FoodPortionProps) {}
}
