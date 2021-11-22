import {
  Body,
  Get,
  JsonController,
  Post,
  Param,
  Put,
  Delete,
  OnUndefined,
} from "routing-controllers";
import "reflect-metadata";

import { CreateMealDto } from "../DTOs/MealDtos/CreateMealDto";
import { ReadMealDto } from "../DTOs/MealDtos/ReadMealDto";
import { UpdateMealDto } from "../DTOs/MealDtos/UpdateMealDto";
import { MealService } from "../Services/MealService";
import { DateUtils } from "../../utils/DateUtils";

@JsonController("/meal")
export class MealController {
  mealService = new MealService();

  @Post()
  async createMeal(
    @Body({ validate: { whitelist: true } }) newMealDto: CreateMealDto
  ): Promise<ReadMealDto> {
    return await this.mealService.create(newMealDto);
  }

  @Get()
  async getAllMeals(): Promise<ReadMealDto[]> {
    return await this.mealService.getAll();
  }

  @Get("/:id")
  async getMeal(@Param("id") mealId: number): Promise<ReadMealDto> {
    return await this.mealService.getById(mealId);
  }

  @Get("/date/:date")
  async getDayMeals(@Param("date") dateId: string): Promise<ReadMealDto[]> {
    const date = DateUtils.strToDate(dateId);
    return await this.mealService.getByDate(date);
  }

  @Put("/:id")
  async updateMeal(
    @Param("id") mealId: number,
    @Body({ validate: { whitelist: true } }) newMealDto: UpdateMealDto
  ): Promise<ReadMealDto> {
    return await this.mealService.update(mealId, newMealDto);
  }

  @Delete("/:id")
  @OnUndefined(204)
  deleteMeal(@Param("id") mealId: number): Promise<void> {
    return this.mealService.delete(mealId);
  }
}
