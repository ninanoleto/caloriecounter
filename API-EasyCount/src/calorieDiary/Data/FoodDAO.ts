import { Food as FoodPrismaModel, PrismaClient } from ".prisma/client";
import { Food } from "../Domain/Food";

export class FoodDAO {
  constructor(private readonly prisma: PrismaClient) {}

  public async create(food: Food): Promise<Food> {
    const { name, portion, kcal, carbs, fat, protein } = food.props;
    const newFood = await this.prisma.food.create({
      data: {
        name,
        portion,
        kcal,
        carbs,
        fat,
        protein,
      },
    });

    return this.toDomain(newFood);
  }

  public async getAll(): Promise<Food[]> {
    const allFoods = await this.prisma.food.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return allFoods.map((food) => this.toDomain(food));
  }

  public async getById(id: number): Promise<Food> {
    const food = await this.prisma.food.findUnique({
      where: { id },
    });

    if (!food) throw new Error(`Food with id #${id} not found`);

    return this.toDomain(food);
  }

  public async search(name: string): Promise<Food[]> {
    const allFoods = await this.prisma.food.findMany({
      where: {
        name: {
          contains: name,
          mode: "insensitive",
        },
      },
    });

    return allFoods.map((food) => this.toDomain(food));
  }

  public async update(id: number, newFood: Food): Promise<Food> {
    const updatedFood = await this.prisma.food.update({
      where: { id },
      data: { ...newFood.props },
    });

    return this.toDomain(updatedFood);
  }

  public async delete(foodId: number) {
    await this.prisma.foodPortion.deleteMany({
      where: { foodId },
    });

    await this.prisma.food.delete({
      where: { id: foodId },
    });
  }

  fromDomain(food: Food): FoodPrismaModel {
    return { ...food.props };
  }

  toDomain(food: FoodPrismaModel): Food {
    return new Food({ ...food });
  }
}
