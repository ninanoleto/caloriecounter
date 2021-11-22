import {
  FoodPortion as FoodPortionPrismaModel,
  PrismaClient,
} from ".prisma/client";
import { FoodPortion } from "../Domain/FoodPortion";

export class FoodPortionDAO {
  constructor(private readonly prisma: PrismaClient) {}

  public async createMany(newFoodPortions: FoodPortion[]): Promise<number> {
    const foodPortions = newFoodPortions.map((portion) => {
      const { quantityInGrams, mealId, foodId } = portion.props;
      return {
        quantityInGrams,
        mealId,
        foodId,
      };
    });

    const result = await this.prisma.foodPortion.createMany({
      data: foodPortions,
    });

    return result.count;
  }

  public async getById(id: number) {
    const foodPortion = await this.prisma.foodPortion.findUnique({
      where: { id },
    });

    if (!foodPortion) throw new Error(`Food Portion with id #${id} not found`);

    return this.toDomain(foodPortion);
  }

  public async getByMealId(mealId: number): Promise<FoodPortion[]> {
    const mealFoodPortions = await this.prisma.foodPortion.findMany({
      where: { mealId },
      orderBy: {
        id: "asc",
      },
    });

    return mealFoodPortions.map((foodPortion) => this.toDomain(foodPortion));
  }

  async update(id: number, quantityInGrams: number): Promise<FoodPortion> {
    const updatedFoodPortion = await this.prisma.foodPortion.update({
      where: { id },
      data: { quantityInGrams },
    });

    return this.toDomain(updatedFoodPortion);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.foodPortion.delete({
      where: { id },
    });
  }

  async deleteByMealId(id: number): Promise<void> {
    await this.prisma.foodPortion.deleteMany({
      where: { mealId: id },
    });
  }

  fromDomain(foodPortion: FoodPortion): FoodPortionPrismaModel {
    return { ...foodPortion.props };
  }

  toDomain(foodPortionModel: FoodPortionPrismaModel): FoodPortion {
    return new FoodPortion({ ...foodPortionModel });
  }
}
