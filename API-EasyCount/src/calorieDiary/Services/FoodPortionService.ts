import { PrismaContext } from "../Data/PrismaContext";

import { FoodDAO } from "../Data/FoodDAO";
import { FoodPortionDAO } from "../Data/FoodPortionDAO";
import { FoodPortion } from "../Domain/FoodPortion";

import { CreateFoodPortionDto } from "../DTOs/FoodPortionDtos/CreateFoodPortionDto";
import { ReadFoodPortionDto } from "../DTOs/FoodPortionDtos/ReadFoodPortionDto";
import { UpdateFoodPortionDto } from "../DTOs/FoodPortionDtos/UpdateFoodPortionDto";

export class FoodPortionService {
  foodPortionDAO = new FoodPortionDAO(PrismaContext.get());
  foodDAO = new FoodDAO(PrismaContext.get());

  async createMany(foodPortionDtos: CreateFoodPortionDto[]): Promise<number> {
    const foodPortions = foodPortionDtos.map(
      (foodPortion) =>
        new FoodPortion({
          id: -1,
          quantityInGrams: foodPortion.quantityInGrams,
          mealId: foodPortion.mealId,
          foodId: foodPortion.foodId,
        })
    );

    return this.foodPortionDAO.createMany(foodPortions);
  }

  async getById(foodPortionId: number): Promise<ReadFoodPortionDto> {
    const foodPortionModel = await this.foodPortionDAO.getById(foodPortionId);

    const foodPortion: ReadFoodPortionDto = foodPortionModel.props;
    return foodPortion;
  }

  async getByMealId(mealId: number): Promise<ReadFoodPortionDto[]> {
    const mealFoodPortionsModel = await this.foodPortionDAO.getByMealId(mealId);

    const mealFoodPortions: ReadFoodPortionDto[] = mealFoodPortionsModel.map(
      (foodPortion) => foodPortion.props
    );

    return mealFoodPortions;
  }

  async update(
    foodPortionId: number,
    newFoodPortionDto: UpdateFoodPortionDto
  ): Promise<ReadFoodPortionDto> {
    const foodPortionModel = await this.foodPortionDAO.update(
      foodPortionId,
      newFoodPortionDto.quantityInGrams
    );

    const foodPortion: ReadFoodPortionDto = foodPortionModel.props;
    return foodPortion;
  }

  async delete(foodPortionId: number): Promise<void> {
    this.foodPortionDAO.delete(foodPortionId);
  }

  async deleteByMealId(mealId: number): Promise<void> {
    this.foodPortionDAO.deleteByMealId(mealId);
  }
}
