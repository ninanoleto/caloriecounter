import {
  Body,
  Delete,
  Get,
  JsonController,
  NotFoundError,
  OnUndefined,
  Param,
  Post,
  Put,
  QueryParam,
} from "routing-controllers";
import "reflect-metadata";

import { FoodService } from "../Services/FoodService";
import { CreateFoodDto } from "../DTOs/FoodDtos/CreateFoodDto";
import { ReadFoodDto } from "../DTOs/FoodDtos/ReadFoodDto";
import { UpdateFoodDto } from "../DTOs/FoodDtos/UpdateFoodDto";

@JsonController("/food")
export class FoodController {
  foodService = new FoodService();

  @Post()
  async createFood(
    @Body({ validate: { whitelist: true } }) foodDto: CreateFoodDto
  ): Promise<ReadFoodDto> {
    return await this.foodService.create(foodDto);
  }

  @Get()
  async getAllFoods(): Promise<ReadFoodDto[]> {
    return await this.foodService.getAll();
  }

  @Get("/:id")
  async getFoodById(@Param("id") foodId: number): Promise<ReadFoodDto> {
    return await this.foodService.getById(foodId);
  }

  @Get("search")
  async searchFood(
    @QueryParam("name") foodName: string
  ): Promise<ReadFoodDto[]> {
    const allFoods = await this.foodService.search(foodName);

    if (allFoods.length < 1)
      throw new NotFoundError(`No food with name '${foodName}' was found`);

    return allFoods;
  }

  @Put("/:id")
  async updateFood(
    @Param("id") foodId: number,
    @Body({ validate: { whitelist: true } }) newFoodDto: UpdateFoodDto
  ): Promise<ReadFoodDto> {
    return await this.foodService.update(foodId, newFoodDto);
  }

  @Delete("/:id")
  @OnUndefined(204)
  deleteFood(@Param("id") foodId: number): Promise<void> {
    return this.foodService.delete(foodId);
  }
}
