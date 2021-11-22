import { PrismaContext } from "../Data/PrismaContext";

import { MealDAO } from "../Data/MealDAO";
import { Meal } from "../Domain/Meal";
import { FoodPortionService } from "./FoodPortionService";

import { DateUtils } from "../../utils/DateUtils";
import { CreateMealDto } from "../DTOs/MealDtos/CreateMealDto";
import { ReadMealDto, ReadMealSummaryDto } from "../DTOs/MealDtos/ReadMealDto";
import { UpdateMealDto } from "../DTOs/MealDtos/UpdateMealDto";

export class MealService {
  mealDAO = new MealDAO(PrismaContext.get());
  foodPortionService = new FoodPortionService();

  async create(newMealDto: CreateMealDto): Promise<ReadMealDto> {
    const name = newMealDto.name;
    const date = DateUtils.strToDate(newMealDto.date);

    const newMeal = new Meal({ id: -1, name, date });
    const mealModel = await this.mealDAO.create(newMeal);

    const meal: ReadMealDto = mealModel.props;

    return meal;
  }

  async getAll(): Promise<ReadMealDto[]> {
    const mealsModel = await this.mealDAO.getAllMeals();

    const meals: ReadMealDto[] = mealsModel.map((meal) => meal.props);

    return meals;
  }

  async getById(mealId: number): Promise<ReadMealDto> {
    const mealModel = await this.mealDAO.getById(mealId);

    const meal: ReadMealDto = mealModel.props;

    return meal;
  }

  async getByDate(date: Date): Promise<ReadMealDto[]> {
    const dayMealsModel = await this.mealDAO.getMealsByDate(date);

    const dayMeals: ReadMealDto[] = dayMealsModel.map(
      (dayMealModel) => dayMealModel.props
    );

    return dayMeals;
  }

  async update(
    mealId: number,
    newMealDto: UpdateMealDto
  ): Promise<ReadMealDto> {
    const oldMeal = await this.mealDAO.getById(mealId);
    const newMeal = new Meal({ ...oldMeal.props, ...newMealDto });

    const updatedMealModel = await this.mealDAO.update(mealId, newMeal);
    const updatedMeal: ReadMealDto = updatedMealModel.props;

    return updatedMeal;
  }

  async delete(mealId: number): Promise<void> {
    this.mealDAO.delete(mealId);
  }
}
