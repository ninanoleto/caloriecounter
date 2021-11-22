import { Express } from "express";
import { createExpressServer } from "routing-controllers";
import "reflect-metadata";

import { DayPresetController } from "../calorieDiary/Controllers/DayPresetController";
import { MealController } from "../calorieDiary/Controllers/MealController";
import { FoodPortionController } from "../calorieDiary/Controllers/FoodPortionController";
import { FoodController } from "../calorieDiary/Controllers/FoodController";
import { PresetController } from "../calorieDiary/Controllers/PresetController";
import { DaySummaryController } from "../calorieDiary/Controllers/DaySummaryController";

export class App {
  private readonly app: Express;

  public constructor(private _port: number) {
    this.app = createExpressServer({
      cors: { allowedHeaders: "*", methods: "*", origin: "*" },
      controllers: [
        DayPresetController,
        DaySummaryController,
        PresetController,
        MealController,
        FoodPortionController,
        FoodController,
      ],
    });
  }

  public start(): void {
    const { app, _port } = this;

    app.listen(_port, () => {
      console.log(`Listening on port ${_port}`);
    });
  }
}
