import { PrismaContext } from "../Data/PrismaContext";

import { MealDAO } from "../Data/MealDAO";
import { FoodDAO } from "../Data/FoodDAO";
import { Food } from "../Domain/Food";

import { CreateFoodDto } from "../DTOs/FoodDtos/CreateFoodDto";
import { ReadFoodDto } from "../DTOs/FoodDtos/ReadFoodDto";
import { UpdateFoodDto } from "../DTOs/FoodDtos/UpdateFoodDto";
import { MacrosDto } from "../DTOs/DayPresetDtos/ReadDayPresetDto";

export class FoodService {
  foodDAO = new FoodDAO(PrismaContext.get());
  mealDAO = new MealDAO(PrismaContext.get());

  async create(foodDto: CreateFoodDto): Promise<ReadFoodDto> {
    const newFood = new Food({
      id: -1,
      ...foodDto,
    });

    const foodModel = await this.foodDAO.create(newFood);
    const readNewFood: ReadFoodDto = foodModel.props;

    return readNewFood;
  }

  async getAll(): Promise<ReadFoodDto[]> {
    const foodModels = await this.foodDAO.getAll();

    return foodModels.map((foodModel) => foodModel.props);
  }

  async getById(foodId: number): Promise<ReadFoodDto> {
    const foodModel = await this.foodDAO.getById(foodId);
    const foodDto: ReadFoodDto = foodModel.props;

    return foodDto;
  }

  async getFoodPortionMacros(
    id: number,
    quantityInGrams: number
  ): Promise<MacrosDto> {
    const foodModel = await this.foodDAO.getById(id);
    return foodModel.getFoodPortionMacros(quantityInGrams);
  }

  async search(foodName: string): Promise<ReadFoodDto[]> {
    const foodModels = await this.foodDAO.search(foodName);

    return foodModels.map((foodModel) => foodModel.props);
  }

  async update(
    foodId: number,
    newFoodDto: UpdateFoodDto
  ): Promise<ReadFoodDto> {
    const oldFood = await this.foodDAO.getById(foodId);
    const foodToUpdate = new Food({ ...oldFood.props, ...newFoodDto });

    const updatedFoodModel = await this.foodDAO.update(foodId, foodToUpdate);
    const updatedFood: ReadFoodDto = updatedFoodModel.props;

    return updatedFood;
  }

  async delete(foodId: number) {
    await this.foodDAO.delete(foodId);
  }
}
