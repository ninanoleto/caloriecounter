import {
  JsonController,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Res,
  Get,
  OnUndefined,
} from "routing-controllers";
import { Response } from "express";
import "reflect-metadata";
import { FoodPortionService } from "../Services/FoodPortionService";
import { CreateManyFoodPortionDto } from "../DTOs/FoodPortionDtos/CreateFoodPortionDto";
import { ReadFoodPortionDto } from "../DTOs/FoodPortionDtos/ReadFoodPortionDto";
import { UpdateFoodPortionDto } from "../DTOs/FoodPortionDtos/UpdateFoodPortionDto";

@JsonController("/foodportion")
export class FoodPortionController {
  foodPortionService = new FoodPortionService();

  @Post()
  async createManyFoodPortion(
    @Res() res: Response,
    @Body({ validate: { whitelist: true } })
    foodPortionDto: CreateManyFoodPortionDto
  ): Promise<number> {
    const count = await this.foodPortionService.createMany(
      foodPortionDto.foodPortions
    );

    res.status(201);
    return count;
  }

  @Get("/:id")
  async getById(
    @Param("id") foodPortionId: number
  ): Promise<ReadFoodPortionDto> {
    return await this.foodPortionService.getById(foodPortionId);
  }

  @Get("/meal/:id")
  async getByMealId(
    @Param("id") mealId: number
  ): Promise<ReadFoodPortionDto[]> {
    return await this.foodPortionService.getByMealId(mealId);
  }

  @Put("/:id")
  async updateFoodPortion(
    @Param("id") foodPortionId: number,
    @Body({ validate: { whitelist: true } })
    newFoodPortionDto: UpdateFoodPortionDto
  ): Promise<ReadFoodPortionDto> {
    return await this.foodPortionService.update(
      foodPortionId,
      newFoodPortionDto
    );
  }

  @Delete("/:id")
  @OnUndefined(204)
  deleteFoodPortion(@Param("id") foodPortionId: number): Promise<void> {
    return this.foodPortionService.delete(foodPortionId);
  }

  @Delete("/meal/:id")
  @OnUndefined(204)
  deleteByMealId(@Param("id") mealId: number): Promise<void> {
    return this.foodPortionService.deleteByMealId(mealId);
  }
}
