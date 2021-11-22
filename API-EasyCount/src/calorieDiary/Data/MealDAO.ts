import { Meal as MealPrismaModel, PrismaClient } from ".prisma/client";
import { DateUtils } from "../../utils/DateUtils";
import { Meal } from "../Domain/Meal";

export class MealDAO {
  constructor(private readonly prisma: PrismaClient) {}

  public async create(newMeal: Meal): Promise<Meal> {
    const { name, date } = newMeal.props;
    const meal = await this.prisma.meal.create({
      data: {
        name,
        date,
      },
    });

    return this.toDomain(meal);
  }

  public async getAllMeals(): Promise<Meal[]> {
    const allMeals = await this.prisma.meal.findMany();

    return allMeals.map((meal) => this.toDomain(meal));
  }

  public async getMealsByDate(date: Date): Promise<Meal[]> {
    const meals = await this.prisma.meal.findMany({
      where: { date },
      orderBy: {
        id: "asc",
      },
    });

    return meals.map((meal) => this.toDomain(meal));
  }

  public async getById(id: number): Promise<Meal> {
    const meal = await this.prisma.meal.findUnique({
      where: { id },
    });

    if (!meal) throw new Error(`Meal with id #${id} was not found`);

    return this.toDomain(meal);
  }

  public async update(id: number, newMeal: Meal): Promise<Meal> {
    const updatedMeal = await this.prisma.meal.update({
      where: { id },
      data: { ...newMeal.props },
    });

    return this.toDomain(updatedMeal);
  }

  public async delete(id: number): Promise<void> {
    await this.prisma.foodPortion.deleteMany({
      where: { mealId: id },
    });

    await this.prisma.meal.delete({
      where: { id },
    });
  }

  fromDomain(meal: Meal): MealPrismaModel {
    return { ...meal.props };
  }

  toDomain(mealModel: MealPrismaModel): Meal {
    return new Meal({ ...mealModel });
  }
}
